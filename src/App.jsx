import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import { SHOP_INFO, UI_TEXT } from "./data";

export default function App() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = UI_TEXT[lang];

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 transition-all duration-300"
    >
      <Navbar lang={lang} toggleLang={toggleLang} />

      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Gallery lang={lang} />
        <Location lang={lang} />
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-800/60 text-center text-xs text-slate-500 font-light px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {SHOP_INFO.name[lang]}. {t.rightsReserved}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>CR No. {SHOP_INFO.crNo}</span>
            <span>•</span>
            <span>{SHOP_INFO.locationName[lang]}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}