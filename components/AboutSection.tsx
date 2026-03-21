import Image from "next/image";
import ShinyText from "./ShinyText";
import StarBorder from "./StarBorder";
import ScrollReveal from "./ScrollReveal";
import AnimatedContent from "./AnimatedContent";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Image Holder */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AnimatedContent duration={1.5} scale={2} delay={0.5} distance={120}>
            <StarBorder
              as="div"
              color="#b90000"
              speed="12s"
              thickness={2}
              className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] shadow-[0_0_40px_rgba(185,0,0,0.2)] hover:shadow-[0_0_60px_rgba(185,0,0,0.4)] transition-shadow group"
            >
              {/* INSTRUCTIONS: Replace the div below with your actual image component */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <span className="text-zinc-600 font-mono text-sm tracking-widest">[ Profile Image ]</span>
              </div>
              
              {/* Example Usage for next/image:
              <Image 
                src="/your-photo.jpg" 
                alt="Profile Picture" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              /> 
              */}
            </StarBorder>
          </AnimatedContent>
        </div>

        {/* Right: Text & Socials */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h2 className="text-[#b90000] font-bold tracking-widest uppercase text-sm mb-4 z-20 relative">
            About Me
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 z-20 relative">
            <ShinyText 
              text="Hi, I'm Johann" 
              disabled={false} 
              speed={7} 
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h1>
          
          <div className="space-y-4 text-zinc-300 text-lg leading-relaxed mb-10">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="w-full"
              textClassName="text-zinc-300 text-lg leading-relaxed font-normal whitespace-pre-line"
              scrub={false}
              stagger={0.02}
              duration={0.8}
            >
              {`A graduating Information Technology student at the University of Santo Tomas. My technical focus includes web, software, and mobile development, fueled by a passion for building applications and turning ideas into reality.

Although I am still mastering the full stack, I am an adaptable developer skilled in frontends, databases, and APIs. Through core Cisco networking and cybersecurity coursework, I understand how to secure web applications. I enter the professional world with optimism and humility, eager to learn, adapt, and contribute to building robust digital solutions with a strong team.`}
            </ScrollReveal>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            {/* GitHub */}
            <a 
              href="https://github.com/j4rmenkell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#b90000] hover:bg-[#b90000]/10 hover:shadow-[0_0_20px_rgba(185,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/jvbatiancila/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#b90000] hover:bg-[#b90000]/10 hover:shadow-[0_0_20px_rgba(185,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/_jarmenkell/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#b90000] hover:bg-[#b90000]/10 hover:shadow-[0_0_20px_rgba(185,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
