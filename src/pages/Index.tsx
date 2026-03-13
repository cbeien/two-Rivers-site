import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <HowWeHelpSection />
        <WhoWeWorkWithSection />
        <HowWeWorkSection />
        <RecentWorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
