import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { BRAND } from "@/data/salon";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "hydra-facial", label: "Hydra Facial" },
  { id: "bridal-makeup", label: "Bridal" },
  { id: "hair-services", label: "Hair" },
  { id: "gallery", label: "Gallery" },
  { id: "offers", label: "Offers" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass" : ""
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          data-testid="nav-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-gold" />
          <span className="font-display text-lg md:text-xl tracking-tight">
            New Look
            <span className="font-editorial italic text-gold ml-1.5">
              Beauty
            </span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => scrollTo(l.id)}
              className="font-mono-luxe text-[10px] xl:text-[11px] tracking-[0.2em] xl:tracking-[0.25em] uppercase opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            data-testid="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full flex items-center justify-center glass hover:text-gold transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            data-testid="nav-book-btn"
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex btn-luxe btn-luxe-filled"
          >
            Book Now
          </button>
          <button
            data-testid="nav-menu-btn"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden glass border-t border-gold-soft"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-${l.id}`}
                onClick={() => scrollTo(l.id)}
                className="text-left font-display text-2xl tracking-tight hover:text-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 btn-luxe btn-luxe-filled self-start"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
