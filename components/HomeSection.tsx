export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full z-10">
        <h2 className="text-[#b90000] font-semibold tracking-widest uppercase text-sm md:text-base mb-6">
          Welcome to my portfolio
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
          YOUR <span className="text-transparent bg-clip-text bg-linear-to-b from-[#b90000] to-red-900">NAME</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide max-w-2xl">
          Crafting exceptional digital experiences through clean engineering and modern design.
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
