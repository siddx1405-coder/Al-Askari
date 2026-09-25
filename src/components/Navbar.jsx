import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Globe } from "lucide-react";
import { SHOP_INFO, UI_TEXT } from "../data";

export default function Navbar({ lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TEXT[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#" className="group flex flex-col">
          <span className="text-lg font-semibold tracking-wide text-slate-100 group-hover:text-emerald-400 transition-colors">
            {SHOP_INFO.name[lang]}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-emerald-400 transition-colors">
            {t.services}
          </a>
          <a href="#gallery" className="hover:text-emerald-400 transition-colors">
            {t.showcase}
          </a>
          <a href="#location" className="hover:text-emerald-400 transition-colors">
            {t.location}
          </a>
        </nav>

        {/* Action Buttons & Language Switch */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 rounded-full transition-all"
          >
            <Globe size={14} />
            <span>{lang === "en" ? "العربية" : "English"}</span>
          </button>

          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full border border-slate-700 hover:border-slate-500 transition-all"
          >
            <Phone size={14} className="text-emerald-400" />
            <span>{SHOP_INFO.phone}</span>
          </a>

          <a
            href={SHOP_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all shadow-sm shadow-emerald-400/20"
          >
            <MessageCircle size={14} />
            <span>{t.whatsappUs}</span>
          </a>
        </div>

        {/* Mobile Menu Button & Language Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-full"
          >
            <Globe size={13} />
            <span>{lang === "en" ? "عربي" : "EN"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-1"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-sm text-slate-200">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-400">
            {t.services}
          </a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-400">
            {t.showcase}
          </a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-400">
            {t.location}
          </a>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
            <a href={`tel:${SHOP_INFO.phone}`} className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-300 rounded-lg border border-slate-700">
              <Phone size={14} className="text-emerald-400" />
              <span>{SHOP_INFO.phone}</span>
            </a>
            <a href={SHOP_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-950 bg-emerald-400 rounded-lg">
              <MessageCircle size={14} />
              <span>{t.whatsappUs}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}