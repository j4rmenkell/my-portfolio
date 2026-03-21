import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import ProjectShowcase from "../components/ProjectShowcase";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <AboutSection />
      <TechStack />
      <ProjectShowcase />
      <ContactSection />
    </main>
  );
}
