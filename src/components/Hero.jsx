import React from "react";
import { MessageCircle, MapPin, Sparkles, ShieldCheck, Truck } from "lucide-react";
import { SHOP_INFO, UI_TEXT } from "../data";

export default function Hero({ lang }) {
  const t = UI_TEXT[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium backdrop-blur-sm">
          <Sparkles size={14} className="text-emerald-400" />
          <span>{t.heroBadge}</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
            {SHOP_INFO.name[lang]}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
            <Truck size={15} className="text-emerald-400" />
            <span>{t.freeDelivery}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
            <ShieldCheck size={15} className="text-emerald-400" />
            <span>CR No. {SHOP_INFO.crNo}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
            <MapPin size={15} className="text-emerald-400" />
            <span>{SHOP_INFO.locationName[lang]}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={SHOP_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all shadow-lg shadow-emerald-400/20"
          >
            <MessageCircle size={18} />
            <span>{t.orderWhatsapp}</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-slate-300 hover:text-white rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/60 transition-all"
          >
            <span>{t.exploreServices}</span>
          </a>
        </div>
      </div>
    </section>
  );
}