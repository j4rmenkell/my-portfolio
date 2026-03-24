import GradientText from "./GradientText";
import AnimatedSplitText from "./SplitText";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full z-10">
        <h2 className="font-semibold tracking-widest uppercase text-sm md:text-base mb-6">
          <GradientText colors={["#ff0000", "#850000"]} animationSpeed={10} showBorder={false}>
            <AnimatedSplitText text="IT Professional & Web Developer" delay={20} showCallback={false} />
            
          </GradientText>
        </h2>
        <h1 
          className="font-taskor text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] tracking-tight text-white mb-4 sm:mb-6 drop-shadow-2xl leading-none"
        >
          <AnimatedSplitText text="JOHANN " delay={80} showCallback={false} />
          <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-[#b90000] to-red-900">
            <AnimatedSplitText text="BATIANCILA" delay={80} showCallback={false} />
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide max-w-4xl">
          <AnimatedSplitText text="Building efficient, modern web experiences from the ground up." delay={20} showCallback={false} />
        </p>
        
        <a 
          href="#about"
          className="mt-20 text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-3 animate-bounce"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}
