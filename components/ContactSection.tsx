export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-950/30">
      <div className="max-w-4xl mx-auto p-8 md:p-16 rounded-3xl border border-zinc-800 bg-black/40 backdrop-blur-sm relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#b90000] to-transparent opacity-50"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              I am currently looking for full-time software engineering roles. Have an opportunity or just want to chat? My inbox is always open.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <a 
              href="mailto:hello@example.com" 
              className="px-8 py-4 rounded-full bg-[#b90000] text-white font-semibold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(185,0,0,0.4)] transition-all text-center"
            >
              Email Me
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-transparent border-2 border-zinc-700 text-zinc-300 font-semibold hover:border-[#b90000] hover:text-[#b90000] transition-colors text-center"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
