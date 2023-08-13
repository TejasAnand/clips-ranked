"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeChangerProps {
  className?: string;
}

const ThemeChanger = ({ className }: ThemeChangerProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <ThemeChangerIcon className={className} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeChangerItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ThemeChangerIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <Sun
        className={cn(
          "rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0",
          className
        )}
      />
      <Moon
        className={cn(
          "absolute rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100",
          className
        )}
      />
    </>
  );
};

const ThemeChangerItems = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenuItem onClick={() => setTheme("light")}>
        <Sun className="mr-2 h-4 w-4" />
        <span>Light</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        <Moon className="mr-2 h-4 w-4" />
        <span>Dark</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        <Laptop className="mr-2 h-4 w-4" />
        <span>System</span>
      </DropdownMenuItem>
    </>
  );
};

ThemeChanger.Items = ThemeChangerItems;
ThemeChanger.Icon = ThemeChangerIcon;

export default ThemeChanger;
