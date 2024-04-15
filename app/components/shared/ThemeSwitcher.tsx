// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (isSelected: boolean) => {
    if (isSelected) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="default"
      startContent={<HiOutlineMoon className="h-5 w-5" />}
      endContent={<HiOutlineSun className="h-5 w-5" />}
      onValueChange={handleThemeChange}
    >
      Dark mode
    </Switch>
  );
}
