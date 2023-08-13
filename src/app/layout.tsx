import Header from "@/components/header/Header";
import BlackOverlay from "@/components/sidebar/BlackOverlay";
import NotSidebarContainer from "@/components/sidebar/NotSidebarContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import { prisma } from "@/lib/db";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const games = await prisma.game.findMany();

  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-full`}>
        <Providers>
          <Sidebar games={games} />
          <NotSidebarContainer>
            <BlackOverlay />
            <Header />
            <main className="h-full overflow-y-hidden">{children}</main>
          </NotSidebarContainer>
        </Providers>
      </body>
    </html>
  );
}
