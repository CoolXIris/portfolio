import { motion } from "framer-motion";
import { Code2, Database, Palette } from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Technology",
    description:
      "Web development, information systems, and practical IT solutions.",
    skills: "Web Development · IT",
  },
  {
    number: "02",
    icon: Database,
    title: "Data",
    description:
      "Working with Python, data analysis, and machine learning fundamentals.",
    skills: "Python · Data Analysis",
  },
  {
    number: "03",
    icon: Palette,
    title: "Creative",
    description: "Visual design, digital content, and creative communication.",
    skills: "Graphic Design · Digital Content",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Eyebrow */}
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />
              About Me
            </p>
          </div>

          {/* Main Content */}
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              More than just
              <br />
              <span className="text-zinc-500">a developer.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I’m an Informatics Management professional with an interest in
              building useful digital solutions through technology, data, and
              creative thinking.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500">
              My background combines technical development with visual design,
              communication, and problem solving — allowing me to approach
              digital projects from both technical and creative perspectives.
            </p>
          </div>
        </motion.div>

        {/* Capability Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111118] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-[#15151e]"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-medium text-zinc-600">
                    {item.number}
                  </span>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-2.5 text-zinc-400 transition-colors duration-300 group-hover:border-violet-500/30 group-hover:text-violet-300">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-zinc-800 pt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                      {item.skills}
                    </p>
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-violet-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
