"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t, locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "#home", label: t.nav.home },
      { href: "#about", label: t.nav.about },
      { href: "#skills", label: t.nav.skills },
      { href: "#experience", label: t.nav.experience },
      { href: "#profile", label: t.nav.profile },
      { href: "#contact", label: t.nav.contact },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoLetter = locale === "fa" ? "م" : "M";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_8px_30px_rgba(196,93,122,0.12)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <a href="#home" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose to-deep-rose text-sm font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
            {logoLetter}
          </span>
          <span className="font-display hidden text-xl font-semibold tracking-wide text-ink sm:inline md:text-2xl">
            Maryam Talebi
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-sm font-medium text-ink/80 transition-colors hover:text-deep-rose"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          aria-label={t.nav.menu}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 rounded bg-deep-rose transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded bg-deep-rose transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded bg-deep-rose transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-rose/20 bg-pearl/95 md:hidden"
          >
            <div className="px-5 pt-4">
              <LanguageSwitcher compact />
            </div>
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: locale === "fa" ? 20 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-petal"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
