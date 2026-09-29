"use client";

import { useState } from "react";
import { useProfileImage } from "@/hooks/useProfileImage";

export default function HeroCardBackdrop() {
  const { src, ready } = useProfileImage();
  const [hidden, setHidden] = useState(false);

  if (!ready || hidden) return null;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden
        onError={() => setHidden(true)}
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-sm motion-safe:animate-bg-drift"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-petal/95 via-petal/70 to-soft-pink/50" />
      <div className="pointer-events-none absolute -inset-full motion-safe:animate-card-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
    </>
  );
}
