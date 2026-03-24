"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BorderGlow from './BorderGlow';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "portfolio", "contact"];
    
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is above the middle of the screen
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      
      // Force the last section to active if we've hit the absolute bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        current = sections[sections.length - 1];
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto">
        <BorderGlow
          className="rounded-full backdrop-blur-md"
          borderRadius={500}
          glowColor="0 100 36" 
          colors={["#b90000", "#ff0000", "#400000"]}
          backgroundColor="rgba(5, 5, 5, 0.65)"
          glowIntensity={1.5}
          glowRadius={25}
          animated={true}
        >
          <div className="px-4 sm:px-8 h-12 sm:h-14 flex items-center justify-center">
            <ul className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`transition-all duration-300 block ${
                      activeSection === link.id 
                        ? "text-[#b90000] drop-shadow-[0_0_8px_rgba(185,0,0,0.8)] scale-105" 
                        : "hover:text-[#b90000] hover:drop-shadow-[0_0_8px_rgba(185,0,0,0.8)] opacity-70 hover:opacity-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BorderGlow>
      </nav>
    </div>
  );
}
