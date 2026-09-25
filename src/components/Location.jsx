import React from "react";
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Clock } from "lucide-react";
import { SHOP_INFO, UI_TEXT } from "../data";

export default function Location({ lang }) {
  const t = UI_TEXT[lang];

  return (
    <section id="location" className="py-24 bg-slate-900/50 border-t border-slate-800/80 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-xs uppercase font-semibold tracking-widest text-emerald-400">
            {t.visitContact}
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-100">
            {t.ourLocation}
          </p>
          <p className="text-sm text-slate-400 font-light">
            {t.locationDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{SHOP_INFO.name[lang]}</h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>CR: {SHOP_INFO.crNo}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-medium">
                    <MapPin size={16} />
                    <span>{t.addressLandmark}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-light pl-6">
                    {SHOP_INFO.locationName[lang]}<br />
                    <span className="text-slate-400">{SHOP_INFO.landmark[lang]}</span><br />
                    <span className="text-slate-400">{SHOP_INFO.country[lang]}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <Phone size={16} />
                      <span>{t.phoneDelivery}</span>
                    </div>
                    <p className="text-slate-300 pl-6 font-light">{SHOP_INFO.phone}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <Clock size={16} />
                      <span>{t.serviceAdvantage}</span>
                    </div>
                    <p className="text-slate-300 pl-6 font-light">{t.fastDeliveryAvail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-light">
                Coordinates: {SHOP_INFO.coordinates.lat}, {SHOP_INFO.coordinates.lng}
              </span>
              <a
                href={SHOP_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
              >
                <span>{t.openMaps}</span>
                <ExternalLink size={14} className="text-emerald-400" />
              </a>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-800/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-100">{t.needPickup}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {t.pickupDesc}
              </p>
            </div>

            <a
              href={SHOP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-400/10"
            >
              <MessageCircle size={16} />
              <span>{t.whatsappUs}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}