import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracker AI | The ultimate portfolio tracker",
  description:
    "The ultimate solution for managing your multi-chain portfolio effortlessly",
  openGraph: {
    title: "Tracker AI | The ultimate portfolio tracker",
    description:
      "The ultimate solution for managing your multi-chain portfolio effortlessly",
    url: "https://trackerai.bot/",
    siteName: "Tracker AI",
    images: [
      {
        url: "https://raw.githubusercontent.com/OkkashaAlly/tracker-ai-website-on-vercel/main/public/og.png", // Must be an absolute URL
        secureUrl:
          "https://raw.githubusercontent.com/OkkashaAlly/tracker-ai-website-on-vercel/main/public/og.png", // Must be an absolute URL
        width: 636,
        height: 689,
        alt: "Tracker AI logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#090913]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
