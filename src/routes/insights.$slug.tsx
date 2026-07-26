import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getInsight } from "@/data/portfolio";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const i = getInsight(params.slug);
    if (!i) throw notFound();
    return { slug: i.slug };
  },
  head: ({ loaderData }) => {
    const i = loaderData ? getInsight(loaderData.slug) : undefined;
    const title = i ? `${i.title} — Jonas Kiwia` : "Insight — Jonas Kiwia";
    const desc = i?.excerpt ?? "Insight — Jonas Kiwia";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: InsightDetail,
  notFoundComponent: InsightNotFound,
});

function InsightNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="display text-4xl">Insight not found</h1>
        <Link to="/insights" className="btn-dark mt-8 inline-flex">All insights</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function InsightDetail() {
  const { slug } = Route.useLoaderData();
  const i = getInsight(slug);
  if (!i) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 md:px-8 pt-12 md:pt-20 pb-16">
          <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground">← All insights</Link>
          <p className="mt-6 text-xs font-bold text-muted-foreground">{i.readTime}</p>
          <h1 className="display text-[clamp(2rem,5vw,3.75rem)] mt-3">{i.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{i.excerpt}</p>
          <div className="mt-10 space-y-5 text-[17px] leading-[1.75]">
            {i.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="mt-12 rounded-[1.25rem] border border-border shadow-xl p-8 bg-foreground text-background text-center">
            <h2 className="text-xl font-bold">Have a project in mind?</h2>
            <p className="mt-2 text-sm text-background/75">Tell me what you're building. I'll respond within 24 hours.</p>
            <Link to="/" hash="contact" className="btn-dark bg-background text-foreground mt-5 inline-flex text-sm">Get in touch</Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
