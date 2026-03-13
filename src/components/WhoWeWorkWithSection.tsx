import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import waveImage from "@/assets/twin_rivers_image1.png";

const clients = [
  "Health tech and digital health startups",
  "Growth-stage B2B2C platforms",
  "Tech-enabled healthcare services organizations",
  "Leadership teams navigating scale, change, or complexity",
];

export default function WhoWeWorkWithSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Wave motif */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 opacity-20 pointer-events-none select-none mix-blend-screen">
        <img src={waveImage} alt="" className="w-full invert" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
            Who We Work With
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] max-w-xl">
            Built for teams where{" "}
            <span className="italic">trust and outcomes</span> matter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div
            className={`space-y-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="font-sans text-sm leading-relaxed opacity-75">
              Two Rivers Product Strategy partners with health tech, digital
              health, and B2B2C companies to build products that work in the
              real world.
            </p>
            <p className="font-sans text-sm leading-relaxed opacity-75">
              We specialize in environments where trust, engagement, and
              outcomes matter.
            </p>
          </div>

          <ul className="space-y-4">
            {clients.map((client, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 80 + 200}ms` : "0ms" }}
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                <span className="font-sans text-sm opacity-85 leading-relaxed">{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
