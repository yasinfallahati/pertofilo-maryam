export type Locale = "fa" | "en" | "tr";

export const LOCALES: Locale[] = ["fa", "en", "tr"];

export const LOCALE_LABELS: Record<Locale, string> = {
  fa: "فارسی",
  en: "English",
  tr: "Türkçe",
};

export type Translations = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    profile: string;
    contact: string;
    menu: string;
  };
  hero: {
    role: string;
    name: string;
    tagline: string;
    ctaSkills: string;
    ctaProfile: string;
    cardRole: string;
    badgeAge: string;
    badgeField: string;
    scroll: string;
    initials: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    factAge: string;
    factAgeVal: string;
    factField: string;
    factFieldVal: string;
    factRole: string;
    factRoleVal: string;
    factWork: string;
    factWorkVal: string;
  };
  skills: {
    title: string;
    subtitle: string;
    levelLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    now: string;
    jobTitle: string;
    company: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    eduLabel: string;
    eduTitle: string;
    eduDesc: string;
  };
  profile: {
    title: string;
    subtitle: string;
    alt: string;
    personalPhoto: string;
  };
  contact: {
    title: string;
    subtitle: string;
    role: string;
    roleVal: string;
    company: string;
    companyVal: string;
    domain: string;
    domainVal: string;
    closing: string;
  };
  footer: {
    subtitle: string;
    built: string;
  };
};
