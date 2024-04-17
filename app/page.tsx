import Header from "./components/layouts/Header";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import UseCasesSection from "./components/sections/UseCasesSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <UseCasesSection/>
    </>
  );
}
