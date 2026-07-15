const WORDS = [
  "Bridal Cinema",
  "Hydra Facial",
  "Diamond Glow",
  "Saree Draping",
  "Mehendi Art",
  "Hair Craft",
  "Studio Ritual",
  "Home Service",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section
      data-testid="marquee-section"
      className="relative py-16 md:py-24 border-y border-gold-soft overflow-hidden edge-fade"
    >
      <div className="marquee-track flex items-center whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="inline-flex items-center font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none px-8"
          >
            <span className={i % 2 === 0 ? "" : "italic font-editorial text-gold"}>
              {w}
            </span>
            <span className="mx-8 text-gold text-4xl md:text-6xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
