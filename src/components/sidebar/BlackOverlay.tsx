"use client";

import { sidebarMobileShownAtom } from "@/atoms/sidebar";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";

const BlackOverlay = () => {
  const [mobileShown, toggleMobileShown] = useAtom(sidebarMobileShownAtom);

  return (
    <div
      onClick={() => toggleMobileShown()}
      className={cn(
        "fixed z-20 h-full w-full bg-black/50",
        mobileShown ? "block md:hidden" : "hidden"
      )}
    />
  );
};

export default BlackOverlay;
