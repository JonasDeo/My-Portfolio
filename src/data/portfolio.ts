import projIpf from "@/assets/project-ipfmeals.jpg";
import projCpage from "@/assets/project-cpage.jpg";
import projTrinity from "@/assets/project-trinity.jpg";
import projSwaber from "@/assets/project-swaber.jpg";
import projBmp from "@/assets/project-bmppilla.jpg";
import projDiabetes from "@/assets/project-diabetescode.jpg";
import jonasAvatar from "@/assets/jonas-avatar.jpg";

export type Project = {
  slug: string;
  name: string;
  tag: string;
  img: string;
  featured?: boolean;
  live?: string;
  summary: string;
  problem: string;
  solution: string[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "ipf-meals",
    name: "iPF Meals",
    tag: "Meals Selection System",
    img: projIpf,
    featured: true,
    summary: "Internal meal-selection & reminder system for iPF Softwares, powered by a Telegram bot and an admin dashboard.",
    problem: "The team kept losing track of daily meal choices, and the admin was chasing people over WhatsApp every lunch hour.",
    solution: [
      "Telegram bot that pings each engineer to pick their meal",
      "Admin dashboard to manage menus, orders and vendors",
      "Daily reports exported to the operations team",
      "Role-based accounts for admins, vendors, and staff",
    ],
    stack: ["Node.js", "Telegram Bot API", "MySQL", "React"],
  },
  {
    slug: "cpage",
    name: "cPage",
    tag: "Academic Cover Page Generator",
    img: projCpage,
    featured: true,
    live: "https://cpage.co.tz/",
    summary: "The most-used student productivity tool in Tanzania — 15,500+ users generating cover pages for 50+ universities.",
    problem: "Every Tanzanian student wastes 30 minutes formatting a cover page for every assignment. Group assignments turn into a midnight admin nightmare.",
    solution: [
      "Templates for 50+ Tanzanian universities",
      "Individual & Group modes with smart team management",
      "Generates editable .docx files",
      "Smart autofill for repeat information",
      "Completely free with zero account creation required",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    slug: "wifi-billing",
    name: "Wi-Fi Billing System",
    tag: "MikroTik Hotspot Billing & Vouchers",
    img: projBmp,
    summary: "Hotspot billing platform for ISPs running MikroTik routers — voucher generation, plans, and revenue reporting.",
    problem: "Small ISPs were juggling MikroTik CLI, spreadsheets and printed vouchers to bill hotspot customers.",
    solution: [
      "Voucher generation with printable batches",
      "MikroTik RADIUS integration",
      "Revenue and usage dashboards",
      "Multi-hotspot support",
    ],
    stack: ["PHP", "MySQL", "MikroTik API", "Tailwind"],
  },
  {
    slug: "maconet",
    name: "Maconet Agribusiness",
    tag: "Agribusiness Marketing & Investment Platform",
    img: projDiabetes,
    live: "https://www.mass.co.tz/",
    summary: "Marketing site and investor portal for a Tanzanian agribusiness fund.",
    problem: "Maconet needed a credible online presence to attract diaspora investors and share farm updates.",
    solution: [
      "Investor-focused marketing pages",
      "News & updates section",
      "Contact & investment enquiry flow",
      "Mobile-first responsive design",
    ],
    stack: ["Next.js", "Tailwind", "Sanity CMS"],
  },
  {
    slug: "trinity",
    name: "Trinity",
    tag: "Poultry POS",
    img: projTrinity,
    summary: "Point-of-sale and inventory system built for a Tanzanian poultry retail chain.",
    problem: "The business was tracking sales, feed stock and bird counts in a mix of notebooks and WhatsApp messages.",
    solution: [
      "Fast POS with barcode & quick keys",
      "Feed & stock inventory tracking",
      "Daily/weekly revenue reports",
      "Role-based staff accounts",
    ],
    stack: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "exchange-safaris",
    name: "Exchange Safaris & Tours",
    tag: "Travel & Courier Services Website",
    img: projSwaber,
    live: "https://exchangesafaris.co.tz/",
    summary: "Website and booking flow for a Tanzanian safari and courier company.",
    problem: "Bookings were entirely over phone — no online catalog, no lead capture, no way to share tour packages.",
    solution: [
      "Tour package catalog with rich imagery",
      "Booking / quote request forms",
      "Courier service pages",
      "SEO-focused route pages",
    ],
    stack: ["Next.js", "Tailwind", "Node.js"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

/* ---------------- SERVICES (numbered grid) ---------------- */
export type Service = {
  slug: string;
  n: string;
  title: string;
  short: string;
  long: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  { slug: "custom-websites", n: "01", title: "Custom Business Websites",
    short: "Fast, mobile-friendly websites for Tanzanian businesses — landing pages, service pages, and contact flows that convert.",
    long: "I design and ship business websites focused on speed, SEO and clear conversion. Every page is built to be easy to update and easy for search engines to crawl.",
    deliverables: ["Responsive design", "SEO foundations", "CMS or editable content", "Contact & lead capture", "Analytics setup"] },
  { slug: "nextjs-react", n: "02", title: "Next.js & React Web Apps",
    short: "Responsive web applications with React, Next.js and TypeScript — dashboards, SaaS products, client portals, and internal tools.",
    long: "I build production React and Next.js applications for teams that need dashboards, SaaS surfaces, portals, and internal business tools.",
    deliverables: ["Typed React + Next.js codebase", "Auth & role-based access", "Dashboards & reports", "Deploy pipeline", "Handover documentation"] },
  { slug: "node-apis", n: "03", title: "Node.js APIs & Backends",
    short: "Reliable Node.js APIs, SQL databases, authentication, permissions, integrations and reporting flows.",
    long: "Behind every useful app is a reliable backend. I build REST APIs, database schemas, auth systems and integrations that stay maintainable as the product grows.",
    deliverables: ["REST API design", "Database schema", "Auth, roles & permissions", "3rd-party integrations", "Monitoring & logging"] },
  { slug: "planning-consulting", n: "04", title: "Technical Planning & Consulting",
    short: "Choose the right technical plan, define realistic scope, and avoid expensive overbuilding before development starts.",
    long: "I help founders and business owners pick the right stack, scope realistic MVPs, and review architecture before spending on development.",
    deliverables: ["Technical scoping doc", "Stack & vendor recommendation", "Milestone plan", "Cost & timeline estimate"] },
  { slug: "maintenance", n: "05", title: "Website Maintenance Tanzania",
    short: "Deploy websites and web apps, keep them updated, monitor reliability, fix bugs, improve performance, and support changes after launch.",
    long: "Ongoing technical support so your site stays fast, secure and running — bug fixes, content updates, backups and uptime monitoring.",
    deliverables: ["Bug fixes", "Content updates", "Backups", "Uptime monitoring", "Monthly report"] },
  { slug: "seo-performance", n: "06", title: "SEO & Performance",
    short: "Improve page performance, metadata, headings, structured data, sitemap coverage, and technical SEO foundations.",
    long: "Speed and crawlability matter. I audit and improve your site's Core Web Vitals, SEO fundamentals and structured data.",
    deliverables: ["Lighthouse audit", "On-page SEO fixes", "Structured data", "Sitemap & robots", "Monthly performance report"] },
  { slug: "api-integration", n: "07", title: "API Integration",
    short: "Plan and build reliable integrations for payments, messaging, data services, and internal workflows.",
    long: "Connect third-party services — payments, mobile money, messaging, CRMs — into your product with proper error handling and observability.",
    deliverables: ["Integration design", "Sandbox + prod setup", "Webhooks & retries", "Error monitoring"] },
  { slug: "debugging", n: "08", title: "Debugging",
    short: "Investigate the cause, explain the tradeoff, and fix the problem — without turning it into a rebuild.",
    long: "Got an issue with your current app? I diagnose the root cause, propose the smallest safe fix, and ship it.",
    deliverables: ["Root cause report", "Targeted fix", "Regression test", "Follow-up recommendations"] },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/* ---------------- PROCESS ---------------- */
export const PROCESS_STEPS = [
  { n: "01", title: "Booking a call", desc: "We'll discuss your goals and vision — no assumptions, no fluff." },
  { n: "02", title: "Custom design", desc: "I'll create a custom design tailored to your needs and audience." },
  { n: "03", title: "Development", desc: "The design comes to life with clean, efficient, well-tested code." },
  { n: "04", title: "Launch", desc: "I'll help you get your site live, monitored, and ready for the world." },
];

/* ---------------- PRICING ---------------- */
export const TIERS = [
  { n: "1", time: "3–7 days", title: "Starter Landing Page", desc: "A simple fixed-content page for small businesses that need a clean online presence.", best: "Small businesses needing a simple page", features: ["One-page website", "Responsive design", "Business info section", "Contact section", "Basic SEO setup"], usd: "$480 – $690", tzs: "1.2M – 1.7M TZS" },
  { n: "2", time: "1–2 weeks", title: "Managed Business Website", desc: "A small business website with an admin area for updating content like services, blogs, or products.", best: "Businesses that want to update without calling a dev", features: ["Responsive website", "Admin dashboard", "Editable content", "Blog or product section", "Contact section"], usd: "$1,500 – $2,350", tzs: "3.7M – 5.8M TZS" },
  { n: "3", time: "3–5 weeks", title: "Custom Business System", desc: "A web-based operations system built around how your business works — POS, inventory, bookings, records, and CRM.", best: "Businesses needing POS, inventory, booking or CRM", features: ["Admin dashboard", "User accounts", "Database system", "Reports section", "Business workflow tools"], usd: "$7,300 – $12,100", tzs: "18M – 30M TZS", featured: true },
  { n: "4", time: "5–8 weeks", title: "E-Commerce Website", desc: "A complete online store for selling products or services with payment and order management.", best: "Businesses selling products or services online", features: ["Product catalog", "Shopping cart", "Order management", "Mobile money payments", "Admin dashboard"], usd: "$4,700 – $8,150", tzs: "11.7M – 20M TZS" },
  { n: "5", time: "8–12+ weeks", title: "Custom Web Application", desc: "A fully tailored platform built around your workflows — SaaS products, MVPs, portals, and complex internal systems.", best: "Startups needing a custom platform, SaaS or MVP", features: ["Custom architecture", "Advanced features", "Scalable backend", "Role-based access", "Consultation & planning"], usd: "$18,000 – $35,800", tzs: "45M – 90M TZS" },
  { n: "6", time: "1–3 months", title: "SEO Services", desc: "Search engine optimization to improve website visibility and attract organic traffic.", best: "Businesses looking to rank higher on Google", features: ["Keyword optimization", "On-page SEO", "Performance monitoring", "SEO reporting"], usd: "$430 – $1,050", tzs: "1M – 2.6M TZS" },
  { n: "7", time: "Monthly", title: "Website Maintenance", desc: "Ongoing support to keep your site secure, updated, and running — bug fixes, backups, and uptime monitoring.", best: "Existing website owners wanting peace of mind", features: ["Bug fixes", "Content updates", "Backups", "Uptime monitoring"], usd: "$110 – $240 / mo", tzs: "275k – 600k TZS / mo" },
];

/* ---------------- SKILLS ---------------- */
export const SKILLS = [
  { area: "Frontend Engineering", pct: 95, tools: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI"] },
  { area: "Backend Development", pct: 84, tools: ["Node.js", "Express", "REST APIs", "JWT & OAuth"] },
  { area: "Database & Data Modeling", pct: 82, tools: ["MySQL", "PostgreSQL", "Prisma ORM"] },
  { area: "Deployment & Infrastructure", pct: 85, tools: ["Linux", "Hosting", "NGINX", "Apache"] },
  { area: "Version Control & Collaboration", pct: 78, tools: ["Git", "GitHub", "Code reviews"] },
  { area: "Agentic & AI-Powered Development", pct: 88, tools: ["Claude", "Cursor", "Lovable", "OpenCode"] },
];

/* ---------------- TESTIMONIALS ---------------- */
export const TESTIMONIALS = [
  { quote: "Jonas understood the problem before we finished explaining it. The system he built replaced our spreadsheets and sped up monthly closing by days.", name: "Jonas Mshiu", role: "Director · TRP Construction", avatar: jonasAvatar },
  { quote: "cPage simplifies the hustle of creating cover pages. It saves cost to students, exposes them to technology, and it just works.", name: "Felix Mselle", role: "Stationery Entrepreneur" },
  { quote: "I'm thoroughly impressed by the web development services Jonas provided. Professional, dedicated, and clear communication throughout.", name: "Lilian Mihale", role: "Health Counselor · Mihale Afya Clinic" },
  { quote: "Jonas is passionate, dedicated, and highly talented. He successfully built a robust internal tool now used daily by our team.", name: "Grayson Julius", role: "Business Dev Director · iPF Softwares" },
  { quote: "The custom POS Jonas built has completely transformed our daily operations — fast, reliable, and drastically reduced our manual bookkeeping.", name: "Emmanuel M.", role: "Business Owner · Retail" },
  { quote: "Thoughtful in the way he builds products and open to collaboration. Working together on the Swahili AI project was smooth and productive.", name: "Inzari Senzia", role: "Content Engineer" },
  { quote: "cPage has come in handy during strict deadlines. A quick fill-in and you're done — a genuine lifesaver for students.", name: "Plensia Lukosi", role: "Student & Data Analyst · UDOM" },
  { quote: "Good understanding of core software development principles. He breaks complex issues into simple, actionable steps.", name: "Jovin Shija", role: "Software Engineer · Nasiacademy" },
];

/* ---------------- INSIGHTS ---------------- */
export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "how-much-does-a-website-cost-in-tanzania",
    title: "Website Development Cost in Tanzania: Real Prices, Examples, and Scope Breakdown",
    excerpt: "Website cost depends on what the website must do for the business. A focused landing page can start around $480, while managed business websites, e-commerce builds and custom web systems can range from $1,500 up to $35,800 depending on scope.",
    readTime: "10 min read",
    body: [
      "The honest answer to 'how much does a website cost in Tanzania?' is: it depends entirely on what the website has to do for your business. A one-page site that just introduces your company is a very different job from a dashboard that runs your daily operations.",
      "For a Starter Landing Page you're looking at around $480 – $690. This covers a single well-designed page with your services, contact info, and basic SEO. Great for a new business that needs to look credible online.",
      "A Managed Business Website with an admin dashboard sits at $1,500 – $2,350. You get to update your own content — services, blog, products — without calling a developer.",
      "Custom Business Systems (POS, inventory, CRM) start around $7,300 – $12,100 because they replace real operational work: staff logins, reporting, workflow rules.",
      "E-commerce with mobile money and order management runs $4,700 – $8,150, and full custom web applications with SaaS-style architecture start at $18,000+.",
      "The right question isn't 'how cheap can I get it?' — it's 'what will this system do for me every day for the next 3 years?'",
    ],
  },
  {
    slug: "nextjs-vs-wordpress-tanzania",
    title: "Next.js vs WordPress for Tanzanian Businesses",
    excerpt: "WordPress is often a good choice for content-heavy websites that need simple editing. Next.js is usually stronger when the business needs speed, custom workflows, SEO-focused pages, dashboards, portals, or room to grow into a full web application.",
    readTime: "9 min read",
    body: [
      "WordPress is still a great tool — for the right job. If your website is mostly articles, product pages and a contact form, and you want a non-technical person to edit content, WordPress will do the job well.",
      "But WordPress starts to strain the moment you need custom workflows, dashboards, or fast page loads. Every plugin is a tradeoff — security, speed, and lock-in.",
      "Next.js gives you full control over performance and structure. It's the right pick when your site is really an application: dashboards, portals, booking systems, or anything that needs to grow with your business.",
      "For Tanzanian businesses I usually recommend Next.js when SEO, speed, or product-like features matter, and WordPress when the site is genuinely a marketing brochure that a non-developer will edit weekly.",
    ],
  },
];

export const getInsight = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
