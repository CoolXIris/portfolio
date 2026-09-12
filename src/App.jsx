import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Recognition from "./sections/Recognition";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home" className="theme-background theme-primary min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Recognition />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;
