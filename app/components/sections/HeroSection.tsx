import Image from "next/image";
import { SubHeading } from "../typography";
import AppButton from "../shared/AppButton";

const HeroSection = () => {
  return (
    // h-[calc(100vh-6rem)]
    <section id="overview" className="pt-10 md:pt-20">
      <div className="app-container flex flex-col-reverse md:flex-row px-6">
        {/* left  */}
        <div className="text-center md:text-start w-full md:w-[60%] mb-20">
          <SubHeading text="Transform Your Crypto Portfolio Tracking" />
          <h1 className="text-[34px] md:text-[54px] font-black leading-tight mt-2">
            The ultimate solution for managing your multi-chain portfolio
            effortlessly
          </h1>
          <p className="w-full md:w-[80%] mt-6 mb-10">
            Tracker AI is the ultimate multi-chain portfolio tracking solution.
            Simply paste your wallet address into the Telegram bot, and
            you&rsquo;ll instantly access all the tokens within your wallet. The
            days of wondering which wallet holds which token are behind us.
            Tracker AI displays all your tokens and their respective values
          </p>
          <AppButton text="Tracker AI Bot" link="#"/>
        </div>
        {/* right */}
        <Image
          src="/assets/hero-img.svg"
          alt="floating phone image with coins"
          width={517}
          height={611}
        />
      </div>
    </section>
  );
};

export default HeroSection;
