import { motion } from "framer-motion";
import { Award, GraduationCap, Users, BriefcaseBusiness } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "GPA",
    value: "3.92 / 4.00",
  },
  {
    icon: Users,
    title: "Teaching Assistant",
    value: "Academic Support",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Management",
    value: "Team & Project",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />
            Education
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#111118]"
        >
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="relative z-10 p-7 sm:p-9 lg:p-12">
            {/* Top */}
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3.5 text-violet-300">
                  <GraduationCap size={25} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                    2022 — 2026
                  </p>

                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Politeknik Negeri Sriwijaya
                  </h3>

                  <p className="mt-2 text-sm text-violet-300">
                    Diploma 4 — Manajemen Informatika
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full border border-zinc-800 bg-[#0A0A0F] px-4 py-2 text-xs font-medium text-zinc-400">
                Palembang, Indonesia
              </span>
            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-zinc-800" />

            {/* Highlights */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="bg-[#0F0F16] p-5 sm:p-6">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-zinc-500"
                    />

                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm font-medium text-zinc-300">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-zinc-500">
                Focused on information systems, web development, data, and
                digital technology.
              </p>

              <span className="font-heading text-sm font-semibold text-zinc-600">
                3.92 / 4.00 GPA
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
