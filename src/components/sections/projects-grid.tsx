import { Link } from "@tanstack/react-router";
import { PROJECTS, type Project } from "@/data/portfolio";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="card-soft overflow-hidden lift group block"
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
          className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-foreground text-background"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function ProjectsGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p) => (
        <ProjectCard key={p.slug} p={p} />
      ))}
    </div>
  );
}
