import { motion } from "framer-motion";
import { Gift, Tag, ArrowUpRight } from "lucide-react";
import { useSanity } from "@/sanity/useSanity";
import { Q } from "@/sanity/client";

const FALLBACK_OFFERS = [
  {
    tag: "New Client",
    title: "First-Visit Ritual",
    price: "10% off",
    description: "A gentle welcome — enjoy 10% off your first service at the atelier. Applicable on any single treatment.",
    valid: "For first-time visitors only",
    featured: true,
  },
  {
    tag: "Bridal Season",
    title: "The Complete Bride",
    price: "Package deal",
    description: "Muhurtham + Reception + Engagement makeup bundled with saree draping and mehendi at a curated bridal-package rate.",
    valid: "Book at least 14 days in advance",
  },
  {
    tag: "Refer & Reward",
    title: "Bring a Friend",
    price: "15% off both",
    description: "Refer a friend for any facial or bridal service — you both receive 15% off your next appointments.",
    valid: "Referral must book within 30 days",
  },
  {
    tag: "Weekday",
    title: "Midweek Glow",
    price: "20% off",
    description: "Book any facial or hair spa on Tuesday or Wednesday and receive 20% off. A quieter salon, a longer ritual.",
    valid: "Tuesday & Wednesday only",
  },
];

export default function Offers({ onBook }) {
  const { data: raw } = useSanity(Q.offers, FALLBACK_OFFERS);
  const offers = raw.map((o) => ({
    tag: o.tag,
    title: o.title,
    price: o.price,
    description: o.description,
    valid: o.valid,
    featured: !!o.featured,
  }));
  return (
    <section
      id="offers"
      data-testid="offers-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold flex items-center gap-2">
            <Gift size={12} strokeWidth={1.5} /> The Offer Card
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
            Curated <span className="italic font-editorial text-gold">offers</span>, quietly generous.
          </motion.h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed opacity-70">
            A rotating shortlist of gentle discounts and package deals for
            regulars, brides and first-time visitors. Mention the offer name at
            the time of booking.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {offers.map((o, i) => {
          const big = o.featured || (i === 0 && !offers.some((x) => x.featured));
          return (
          <motion.article
            key={o.title + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            data-testid={`offer-card-${i}`}
            className={`glass rounded-2xl p-6 md:p-10 flex flex-col justify-between hover:border-gold transition-all duration-500 ${
              big
                ? "col-span-12 md:col-span-7 md:row-span-2"
                : "col-span-12 md:col-span-5"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 font-mono-luxe text-[10px] tracking-[0.3em] uppercase text-gold">
                <Tag size={11} strokeWidth={1.5} /> {o.tag}
              </div>
              <h3
                className={`mt-4 font-display tracking-tight ${
                  big ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
                }`}
              >
                {o.title}
              </h3>
              <div
                className={`mt-3 font-editorial italic text-gold ${
                  big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                {o.price}
              </div>
              <p
                className={`mt-5 opacity-75 font-light leading-relaxed ${
                  big ? "text-base md:text-lg max-w-lg" : "text-sm md:text-base"
                }`}
              >
                {o.description}
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-gold-soft flex items-center justify-between gap-4">
              <div className="font-mono-luxe text-[10px] tracking-[0.25em] uppercase opacity-60">
                {o.valid}
              </div>
              <button
                onClick={onBook}
                className="font-mono-luxe text-[10px] tracking-[0.25em] uppercase text-gold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
              >
                Claim <ArrowUpRight size={12} strokeWidth={1.5} />
              </button>
            </div>
          </motion.article>
        )})}
      </div>

      <p className="mt-10 font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-50">
        Offers are placeholders — the atelier may revise them each season. Ask at reception for the current list.
      </p>
    </section>
  );
}
