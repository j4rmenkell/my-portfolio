export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Let's Build Something <span className="text-blue-600 dark:text-blue-400">Great</span>
        </h2>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:hello@example.com" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Say Hello
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-zinc-900 text-black dark:text-white font-semibold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
