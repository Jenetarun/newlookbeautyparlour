import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { BRAND, IMAGES } from "@/data/salon";

const line = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: 0,
    transition: {
      duration: 1.1,
      delay: 0.2 + i * 0.12,
      ease: [0.7, 0, 0.15, 1],
    },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.9 + i * 0.1, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export default function Hero({ onBook }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      id="home"
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
    >
      {/* Parallax bg */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBride}
          alt="Luxury bridal portrait"
          className="w-full h-full object-cover object-[65%_center]"
          loading="eager"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-black"
      />
      {/* Subtle vertical gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Corner meta */}
      <div className="absolute top-24 md:top-28 left-6 md:left-10 z-10 text-white/70">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-mono-luxe text-[10px] tracking-[0.35em] uppercase flex items-center gap-3"
        >
          <span className="inline-block w-6 h-px bg-white/50" />
          Est. Akividu — Andhra Pradesh
        </motion.div>
      </div>

      <div className="absolute top-24 md:top-28 right-6 md:right-10 z-10 text-white/70 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="font-mono-luxe text-[10px] tracking-[0.35em] uppercase text-right"
        >
          Chapter 01
          <br />
          <span className="text-gold">The Ritual</span>
        </motion.div>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          className="text-white"
        >
          <motion.div
            variants={fade}
            custom={-1}
            initial="hidden"
            animate="show"
            className="font-mono-luxe text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold mb-6"
          >
            New Look Beauty Parlour
          </motion.div>

          <h1 className="font-display font-medium leading-[0.92] tracking-[-0.02em] text-[13vw] md:text-[9vw] lg:text-[8.4rem] xl:text-[9.5rem] max-w-6xl">
            <span className="mask-line">
              <motion.span variants={line} custom={0} className="block">
                Where <span className="italic font-editorial text-gold">beauty</span>
              </motion.span>
            </span>
            <span className="mask-line">
              <motion.span variants={line} custom={1} className="block">
                meets perfection.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            custom={0}
            initial="hidden"
            animate="show"
            className="mt-8 md:mt-10 max-w-xl text-base md:text-lg font-light leading-relaxed text-white/75"
          >
            A quiet atelier of bridal artistry, skin rituals and hair craft —
            curated for the women of Akividu by Certified Beautician{" "}
            <span className="italic font-editorial text-gold">
              Lakshmi Eswari
            </span>
            .
          </motion.p>

          <motion.div
            variants={fade}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-10 md:mt-12 flex flex-wrap items-center gap-3 md:gap-4"
          >
            <button
              data-testid="hero-book-btn"
              onClick={onBook}
              className="btn-luxe btn-luxe-filled"
            >
              Book Appointment <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
            <a
              data-testid="hero-whatsapp-btn"
              href={`https://wa.me/${BRAND.phoneIntl.replace("+", "")}?text=Hello%20Lakshmi%20garu%2C%20I'd%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxe"
            >
              WhatsApp
            </a>
            <a
              data-testid="hero-call-btn"
              href={`tel:${BRAND.phoneIntl}`}
              className="btn-luxe"
            >
              <Phone size={13} strokeWidth={1.5} /> Call Now
            </a>
            <a
              data-testid="hero-maps-btn"
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-luxe"
            >
              <MapPin size={13} strokeWidth={1.5} /> Google Maps
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ticker line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-6 md:left-10 right-6 md:right-10 z-10 flex items-center justify-between text-white/60"
      >
        <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase">
          Scroll ↓ to discover
        </div>
        <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase hidden md:block">
          The Salon &nbsp;·&nbsp; The Craft &nbsp;·&nbsp; The Rituals
        </div>
      </motion.div>

      {/* Slow-spinning gold seal (subtle 3D vibe) */}
      <div className="absolute bottom-24 right-6 md:right-10 z-10 hidden lg:block">
        <div className="relative w-28 h-28">
          <svg
            className="slow-spin absolute inset-0"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
            </defs>
            <text fill="currentColor" className="text-gold" style={{ fontSize: 8, letterSpacing: 3 }}>
              <textPath href="#circlePath">
                LAKSHMI ESWARI · CERTIFIED BEAUTICIAN · AKIVIDU ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-editorial italic text-gold text-2xl">L</span>
          </div>
        </div>
      </div>
    </section>
  );
}
