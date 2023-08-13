"use client";

import { sidebarMobileShownAtom } from "@/atoms/sidebar";
import { Button } from "@/components/ui/button";
import { useSetAtom } from "jotai";
import { Menu } from "lucide-react";

const MobileSidebarToggle = () => {
  const toggleMobileShown = useSetAtom(sidebarMobileShownAtom);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle sidebar"
      className="px-0 md:hidden"
      onClick={() => toggleMobileShown()}
    >
      <Menu className="h-5 w-5 cursor-pointer" />
    </Button>
  );
};

export default MobileSidebarToggle;
