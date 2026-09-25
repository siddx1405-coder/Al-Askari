import React from "react";
import { Sparkles, Shirt, Crown, HeartHandshake } from "lucide-react";
import { SERVICES, UI_TEXT } from "../data";

const iconMap = {
  Sparkles: Sparkles,
  Shirt: Shirt,
  Crown: Crown,
  HeartHandshake: HeartHandshake,
};

export default function Services({ lang }) {
  const t = UI_TEXT[lang];

  return (
    <section id="services" className="py-24 bg-slate-900/50 border-y border-slate-800/80 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-xs uppercase font-semibold tracking-widest text-emerald-400">
            {t.whatWeDo}
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-100">
            {t.tailoredCare}
          </p>
          <p className="text-sm text-slate-400 font-light">
            {t.tailoredDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {service.subtitle[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}