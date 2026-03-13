import carlHeadshot from "@/assets/carl_beien.png";
import waveImage from "@/assets/twin_rivers_image2.png";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Subtle wave background */}
      <div className="absolute right-0 bottom-0 w-1/2 opacity-[0.06] pointer-events-none select-none">
        <img src={waveImage} alt="" className="w-full" />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div className="md:col-span-7 space-y-8 animate-fade-up opacity-0-init" style={{ animationFillMode: "forwards" }}>
            <div className="space-y-2">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Product Strategy Advisory
              </p>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-foreground">
              Product strategy for{" "}
              <span className="italic">complex,</span>{" "}
              <br className="hidden md:block" />
              human-centered systems
            </h1>

            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Two Rivers Product Strategy helps health tech and B2B2C teams build
              products that align people, process, and technology — without losing
              sight of real users.
            </p>

            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-lg border-l-2 border-accent-blue pl-4">
              We work with teams operating in complex environments, regulated
              industries, and fast-moving markets. Our focus is simple: translate
              real user insight into product decisions that scale.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="font-sans text-sm px-7 py-3.5 bg-foreground text-primary-foreground hover:bg-foreground/85 transition-colors duration-200 tracking-wide"
              >
                Start a conversation
              </button>
            </div>
          </div>

          {/* Right: headshot */}
          <div
            className="md:col-span-5 flex justify-center md:justify-end animate-fade-up opacity-0-init delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden grayscale">
                <img
                  src={carlHeadshot}
                  alt="Carl Beien"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Color accent blocks */}
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-blue opacity-60"
                aria-hidden="true"
              />
              <div
                className="absolute -top-4 -right-4 w-10 h-10 bg-accent-green opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Divider with wave motif */}
        <div className="mt-20 md:mt-28 border-t border-border pt-10 grid grid-cols-3 gap-8 opacity-60">
          {[
            ["People", "User insight at every layer"],
            ["Process", "Aligned teams, clear decisions"],
            ["Product", "Scalable, human-centered execution"],
          ].map(([title, desc]) => (
            <div key={title} className="space-y-1">
              <p className="font-serif text-base font-medium text-foreground">{title}</p>
              <p className="font-sans text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
