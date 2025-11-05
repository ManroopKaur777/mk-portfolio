import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Activities } from "./components/Activities";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TechBackground } from "./components/TechBackground";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <TechBackground />
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Activities />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
