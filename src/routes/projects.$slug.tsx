import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getProject, PROJECTS } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    const title = p ? `${p.name} — ${p.tag}` : "Project — Jonas Kiwia";
    const desc = p?.summary ?? "Project detail — Jonas Kiwia portfolio.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="display text-4xl">Project not found</h1>
        <p className="mt-3 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn-dark mt-8 inline-flex">View all projects</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectDetail() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug);
  if (!p) return null;
  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-16">
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">← All projects</Link>
          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <div>
              <span className="pill">{p.tag}</span>
              <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)] mt-4">{p.name}</h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">{p.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-dark mt-8 inline-flex text-sm">
                  Visit live site
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </a>
              )}
            </div>
            <div className="card-soft overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid lg:grid-cols-2 gap-5">
          <div className="card-soft p-8">
            <p className="text-xs font-bold text-muted-foreground">01 · The Problem</p>
            <p className="mt-3 leading-relaxed">{p.problem}</p>
          </div>
          <div className="rounded-[1.25rem] border border-border shadow-xl p-8 bg-foreground text-background">
            <p className="text-xs font-bold text-background/60">02 · The Solution</p>
            <ul className="mt-3 space-y-2 text-sm">
              {p.solution.map((s) => (
                <li key={s}>→ {s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">More projects</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link key={o.slug} to="/projects/$slug" params={{ slug: o.slug }} className="card-soft overflow-hidden lift block">
                <img src={o.img} alt={o.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <p className="font-bold">{o.name}</p>
                  <p className="text-sm text-muted-foreground">{o.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
