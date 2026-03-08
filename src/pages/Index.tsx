import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import InterestsSection from "@/components/InterestsSection";
import EducationSection from "@/components/EducationSection";
import PersonalSection from "@/components/PersonalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <InterestsSection />
      <PersonalSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
