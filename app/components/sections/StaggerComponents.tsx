"use client";
import { fadeUpVariant } from "@/app/animations";
import { motion } from "framer-motion";

export const UseCase = ({ useCase, index }: any) => (
  <motion.div
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    custom={index}
  >
    <h3 className="uppercase font-bold text-lg">{useCase.title}</h3>
    <p className="text-">{useCase.description}</p>
  </motion.div>
);

export const RoadmapItem = ({ item, index }: any) => (
  <div key={item.title} className="px-2 md:px-4 !flex justify-center">
    <div className="rounded-lg p-6 md:p-8 bg-[#99D2EC]/10 backdrop-blur w-[380px] h-[300px] md:h-[230px] border border-[#30ADDA]/30">
      <h3 className="uppercase font-bold text-xl mb-2">{item.title}</h3>
      <ul>
        {item.content.map((li: string, index2: number) => (
          <motion.li
            key={li}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              margin: "-100px",
            }}
            custom={index2}
          >
            {li}
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
);

export const TokenomicItem = ({ item, index }: any) => (
  <motion.div
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "-150px",
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
);
