import { useEffect, useState } from "react";

/**
 * Scroll-spy: returns the id of the section currently in view.
 * Picks the last section whose top has passed the offset line.
 */
export function useActiveSection(ids: string[], offset = 96) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;

    let frame = 0;
    const compute = () => {
      frame = 0;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 1) current = id;
      }
      // near the bottom of the page, force the last available section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        const last = [...ids].reverse().find((id) => document.getElementById(id));
        if (last) current = last;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join(","), offset]);

  return active;
}
