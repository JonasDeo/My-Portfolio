import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getService, SERVICES } from "@/data/portfolio";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? getService(loaderData.slug) : undefined;
    const title = s ? `${s.title} — Jonas Kiwia` : "Service — Jonas Kiwia";
    const desc = s?.short ?? "Service — Jonas Kiwia";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="display text-4xl">Service not found</h1>
        <Link to="/services" className="btn-dark mt-8 inline-flex">View all services</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug);
  if (!s) return null;
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-20 pb-8">
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">← All services</Link>
          <div className="mt-6">
            <p className="display text-5xl text-muted-foreground">{s.n}</p>
            <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)] mt-2 max-w-3xl">{s.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{s.long}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="btn-dark text-sm">Request this service</Link>
              <Link to="/" hash="pricing" className="btn-ghost text-sm">See pricing</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-8 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="card-soft p-8">
            <h2 className="text-xl font-bold">What you get</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.25rem] border border-border shadow-xl p-8 bg-foreground text-background">
            <p className="text-xs font-bold text-background/60">How we work</p>
            <ol className="mt-4 space-y-3 text-sm">
              <li>1. 30-min discovery call to align on scope</li>
              <li>2. Written proposal within 48 hours</li>
              <li>3. Weekly demos, async updates in between</li>
              <li>4. Launch + 30 days free post-launch support</li>
            </ol>
            <Link to="/" hash="contact" className="btn-dark bg-background text-foreground mt-6 inline-flex text-sm">Start now</Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Other services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="card-soft p-5 lift block">
                <p className="text-xs font-bold text-muted-foreground">{o.n}</p>
                <p className="mt-2 font-bold text-sm">{o.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
