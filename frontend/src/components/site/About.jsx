import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND, IMAGES, WHY_US } from "@/data/salon";

function Chapter({ n, title, body, side = "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      className="grid grid-cols-12 gap-6 md:gap-10 py-16 md:py-24 border-t border-gold-soft"
    >
      <div className="col-span-12 md:col-span-3">
        <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase opacity-60">
          Chapter {n}
        </div>
        <div className="font-display text-[6rem] md:text-[8rem] leading-none tracking-tighter text-gold mt-2">
          {n}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 md:pl-10">
        <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl">
          {title}
        </h3>
        <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed opacity-80">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <section
      id="about"
      data-testid="about-section"
      ref={ref}
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold">
            The Atelier — 2025
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
            An <span className="italic font-editorial text-gold">Atelier</span>{" "}
            of quiet luxury — <br />
            crafted by hand, in Akividu.
          </motion.h2>
        </div>
      </div>

      {/* Editorial portrait row */}
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-8">
        <div className="col-span-12 md:col-span-5 relative">
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden zoom-img-parent"
          >
            <img
              src={IMAGES.makeupCloseup}
              alt="Close-up makeup artistry"
              className="w-full h-full object-cover zoom-img"
            />
          </motion.div>
          <div className="mt-3 font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-50">
            Fig. 01 — The Craft
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col justify-end">
          <div className="font-editorial italic text-gold text-xl md:text-2xl mb-4">
            &ldquo;Every face carries its own story. My work is to reveal it —
            with patience, precision, and a great deal of love.&rdquo;
          </div>
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase opacity-70">
            {BRAND.beautician} · {BRAND.designation}
          </div>

          <p className="mt-8 text-base md:text-lg font-light leading-relaxed max-w-xl opacity-80">
            For nearly a decade, New Look Beauty Parlour has been the private
            atelier for brides, mothers, professionals and young women of
            Akividu who ask for one thing only — an experience worth returning
            to. Prestige products. Sanitised tools. Unhurried rituals. And an
            eye trained on the smallest of details.
          </p>
        </div>
      </div>

      {/* Manifesto chapters */}
      <div className="mt-24 md:mt-40">
        <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
          Why Choose Us — a manifesto in eight parts
        </div>
        {WHY_US.map((c) => (
          <Chapter key={c.n} n={c.n} title={c.t} body={c.d} />
        ))}
      </div>
    </section>
  );
}
