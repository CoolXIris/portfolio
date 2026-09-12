import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import SectionBackground from "../components/SectionBackground";

const contactLinks = [
  {
    label: "Email",
    value: "mnursyahputra0@gmail.com",
    href: "mailto:mnursyahputra0@gmail.com",
    icon: Mail,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-900 py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />
            Contact
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-violet-500" />
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Let's build
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              something useful.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Have a project, opportunity, or collaboration in mind? I'm always
            open to discussing ideas and new opportunities.
          </p>

          {/* Email CTA */}
          <motion.a
            href="mailto:mnursyahputra0@gmail.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0F] shadow-xl shadow-white/5"
          >
            <Mail size={17} />
            Email Me
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-20 max-w-4xl border-y border-zinc-800"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between border-b border-zinc-900 py-6 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl border border-zinc-800 bg-[#111118] p-2.5 text-zinc-400 transition-colors duration-300 group-hover:border-violet-500/30 group-hover:text-violet-300">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      {link.label}
                    </p>

                    <p className="mt-1 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                      {link.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                />
              </a>
            );
          })}
        </motion.div>

        {/* CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            <Download size={15} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
