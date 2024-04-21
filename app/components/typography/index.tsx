"use client";

import { fadeInVariant, fadeUpVariant } from "@/app/animations";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SubHeading = ({ text }: { text: string }) => (
  <motion.small
    className="uppercase text-[14px] md:text-[20px]"
    variants={fadeInVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "-180px",
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
      margin: "-150px",
    }}
  >
    {text}
  </motion.h2>
);

export const H1 = ({ text }: { text: string }) => (
  <motion.h1
    className="text-[34px] md:text-[54px] font-black leading-tight mt-2"
    variants={fadeInVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: "-150px",
    }}
  >
    {text}
  </motion.h1>
);

export const P1 = ({
  children,
  index,
  margin = "-100px",
}: {
  children: ReactNode;
  index?: number;
  margin?: string;
}) => (
  <motion.h2
    // className="children-[34px] md:children-[54px] font-black leading-tight mt-2"
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{
      margin: margin,
    }}
    custom={index}
  >
    {children}
  </motion.h2>
);
