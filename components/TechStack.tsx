export default function TechStack() {
  const skills = [
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Node.js", level: "Intermediate" },
    { name: "UI/UX Design", level: "Advanced" },
  ];

  return (
    <section id="tech" className="py-32 px-6 bg-zinc-50 dark:bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Tech Stack</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            The tools and technologies I use to build high-performance, scalable web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 transition-colors">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
