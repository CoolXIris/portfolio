import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Download,
  FileText,
  Trophy,
} from "lucide-react";
import SectionBackground from "../components/SectionBackground";

const recognitions = [
  {
    id: "toefl",
    number: "01",
    year: "2026",
    type: "Certificate",
    typeLabel: "Language Certification",
    title: "Sertifikat TOEFL",
    organization: "Central Course",
    period: "Sep 2026 — Sep 2028",
    icon: BadgeCheck,
    certificateFile: "/certificates/sertifikat-toefl.pdf",
    score: "TOEFL Score 567",
    description:
      "Sertifikat ini saya peroleh setelah mengikuti tes TOEFL secara online yang diselenggarakan oleh Central Course.",
    detail:
      "Tes ini menguji kompetensi Listening Comprehension, Structure & Written Expression, serta Reading Comprehension dengan total nilai 567.",
    highlights: [
      "Listening Comprehension",
      "Structure & Written Expression",
      "Reading Comprehension",
    ],
  },
  {
    id: "project-award",
    number: "02",
    year: "2024",
    type: "Achievement",
    typeLabel: "Academic & Team Achievement",
    title: "Project Kelompok Terbaik",
    organization:
      "SINTAK HMJ Manajemen Informatika — Politeknik Negeri Sriwijaya",
    period: "Januari 2024",
    icon: Trophy,
    certificateFile: "/certificates/sertifikat-sintak.pdf",
    score: "Project Manager",
    description:
      "Meraih penghargaan Desain Website Terbaik untuk konsep Top Up Game Online pada kegiatan SINTAK HMJ Manajemen Informatika Politeknik Negeri Sriwijaya.",
    detail:
      "Penghargaan ini menunjukkan kemampuan kolaborasi, koordinasi, dan efisiensi kerja dengan menyelesaikan seluruh proyek desain dalam waktu tiga hari.",
    highlights: ["Project Manager", "Website Design", "Team Collaboration"],
  },
];

function RecognitionCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
      }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#111118]"
    >
      {/* Card Background Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 blur-[90px] transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        {/* Card Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3.5 text-violet-300">
              <Icon size={24} strokeWidth={1.6} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-400">
                  {item.type}
                </span>

                <span className="h-1 w-1 rounded-full bg-zinc-700" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  {item.typeLabel}
                </span>
              </div>

              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-violet-300">
                {item.organization}
              </p>
            </div>
          </div>

          <span className="w-fit rounded-full border border-zinc-800 bg-[#0A0A0F] px-4 py-2 text-xs font-medium text-zinc-500">
            {item.year}
          </span>
        </div>

        {/* Metadata */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-zinc-800 py-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <CalendarDays size={15} strokeWidth={1.7} />
            {item.period}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Award size={15} strokeWidth={1.7} />
            {item.score}
          </div>
        </div>

        {/* Description */}
        <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm leading-7 text-zinc-300">
              {item.description}
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              {item.detail}
            </p>
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0A0A0F]/60 p-5">
            <div className="mb-4 flex items-center gap-2">
              <FileText size={16} strokeWidth={1.7} className="text-zinc-500" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Highlights
              </p>
            </div>

            <div className="space-y-3">
              {item.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 text-sm text-zinc-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={item.certificateFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#0A0A0F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            <FileText size={15} />
            View Certificate
          </a>

          <a
            href={item.certificateFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
          >
            <Download size={15} />
            Download
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Recognition() {
  return (
    <section
      id="recognition"
      className="theme-background theme-primary relative overflow-hidden border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      <SectionBackground variant="grid" />
      {/* Section Background */}
      <div className="relative z-10 pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Purple Glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Cyan Glow */}
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[140px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0A0A0F_90%)]" />
      </div>

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
              Recognition
            </p>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Credentials that
              <br />
              <span className="text-zinc-500">support my journey.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Certifications and achievements that reflect my commitment to
              continuous learning, collaboration, and professional growth.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-violet-500/70 via-cyan-500/40 to-transparent" />

          <div className="space-y-10">
            {recognitions.map((item, index) => (
              <div key={item.id} className="relative pl-12 sm:pl-16">
                {/* Timeline Marker */}
                <div className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/40 bg-[#0A0A0F]">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                </div>

                <RecognitionCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recognition;
