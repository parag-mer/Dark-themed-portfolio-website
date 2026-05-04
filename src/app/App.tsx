import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <footer className="py-8 text-center text-gray-500 border-t border-white/5">
        <p>© 2026 Parag Mer. All rights reserved.</p>
      </footer>
    </div>
  );
}