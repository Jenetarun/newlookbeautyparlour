import { motion } from "framer-motion";
import { Scissors, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/data/salon";

const SERVICES = [
  { n: "01", t: "Hair Styling", d: "Occasion-worthy blowouts, curls, updos and sculpted finishes." },
  { n: "02", t: "Hair Straightening", d: "Silky, mirror-smooth, long-lasting keratin & smoothening." },
  { n: "03", t: "Hair Spa", d: "Restorative deep-conditioning ritual for damaged & dry hair." },
  { n: "04", t: "Hair Cut", d: "Precision cutting curated to your face and lifestyle." },
  { n: "05", t: "Cut with Wash", d: "Consultation, cut, cleanse and finishing blow-dry." },
  { n: "06", t: "Head Massage", d: "Pressure-point relief with warm oils and scalp therapy." },
];

export default function HairServices({ onBook }) {
  return (
    <section
      id="hair-services"
      data-testid="hair-services-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold flex items-center gap-2">
            <Scissors size={12} strokeWidth={1.5} /> The Hair Studio
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
            Hair, <span className="italic font-editorial text-gold">sculpted</span> — cut, styled, restored.
          </motion.h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed opacity-70">
            Every strand, considered. From precision cuts to restorative spa
            rituals — a full hair studio inside the atelier.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="col-span-12 md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden zoom-img-parent"
        >
          <img
            src={IMAGES.hairStyling}
            alt="Hair styling"
            className="w-full h-full object-cover zoom-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 font-editorial italic text-2xl text-white">
            The Blowout
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-7">
          <ul className="divide-y border-t" style={{ borderColor: "rgb(var(--nl-border))" }}>
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group"
                data-testid={`hair-service-${s.n}`}
              >
                <button
                  onClick={onBook}
                  className="w-full grid grid-cols-12 gap-3 py-5 md:py-6 items-baseline text-left"
                >
                  <span className="col-span-2 font-mono-luxe text-[11px] tracking-[0.2em] opacity-40">
                    {s.n}
                  </span>
                  <span className="col-span-10 md:col-span-4 font-display text-xl md:text-3xl tracking-tight group-hover:text-gold transition-colors duration-500">
                    {s.t}
                  </span>
                  <span className="col-span-12 md:col-span-5 opacity-75 font-light text-sm md:text-base leading-relaxed">
                    {s.d}
                  </span>
                  <span className="col-span-12 md:col-span-1 flex md:justify-end">
                    <ArrowUpRight
                      size={16}
                      className="opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all"
                      strokeWidth={1.5}
                    />
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
