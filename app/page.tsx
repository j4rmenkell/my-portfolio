import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import Portfolio from "../components/Portfolio";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeSection />
      <AboutSection />
      <Portfolio />
      <ContactSection />
    </main>
  );
}
