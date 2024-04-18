"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import AppButton from "../shared/AppButton";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import DynamicLogo from "./DynamicLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["overview", "features", "roadmap", "tokenomics"];

  return (
    <Navbar
      maxWidth="2xl"
      height="6rem"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        {/* logo */}
        <NavbarBrand>
          <DynamicLogo />
        </NavbarBrand>
      </NavbarContent>

      {/* navigation  */}
      <NavbarContent className="hidden sm:flex gap-8 mr-6" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full capitalize"
              href={`#${item}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* theme switcher  */}
      <ThemeSwitcher />
      <NavbarItem className="hidden lg:flex ml-6">
        <AppButton
          variant="secondary"
          text="Whitepaper"
          link="https://tracker-ai.gitbook.io/tracker-ai-whitepaper/"
        />
      </NavbarItem>

      {/* mobile menu btn  */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      {/* mobile menu  */}
      <NavbarMenu className="gap-6 pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full capitalize"
              href={`#${item}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <AppButton
          variant="secondary"
          text="Whitepaper"
          link="https://tracker-ai.gitbook.io/tracker-ai-whitepaper/"
        />
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
