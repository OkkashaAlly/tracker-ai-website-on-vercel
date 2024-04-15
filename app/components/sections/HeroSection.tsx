import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    // h-[calc(100vh-6rem)]
    <section className="pt-20">
      <div className="xl:w-[95%] 2xl:w-[90%] max-w-screen-2xl mx-auto flex px-6">
        {/* left  */}
        <div className="w-[60%]">
          <small className="uppercase text-[20px]">
            Transform Your Crypto Portfolio Tracking
          </small>
          <h1 className="text-[54px] font-black leading-tight	">
            The ultimate solution for managing your multi-chain portfolio
            effortlessly
          </h1>
          <p className="w-[80%] mt-6 mb-10">
            Tracker AI is the ultimate multi-chain portfolio tracking solution.
            Simply paste your wallet address into the Telegram bot, and
            you&rsquo;ll instantly access all the tokens within your wallet. The
            days of wondering which wallet holds which token are behind us.
            Tracker AI displays all your tokens and their respective values
          </p>
          <Link
            className="uppercase px-6 py-2.5 bg-primary text-white"
            href="#"
          >
            Tracker AI Bot
          </Link>
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
