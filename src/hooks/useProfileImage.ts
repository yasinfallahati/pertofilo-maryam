"use client";

import { useEffect, useState } from "react";
import { PROFILE_STATIC_PATH, PROFILE_STORAGE_KEY } from "@/lib/profile-image";

export function useProfileImage() {
  const [src, setSrc] = useState<string>(PROFILE_STATIC_PATH);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (saved) setSrc(saved);
    setReady(true);
  }, []);

  return { src, ready };
}
