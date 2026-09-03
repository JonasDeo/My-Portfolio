import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
// import { StickyCta } from "@/components/sticky-cta";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PROJECTS, SERVICES, PROCESS_STEPS, TIERS, SKILLS, INSIGHTS } from "@/data/portfolio";
import heroLaptop from "@/assets/hero-laptop.png";
import jonasAvatar from "@/assets/jonas-avatar.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jonas Kiwia — Software Engineer & Founder in Tanzania" },
      { name: "description", content: "I build websites and business systems that work as hard as you do. Web developer in Tanzania, available worldwide." },
      { property: "og:title", content: "Jonas Kiwia — Software Engineer & Founder in Tanzania" },
      { property: "og:description", content: "Portfolio of Jonas Kiwia. Web apps, business systems, and custom platforms — built for real results." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProjectsPreview />
        <CaseStudySection />
        <ServicesGrid />
        <ProcessSection />
        <PricingSection />
        <SkillsAndStats />
        <TestimonialsSection />
        <InsightsPreview />
        <ServiceHub />
        <CtaSection />
        <FaqSection />
      </main>
      <SiteFooter />
      {/* <StickyCta /> */}
    </div>

  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 pt-6 md:pt-10 pb-10 md:pb-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="fade-up">
        <div className="inline-flex items-center gap-2 pill">
          <span className="inline-block w-2 h-2 rounded-full bg-mint" />
          Working on <strong className="text-foreground">iPF Meals</strong>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <img src={jonasAvatar} alt="Jonas Kiwia" className="w-12 h-12 rounded-full object-cover ring-2 ring-lavender" />
          <div className="text-sm text-muted-foreground">
            <p className="text-foreground font-semibold">Hi, I am Jonas Kiwia</p>
            <p>Software Engineer & Founder</p>
          </div>
        </div>
        <p className="mt-6 text-[11px] font-bold tracking-[0.2em] text-muted-foreground">WEB & SYSTEMS DEVELOPER · TANZANIA</p>
        <h1 className="display text-[clamp(2.25rem,7vw,5.25rem)] mt-3">
          I Create Websites <br className="hidden md:inline" />
          That Work <span className="whitespace-nowrap">as Hard</span><br className="hidden md:inline" /> as You Do
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Your users deserve a seamless experience across every device. I merge responsive design with rigorous performance optimization to build web applications that don't just load fast — they drive business results.
        </p>
        <div className="mt-3 text-sm text-muted-foreground">
          Trusted by <strong className="text-foreground">10+ clients</strong>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/" hash="contact" className="btn-dark py-3.5 px-6 text-base">
            Start a project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/projects" className="btn-ghost py-3.5 px-6 text-base">My Projects</Link>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Free 30-min discovery call · Reply within 24 hours</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Located in <strong className="text-foreground">Tanzania</strong> 🇹🇿</span>
          <span className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-mint" /> Available to work remotely</span>
        </div>
      </div>

      {/* Right: lavender showcase card with a single credibility stat */}
      <div className="relative">
        <div className="relative rounded-[1.5rem] md:rounded-[2rem] bg-lavender p-5 sm:p-6 md:p-8 aspect-[4/5] sm:aspect-[5/6] overflow-hidden">
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <img
              src={heroLaptop}
              alt="Floating laptop with code"
              width={1024}
              height={1024}
              className="w-[88%] max-w-[520px] float-slow drop-shadow-[0_30px_30px_oklch(0.4_0.08_300/0.35)]"
            />
          </div>
          <div className="absolute left-4 right-4 sm:left-5 sm:right-5 bottom-4 sm:bottom-5 card-soft p-5 shadow-md">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-mint" />
              Live product
            </div>
            <div className="mt-2 flex items-end justify-between gap-3 flex-wrap">
              <div>
                <p className="display text-4xl leading-none">15.5K</p>
                <p className="mt-1 text-sm text-muted-foreground">students using cPage today</p>
              </div>
              <Link to="/projects/$slug" params={{ slug: "cpage" }} className="text-sm font-semibold px-4 py-2 rounded-full bg-foreground text-background">
                View case
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- PROJECTS PREVIEW ---------------- */
function ProjectsPreview() {
  return (
    <section id="projects" className="section">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="pill">Projects</span>
          <h2 className="section-title mt-4 max-w-2xl">
            Crafting digital experiences that solve real problems
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Check out some of my favorite & most recent projects. Click any card to see more details.
        </p>
      </div>
      <div className="mt-12">
        <ProjectsGrid projects={PROJECTS} />
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/projects" className="btn-dark py-3 px-6 text-sm">
          View All Projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  );
}

/* ---------------- CASE STUDY ---------------- */
function CaseStudySection() {
  const stats = [
    { num: "15K+", label: "Active Users", sub: "Students in the last 18 months" },
    { num: "50+", label: "Institutions", sub: "Currently supported" },
    { num: "$0", label: "Marketing Budget", sub: "100% organic word-of-mouth" },
    { num: "17K+", label: "Cover Pages", sub: "Generated nationwide" },
  ];
  const timeline = [
    { when: "Early 2024", what: "Built for IAA & UDOM university students" },
    { when: "Mid 2024", what: "Public launch — organic word-of-mouth" },
    { when: "Late 2024", what: "Group mode & smart autofill shipped" },
    { when: "Early 2025", what: "Expanded to 50+ universities & 10K+ users" },
    { when: "Late 2025", what: "17K+ cover pages generated nationwide" },
  ];
  return (
    <section id="case-study" className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <span className="pill">Case Study</span>
        <h2 className="section-title mt-4 max-w-3xl">
          From a personal frustration to <span className="text-foreground">15,000+</span> active users.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          How <strong className="text-foreground">cPage</strong> scaled to become Tanzania's most-used student productivity tool — with zero marketing budget.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-soft card-pad">
              <p className="display text-5xl">{s.num}</p>
              <p className="mt-3 font-semibold">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          <div className="card-soft p-8">
            <p className="text-xs font-bold text-muted-foreground">01 · The Problem</p>
            <h3 className="mt-2 text-2xl font-bold">Every assignment started with the same 30-minute waste</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every university student in Tanzania knows the pain — before submitting any assignment, you need a perfectly formatted cover page. Full name, registration number, programme, lecturer, group members… typed out every single time. For group assignments, one person becomes the unofficial 'cover page person', chasing 5+ people at midnight.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border p-8 bg-foreground text-background shadow-xl">
            <p className="text-xs font-bold text-background/60">02 · The Solution</p>
            <h3 className="mt-2 text-2xl font-bold">Cover pages in 30 seconds, not 30 minutes</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/85">
              <li>→ Templates for 50+ Tanzanian universities</li>
              <li>→ Individual & Group modes with smart team management</li>
              <li>→ Generates editable .docx files</li>
              <li>→ Smart autofill for repeat information</li>
              <li>→ Completely free, zero account needed</li>
            </ul>
            <a href="https://cpage.co.tz/" target="_blank" rel="noreferrer" className="mt-6 inline-flex btn-dark bg-background text-foreground py-2.5 px-4 text-sm">Visit cPage</a>
          </div>
        </div>

        {/* Growth timeline */}
        <div className="mt-10 card-soft p-8">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-xl font-bold">Growth Timeline</h3>
            <span className="text-sm text-muted-foreground">2024 → 2025</span>
          </div>
          <ol className="mt-6 grid md:grid-cols-5 gap-4">
            {timeline.map((t, i) => (
              <li key={i} className="relative rounded-xl bg-surface border border-border p-4">
                <p className="text-[11px] font-bold text-muted-foreground">{t.when}</p>
                <p className="mt-2 text-sm font-medium leading-snug">{t.what}</p>
              </li>
            ))}
          </ol>
        </div>

        <figure className="mt-10 rounded-[1.25rem] p-8 md:p-10 bg-foreground text-background">
          <blockquote className="text-lg md:text-xl leading-relaxed">
            &ldquo;cPage proved that the best products solve real, painful, everyday problems. No pitch deck, no ads — just a tool students genuinely needed. It taught me how to scale a real product, listen to users, and keep things fast and simple under growing load.&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <img src={jonasAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-bold">Jonas Kiwia</p>
              <p className="text-sm text-background/70">Founder · cPage</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- SERVICES (numbered 8-card grid) ---------------- */
function ServicesGrid() {
  return (
    <section id="services" className="section">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="pill">Services</span>
          <h2 className="section-title mt-4 max-w-2xl">
            Engineering that ships outcomes.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          From simple landing pages to full custom platforms — pick the scope, keep the outcome.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="card-soft card-pad lift block group"
          >
            <p className="display text-3xl text-muted-foreground group-hover:text-foreground transition">{s.n}</p>
            <h3 className="mt-4 text-lg font-bold leading-tight">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-4">{s.short}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROCESS (4 steps) ---------------- */
function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="pill">4 Step Process</span>
          <h2 className="section-title mt-4 max-w-2xl">
            Simple, transparent, focused on shipping.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          A clear collaboration flow that keeps the work moving toward useful results — no surprises, no scope drift.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS_STEPS.map((s) => (
          <article key={s.n} className="card-soft card-pad lift flex flex-col">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-lavender">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 .8-5.4 4.7L18 22l-6-3.5L6 22l1.4-7.5L2 9.8 9 9z"/></svg>
            </span>
            <p className="mt-6 text-xs font-bold text-muted-foreground">{s.n}</p>
            <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="text-center max-w-2xl mx-auto">
        <span className="pill">Pricing</span>
        <h2 className="section-title mt-4">Transparent pricing for exceptional value</h2>
        <p className="mt-4 text-muted-foreground">
          Choose the exact plan that fits your project's scope, budget, and timeline. Prices shown in USD and TZS.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TIERS.map((t) => (
          <article key={t.n} className={`card-soft card-pad lift flex flex-col ${t.featured ? "ring-2 ring-foreground" : ""}`}>
            <div className="flex items-center justify-between text-xs">
              <span className="display text-3xl">{t.n}</span>
              <span className="text-muted-foreground">Done in <strong className="text-foreground">{t.time}</strong></span>
            </div>
            <h3 className="mt-4 text-xl font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <p className="mt-3 text-xs"><span className="text-muted-foreground">Best for: </span>{t.best}</p>
            <ul className="mt-5 space-y-2 text-sm flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="font-bold">{t.usd}</p>
              <p className="text-xs text-muted-foreground">{t.tzs}</p>
              <Link to="/" hash="contact" className={`mt-4 inline-flex w-full justify-center ${t.featured ? "btn-dark" : "btn-ghost"}`}>Get started</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SKILLS & STATS ---------------- */
function SkillsAndStats() {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
        <div className="card-soft card-pad">
          <span className="pill">Skills</span>
          <h2 className="section-title mt-4">
            My tech stack, which drives better results
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {SKILLS.map((s) => (
              <div key={s.area}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{s.area}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.tools.map((tool) => (
                    <li key={tool} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        <div className="grid gap-5 content-start">
          <div className="card-soft p-8 bg-lavender">
            <p className="display text-6xl">5</p>
            <p className="mt-2 font-bold">Years of experience</p>
            <p className="text-sm text-muted-foreground">in Software Development</p>
          </div>
          <div className="rounded-[1.25rem] border border-border p-8 bg-foreground text-background shadow-xl">
            <p className="display text-6xl">100%</p>
            <p className="mt-2 font-bold">Client satisfaction</p>
            <p className="text-sm text-background/70">Built on trust and results.</p>
          </div>
          <div className="card-soft p-8 bg-mint">
            <p className="display text-6xl">15.5K</p>
            <p className="mt-2 font-bold">cPage active users</p>
            <p className="text-sm text-muted-foreground">Live product traffic.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS PREVIEW ---------------- */
function InsightsPreview() {
  return (
    <section id="insights" className="section">

      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="pill">Insights</span>
          <h2 className="section-title mt-4 max-w-2xl">
            Practical insights from real product work
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Short reads on builds, decisions, platforms, and business systems for teams choosing what to build next.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {INSIGHTS.map((i) => (
          <Link key={i.slug} to="/insights/$slug" params={{ slug: i.slug }} className="card-soft card-pad lift block">
            <p className="text-xs font-bold text-muted-foreground">{i.readTime}</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight">{i.title}</h3>
            <p className="mt-3 text-muted-foreground text-sm line-clamp-4">{i.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Read insight
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/insights" className="btn-ghost py-3 px-6 text-sm">Show more insights</Link>
      </div>
    </section>
  );
}

/* ---------------- SERVICE HUB ---------------- */
function ServiceHub() {
  return (
    <section className="section">
      <div className="card-soft card-pad flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <span className="pill">Web Development Tanzania</span>
          <p className="mt-4 subheading">
            Websites, e-commerce, dashboards and automation for Tanzanian businesses.
          </p>
          <p className="mt-2 body-text text-muted-foreground">
            Based in Dar es Salaam, working remotely worldwide — Next.js, React, TypeScript and Node.js.
          </p>
        </div>
        <Link to="/services" className="btn-dark py-3 px-6 text-sm shrink-0">
          See all services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>

  );
}

/* ---------------- CTA ---------------- */
function CtaSection() {
  return (
    <section id="contact" className="section">
      <div className="rounded-[1.25rem] bg-foreground text-background p-10 md:p-16 text-center relative overflow-hidden shadow-xl">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-lavender/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-mint/30 blur-3xl" />
        <h2 className="section-title relative">Save time & money on your next project</h2>
        <p className="mt-4 text-background/75 max-w-xl mx-auto relative">
          Tell me what you're building. I'll respond within 24 hours with a clear scope, timeline, and price.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap relative">
          <a
            href="mailto:hello@jonaskiwia.dev"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-background text-foreground transition hover:-translate-y-px"
          >
            Start a project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold border border-background/30 text-background transition hover:bg-background/10"
          >
            Read the FAQ
          </a>
        </div>

      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "What kind of projects do you take on?", a: "Production web applications, business systems (POS, inventory, CRM), e-commerce platforms, and custom SaaS. If it lives on the web and needs to scale, I can build it." },
  { q: "Where are you based and who do you work with?", a: "I'm based in Tanzania and work remotely with clients across Africa, Europe, and North America. Async-first communication, weekly demos." },
  { q: "How does payment work?", a: "Most projects are 50% upfront and 50% on launch. For longer projects, we split into milestones. I accept bank transfer, mobile money (Tanzania), and Wise." },
  { q: "Do you provide post-launch support?", a: "Yes. Every project includes 30 days of free post-launch support. After that, optional monthly maintenance plans cover hosting, updates, and improvements." },
  { q: "Can you take over an existing project?", a: "Yes. I do code audits, refactors, and rescue projects from previous developers. I'll send you a written assessment before quoting." },
  { q: "How do I get started?", a: "Send me a short email or use the form above. We'll book a 30-min discovery call, then I'll send a written proposal within 48 hours." },
];

function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <h2 className="section-title text-center">Frequently Asked Questions</h2>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {FAQS.map((f, i) => (
          <details key={i} className="group py-5">
            <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
              <span className="font-semibold text-base md:text-lg">{f.q}</span>
              <span className="grid place-items-center w-8 h-8 rounded-full bg-surface border border-border group-open:bg-foreground group-open:text-background transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-45 transition-transform"><path d="M12 5v14M5 12h14"/></svg>
              </span>
            </summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
