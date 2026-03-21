export default function Certificates() {
  const certs = [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "Sept 2024" },
    { title: "Meta Front-End Developer Professional", issuer: "Meta / Coursera", date: "April 2024" },
    { title: "Advanced React Patterns & Performance", issuer: "Frontend Masters", date: "Dec 2023" }
  ];

  return (
    <section id="certificates" className="py-32 px-6 bg-zinc-950/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Certifications</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Professional accreditations verifying my expertise in modern development and cloud architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <div 
              key={index}
              className="group flex flex-col p-8 rounded-3xl bg-[#0a0a0a] border border-zinc-800 hover:border-[#b90000]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(185,0,0,0.15)]"
            >
              <div className="mb-6 text-zinc-600 group-hover:text-[#b90000] transition-colors">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15l-3-3m0 0l3-3m-3 3h8M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-zinc-500 font-medium text-sm mt-auto pt-4 border-t border-zinc-900 group-hover:border-[#b90000]/30 transition-colors">
                {cert.issuer} • <span className="text-zinc-400">{cert.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
