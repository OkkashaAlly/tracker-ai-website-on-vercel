"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FaEthereum, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navItems = ["overview", "features", "roadmap", "tokenomics"];

  const socialMedia = [
    {
      link: "#",
      icon: <FaXTwitter />,
    },
    {
      link: "#",
      icon: <FaTelegram />,
    },
    {
      link: "#",
      icon: <FaLinkedinIn />,
    },
    {
      link: "#",
      icon: <FaEthereum />,
    },
  ];

  return (
    <footer className="pt-6 pb-10">
      <div className="xl:w-[82%] max-w-screen-2xl mx-auto px-6 space-y-6 md:space-y-14">
        {/* top  */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center pb-4 border-b border-gray-700">
          <Image
            src="logo-with-bg.svg"
            alt="ai tracker logo"
            width={50}
            height={50}
          />

          {/* navigation */}
          <nav className="flex flex-wrap gap-6 md:-mr-40">
            {navItems.map(nav => (
              <span key={nav + "footer"} className="capitalize">
                {nav}
              </span>
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
              >
                {item.icon}
              </Button>
            ))}
          </div>
        </div>
        {/* bottom  */}
      </div>
    </footer>
  );
};

export default Footer;
