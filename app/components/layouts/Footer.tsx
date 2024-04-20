"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaEthereum, FaTelegram } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

import { FaMedium } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
import DynamicLogo from "./DynamicLogo";

const Footer = () => {
  const navItems = ["overview", "features", "roadmap", "tokenomics"];

  const socialMedia = [
    {
      link: "https://twitter.com/TrackerAI_ERC",
      icon: <FaXTwitter />,
    },
    {
      link: "https://t.me/TrackerAI_ERC",
      icon: <FaTelegram />,
    },
    {
      link: "https://medium.com/@TrackerAI_ERC",
      icon: <FaMedium />,
    },
    {
      link: "https://tracker-ai.gitbook.io/tracker-ai-whitepaper/",
      icon: <SiGitbook />,
    },
    {
      link: "https://etherscan.io/address/0xda558a295e8d2c1438f7b4806e283940dec7e6db",
      icon: <FaEthereum />,
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-10">
      <div className="xl:w-[82%] max-w-screen-2xl mx-auto px-6 ">
        {/* top  */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center pb-4 border-b border-black/15 dark:border-white/15">
          <DynamicLogo />

          {/* navigation */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:-mr-40">
            {navItems.map(nav => (
              <Link
                href={"#" + nav}
                key={nav + "footer"}
                className="capitalize"
              >
                {nav}
              </Link>
            ))}
          </nav>
          {/* links  */}
          <div className="flex gap-4">
            {socialMedia.map(item => (
              <Button
                key={item.link}
                isIconOnly
                radius="full"
                color="default"
                variant="bordered"
                as={Link}
                href={item.link}
              >
                {item.icon}
              </Button>
            ))}
          </div>
        </div>
        {/* bottom  */}
        <p className="text-center text-sm text-black/60 dark:text-white/60 pt-6">
          {year} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
