"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import Section from "./Section";

export default function Experience() {
  const { t } = useLocale();
  const bullets = [t.experience.bullet1, t.experience.bullet2, t.experience.bullet3];

  return (
    <Section
      id="experience"
      title={t.experience.title}
      subtitle={t.experience.subtitle}
      className="section-soft"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="absolute start-[1.35rem] top-8 bottom-8 w-px bg-gradient-to-b from-rose via-blush to-transparent md:start-1/2" />

        <motion.article
          whileHover={{ scale: 1.015 }}
          className="glass relative ms-10 rounded-[2rem] p-7 shadow-[0_20px_60px_rgba(196,93,122,0.12)] md:ms-0 md:me-auto md:w-[calc(50%-1.5rem)]"
        >
          <span className="absolute -start-[2.15rem] top-8 flex h-5 w-5 items-center justify-center rounded-full bg-deep-rose ring-4 ring-soft-pink md:start-auto md:-end-[calc(100%+0.9rem)] md:translate-x-1/2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          </span>

          <p className="mb-2 text-xs font-semibold tracking-wide text-rose">{t.experience.now}</p>
          <h3 className="mb-1 text-xl font-extrabold text-ink">{t.experience.jobTitle}</h3>
          <p className="mb-4 text-sm font-medium text-deep-rose">{t.experience.company}</p>
          <ul className="space-y-2 text-sm leading-7 text-muted">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mt-8 ms-10 rounded-[2rem] p-6 md:ms-auto md:w-[calc(50%-1.5rem)]"
        >
          <p className="mb-2 text-xs font-semibold text-rose">{t.experience.eduLabel}</p>
          <h3 className="mb-1 text-lg font-bold text-ink">{t.experience.eduTitle}</h3>
          <p className="text-sm text-muted">{t.experience.eduDesc}</p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
