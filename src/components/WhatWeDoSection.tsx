import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const pillars = [
  {
    number: "01",
    title: "People",
    accent: "blue" as const,
    body: "We ground product strategy in direct qualitative insight. User interviews, stakeholder conversations, and service-level understanding inform every recommendation we make.",
  },
  {
    number: "02",
    title: "Process",
    accent: "green" as const,
    body: "We help teams establish clear decision frameworks, operating rhythms, and delivery practices that reduce friction and improve alignment across product, design, engineering, and leadership.",
  },
  {
    number: "03",
    title: "Product",
    accent: "blue" as const,
    body: "We support product discovery, roadmap definition, and execution for digital health, wellness, and B2B2C platforms — including AI-enabled and behavior-change products.",
  },
];

export default function WhatWeDoSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-medium leading-[1.2] max-w-2xl">
            Where user insight meets{" "}
            <span className="italic">scalable</span> product execution
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`border-t-2 pt-8 space-y-4 transition-all duration-700 ${
                pillar.accent === "blue" ? "border-accent-blue" : "border-accent-green"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <span className="font-sans text-xs tracking-widest text-muted-foreground">
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-medium">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
