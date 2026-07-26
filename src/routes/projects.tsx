import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { PROJECTS } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jonas Kiwia" },
      { name: "description", content: "Every project I've shipped — web apps, business systems, and custom platforms built for real business results." },
      { property: "og:title", content: "Projects — Jonas Kiwia" },
      { property: "og:description", content: "Full portfolio of Jonas Kiwia: web apps, business systems, and custom platforms." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-20 pb-8">
          <span className="pill">All Projects</span>
          <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)] mt-4 max-w-3xl">
            Every product I've shipped — the good, the shipped, the loved.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A complete look at the web apps and business systems I've built for teams across Tanzania and beyond.
            Click any project to see the problem, the solution, and the stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/" className="btn-ghost text-sm">← Back to home</Link>
            <Link to="/" hash="contact" className="btn-dark text-sm">Start a project</Link>
          </div>
        </section>

        {featured.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 md:px-8 py-8 md:py-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Featured</h2>
            <ProjectsGrid projects={featured} />
          </section>
        )}

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-8 md:py-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">More projects</h2>
          <ProjectsGrid projects={rest} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
