import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F5F5F7]">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* About */}
        <Section
          id="about"
          eyebrow="About Me"
          title="More than just a developer."
          description="An Informatics Management professional combining technology, data, design, and communication to build useful digital solutions."
        >
          <div className="h-40 rounded-2xl border border-dashed border-zinc-800 bg-[#111118]/50" />
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          eyebrow="Skills"
          title="Tools I work with."
          description="A combination of technical, analytical, creative, and professional skills."
        >
          <div className="h-40 rounded-2xl border border-dashed border-zinc-800 bg-[#111118]/50" />
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          eyebrow="Selected Projects"
          title="Things I've built and worked on."
        >
          <div className="h-40 rounded-2xl border border-dashed border-zinc-800 bg-[#111118]/50" />
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          eyebrow="Experience"
          title="Where I've contributed."
        >
          <div className="h-40 rounded-2xl border border-dashed border-zinc-800 bg-[#111118]/50" />
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build something useful."
          description="Have a project, opportunity, or collaboration in mind? Let's talk."
        >
          <div className="h-40 rounded-2xl border border-dashed border-zinc-800 bg-[#111118]/50" />
        </Section>
      </main>
    </div>
  );
}

export default App;
