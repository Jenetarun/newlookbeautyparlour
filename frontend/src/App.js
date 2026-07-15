import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { useLenis } from "@/lib/lenis";
import Loader from "@/components/site/Loader";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Marquee from "@/components/site/Marquee";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingCTAs from "@/components/site/FloatingCTAs";

function Landing() {
  useLenis();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Auto with dark default
    const stored = localStorage.getItem("nl-theme");
    if (stored) {
      setTheme(stored);
    } else {
      const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
      setTheme(prefersLight ? "light" : "dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("nl-theme", theme);
  }, [theme]);

  const scrollToBook = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App grain relative">
      <Loader />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero onBook={scrollToBook} />
      <About />
      <Marquee />
      <Services onBook={scrollToBook} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTAs />
      <Toaster
        position="bottom-center"
        theme={theme}
        toastOptions={{
          style: {
            background: "rgb(var(--nl-surface))",
            color: "rgb(var(--nl-text))",
            border: "1px solid rgb(var(--nl-border))",
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
