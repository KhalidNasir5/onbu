"use client";

import { useState } from "react";

export default function WaitlistHome() {
  const [lang, setLang] = useState("en");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const content = {
    en: {
      badge: "Early Access",
      headline: "Turn what you have into a real shop.",
      subtext:
        "Create a free online shop in seconds. Add your products and prices, get a link to share anywhere, and get listed in our public business directory—even with zero capital.",
      pillars: [
        {
          title: "1. Your Shop Link",
          desc: "Organize your goods and prices cleanly without stress.",
        },
        {
          title: "2. Business Directory",
          desc: "Let buyers find you online or at your physical shop.",
        },
        {
          title: "3. Free Promotion",
          desc: "We feature active businesses on Onbu social media.",
        },
      ],
      formLabel: "Reserve your shop early",
      placeholder: "Enter your email address",
      button: "Join the Waitlist",
      submittingBtn: "Saving...",
      note: "Free to join. Built for small businesses and new hustlers.",
      successMsg: "You are on the Onbu waitlist! We will reach out soon.",
      errorMsg: "Something went wrong. Please try again.",
    },
    ha: {
      badge: "Jerin Masu Jira",
      headline: "Maida abin da kake da shi zuwa ainihin shago.",
      subtext:
        "Bude shagonka na yanar gizo kyauta cikin sakan kadan. Saka kayanka da farashinsu, ka samu link na turawa kwastomomi—ko da baka da jari a hannu.",
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
      submittingBtn: "Ana adanawa...",
      note: "Kyauta ne. An yi shi ne don kananan yan kasuwa da masu tasowa.",
      successMsg: "Mun karbi sunanka a jerin Onbu! Za mu tuntube ka nan ba da jimawa ba.",
      errorMsg: "An samu matsala. Da fatan za a sake gwadawa.",
    },
  };

  const t = content[lang];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mwlokaew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, language: lang }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-gray-900 flex flex-col justify-between px-5 py-6 selection:bg-emerald-600 selection:text-white">
      
      {/* Top Navbar: Brand Mark + Compact Language Switcher */}
      <header className="max-w-xl w-full mx-auto flex items-center justify-between">
        {/* Custom Geometric Logo Mark + Wordmark */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shadow-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <circle cx="12" cy="14" r="3" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">
            onbu<span className="text-emerald-600">.</span>
          </span>
        </div>

        {/* Small Compact Language Toggle */}
        <div className="inline-flex items-center bg-gray-200/80 p-0.5 rounded-lg text-[11px] font-semibold">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
              lang === "en"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("ha")}
            className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
              lang === "ha"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            HA
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-xl w-full mx-auto my-10">
        {/* Amber-Emerald Trust Pill */}
        <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-amber-800 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          {t.badge}
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-[1.12]">
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
          {t.subtext}
        </p>

        {/* Waitlist Card (Elevated White Surface) */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/90 shadow-sm mb-8">
          <label
            htmlFor="email"
            className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5"
          >
            {t.formLabel}
          </label>

          {status === "success" ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm p-4 rounded-xl font-medium">
              {t.successMsg}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 bg-[#FAF9F6] border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15 transition-all"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                {status === "submitting" ? t.submittingBtn : t.button}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-xs text-red-600 mt-2">{t.errorMsg}</p>
          )}

          <p className="text-xs text-gray-500 mt-3">
            {t.note}
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-gray-200/80"
            >
              <p className="text-gray-900 font-bold text-xs mb-1">
                {pillar.title}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-xl w-full mx-auto text-center text-xs text-gray-400">
        © 2026 Onbu • onbu.vercel.app
      </footer>
    </main>
  );
}