import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone && onDone();
    }, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="page-loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "rgb(var(--nl-bg))" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] } }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-mono-luxe text-[10px] tracking-[0.35em] uppercase text-gold mb-6"
          >
            Est. Akividu
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl tracking-tight text-center gold-shimmer"
          >
            New Look
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.7, 0, 0.3, 1] }}
            style={{ transformOrigin: "left", background: "rgb(var(--nl-gold))" }}
            className="h-[1px] w-40 md:w-64 mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
