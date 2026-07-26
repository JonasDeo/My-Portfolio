import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Theme regression checks.
 *
 * These guard the two classes of bug we've already hit twice:
 *  1. Hardcoded colors (text-white / bg-black / bg-[#hex]) that ignore the theme.
 *  2. `.card-soft` (light card background) combined with `bg-foreground`
 *     (dark surface) — CSS specificity makes the card win, so white text
 *     lands on a white card and the section becomes invisible.
 */

const ROOT = join(process.cwd(), "src");
const SKIP_DIRS = new Set(["ui", "node_modules"]);

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      return SKIP_DIRS.has(entry) ? [] : walk(full);
    }
    return /\.tsx$/.test(entry) ? [full] : [];
  });
}

const files = walk(ROOT).map((path) => ({ path, source: readFileSync(path, "utf8") }));

function classAttributes(source: string): string[] {
  return [...source.matchAll(/className="([^"]*)"/g)].map((m) => m[1]);
}

describe("theme regression", () => {
  it("finds app source files to scan", () => {
    expect(files.length).toBeGreaterThan(0);
  });

  it("never renders a dark surface on top of .card-soft", () => {
    const offenders: string[] = [];
    for (const { path, source } of files) {
      for (const cls of classAttributes(source)) {
        const list = cls.split(/\s+/);
        const hasCard = list.includes("card-soft");
        const hasDark =
          list.includes("bg-foreground") ||
          list.includes("bg-primary") ||
          list.some((c) => /^bg-foreground\//.test(c));
        if (hasCard && hasDark) offenders.push(`${path}: "${cls}"`);
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
  });

  it("uses semantic color tokens, not hardcoded colors", () => {
    const banned = /\b(?:text|bg|border)-(?:white|black)\b|\b(?:text|bg|border)-\[#[0-9a-fA-F]{3,8}\]/;
    const offenders: string[] = [];
    for (const { path, source } of files) {
      for (const cls of classAttributes(source)) {
        const hit = cls.split(/\s+/).find((c) => banned.test(c));
        if (hit) offenders.push(`${path}: "${hit}"`);
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
  });

  it("pairs every padded dark container with light foreground text", () => {
    const offenders: string[] = [];
    for (const { path, source } of files) {
      for (const cls of classAttributes(source)) {
        const list = cls.split(/\s+/);
        // only containers (they have padding, so they hold content)
        const isContainer = list.some((c) => /^p[xy]?-\d/.test(c));
        if (isContainer && list.includes("bg-foreground") && !list.includes("text-background")) {
          offenders.push(`${path}: "${cls}"`);
        }
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
  });


  it("defines every theme token in both light and dark scopes", () => {
    const css = readFileSync(join(ROOT, "styles.css"), "utf8");
    const scope = (selector: string) => {
      const start = css.indexOf(selector + " {");
      const end = css.indexOf("\n}", start);
      return css.slice(start, end);
    };
    const tokens = (block: string) =>
      new Set([...block.matchAll(/(--[a-z-]+):/g)].map((m) => m[1]));

    const light = tokens(scope(":root"));
    const dark = tokens(scope(".dark"));
    const missing = [...light].filter((t) => t !== "--radius" && !dark.has(t));
    expect(missing, `dark theme is missing: ${missing.join(", ")}`).toEqual([]);
  });
});
