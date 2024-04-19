"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: delay },
  }),
};

export const SubHeading = ({ text }: { text: string }) => (
  <motion.small
    className="uppercase text-[14px] md:text-[20px]"
    variants={fadeInVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "-200px",
      once: true,
    }}
  >
    {text}
  </motion.small>
);

export const H2 = ({ text }: { text: string }) => (
  <motion.h2
    className="text-[30px] md:text-[50px] font-black leading-tight"
    variants={fadeInVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "-200px",
    }}
  >
    {text}
  </motion.h2>
);

export const H1 = ({ text }: { text: string }) => (
  <motion.h2
    className="text-[34px] md:text-[54px] font-black leading-tight mt-2"
    variants={fadeInVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "-200px",
    }}
  >
    {text}
  </motion.h2>
);

export const P1 = ({
  children,
  delay,
  margin = "-300px",
}: {
  children: ReactNode;
  delay?: number;
  margin?: string;
}) => (
  <motion.h2
    // className="children-[34px] md:children-[54px] font-black leading-tight mt-2"
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: margin,
      once: true,
    }}
    custom={delay}
  >
    {children}
  </motion.h2>
);
