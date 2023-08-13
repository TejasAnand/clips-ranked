"use client";

import { sidebarMobileShownAtom, sidebarOpenAtom } from "@/atoms/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Game } from "@prisma/client";
import { useAtom, useAtomValue } from "jotai";
import { Menu } from "lucide-react";
import { useEffect } from "react";

interface SidebarProps {
  games: Game[];
}

const Sidebar = ({ games }: SidebarProps) => {
  const [sidebarOpen, toggleSidebarOpen] = useAtom(sidebarOpenAtom);
  const sidebarMobileShown = useAtomValue(sidebarMobileShownAtom);

  const sidebarTextClassName = cn(
    "whitespace-nowrap transition-all duration-200",
    sidebarOpen ? "opacity-100" : "invisible opacity-0"
  );

  useEffect(() => {
    console.log(sidebarMobileShown);
  }, [sidebarMobileShown]);

  return (
    <aside
      className={cn(
        "fixed z-30 h-full border-r bg-background transition-[margin,width] duration-300",
        sidebarOpen ? "w-sidebarOpen" : "w-sidebarClosed",
        sidebarMobileShown
          ? "block"
          : sidebarOpen
          ? "-ml-sidebarOpen md:ml-0"
          : "-ml-sidebarClosed md:ml-0"
      )}
    >
      <div className="flex h-full flex-col gap-10 p-7">
        <div className="flex flex-row items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle sidebar"
            className="shrink-0"
            onClick={() => toggleSidebarOpen()}
          >
            <Menu className="h-5 w-5 cursor-pointer" />
          </Button>
          <span className={sidebarTextClassName}>Ranked clips</span>
        </div>

        <div className="flex flex-col gap-12 border-y py-10">
          {Object.entries(games).map((game, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
