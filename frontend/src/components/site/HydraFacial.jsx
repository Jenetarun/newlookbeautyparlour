import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Droplets, Sparkles, Clock, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/data/salon";

const STEPS = [
  { n: "01", t: "Cleanse", d: "A deep botanical cleanse removes impurities and preps the skin canvas." },
  { n: "02", t: "Exfoliate", d: "Gentle acid peel lifts dead cells for immediate luminosity." },
  { n: "03", t: "Extract", d: "Vortex suction clears pores without any pinching or redness." },
  { n: "04", t: "Hydrate", d: "A cocktail of hyaluronic acid and peptides floods the skin with moisture." },
  { n: "05", t: "Illuminate", d: "LED and cooling serums seal in the glass-skin finish." },
];

const BENEFITS = [
  "Instant glass-skin glow",
  "Deep pore detox",
  "Reduced fine lines",
  "Even tone & texture",
  "Zero downtime",
  "Safe for sensitive skin",
];

export default function HydraFacial({ onBook }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  return (
    <section
      id="hydra-facial"
      data-testid="hydra-facial-section"
      ref={ref}
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold flex items-center gap-2">
            <Droplets size={12} strokeWidth={1.5} /> Signature Ritual
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
            The <span className="italic font-editorial text-gold">Hydra Facial</span> — glass skin, in one sitting.
          </motion.h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed opacity-70">
            Our most requested treatment. A five-step medical-grade ritual that
            cleanses, exfoliates, extracts and infuses your skin with actives —
            leaving it visibly clearer, plumper and luminous. No downtime. No compromise.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-5">
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden zoom-img-parent"
          >
            <img
              src={IMAGES.facialTreatment}
              alt="Hydra Facial treatment"
              className="w-full h-full object-cover zoom-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
                  Duration
                </div>
                <div className="font-editorial italic text-2xl mt-1">60 minutes</div>
              </div>
              <Sparkles size={20} className="text-gold" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-6">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-6">
            The Five-Step Method
          </div>
          <ul className="space-y-4">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-4 items-baseline border-b border-gold-soft pb-4"
              >
                <span className="col-span-2 md:col-span-1 font-mono-luxe text-[11px] tracking-[0.2em] text-gold">
                  {s.n}
                </span>
                <span className="col-span-10 md:col-span-3 font-display text-xl md:text-2xl tracking-tight">
                  {s.t}
                </span>
                <span className="col-span-12 md:col-span-8 opacity-75 font-light text-sm md:text-base leading-relaxed">
                  {s.d}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="glass rounded-full px-4 py-2 text-xs md:text-sm font-light text-center"
              >
                {b}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              data-testid="hydra-book-btn"
              onClick={onBook}
              className="btn-luxe btn-luxe-filled"
            >
              Reserve a Hydra Facial <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
            <span className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 flex items-center gap-2">
              <Clock size={11} strokeWidth={1.5} /> By appointment only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
