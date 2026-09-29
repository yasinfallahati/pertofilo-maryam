"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import ProfileAvatar from "./ProfileAvatar";
import HeroCardBackdrop from "./HeroCardBackdrop";

const petals = [
  { left: "5%", delay: "0s", duration: "14s", size: 12 },
  { left: "14%", delay: "2s", duration: "16s", size: 16 },
  { left: "26%", delay: "4s", duration: "13s", size: 10 },
  { left: "38%", delay: "1s", duration: "18s", size: 14 },
  { left: "52%", delay: "3.5s", duration: "15s", size: 11 },
  { left: "64%", delay: "0.8s", duration: "17s", size: 15 },
  { left: "76%", delay: "2.8s", duration: "14s", size: 13 },
  { left: "88%", delay: "1.5s", duration: "19s", size: 12 },
  { left: "94%", delay: "3s", duration: "15s", size: 10 },
  { left: "22%", delay: "5s", duration: "20s", size: 9 },
  { left: "58%", delay: "6s", duration: "16s", size: 11 },
];

export default function Hero() {
  const { t, dir } = useLocale();
  const gradientBtn = dir === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r";

  return (
    <section id="home" className="hero-glow relative min-h-screen overflow-hidden pt-24">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size + 4,
          }}
        />
      ))}

      <div className="pointer-events-none absolute -end-24 top-28 h-72 w-72 animate-pulse-glow rounded-full bg-rose/30 blur-3xl" />
      <div className="pointer-events-none absolute -start-16 bottom-24 h-64 w-64 animate-float rounded-full bg-mint/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-medium tracking-widest text-deep-rose"
          >
            {t.hero.role}
          </motion.p>

          <h1 className="mb-3 text-5xl font-extrabold leading-tight text-ink sm:text-6xl md:text-7xl">
            {t.hero.name}
          </h1>

          <p className="font-display mb-6 text-3xl font-medium italic text-rose md:text-4xl">
            Maryam Talebi
          </p>

          <p className="mb-8 max-w-md text-base leading-8 text-muted md:text-lg">{t.hero.tagline}</p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full ${gradientBtn} from-deep-rose to-rose px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(196,93,122,0.35)]`}
            >
              {t.hero.ctaSkills}
            </motion.a>
            <motion.a
              href="#profile"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-rose/40 bg-white/70 px-7 py-3 text-sm font-semibold text-deep-rose backdrop-blur"
            >
              {t.hero.ctaProfile}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-6 animate-pulse-glow rounded-[2.5rem] bg-gradient-to-br from-blush via-rose/40 to-mint blur-2xl" />
            <div className="animate-float relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-3 shadow-[0_30px_80px_rgba(196,93,122,0.22)] backdrop-blur-sm">
              <div className="relative flex h-72 w-60 flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-petal to-soft-pink sm:h-80 sm:w-72">
                <HeroCardBackdrop />
                <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <ProfileAvatar size="hero" />
                </motion.div>
                <p className="text-lg font-bold text-ink">{t.hero.name}</p>
                <p className="mt-1 text-sm text-muted">{t.hero.cardRole}</p>
                <div className="mt-5 flex gap-2">
                  {["Python", "Next.js", "FastAPI"].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-deep-rose"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -start-4 top-10 rounded-2xl bg-white/90 px-3 py-2 text-xs font-medium text-ink shadow-lg backdrop-blur"
            >
              {t.hero.badgeAge}
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -end-3 bottom-16 rounded-2xl bg-white/90 px-3 py-2 text-xs font-medium text-ink shadow-lg backdrop-blur"
            >
              {t.hero.badgeField}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-xs text-muted"
        >
          <span>{t.hero.scroll}</span>
          <span className="h-8 w-px bg-gradient-to-b from-rose to-transparent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
