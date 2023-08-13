"use client";

import { ThemeProvider } from "next-themes";
import { type PropsWithChildren } from "react";

const Providers = (props: PropsWithChildren) => {
  return <ThemeProvider attribute="class">{props.children}</ThemeProvider>;
};

export default Providers;
