"use client";

import { motion } from "framer-motion";

interface AnimatedSplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  showCallback?: boolean;
}

export default function AnimatedSplitText({
  text,
  className = "",
  delay = 100,
  duration = 1,
  showCallback = false,
}: AnimatedSplitTextProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => {
        if (showCallback) {
          console.log("Animation complete");
        }
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
