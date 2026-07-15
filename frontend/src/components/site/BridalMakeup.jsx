import { motion } from "framer-motion";
import { Crown, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/data/salon";

const PACKAGES = [
  {
    name: "The Muhurtham",
    tag: "Ceremony",
    items: ["HD Airbrush Bridal Makeup", "Traditional Hairstyling", "Saree Draping", "Jewellery Setting"],
  },
  {
    name: "The Reception",
    tag: "Evening",
    items: ["Contour Glam Look", "Blowout & Curls", "Gown / Saree Drape", "Lash Application"],
  },
  {
    name: "The Engagement",
    tag: "Intimate",
    items: ["Soft Radiance Makeup", "Elegant Updo", "Draping Assistance", "Skin Prep Ritual"],
  },
  {
    name: "The Trial",
    tag: "Preview",
    items: ["Consultation & Skin Test", "Look Curation", "Photo Preview", "Product Match"],
  },
];

export default function BridalMakeup({ onBook }) {
  return (
    <section
      id="bridal-makeup"
      data-testid="bridal-makeup-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold flex items-center gap-2">
            <Crown size={12} strokeWidth={1.5} /> Bridal Atelier
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            <span className="italic font-editorial text-gold">Bridal</span>{" "}
            cinema — every moment, immortalised.
          </motion.h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed opacity-70">
            A bespoke bridal atelier led by Lakshmi Eswari. Airbrush finishes,
            HD photography-ready looks, saree draping and hair sculpting — all
            crafted for your ceremony, reception and every intimate moment in between.
          </p>
        </div>
      </div>

      {/* Editorial image row */}
      <div className="grid grid-cols-12 gap-3 md:gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="col-span-12 md:col-span-8 relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden zoom-img-parent"
        >
          <img
            src={IMAGES.heroBride}
            alt="Luxury bridal look"
            className="w-full h-full object-cover zoom-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
              Look 01
            </div>
            <div className="font-editorial italic text-2xl md:text-3xl mt-1">
              The Muhurtham
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="col-span-12 md:col-span-4 relative aspect-[3/4] md:aspect-auto rounded-2xl overflow-hidden zoom-img-parent"
        >
          <img
            src={IMAGES.makeupCloseup}
            alt="Bridal detailing"
            className="w-full h-full object-cover zoom-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
              Look 02
            </div>
            <div className="font-editorial italic text-2xl mt-1">The Reception</div>
          </div>
        </motion.div>
      </div>

      {/* Packages */}
      <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-6">
        Curated Bridal Packages
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {PACKAGES.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            data-testid={`bridal-pkg-${i}`}
            className="glass rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-gold transition-colors duration-500"
          >
            <div>
              <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
                {p.tag}
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tight">
                {p.name}
              </h3>
              <ul className="mt-5 space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-baseline gap-2 text-sm opacity-80">
                    <span className="text-gold mt-0.5">·</span> {it}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={onBook}
              className="mt-6 font-mono-luxe text-[10px] tracking-[0.25em] uppercase text-gold flex items-center gap-1 hover:gap-2 transition-all"
            >
              Enquire <ArrowUpRight size={12} strokeWidth={1.5} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
