import { motion } from "framer-motion";
import { Code2, Database, Palette, BriefcaseBusiness } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Development",
    icon: Code2,
    description:
      "Building responsive websites and practical information systems.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "React",
      "Tailwind CSS",
      "MySQL",
    ],
  },
  {
    number: "02",
    title: "Data",
    icon: Database,
    description:
      "Exploring data through analysis, processing, and machine learning.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Analysis",
      "Machine Learning",
    ],
  },
  {
    number: "03",
    title: "Design",
    icon: Palette,
    description:
      "Creating visual content and digital media with a focus on communication.",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "After Effects",
      "Canva",
      "Graphic Design",
      "2D Animation",
    ],
  },
  {
    number: "04",
    title: "Professional",
    icon: BriefcaseBusiness,
    description:
      "Supporting projects through communication, organization, and problem solving.",
    skills: [
      "IT Support",
      "Customer Service",
      "Administration",
      "Microsoft Office",
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Project Management",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
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
              Skills
            </p>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tools I work
              <br />
              <span className="text-zinc-500">with.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A combination of technical, analytical, creative, and professional
              skills that support the way I approach digital projects.
            </p>
          </div>
        </motion.div>

        {/* Skill Grid */}
        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111118] p-6 sm:p-7"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-sm font-medium text-zinc-600">
                      {group.number}
                    </span>

                    <div className="h-px w-8 bg-zinc-800" />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      {group.title}
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-2.5 text-zinc-400 transition-all duration-300 group-hover:border-violet-500/30 group-hover:text-violet-300">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-8 max-w-lg text-sm leading-6 text-zinc-500">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-800 bg-[#0A0A0F] px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
