"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const DynamicLogo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Image
          src="/logo-dark.svg"
          alt="Tracker AI logo"
          width={56}
          height={56.91}
        />
      ) : (
        <Image
          src="/logo-white.svg"
          alt="Tracker AI logo"
          width={56}
          height={56.91}
        />
      )}
    </>
  );
};

export default DynamicLogo;
