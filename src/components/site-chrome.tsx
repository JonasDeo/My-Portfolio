import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";

const NAV: { to: string; label: string; section?: string }[] = [
  { to: "/projects", label: "Projects", section: "projects" },
  { to: "/services", label: "Services", section: "services" },
  { to: "/", label: "Case Study", section: "case-study" },
  { to: "/", label: "Pricing", section: "pricing" },
  { to: "/insights", label: "Insights", section: "insights" },
  { to: "/", label: "FAQ", section: "faq" },
];

const SECTION_IDS = NAV.map((n) => n.section).filter(Boolean) as string[];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
  return true;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? SECTION_IDS : []);

  const renderNavLink = (n: (typeof NAV)[number], mobile = false) => {
    const isActive = isHome && !!n.section && active === n.section;
    const base = mobile
      ? "py-3 border-b border-border/60 last:border-0"
      : "relative py-1 hover:text-foreground transition";
    const cls = `${base} ${isActive ? "text-foreground font-semibold" : mobile ? "text-foreground" : ""}`;

    const indicator = !mobile && isActive ? (
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-foreground" />
    ) : null;

    if (isHome && n.section) {
      return (
        <a
          key={n.label}
          href={`#${n.section}`}
          aria-current={isActive ? "true" : undefined}
          onClick={(e) => {
            if (scrollToSection(n.section!)) e.preventDefault();
            if (mobile) setOpen(false);
          }}
          className={cls}
        >
          {n.label}
          {indicator}
        </a>
      );
    }

    return (
      <Link
        key={n.label}
        to={n.to}
        hash={n.to === "/" ? n.section : undefined}
        onClick={() => mobile && setOpen(false)}
        className={cls}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-foreground font-semibold" }}
      >
        {n.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="grid place-items-center w-8 h-8 shrink-0 rounded-md bg-foreground text-background font-black text-lg" aria-hidden>
            J
          </span>
          <span className="font-bold text-base sm:text-lg tracking-tight truncate">Jonas Kiwia</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-muted-foreground">
          {NAV.map((n) => renderNavLink(n))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isHome ? (
            <a
              href="#contact"
              onClick={(e) => {
                if (scrollToSection("contact")) e.preventDefault();
              }}
              className="hidden md:inline-flex btn-dark py-2.5 px-4 text-sm"
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          ) : (
            <Link to="/" hash="contact" className="hidden md:inline-flex btn-dark py-2.5 px-4 text-sm">
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          )}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-md border border-border"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M6 6l12 12M18 6L6 18"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background menu-drop">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col text-sm font-medium">
            {NAV.map((n) => renderNavLink(n, true))}
            <Link
              to="/"
              hash="contact"
              onClick={() => setOpen(false)}
              className="btn-dark mt-3 justify-center py-2.5 text-sm"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-20 md:mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-foreground text-background font-black">J</span>
            <span className="font-bold text-lg">Jonas Kiwia</span>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Software engineer & founder building websites and systems that drive real business results. Based in Tanzania, available worldwide.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/" hash="contact" className="btn-dark py-3 px-5 text-sm">
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <a href="#" className="btn-ghost py-3 px-5 text-sm">Download CV</a>
          </div>

        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/insights" className="hover:text-foreground">Insights</Link></li>
            <li><Link to="/" hash="pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/" hash="faq" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Connect</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Twitter / X</a></li>
            <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href="#" className="hover:text-foreground">GitHub</a></li>
            <li><Link to="/" hash="contact" className="hover:text-foreground">Email</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Jonas Kiwia. All rights reserved.</p>
          <p>Located in Tanzania — Available remotely</p>
        </div>
      </div>
    </footer>
  );
}
