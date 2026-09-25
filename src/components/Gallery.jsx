import React from "react";
import { GALLERY_IMAGES, UI_TEXT } from "../data";

export default function Gallery({ lang }) {
  const t = UI_TEXT[lang];

  return (
    <section id="gallery" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-xs uppercase font-semibold tracking-widest text-emerald-400">
            {t.workShowcase}
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-100">
            {t.careCraft}
          </p>
          <p className="text-sm text-slate-400 font-light">
            {t.galleryDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full w-fit mb-1 backdrop-blur-sm">
                  {img.tag[lang]}
                </span>
                <p className="text-xs font-medium text-slate-200">
                  {img.alt[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}