import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import SectionBackground from "../components/SectionBackground";

function Hero() {
  return (
    <section
      id="home"
      className="theme-background theme-primary relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <SectionBackground variant="grid" />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        {/* LEFT — Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              Informatics Professional
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-heading max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Building digital
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              solutions.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I'm Muhammad Nur Syahputra — an Informatics Management professional
            focused on web development, technology, data, and digital content.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              View My Work
              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="/CV_Nur.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-violet-500/10 hover:text-white"
            >
              <Download size={16} strokeWidth={1.8} />
              Download CV
            </a>
          </div>

          {/* Small Tech Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {["WEB", "DATA", "CREATIVE"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] text-zinc-500"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Decorative Glow */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

          {/* Main Profile Card */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto aspect-[4/5] w-[78%] max-w-sm overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#171720] shadow-2xl shadow-violet-950/20"
          >
            {/* Profile Image */}
            <img
              src={import.meta.env.BASE_URL + "profile1.png"}
              alt="Muhammad Nur Syahputra"
              className="h-full w-full object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent" />

            {/* Bottom Card Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
                MNUR.
              </p>

              <p className="mt-2 font-heading text-xl font-semibold text-white">
                Technology × Creativity
              </p>
            </div>
          </motion.div>

          {/* Floating Card — Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute right-0 top-10 rounded-2xl border border-zinc-800 bg-[#111118]/90 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Focus
            </p>

            <p className="mt-1 text-sm font-medium text-zinc-200">Web & Data</p>
          </motion.div>

          {/* Floating Card — Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 left-0 rounded-2xl border border-zinc-800 bg-[#111118]/90 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Based in
            </p>

            <p className="mt-1 text-sm font-medium text-zinc-200">Indonesia</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}

export default Hero;
