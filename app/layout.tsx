import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import LiquidEther from "../components/LiquidEther";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const taskor = localFont({
  src: "../public/fonts/TaskorDemoRegular-9M55L.ttf",
  variable: "--font-taskor",
});

export const metadata: Metadata = {
  title: "Johann's Portfolio",
  description: "My personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${taskor.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <div className="fixed inset-0 -z-10 w-full h-full opacity-80 mix-blend-screen pointer-events-none">
          <LiquidEther 
            colors={["#b90000", "#ff0000", "#400000"]} 
            viscous={40} 
            mouseForce={20}
            resolution={0.25}
            iterationsPoisson={8}
            BFECC={false}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
