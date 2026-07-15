import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/salon";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-gold-soft mt-10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-12 gap-8 md:gap-10">
        <div className="col-span-12 md:col-span-6">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Est. Akividu
          </div>
          <h3 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            New Look
            <br />
            <span className="italic font-editorial text-gold">Beauty Parlour.</span>
          </h3>
          <p className="mt-6 font-editorial italic text-lg md:text-xl opacity-70 max-w-md">
            {BRAND.tagline}.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-2">
            Reach Us
          </div>
          <a
            href={`tel:${BRAND.phoneIntl}`}
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone size={13} strokeWidth={1.5} /> {BRAND.phone}
          </a>
          <a
            href={`https://wa.me/${BRAND.phoneIntl.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MessageCircle size={13} strokeWidth={1.5} /> WhatsApp
          </a>
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MapPin size={13} strokeWidth={1.5} /> Google Maps
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Instagram size={13} strokeWidth={1.5} /> Instagram
          </a>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-2">
            Quick Links
          </div>
          {[
            ["about", "The Atelier"],
            ["services", "Services"],
            ["gallery", "Gallery"],
            ["testimonials", "Voices"],
            ["contact", "Reserve"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-left hover:text-gold transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="col-span-12 border-t border-gold-soft pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
            © {new Date().getFullYear()} New Look Beauty Parlour · All Rights Reserved
          </div>
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 flex gap-6">
            <button className="hover:text-gold transition-colors">
              Privacy Policy
            </button>
            <span>Crafted with care · {BRAND.shortAddress}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
