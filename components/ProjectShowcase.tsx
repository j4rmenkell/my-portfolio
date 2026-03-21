"use client";

import TiltedCard from "./TiltedCard";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Project-Torii",
      description: "Served as Tech Lead for a custom Content Management System built for the Thomasian Nihon Kyoukai organization at UST. The platform streamlines content publishing, task delegation, and deadline tracking for the org's administration.",
      tags: ["Laravel", "Vue.js", "Tailwind CSS", "shadcn/ui", "SQL"],
      link: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "MangaLab",
      description: "A comprehensive manga reading platform powered by the MangaDex API. Features a full administrative dashboard with analytics, secure user authentication, and robust account management.",
      tags: ["ASP.NET MVC", "Angular", "Bootstrap", "SQL", "REST API"],
      link: "#",
      image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "BuddiBucks",
      description: "A native Android expense tracking application. Integrates Google Authentication for secure access and leverages cloud storage for receipt management, alongside detailed financial analytics.",
      tags: ["Kotlin", "Firebase", "Cloudinary", "Android"],
      link: "#",
      image: "https://images.unsplash.com/photo-1579621970588-a3f5ce599fac?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "QMC Trading System",
      description: "A full-stack enterprise inventory and management system. Built entirely with core web technologies to handle complex logic including RBAC, invoicing, receiving, and real-time inventory tracking.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Upcoming Web App",
      description: "Currently architecting a modern, highly scalable web application utilizing a serverless database architecture.",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],
      link: "#",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Upcoming Capstone",
      description: "Currently architecting a modern, highly scalable web application utilizing a serverless database architecture.",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],
      link: "#",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A selection of my academic and independent work that highlights my problem-solving approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full outline-none"
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="380px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={7}
                scaleOnHover={1}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="flex flex-col justify-end w-full h-full p-8 bg-gradient-to-t from-black/95 via-black/50 to-transparent rounded-[15px] border border-zinc-800 group-hover:border-[#b90000]/60 transition-colors duration-500">
                    <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-[#b90000] transition-colors drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 font-light text-sm leading-relaxed mb-6 line-clamp-3 drop-shadow-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-black/50 text-zinc-200 border border-zinc-700/50 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
