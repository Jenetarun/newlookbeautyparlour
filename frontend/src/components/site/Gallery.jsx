import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { IMAGES, BRAND } from "@/data/salon";

const GALLERY = [
  { src: IMAGES.heroBride, label: "Bridal Cinema", tall: true },
  { src: IMAGES.facialTreatment, label: "Hydra Facial" },
  { src: IMAGES.hairStyling, label: "Hair Styling" },
  { src: IMAGES.mehendi, label: "Mehendi Artistry", tall: true },
  { src: IMAGES.hairSpa, label: "Hair Spa" },
  { src: IMAGES.products, label: "Boutique Shelf" },
  { src: IMAGES.reception, label: "Saree Elegance" },
  { src: IMAGES.salonInterior, label: "The Atelier", tall: true },
  { src: IMAGES.makeupCloseup, label: "The Craft" },
  { src: IMAGES.facialTreatment, label: "Skin Ritual" },
  { src: IMAGES.hairStyling, label: "Signature Blowout" },
  { src: IMAGES.mehendi, label: "Intricate Detail" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold">
            Chapter 03 — Gallery
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            A <span className="italic font-editorial text-gold">frame-by-frame</span> look at our work.
          </motion.h2>
          <a
            data-testid="gallery-instagram-btn"
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-luxe self-start md:self-auto"
          >
            <Instagram size={13} strokeWidth={1.5} /> Follow on Instagram
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-2 md:gap-3">
        {GALLERY.map((g, i) => (
          <motion.a
            key={i}
            data-testid={`gallery-item-${i}`}
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 6) * 0.06 }}
            className={`group relative overflow-hidden rounded-xl zoom-img-parent bg-black ${
              g.tall ? "row-span-2" : ""
            }`}
          >
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className="w-full h-full object-cover zoom-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between text-white">
              <span className="font-editorial italic text-lg md:text-xl">
                {g.label}
              </span>
              <ArrowUpRight
                size={16}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-gold"
              />
            </div>
            <span className="absolute top-3 left-3 font-mono-luxe text-[9px] tracking-[0.3em] uppercase text-white/70">
              #{String(i + 1).padStart(2, "0")}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
