import carlHeadshot from "@/assets/carl_beien.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2]">
            The person behind the work
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Headshot */}
          <div
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-full md:h-auto md:aspect-square overflow-hidden grayscale">
                <img
                  src={carlHeadshot}
                  alt="Carl Beien, Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent-blue opacity-70"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-0.5">
              <p className="font-serif text-lg font-medium">Carl Beien</p>
              <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase">
                Founder & Principal
              </p>
            </div>
          </div>

          {/* Bio */}
          <div
            className={`md:col-span-7 md:col-start-6 space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Carl Beien is a product leader with deep experience across product
              management, UX research, and digital health platforms.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              His work focuses on translating direct user insight into scalable
              product strategy, aligned teams, and measurable outcomes. Carl has
              led AI-enabled health products, member experience platforms, and
              cross-functional product teams operating in regulated environments
              where trust, engagement, and long-term outcomes matter.
            </p>
            <p className="font-serif text-xl md:text-2xl font-medium leading-[1.4] text-foreground border-l-4 border-accent-green pl-6 py-2">
              "Durable products emerge when teams stay close to real users while
              building systems that scale."
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Two Rivers Product Strategy reflects Carl's belief that the best
              product work happens at the intersection of deep human
              understanding and disciplined execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
