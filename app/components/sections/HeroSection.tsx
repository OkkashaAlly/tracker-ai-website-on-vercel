"use client";
import Image from "next/image";
import { useState } from "react";
import AppButton from "../shared/AppButton";
import { H1, P1, SubHeading } from "../typography";

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    // h-[calc(100vh-6rem)]
    <section id="overview" className="pt-10 md:pt-20">
      <div className="app-container flex flex-col-reverse md:flex-row px-6">
        {/* left  */}
        <div className="text-center md:text-start w-full md:w-[60%] mb-20">
          <SubHeading text="Transform Your Crypto Portfolio Tracking" />
          <H1
            text="The ultimate solution for managing your multi-chain portfolio
            effortlessly"
          />

          <div className="w-full md:w-[80%] mt-6 mb-10 space-y-3">
            <P1>
              Tracker AI is the ultimate multi-chain portfolio tracking
              solution. Simply paste your wallet address into the Telegram bot,
              and you&rsquo;ll instantly access all the tokens within your
              wallet. The days of wondering which wallet holds which token are
              behind us. Tracker AI displays all your tokens and their
              respective values{" - "}
              {!showMore ? (
                <span
                  className="underline"
                  role="button"
                  onClick={() => setShowMore(!showMore)}
                >
                  Show More
                </span>
              ) : null}
            </P1>
            {showMore ? (
              <>
                <P1 margin="-50px" index={0}>
                  Moreover, this integrated AI tracker assists in monitoring the
                  performance of coins in your portfolio, offering
                  recommendations on when to capitalize on profits or mitigate
                  losses. Currently, Tracker AI supports ETH, BSC, Polygon, ARB,
                  Fantom, and Base, with additional chains on the horizon.
                </P1>
                <P1 margin="-50px" index={1}>
                  As a Veteran Degen, you likely manage a multitude of wallets
                  for your trading endeavors. It&rsquo;s not uncommon to
                  overlook tokens stashed away in one of them until their value
                  plummets. Tracker AI swoops in to rescue you from such
                  oversights. This revolutionary tool consolidates all your
                  tokens across various blockchains, along with their respective
                  values, into one convenient interface. Say goodbye to token
                  amnesia and hello to seamless portfolio management!{" - "}
                  {showMore ? (
                    <span
                      className="underline"
                      role="button"
                      onClick={() => setShowMore(!showMore)}
                    >
                      Show Less
                    </span>
                  ) : null}
                </P1>
              </>
            ) : null}
          </div>
          <AppButton
            text="Tracker AI Bot"
            link="https://t.me/OxTracker_AI_Bot"
          />
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
