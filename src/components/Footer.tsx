"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative overflow-hidden border-t border-rose/15 bg-gradient-to-b from-soft-pink to-petal py-10">
      <div className="pointer-events-none absolute -start-10 -top-10 h-40 w-40 rounded-full bg-rose/20 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-semibold text-ink"
        >
          Maryam Talebi
        </motion.p>
        <p className="text-sm text-muted">{t.footer.subtitle}</p>
        <p className="text-xs text-muted/80">
          © {new Date().getFullYear()} · {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
