"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { useProfileImage } from "@/hooks/useProfileImage";

type Size = "hero" | "profile";

const sizes: Record<Size, string> = {
  hero: "h-28 w-28 text-3xl",
  profile: "h-full w-full text-4xl",
};

export default function ProfileAvatar({ size }: { size: Size }) {
  const { t } = useLocale();
  const { src, ready } = useProfileImage();
  const [failed, setFailed] = useState(false);
  const isDataUrl = src.startsWith("data:");
  const showPhoto = ready && !failed && (isDataUrl || src);

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-gradient-to-br from-rose to-deep-rose shadow-lg ${size === "hero" ? sizes.hero : "h-full w-full"}`}
    >
      {showPhoto ? (
        isDataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={t.profile.alt} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={src}
            alt={t.profile.alt}
            fill
            className="object-cover"
            sizes={size === "hero" ? "112px" : "208px"}
            onError={() => setFailed(true)}
          />
        )
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center font-bold text-white ${size === "hero" ? "text-3xl" : "text-4xl"}`}
        >
          {t.hero.initials}
        </div>
      )}
    </div>
  );
}
