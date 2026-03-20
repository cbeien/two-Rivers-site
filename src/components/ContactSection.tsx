import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: "9cb0d11c-1f85-4637-b854-0e2e6ab0dd0f", ...form }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-card border-t border-border"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left */}
          <div
            className={`md:col-span-4 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Contact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2]">
              Start a{" "}
              <span className="italic">conversation</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              If you're building a product where trust, engagement, and outcomes
              matter, we would love to talk.
            </p>
            <div className="pt-4 space-y-2">
              <div className="w-8 h-px bg-accent-blue" />
              <div className="w-5 h-px bg-accent-green" />
            </div>
          </div>

          {/* Form */}
          <div
            className={`md:col-span-7 md:col-start-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center py-16 space-y-4">
                <div className="w-8 h-px bg-accent-green" />
                <p className="font-serif text-2xl md:text-3xl font-medium">
                  Thanks. We'll respond shortly.
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  We look forward to learning more about your work.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200"
                    placeholder="Your organization"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your product challenge or goal..."
                  />
                </div>

                {error && (
                  <p className="font-sans text-xs text-red-500">{error}</p>
                )}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-sans text-sm px-8 py-3.5 bg-foreground text-primary-foreground hover:bg-foreground/85 disabled:opacity-50 transition-all duration-200 tracking-wide"
                  >
                    {loading ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
