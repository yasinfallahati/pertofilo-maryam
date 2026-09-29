"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useProfileImage } from "@/hooks/useProfileImage";

const orbs = [
  { x: "12%", y: "18%", size: 280, color: "rgba(232,155,176,0.35)", duration: 22 },
  { x: "78%", y: "12%", size: 320, color: "rgba(212,235,227,0.45)", duration: 26 },
  { x: "85%", y: "62%", size: 240, color: "rgba(247,200,216,0.4)", duration: 20 },
  { x: "8%", y: "72%", size: 300, color: "rgba(212,165,116,0.25)", duration: 24 },
  { x: "48%", y: "88%", size: 200, color: "rgba(196,93,122,0.2)", duration: 18 },
];

const sparkles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  delay: (i % 6) * 0.7,
  size: 3 + (i % 3),
}));

export default function AnimatedBackground() {
  const { src, ready } = useProfileImage();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 2000], [0, 280]);
  const yFast = useTransform(scrollY, [0, 2000], [0, -180]);
  const photoScale = useTransform(scrollY, [0, 800], [1.15, 1.28]);

  const showPhoto = ready && src;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-mesh absolute inset-0 opacity-90" />

      <motion.div
        style={{
          y: ySlow,
          backgroundImage: "url(/bg-bokeh.svg)",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42] mix-blend-soft-light motion-safe:animate-bg-pan"
      />

      {showPhoto && (
        <motion.div style={{ scale: photoScale }} className="absolute inset-[-15%]">
          <div className="h-full w-full motion-safe:animate-bg-drift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover opacity-[0.14] blur-[48px] saturate-125"
            />
          </div>
        </motion.div>
      )}

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl motion-safe:animate-orb-float"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${i * 1.4}s`,
          }}
        />
      ))}

      <motion.div style={{ y: yFast }} className="absolute inset-0">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="sparkle absolute rounded-full bg-white motion-safe:animate-twinkle"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </motion.div>

      <div className="bg-grain absolute inset-0 opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-soft-pink/80" />
    </div>
  );
}
