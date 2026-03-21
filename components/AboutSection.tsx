export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-xl overflow-hidden relative z-10 mx-auto flex items-center justify-center">
            {/* Placeholder for Profile Picture */}
            <span className="text-4xl text-zinc-400">👤</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm a <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Developer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          I build premium, responsive web applications with a focus on intuitive user experiences and cutting-edge design. 
          Welcome to my digital playground, where ideas turn into reality.
        </p>
        
        <div className="flex gap-4 pt-4">
          <a 
            href="#projects"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
