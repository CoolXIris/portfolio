import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F5F5F7]">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Contact />
      </main>
    </div>
  );
}

export default App;
