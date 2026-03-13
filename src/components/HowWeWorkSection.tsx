import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function HowWeWorkSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
            How We Work
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] text-foreground">
            "We embed closely with your team, ask hard questions early, and
            help you make fewer, better decisions."
          </blockquote>
          <div className="w-12 h-px bg-accent-green mx-auto" />
          <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Our work is collaborative, practical, and grounded in real
            constraints — not frameworks for their own sake.
          </p>
        </div>
      </div>
    </section>
  );
}
