import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/salon";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold">
            Chapter 04 — Voices
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
            Told in their <span className="italic font-editorial text-gold">own</span> words.
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={i}
            data-testid={`testimonial-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className={`glass rounded-2xl p-8 md:p-10 flex flex-col justify-between ${
              i === 0
                ? "col-span-12 md:col-span-7 md:row-span-2"
                : i === 1
                ? "col-span-12 md:col-span-5"
                : "col-span-12 md:col-span-4"
            }`}
          >
            <div>
              <div className="flex items-center gap-1 text-gold mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote
                className={`font-editorial italic leading-snug ${
                  i === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
                }`}
              >
                &ldquo;{t.q}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-8 pt-6 border-t border-gold-soft">
              <div className="font-display text-base md:text-lg">{t.n}</div>
              <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mt-1">
                {t.role}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
