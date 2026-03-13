import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const offerings = [
  "Fractional Head of Product leadership",
  "Zero-to-One product strategy and launch",
  "Member and patient experience transformation",
  "Product discovery and opportunity analysis",
  "Roadmap definition and prioritization",
  "AI-enabled workflow and platform strategy",
  "Executive and investor product storytelling",
];

export default function HowWeHelpSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="how-we-help" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              How We Help
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2]">
              Advisory &{" "}
              <span className="italic">Engagements</span>
            </h2>
            <p className="mt-6 font-sans text-sm text-muted-foreground leading-relaxed">
              We offer flexible engagement models, from fractional leadership
              to focused advisory projects, depending on where you are and
              what you need.
            </p>
          </div>

          <div
            className={`md:col-span-7 md:col-start-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ul className="divide-y divide-border">
              {offerings.map((item, i) => (
                <li
                  key={i}
                  className={`py-5 flex items-start gap-4 group transition-all duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? `${i * 60 + 200}ms` : "0ms" }}
                >
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 group-hover:bg-accent-green transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-base text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
