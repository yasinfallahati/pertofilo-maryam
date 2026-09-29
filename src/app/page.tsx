"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProfileSection from "@/components/ProfileSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative flex-1">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProfileSection />
      <Contact />
      <Footer />
    </main>
  );
}
