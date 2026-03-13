import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const themes = [
  {
    label: "AI-enabled patient engagement platforms",
    accent: "blue",
  },
  {
    label: "Member experience transformation in digital health",
    accent: "green",
  },
  {
    label: "Behavioral health product ecosystems",
    accent: "blue",
  },
  {
    label: "Platform strategy for regulated environments",
    accent: "green",
  },
];

export default function RecentWorkSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 bg-card border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 md:px-8">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Engagement Themes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2]">
            Where we do our{" "}
            <span className="italic">best work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {themes.map((theme, i) => (
            <div
              key={i}
              className={`bg-background p-8 md:p-10 space-y-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div
                className={`w-8 h-0.5 ${
                  theme.accent === "blue" ? "bg-accent-blue" : "bg-accent-green"
                }`}
              />
              <p className="font-serif text-lg md:text-xl font-medium leading-snug text-foreground">
                {theme.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
