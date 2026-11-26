import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { CursorEffect } from "@/components/CursorEffect";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatementSection } from "@/components/StatementSection";
import { AbilitiesSection } from "@/components/AbilitiesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { InquirySection } from "@/components/InquirySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ConstellationCanvas />
      <CursorEffect />
      <Navbar />
      <main id="top" className="relative z-10">
        <HeroSection />
        <StatementSection />
        <AbilitiesSection />
        <ExperienceSection />
        <ProjectsSection />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}
