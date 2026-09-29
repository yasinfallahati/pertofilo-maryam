"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -end-20 top-10 h-56 w-56 rounded-full bg-rose/15 blur-3xl motion-safe:animate-orb-float"
        style={{ animationDuration: "20s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -start-16 bottom-8 h-48 w-48 rounded-full bg-mint/25 blur-3xl motion-safe:animate-orb-float"
        style={{ animationDuration: "24s", animationDelay: "2s" }}
      />
      <div className="relative z-[1] mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-extrabold text-ink md:text-4xl">{title}</h2>
          {subtitle && <p className="mx-auto max-w-xl text-muted leading-8">{subtitle}</p>}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-l from-deep-rose via-rose to-blush"
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
