"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import Section from "./Section";

const skills = [
  { name: "Python", level: 92, color: "from-[#3776AB] to-[#FFD43B]" },
  { name: "HTML", level: 96, color: "from-[#E34F26] to-[#F06529]" },
  { name: "CSS", level: 94, color: "from-[#264DE4] to-[#2965F1]" },
  { name: "Java", level: 85, color: "from-[#5382A1] to-[#F89820]" },
  { name: "Node.js", level: 88, color: "from-[#339933] to-[#68A063]" },
  { name: "Next.js", level: 90, color: "from-[#111111] to-[#555555]" },
  { name: "FastAPI", level: 87, color: "from-[#009688] to-[#4CAF50]" },
];

export default function Skills() {
  const { t, dir } = useLocale();
  const barGrad = dir === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r";

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.07, duration: 0.55 }}
            whileHover={{ y: -8, rotate: -0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-rose/20 bg-pearl/80 p-6 shadow-[0_12px_40px_rgba(196,93,122,0.1)]"
          >
            <div className="skill-shine animate-shimmer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink">{skill.name}</h3>
              <span className="rounded-full bg-petal px-2.5 py-1 text-xs font-semibold text-deep-rose">
                {skill.level}%
              </span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-petal/80">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full ${barGrad} ${skill.color}`}
              />
            </div>

            <p className="mt-3 text-xs text-muted">{t.skills.levelLabel}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
