"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALE_LABELS, type Locale } from "@/i18n/types";

const order: Locale[] = ["fa", "en", "tr"];

export default function LanguageSwitcher({ compact }: { compact?: boolean }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-rose/25 bg-white/75 p-1 shadow-sm backdrop-blur ${compact ? "w-full justify-center" : ""}`}
      role="group"
      aria-label="Language"
    >
      {order.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`relative rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors md:px-3 md:text-xs ${
              active ? "text-white" : "text-ink/70 hover:text-deep-rose"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-l from-deep-rose to-rose shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">
              {compact ? code.toUpperCase() : LOCALE_LABELS[code]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
