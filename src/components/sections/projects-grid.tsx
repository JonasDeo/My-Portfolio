import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PROJECTS } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      className="card-soft overflow-hidden lift group block text-left w-full cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface relative">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {p.featured && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-sun">
            Featured
          </span>
        )}
      </div>
      <div className="p-5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold text-lg leading-tight truncate">{p.name}</p>
          <p className="text-sm text-muted-foreground truncate">{p.tag}</p>
        </div>
        <span
          aria-hidden
          className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function ProjectDialog({ p, onClose }: { p: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!p} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] max-h-[85vh] overflow-y-auto p-0 rounded-[1.25rem]">
        {p && (
          <div>
            <div className="aspect-[16/9] overflow-hidden bg-surface relative">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 pill">{p.tag}</span>
            </div>
            <div className="p-6 md:p-8">
              <DialogTitle className="display text-2xl md:text-3xl">{p.name}</DialogTitle>
              <DialogDescription className="mt-3 text-muted-foreground leading-relaxed">
                {p.summary}
              </DialogDescription>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-[1rem] border border-border p-5">
                  <p className="text-xs font-bold text-muted-foreground">01 · The Problem</p>
                  <p className="mt-2 text-sm leading-relaxed">{p.problem}</p>
                </div>
                <div className="rounded-[1rem] border border-border p-5 bg-foreground text-background">
                  <p className="text-xs font-bold text-background/60">02 · The Solution</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.solution.map((s) => (
                      <li key={s}>→ {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-dark text-sm">
                    Visit live site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </a>
                )}
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="btn-ghost text-sm">
                  Full case study
                </Link>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} onOpen={setActive} />
        ))}
      </div>
      <ProjectDialog p={active} onClose={() => setActive(null)} />
    </>
  );
}
