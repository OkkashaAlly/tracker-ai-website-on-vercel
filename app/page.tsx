import Header from "./components/layouts/Header";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import RoadmapSection from "./components/sections/RoadmapSection";
import UseCasesSection from "./components/sections/UseCasesSection";
import TokenInformationSection from "./components/sections/TokenInformationSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <UseCasesSection />
      <RoadmapSection />
      <TokenInformationSection />
    </>
  );
}
