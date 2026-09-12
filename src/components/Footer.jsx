import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#08080C]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-heading text-lg font-bold tracking-tight text-white"
            >
              MNUR<span className="text-violet-500">.</span>
            </a>

            <p className="mt-1 text-xs text-zinc-600">
              Muhammad Nur Syahputra — Informatics Professional
            </p>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="group flex w-fit items-center gap-2 text-xs font-medium text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 transition-all duration-300 group-hover:border-violet-500/50 group-hover:bg-violet-500/10">
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-zinc-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-zinc-700">
            © 2026 Muhammad Nur Syahputra. All rights reserved.
          </p>

          <p className="text-[11px] text-zinc-700">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
