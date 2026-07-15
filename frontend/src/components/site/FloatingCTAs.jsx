import { Phone, MessageCircle } from "lucide-react";
import { useBrand } from "@/sanity/useBrand";
import { motion } from "framer-motion";

export default function FloatingCTAs() {
  const BRAND = useBrand();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.7 }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex flex-col gap-3"
    >
      <a
        data-testid="float-wa-btn"
        href={`https://wa.me/${BRAND.phoneIntl.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group w-14 h-14 rounded-full flex items-center justify-center bg-gold text-black hover:scale-110 transition-transform duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.35)]"
      >
        <MessageCircle size={22} strokeWidth={1.6} />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-full glass text-[10px] font-mono-luxe tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </a>
      <a
        data-testid="float-call-btn"
        href={`tel:${BRAND.phoneIntl}`}
        aria-label="Call"
        className="group w-14 h-14 rounded-full flex items-center justify-center glass border-gold hover:text-gold transition-colors"
        style={{ borderColor: "rgb(var(--nl-gold))" }}
      >
        <Phone size={20} strokeWidth={1.6} />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-full glass text-[10px] font-mono-luxe tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call
        </span>
      </a>
    </motion.div>
  );
}
