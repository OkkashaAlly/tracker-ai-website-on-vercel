"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const TokenomicsChart = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Image
          src="/assets/token-chart-light.svg"
          alt="token distribution"
          width={457}
          height={457}
        />
      ) : (
        <Image
          src="/assets/token-chart-dark.svg"
          alt="token distribution"
          width={457}
          height={457}
        />
      )}
    </>
  );
};

export default TokenomicsChart;
