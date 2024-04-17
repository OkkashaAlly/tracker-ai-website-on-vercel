import Image from "next/image";
import { H2, SubHeading } from "../typography";

const HowItWorksSection = () => {
  const cardsContent = [
    {
      icon: "/assets/decentralize-api-sdk-icon.svg",
      title: "Portfolio Tracking and Management",
      description: `Monitor all the coins/tokens across multiple wallets and various
        blockchains effortlessly. Customize your portfolio view by
        choosing to display tokens that meet specific criteria, such as a
        minimum value threshold— for example, showing only tokens valued
        above $10. This approach helps streamline your overview and
        eliminates clutter from spam tokens.`,
    },
    {
      icon: "/assets/wallet-icon.svg",
      title: "Wallet Manager",
      description: `Organize your wallets as "My Wallet" or "Stalked Wallet" with Tracker AI's user-friendly interface, enabling easy addition, renaming, and deletion. No need to import private keys or seed phrases; simply provide the wallet address. The same applies to any wallet you wish to monitor.`,
    },
    {
      icon: "/assets/web3-icon.svg",
      title: "KOLs' Portfolio Tracking",
      description: `Keep tabs on Key Opinion Leaders' holdings across multiple chains by inputting their wallet addresses. You can also manage monitored wallets within the bot's wallet manager.`,
    },
  ];

  return (
    <section id="features" className="features-bg ">
      <div className="app-container pt-10 pb-20">
        {/* top */}
        <div className="space-y-2 text-center">
          <SubHeading text="AI Tracker Features" />
          <H2 text="How It Works" />
        </div>
        {/* bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-10 mt-6 xl:w-[90%] mx-auto">
          {cardsContent.map(item => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  item: {
    icon: string;
    title: string;
    description: string;
  };
};
const FeatureCard = ({ item }: FeatureCardProps) => {
  return (
    <figure className=" p-6 md:p-8 rounded-xl dark:bg-white bg-[#9FB7CE] dark:bg-opacity-25 bg-opacity-25 backdrop-filter backdrop-blur-lg border dark:border-white dark:border-opacity-25 border-[#DDEAEE]  ">
      {/* <div className="absolute top-0 left-0 glass-morphism w-full h-full"></div> */}
      <Image src={item.icon} alt={item.title} width={60} height={60} />
      <h3 className="font-medium text-[24px] mt-3.5 mb-2.5">{item.title}</h3>
      <p>{item.description}</p>
    </figure>
  );
};

export default HowItWorksSection;
