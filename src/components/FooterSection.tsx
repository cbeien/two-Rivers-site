import logo from "@/assets/twin_rivers_logo_new.png";

export default function FooterSection() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <img
              src={logo}
              alt="Two Rivers Product Strategy"
              className="h-10 w-auto invert mix-blend-screen"
            />
            <p className="font-sans text-xs opacity-50 max-w-xs leading-relaxed">
              Product strategy grounded in people, process, and outcomes.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/two-rivers-product-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs opacity-50 hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 tracking-wider uppercase"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-sans text-xs opacity-30">
            © {new Date().getFullYear()} Two Rivers Product Strategy. All rights reserved.
          </p>
          <p className="font-sans text-xs opacity-30">
            Health tech · Digital health · B2B2C
          </p>
        </div>
      </div>
    </footer>
  );
}
