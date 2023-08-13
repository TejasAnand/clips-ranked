"use client";

import { sidebarOpenAtom } from "@/atoms/sidebar";
import { cn } from "@/lib/utils";
import { useAtomValue } from "jotai";
import { type PropsWithChildren } from "react";

const NotSidebarContainer = ({ children }: PropsWithChildren) => {
  const sidebarOpen = useAtomValue(sidebarOpenAtom);

  return (
    <div
      className={cn(
        "flex h-full flex-col transition-all duration-300",
        sidebarOpen ? "md:ml-sidebarOpen" : "md:ml-sidebarClosed"
      )}
    >
      {children}
    </div>
  );
};

export default NotSidebarContainer;
