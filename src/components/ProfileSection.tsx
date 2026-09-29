"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import ProfileAvatar from "./ProfileAvatar";
import Section from "./Section";

export default function ProfileSection() {
  const { t } = useLocale();

  return (
    <Section id="profile" title={t.profile.title} subtitle={t.profile.subtitle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass mx-auto flex max-w-xl flex-col items-center rounded-[2.5rem] p-8 shadow-[0_24px_70px_rgba(196,93,122,0.14)] md:p-12"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="profile-ring relative mb-6 h-44 w-44 rounded-full p-[3px] md:h-52 md:w-52"
        >
          <ProfileAvatar size="profile" />
        </motion.div>

        <h3 className="mb-1 text-xl font-bold text-ink">{t.hero.name}</h3>
        <p className="text-sm text-muted">{t.profile.personalPhoto}</p>
      </motion.div>
    </Section>
  );
}
