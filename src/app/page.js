"use client";

import { useState } from "react";

export default function WaitlistHome() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      badge: "Early Access Waitlist",
      headline: "Onbu",
      subtext:
        "Create a free online shop in seconds. Upload your products, add your prices, and get a link to share anywhere—even if you are starting with zero capital.",
      pillars: [
        {
          title: "1. Your Shop Link",
          desc: "List your goods and prices cleanly without stress.",
        },
        {
          title: "2. Business Directory",
          desc: "Let buyers find you online or at your physical shop.",
        },
        {
          title: "3. Free Promotion",
          desc: "We feature your business on Onbu social media.",
        },
      ],
      formLabel: "Save your shop name early",
      placeholder: "Enter your email address",
      button: "Join the Waitlist",
      note: "Free to join. Made for small businesses and new hustlers.",
      alertMsg: "You are on the Onbu waitlist! We will message you soon.",
    },
    ha: {
      badge: "Jerin Masu Jira (Early Access)",
      headline: "Onbu",
      subtext:
        "Bude shagonka na yanar gizo kyauta cikin sakan kadan. Saka hotunan kayanka da farashinsu, ka samu link da zaka tura wa kwastomomi—ko da baka da jari a hannu.",
      pillars: [
        {
          title: "1. Link Din Shagonka",
          desc: "Jera kayanka da farashinsu cikin tsari ba tare da wahala ba.",
        },
        {
          title: "2. Rumbun Kasuwanci",
          desc: "Mutane su ganka a yanar gizo ko su gano ainihin shagonka.",
        },
        {
          title: "3. Talla Kyauta",
          desc: "Muna tallata kasuwancinka a shafukan sada zumunta na Onbu.",
        },
      ],
      formLabel: "Yi rajista tun yanzu",
      placeholder: "Saka adireshin email dinka",
      button: "Shiga Jerin Masu Jira",
      note: "Kyauta ne. An yi shi ne don kananan yan kasuwa da masu tasowa.",
      alertMsg: "Mun karbi sunanka a jerin Onbu! Za mu tuntube ka nan ba da jimawa ba.",
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-emerald-500 selection:text-slate-950">
      <div className="max-w-md w-full text-center">
        
        {/* Language Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-slate-900 p-1 rounded-full border border-slate-800">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                lang === "en"
                  ? "bg-emerald-500 text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("ha")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                lang === "ha"
                  ? "bg-emerald-500 text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Hausa
            </button>
          </div>
        </div>

        {/* Brand Tag */}
        <div className="inline-block mb-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          {t.badge}
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-white">
          {t.headline}
        </h1>

        {/* Value Proposition */}
        <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
          {t.subtext}
        </p>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8 text-left">
          {t.pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800"
            >
              <p className="text-emerald-400 font-bold text-xs mb-1">
                {pillar.title}
              </p>
              <p className="text-xs text-slate-400 leading-snug">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Waitlist Form Box */}
        <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl text-left">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2"
          >
            {t.formLabel}
          </label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(t.alertMsg);
            }}
            className="space-y-3"
          >
            <input
              type="email"
              id="email"
              required
              placeholder={t.placeholder}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-lg shadow-emerald-500/10 cursor-pointer"
            >
              {t.button}
            </button>
          </form>
          <p className="text-[11px] text-slate-500 text-center mt-3">
            {t.note}
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-10 text-xs text-slate-600 font-mono">
          onbu.vercel.app
        </div>

      </div>
    </main>
  );
}