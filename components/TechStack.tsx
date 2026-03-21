"use client";

import { motion } from "framer-motion";
import MagicBento, { BentoCardProps } from "./MagicBento";
import { techIcons } from "./TechIcons";

type SkillCategory = {
  category: string;
  skills: string[];
};

export default function TechStack() {
  const techStack: SkillCategory[] = [
    {
      category: "Full-Stack Frameworks",
      skills: [
        "Next.js / React",
        "Laravel / Vue",
        "ASP.NET MVC / Angular",
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        "MySQL",
        "Supabase",
        "Firebase",
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        "Kotlin",
        "Flutter",
      ],
    },
    {
      category: "Styling & Media",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Cloudinary",
      ],
    },
    {
      category: "Tools & Environment",
      skills: [
        "Git & GitHub",
        "Node.js",
      ],
    },
    {
      category: "Core Languages",
      skills: [
        "Java",
        "C++",
        "Python",
      ],
    },
  ];

  const categoryCards: BentoCardProps[] = techStack.map((group) => ({
    title: group.category,
    color: '#0a0a0a',
    description: (
      <ul className="space-y-4 mt-2 flex-1 w-full">
        {group.skills.map((skill, skillIdx) => (
          <li key={skillIdx} className="flex items-center text-zinc-300 font-medium group/item cursor-default w-full">
            <span className="w-5 h-5 mr-3 text-zinc-500 group-hover/item:text-[#b90000] transition-colors flex items-center justify-center">
              {techIcons[skill] || <span className="text-xs">▹</span>}
            </span>
            <span className="group-hover/item:text-white transition-colors">{skill}</span>
          </li>
        ))}
      </ul>
    ),
    textAutoHide: false,
  }));

  return (
    <section id="tech" className="py-24 px-6 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-[#b90000] font-bold tracking-widest uppercase text-sm mb-4">
            Technical Arsenal
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technologies & Tools
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my proficiency across various technologies
            and frameworks.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <MagicBento 
            cards={categoryCards} 
            spotlightRadius={200} 
            enableTilt={true} 
            glowColor="185, 0, 0"
            enableBorderGlow={true}
          />
        </motion.div>
      </div>
    </section>
  );
}