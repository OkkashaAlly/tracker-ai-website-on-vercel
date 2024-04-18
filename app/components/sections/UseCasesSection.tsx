import Image from "next/image";
import AppButton from "../shared/AppButton";
import { H2, SubHeading } from "../typography";

const UseCasesSection = () => {
  const useCases = [
    {
      title: "portfolio tracking",
      description:
        "Tracker AI Bot offers comprehensive portfolio tracking capabilities, allowing you to effectively monitor your investments.",
    },
    {
      title: "consolidate and assess",
      description:
        "With Tracker AI Bot, you can conveniently consolidate and assess the total value of your tokens across multiple wallets and blockchains.",
    },
    {
      title: "monitor wallets",
      description:
        "Utilize Tracker AI Bot to monitor other individuals' wallets, enabling you to track the portfolios of your favorite Key Opinion Leaders (KOLs).",
    },
    {
      title: "collective monitoring",
      description:
        "Additionally, Tracker AI Bot supports usage in both public and private groups, facilitating collective wallet monitoring among group members.",
    },
    {
      title: "Easily showcase",
      description:
        "For those keen on flaunting their impressive portfolios, this bot is your ideal companion. Easily showcase your portfolio by forwarding the message from the bot to different private groups or channels.",
    },
    {
      title: "monitoring the performance",
      description:
        "Our integrated AI assists in monitoring the performance of your coins and provides recommendations on whether to capitalize on profits or mitigate losses.",
    },
  ];

  return (
    <section className="use-cases-section-bg ">
      <div className="xl:w-[82%] max-w-screen-2xl mx-auto px-6 py-10 ">
        {/* top */}
        <div className="flex flex-col md:flex-row text-center md:text-start gap-4 justify-between items-center mb-10">
          <div className="">
            <SubHeading text="Multi-Chain Portfolio Tracking" />
            <H2 text="Tracker AI use cases" />
          </div>
          <AppButton text="Read More" link="#" />
        </div>
        {/* bottom */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-14 use-cases-bg">
          {/* mobile */}
          <div className="space-y-5 text-center md:hidden mb-8">
            {useCases.slice(0, 3).map(useCase => (
              <div key={useCase.title}>
                <h3 className="uppercase font-bold text-lg">{useCase.title}</h3>
                <p className="text-">{useCase.description}</p>
              </div>
            ))}
          </div>
          {/* left */}
          <Image
            src="/assets/coins.svg"
            alt="crypto coins "
            width={555}
            height={613.39}
          />
          {/* right */}
          <div className="space-y-5 hidden md:block">
            {useCases.map(useCase => (
              <div key={useCase.title}>
                <h3 className="uppercase font-bold text-lg">{useCase.title}</h3>
                <p className="text-">{useCase.description}</p>
              </div>
            ))}
          </div>
          {/* mobile  */}
          <div className="space-y-5 text-center md:text-start md:hidden">
            {useCases.slice(3, 7).map(useCase => (
              <div key={useCase.title}>
                <h3 className="uppercase font-bold text-lg">{useCase.title}</h3>
                <p className="text-">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
