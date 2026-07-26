import { TESTIMONIALS } from "@/data/portfolio";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="pill">Testimonials</span>
        <h2 className="display text-[clamp(2rem,5vw,3.5rem)] mt-4">
          Trusted by businesses to build systems that scale
        </h2>
        <p className="mt-4 text-muted-foreground">
          Hear from the leaders and individuals scaling their operations and growth with custom technical solutions.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} className="card-soft p-6 flex flex-col">
            <blockquote className="text-[15px] leading-relaxed text-foreground/90 flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              {"avatar" in t && t.avatar ? (
                <img
                  src={t.avatar as string}
                  alt=""
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <span className="w-10 h-10 rounded-full bg-lavender grid place-items-center text-sm font-bold">
                  {initials(t.name)}
                </span>
              )}
              <div>
                <p className="text-sm font-bold leading-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
