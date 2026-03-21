export default function ProjectShowcase() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack premium shopping experience built with Next.js, Stripe, and Tailwind.",
      tags: ["Next.js", "Stripe", "Tailwind"],
      link: "#"
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard powered by machine learning insights, featuring real-time data visualization.",
      tags: ["React", "TypeScript", "D3.js"],
      link: "#"
    },
    {
      title: "Social Connect App",
      description: "A real-time messaging application with end-to-end encryption and a sleek minimalist UI.",
      tags: ["WebSocket", "Node.js", "Express"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            A selection of my recent work that showcases my ability to solve complex problems with elegant solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <span className="text-4xl">📸</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
