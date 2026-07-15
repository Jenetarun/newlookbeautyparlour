import { motion } from "framer-motion";
import { SERVICES } from "@/data/salon";
import { ArrowUpRight } from "lucide-react";
import { useSanity } from "@/sanity/useSanity";
import { Q } from "@/sanity/client";

const CATS = ["All", "Signature", "Skin", "Hair", "Grooming", "Occasion", "Nails", "Ritual", "Draping", "Little Ones"];

import { useState, useMemo } from "react";

export default function Services({ onBook }) {
  const [active, setActive] = useState("All");
  const { data: sanityList } = useSanity(Q.services, SERVICES);
  const services = useMemo(
    () =>
      (sanityList || []).map((s, i) => ({
        id: s._id || s.id || `svc-${i}`,
        name: s.name,
        category: s.category,
        desc: s.description || s.desc || "",
      })),
    [sanityList]
  );
  const list = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold">
            Chapter 02 — Services
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
            A <span className="italic font-editorial text-gold">curated</span>{" "}
            menu — every ritual, meticulous.
          </motion.h2>
          <p className="mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed opacity-70">
            From bridal cinema to weekly skin rituals — every service is
            performed with prestige products in a sanitised, private setting.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
        {CATS.map((c) => (
          <button
            key={c}
            data-testid={`services-cat-${c.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setActive(c)}
            className={`px-4 md:px-5 py-2 rounded-full border text-[11px] font-mono-luxe tracking-[0.2em] uppercase transition-colors duration-300 ${
              active === c
                ? "bg-gold text-black border-transparent"
                : "border-gold-soft opacity-70 hover:opacity-100 hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Services list — editorial rows */}
      <ul className="divide-y" style={{ borderColor: "rgb(var(--nl-border))" }}>
        {list.map((s, i) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
            className="group relative border-t border-gold-soft"
            data-testid={`service-row-${s.id}`}
          >
            <button
              onClick={onBook}
              className="w-full grid grid-cols-12 gap-4 py-6 md:py-8 items-baseline text-left"
            >
              <div className="col-span-2 md:col-span-1 font-mono-luxe text-[11px] tracking-[0.2em] opacity-40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-6 font-display text-2xl md:text-4xl tracking-tight leading-tight group-hover:text-gold transition-colors duration-500">
                {s.name}
              </div>
              <div className="hidden md:block md:col-span-4 opacity-70 font-light text-sm md:text-base leading-relaxed">
                {s.desc}
              </div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end">
                <span className="inline-flex items-center gap-1 font-mono-luxe text-[10px] tracking-[0.25em] uppercase opacity-60 group-hover:opacity-100 group-hover:text-gold transition-all duration-500">
                  Enquire <ArrowUpRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </button>
          </motion.li>
        ))}
      </ul>

      {/* Home services + products callout */}
      <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-6 glass rounded-2xl p-8 md:p-10">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
            Special
          </div>
          <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">
            Home Services <span className="italic font-editorial text-gold">Available</span>
          </h3>
          <p className="mt-4 opacity-75 font-light leading-relaxed">
            The salon travels to your address for brides, senior clients, and
            wedding parties. Everything sanitised, everything set for you.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 glass rounded-2xl p-8 md:p-10">
          <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
            Boutique
          </div>
          <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">
            Beauty Products <span className="italic font-editorial text-gold">In-Store</span>
          </h3>
          <p className="mt-4 opacity-75 font-light leading-relaxed">
            A hand-picked shelf of the same prestige products we use in-salon —
            available for you to take home.
          </p>
        </div>
      </div>
    </section>
  );
}
