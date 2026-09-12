import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  Code2,
  Users,
  X,
} from "lucide-react";
import SectionBackground from "../components/SectionBackground";

const projects = [
  {
    id: "polsricbt",
    number: "01",
    title: "POLSRICBT",
    category: "Computer Based Test",
    image: import.meta.env.BASE_URL + 'projects/polsricbt1.png',
    technologies: ["PHP", "CodeIgniter 4", "Tailwind CSS", "MySQL"],
    users: ["Pengelola", "Dosen", "Mahasiswa"],
    features: "6 Fitur Utama + 25 Sub Fitur",
    description:
      "Aplikasi Computer Based Test berbasis website yang dikembangkan untuk memfasilitasi pelaksanaan Ujian Tengah dan Akhir Semester pada mata kuliah teori di Jurusan Manajemen Informatika Politeknik Negeri Sriwijaya.",
    detail:
      "POLSRICBT merupakan pengembangan lanjutan dari aplikasi CBT sebelumnya dengan dukungan tipe soal yang lebih beragam, meliputi pilihan ganda, essay, dan jawaban singkat. Sistem juga dilengkapi peningkatan keamanan pada sisi peserta, seperti pencegahan screenshot dan pembatasan copy-paste teks soal untuk membantu meminimalkan potensi kecurangan selama ujian.",
  },

  {
    id: "smkn1cbt",
    number: "02",
    title: "SMKN1CBT",
    category: "Computer Based Test",
    image: import.meta.env.BASE_URL + 'projects/smkn1cbt.png',
    technologies: ["PHP", "CodeIgniter 3", "Bootstrap", "MySQL"],
    users: ["Guru", "Operator", "Siswa"],
    features: "6 Fitur Utama + 20 Sub Fitur",
    description:
      "Aplikasi Computer Based Test berbasis website yang dikembangkan untuk mendukung pelaksanaan Ujian Akhir Semester di SMK Negeri 1 Palembang.",
    detail:
      "Sistem terdiri dari modul manajemen soal, peserta, tes, laporan, pengaturan, dan pelaksanaan ujian. Seluruh modul saling terintegrasi sehingga proses ujian menjadi lebih terstruktur dan efisien dibandingkan pelaksanaan ujian berbasis kertas yang membutuhkan lebih banyak waktu dan biaya.",
  },

  {
    id: "kmeans",
    number: "03",
    title: "Employee Discipline Analysis",
    category: "Data Analysis & Machine Learning",
    image: import.meta.env.BASE_URL + 'projects/pegawai.png',
    technologies: ["Python", "Flask", "Matplotlib", "Plotly"],
    users: ["Bagian Manajemen"],
    features: "8 Fitur Utama",
    description:
      "Aplikasi analisis data absensi pegawai berbasis website yang dibangun menggunakan Python dan Flask untuk membantu proses pengolahan dan interpretasi data kehadiran.",
    detail:
      "Sistem membaca data absensi pegawai dalam periode satu tahun, kemudian melakukan preprocessing dan analisis menggunakan metode K-Means. Hasil analisis divisualisasikan dalam bentuk grafik dan informasi yang lebih mudah dipahami sehingga dapat membantu pihak manajemen mengevaluasi pola kedisiplinan pegawai berdasarkan data kehadiran.",
  },

  {
    id: "randomforest",
    number: "04",
    title: "Jirak Jaya Data Mining",
    category: "Data Mining",
    image: import.meta.env.BASE_URL + 'projects/mining.png',
    technologies: [
      "Python",
      "Random Forest",
      "Flask",
      "Scikit-learn",
      "Matplotlib",
      "Plotly",
    ],
    users: ["Kecamatan Jirak Jaya"],
    features: "10 Fitur Utama",
    description:
      "Aplikasi data mining berbasis website yang dikembangkan menggunakan Python dan Flask untuk membantu analisis data sosial ekonomi penduduk Kecamatan Jirak Jaya.",
    detail:
      "Aplikasi mengolah data penduduk dan menggunakan model Random Forest untuk menghasilkan informasi berdasarkan faktor sosial ekonomi. Hasil pengolahan kemudian divisualisasikan sehingga membantu pengguna memahami karakteristik dan persebaran data penduduk berdasarkan indikator yang dianalisis.",
  },

  {
    id: "animation",
    number: "05",
    title: "Railway Safety 2D Animation",
    category: "Creative & Digital Content",
    image: import.meta.env.BASE_URL + 'projects/animation.png',
    technologies: [
      "Adobe Illustrator",
      "Adobe After Effects",
      "CapCut",
      "2D Animation",
    ],
    users: ["BTP Palembang"],
    features: "Digital | Education | Content",
    description:
      "Project animasi 2D yang dibuat untuk menyampaikan edukasi mengenai keselamatan masyarakat di jalur perlintasan kereta api sebidang.",
    detail:
      "Project ini dibuat atas permintaan Kepala Balai Teknik Perkeretaapian Palembang dan dikerjakan melalui kolaborasi dengan Staff Humas BTP Palembang. Proses pengerjaan mencakup pembuatan aset visual, animasi, dan editing video hingga menghasilkan konten edukasi yang menyampaikan pesan keselamatan di jalur perlintasan kereta api untuk disebarluaskan melalui media sosial resmi BTP Palembang.",
  },
];

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      className="group relative min-h-[380px] overflow-hidden rounded-2xl border border-zinc-800 bg-[#111118]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#0A0A0F]/75 to-[#0A0A0F]/20" />

      {/* Additional Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 to-cyan-950/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[380px] flex-col justify-between p-6 sm:p-7">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="font-heading text-sm font-medium text-zinc-400">
            {project.number}
          </span>

          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Bottom */}
        <div>
          <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] text-zinc-300 backdrop-blur-md"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-xs text-zinc-500">{project.features}</span>

            <button
              type="button"
              onClick={() => onOpen(project)}
              className="group/button inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/20"
            >
              Selengkapnya
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedProject({ project, onClose }) {
  return (
    <motion.article
      layout
      className="relative min-h-[600px] overflow-hidden rounded-3xl border border-zinc-700 bg-[#111118]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080c] via-[#08080c]/90 to-[#08080c]/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[600px] flex-col p-6 sm:p-8 lg:p-12">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm font-medium text-zinc-500">
            PROJECT / {project.number}
          </span>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-black/30 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-zinc-500 hover:text-white"
          >
            <X size={14} />
            Close
          </button>
        </div>

        {/* Main */}
        <div className="my-auto max-w-3xl py-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            {project.category}
          </p>

          <h3 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md"
              >
                {technology}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            {project.description}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            {project.detail}
          </p>

          {/* Project Meta */}
          <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2">
            {/* Users */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                <Users size={14} />
                Users
              </div>

              <div className="flex flex-wrap gap-2">
                {project.users.map((user) => (
                  <span key={user} className="text-sm text-zinc-300">
                    {user}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                <Code2 size={14} />
                Features
              </div>

              <p className="text-sm text-zinc-300">{project.features}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="theme-background theme-primary relative border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      <SectionBackground variant="grid" />
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
              Selected Projects
            </p>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Things I've built
              <br />
              <span className="text-zinc-500">and worked on.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A selection of digital products, data projects, and creative work
              that represent how I combine technology with practical problem
              solving.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="mt-16">
          <AnimatePresence mode="popLayout">
            {selectedProject ? (
              <motion.div
                key={selectedProject.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                <FeaturedProject
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              </motion.div>
            ) : (
              <motion.div layout className="grid gap-4 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className={index === 0 ? "md:col-span-2" : ""}
                  >
                    <ProjectCard
                      project={project}
                      onOpen={setSelectedProject}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Count */}
        {!selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              05 Selected Projects
            </span>

            <span className="text-xs text-zinc-600">
              Click a project to explore
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
