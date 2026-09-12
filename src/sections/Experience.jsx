import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, Monitor, Users } from "lucide-react";
import SectionBackground from "../components/SectionBackground";

const experiences = [
  {
    number: "01",
    period: "Professional Experience",
    role: "IT Support",
    organization: "SMK Negeri 1 Palembang",
    icon: Monitor,
    description:
      "Contributed to technical and operational activities related to school information systems, server operations, and digital infrastructure.",
    tags: ["Troubleshooting", "Server", "Technical Operations"],
  },
  {
    number: "02",
    period: "Internship",
    role: "Asisten Pranata Komputer (Staff Humas)",
    organization: "Balai Teknik Perkeretaapian Kelas II Palembang",
    icon: Building2,
    description:
      "Supported public relations activities through digital content production, visual communication, and creative projects for institutional communication.",
    tags: ["Digital Content", "Graphic Design", "2D Animation"],
  },
  {
    number: "03",
    period: "Project Experience",
    role: "Project & Team Experience",
    organization: "Academic & Digital Projects",
    icon: Users,
    description:
      "Worked on academic and digital projects involving system development, data analysis, project coordination, and collaboration across different roles.",
    tags: ["Project Management", "Collaboration", "Problem Solving"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="theme-background theme-primary relative border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      {" "}
      <SectionBackground variant="timeline" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />
              Experience
            </p>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where I've
              <br />
              <span className="text-zinc-500">contributed.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Experiences that shaped the way I approach technology,
              collaboration, communication, and problem solving.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-violet-500/60 via-zinc-800 to-transparent md:left-[119px]" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative grid gap-6 md:grid-cols-[120px_1fr]"
                >
                  {/* Number / Period */}
                  <div className="hidden pt-2 md:block">
                    <p className="font-heading text-sm font-medium text-zinc-600">
                      {experience.number}
                    </p>

                    <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.15em] text-zinc-700">
                      {experience.period}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-violet-500/30 bg-[#0A0A0F] md:left-[108px]">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-10 rounded-2xl border border-zinc-800 bg-[#111118] p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-[#15151e] md:ml-0 md:p-7">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-2.5 text-zinc-400">
                            <Icon size={18} strokeWidth={1.7} />
                          </div>

                          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 md:hidden">
                            {experience.period}
                          </span>
                        </div>

                        <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-violet-300">
                          {experience.organization}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
                      {experience.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-zinc-800 bg-[#0A0A0F] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
