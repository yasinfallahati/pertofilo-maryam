"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import Section from "./Section";

export default function Contact() {
  const { t } = useLocale();

  const items = [
    { title: t.contact.role, text: t.contact.roleVal },
    { title: t.contact.company, text: t.contact.companyVal },
    { title: t.contact.domain, text: t.contact.domainVal },
  ];

  return (
    <Section
      id="contact"
      title={t.contact.title}
      subtitle={t.contact.subtitle}
      className="section-soft"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-6 text-center"
          >
            <p className="mb-2 text-xs font-semibold text-rose">{item.title}</p>
            <p className="text-sm font-bold text-ink">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-10 max-w-lg text-center text-sm leading-8 text-muted"
      >
        {t.contact.closing}
      </motion.p>
    </Section>
  );
}
