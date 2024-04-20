"use client";
import { fadeUpVariant } from "@/app/animations";
import { motion } from "framer-motion";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { H2, P1, SubHeading } from "../typography";
import { TokenomicItem } from "./StaggerComponents";
import TokenomicsChart from "./TokenomicsChart";

const TokenInformationSection = () => {
  const tokenomics = [
    {
      color: "#DB30DF",
      label: "Token Name",
      value: "Tracker AI",
    },
    {
      color: "#DF307A",
      label: "Ticker",
      value: "TRACK",
    },
    {
      color: "#DF3030",
      label: "Total Supply",
      value: "100.000.000",
    },
    {
      color: "#30AEDF",
      label: "Liquidity",
      value: "85,000,000 (85%)",
    },
    {
      color: "#DF9930",
      label: "Decimal",
      value: "9",
    },
    {
      color: "#A730DF",
      label: "Marketing",
      value: "10,000,000 (10%)",
    },
    {
      color: "#304CDF",
      label: "Team",
      value: "5,000,000 (5%)",
    },
    {
      color: "#34DF30",
      label: "Tax",
      value: "5/5",
    },
  ];

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("0xda558A295e8D2C1438F7b4806e283940dec7e6Db");
    alert("Copied");
  };

  return (
    <section id="tokenomics" className="py-20 md:pb-36 tokenomics-bg">
      <div className="xl:w-[82%] max-w-screen-2xl mx-auto px-6 space-y-6 md:space-y-14">
        {/* top  */}
        <div className="text-center">
          <SubHeading text="Token Information" />
          <H2 text="TOKENOMICS" />
          <P1>
            <span className="mt-2 break-words">
              Contract Address: 0xda558A295e8D2C1438F7b4806e283940dec7e6Db
              <HiOutlineClipboardDocument
                className="inline-block ml-3 cursor-pointer h-5 w-5 text-primary mb-1"
                onClick={handleCopyToClipboard}
              />
            </span>
          </P1>
        </div>
        {/* bottom  */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 items-center ">
          {/* left  */}
          <div className="hidden md:block space-y-10">
            {tokenomics.slice(0, 4).map((item, index) => (
              <TokenomicItem key={item.value} item={item} index={index} />
            ))}
          </div>
          {/* center  */}
          <TokenomicsChart />
          {/* right  */}
          <div className="flex w-full md:w-max justify-between">
            <div className="block md:hidden space-y-10">
              {tokenomics.slice(0, 4).map((item, index) => (
                <TokenomicItem key={index} item={item} index={index} />
              ))}
            </div>
            <div className="space-y-10">
              {tokenomics.slice(4, 9).map((item, index) => (
                <motion.div
                  key={index + item.value}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    margin: "-140px",
                  }}
                  custom={index}
                  className="flex gap-4"
                >
                  <div
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0px 4px 6px ${item.color}`,
                    }}
                    className={`bg-[${item.color}] inline-block h-[31px] w-[28px] rounded-lg shadow`}
                  />
                  <div className="">
                    <h5>{item.label}</h5>
                    <p style={{ color: item.color }}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInformationSection;
