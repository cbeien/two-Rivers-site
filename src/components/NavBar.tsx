import logo from "@/assets/twin_rivers_logo_new.png";

export default function NavBar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6 md:px-8">
        <img src={logo} alt="Two Rivers Product Strategy" className="h-10 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          {[
            ["What We Do", "what-we-do"],
            ["How We Help", "how-we-help"],
            ["About", "about"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-sans px-4 py-2 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-200"
          >
            Start a conversation
          </button>
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="md:hidden text-sm font-sans px-3 py-1.5 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-200"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
