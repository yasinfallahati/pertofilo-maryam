"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import Section from "./Section";

export default function About() {
  const { t } = useLocale();

  const facts = [
    { label: t.about.factAge, value: t.about.factAgeVal },
    { label: t.about.factField, value: t.about.factFieldVal },
    { label: t.about.factRole, value: t.about.factRoleVal },
    { label: t.about.factWork, value: t.about.factWorkVal },
  ];

  return (
    <Section
      id="about"
      title={t.about.title}
      subtitle={t.about.subtitle}
      className="section-soft"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-start leading-9 text-muted"
        >
          <p>
            {t.about.p1.split(t.hero.name)[0]}
            <span className="font-semibold text-deep-rose">{t.hero.name}</span>
            {t.about.p1.split(t.hero.name)[1]}
          </p>
          <p>{t.about.p2}</p>
          <p>
            {t.about.p3.split(t.experience.company)[0]}
            <span className="font-semibold text-ink">{t.experience.company}</span>
            {t.about.p3.split(t.experience.company)[1]}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-3xl p-5 text-center shadow-[0_10px_40px_rgba(196,93,122,0.08)]"
            >
              <p className="mb-2 text-xs font-medium text-rose">{fact.label}</p>
              <p className="text-base font-bold text-ink">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
