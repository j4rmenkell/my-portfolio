import TechStack from "./TechStack";
import ProjectShowcase from "./ProjectShowcase";
import Certificates from "./Certificates";

export default function Portfolio() {
  return (
    <div id="portfolio" className="w-full flex flex-col relative">
      <TechStack />
      <ProjectShowcase />
      <Certificates />
    </div>
  );
}
