import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Instagram, MapPin, Phone, MessageCircle, ArrowUpRight, Clock } from "lucide-react";
import { BRAND, SERVICES } from "@/data/salon";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const empty = {
  name: "",
  phone: "",
  service: "",
  preferred_date: "",
  preferred_time: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      toast.error("Please fill name, phone and service.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/appointments`, form);
      toast.success("Booked — we'll be in touch shortly.");

      // Also open WhatsApp with prefilled message
      const msg = `Hello Lakshmi garu, I would like to book an appointment.%0A%0AName: ${encodeURIComponent(
        form.name
      )}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(
        form.service
      )}%0ADate: ${encodeURIComponent(form.preferred_date)}%0ATime: ${encodeURIComponent(
        form.preferred_time
      )}%0A%0A${encodeURIComponent(form.message || "")}`;
      window.open(
        `https://wa.me/${BRAND.phoneIntl.replace("+", "")}?text=${msg}`,
        "_blank"
      );

      setForm(empty);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try WhatsApp or Call.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-40 max-w-[1440px] mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono-luxe text-[11px] tracking-[0.3em] uppercase text-gold">
            Chapter 05 — Reserve
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
            Reserve your{" "}
            <span className="italic font-editorial text-gold">ritual</span>.
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 md:gap-12">
        {/* Info column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          <div>
            <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-3">
              The Atelier
            </div>
            <div className="font-editorial italic text-xl md:text-2xl leading-snug">
              {BRAND.address}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <a
              data-testid="contact-call-btn"
              href={`tel:${BRAND.phoneIntl}`}
              className="glass rounded-xl p-5 hover:text-gold transition-colors group"
            >
              <Phone size={16} className="text-gold mb-3" strokeWidth={1.5} />
              <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">Call</div>
              <div className="font-display text-lg mt-1">{BRAND.phone}</div>
            </a>
            <a
              data-testid="contact-wa-btn"
              href={`https://wa.me/${BRAND.phoneIntl.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl p-5 hover:text-gold transition-colors"
            >
              <MessageCircle size={16} className="text-gold mb-3" strokeWidth={1.5} />
              <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">WhatsApp</div>
              <div className="font-display text-lg mt-1">Chat now</div>
            </a>
            <a
              data-testid="contact-maps-btn"
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl p-5 hover:text-gold transition-colors"
            >
              <MapPin size={16} className="text-gold mb-3" strokeWidth={1.5} />
              <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">Maps</div>
              <div className="font-display text-lg mt-1">Find us</div>
            </a>
            <a
              data-testid="contact-ig-btn"
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl p-5 hover:text-gold transition-colors"
            >
              <Instagram size={16} className="text-gold mb-3" strokeWidth={1.5} />
              <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">Instagram</div>
              <div className="font-display text-lg mt-1 truncate">
                @new_look_herbal
              </div>
            </a>
          </div>

          <div>
            <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-3 flex items-center gap-2">
              <Clock size={11} strokeWidth={1.5} /> Working Hours
            </div>
            <ul className="space-y-2">
              {BRAND.hours.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between border-b border-gold-soft pb-2">
                  <span className="font-display text-lg">{h.day}</span>
                  <span className="font-mono-luxe text-[11px] tracking-[0.2em] uppercase opacity-70">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps embed */}
          <div>
            <div className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60 mb-3 flex items-center gap-2">
              <MapPin size={11} strokeWidth={1.5} /> Find the Atelier
            </div>
            <a
              data-testid="contact-maps-embed-link"
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block relative aspect-[16/10] rounded-2xl overflow-hidden border border-gold-soft group"
            >
              <iframe
                title="New Look Beauty Parlour on Google Maps"
                src={BRAND.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[30%] contrast-110 group-hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full glass font-mono-luxe text-[10px] tracking-[0.25em] uppercase text-gold">
                Open in Maps ↗
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          data-testid="appointment-form"
          onSubmit={submit}
          className="col-span-12 lg:col-span-7 glass rounded-2xl p-6 md:p-10"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="col-span-2 md:col-span-1">
              <label className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
                Your Name
              </label>
              <input
                data-testid="form-name"
                className="input-luxe"
                value={form.name}
                onChange={upd("name")}
                placeholder="Full name"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
                Phone
              </label>
              <input
                data-testid="form-phone"
                className="input-luxe"
                value={form.phone}
                onChange={upd("phone")}
                placeholder="10-digit number"
                type="tel"
              />
            </div>
            <div className="col-span-2">
              <label className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
                Service
              </label>
              <select
                data-testid="form-service"
                className="input-luxe bg-transparent appearance-none"
                value={form.service}
                onChange={upd("service")}
                style={{ backgroundImage: "none" }}
              >
                <option value="" style={{ background: "rgb(var(--nl-surface))" }}>
                  Select a service…
                </option>
                {SERVICES.map((s) => (
                  <option
                    key={s.id}
                    value={s.name}
                    style={{ background: "rgb(var(--nl-surface))" }}
                  >
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
                Preferred Date
              </label>
              <input
                data-testid="form-date"
                type="date"
                className="input-luxe"
                value={form.preferred_date}
                onChange={upd("preferred_date")}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
                Preferred Time
              </label>
              <input
                data-testid="form-time"
                type="time"
                className="input-luxe"
                value={form.preferred_time}
                onChange={upd("preferred_time")}
              />
            </div>
            <div className="col-span-2">
              <label className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
                Notes for the Beautician
              </label>
              <textarea
                data-testid="form-message"
                className="input-luxe resize-none"
                value={form.message}
                onChange={upd("message")}
                rows={3}
                placeholder="Occasion, references, anything we should know…"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              data-testid="form-submit"
              type="submit"
              disabled={loading}
              className="btn-luxe btn-luxe-filled disabled:opacity-60"
            >
              {loading ? "Sending…" : "Book Appointment"}{" "}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
            <span className="font-mono-luxe text-[10px] tracking-[0.3em] uppercase opacity-60">
              Or reach us instantly on WhatsApp / Call
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
