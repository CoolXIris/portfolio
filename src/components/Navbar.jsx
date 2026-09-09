import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-zinc-800/80 bg-[#0A0A0F]/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-10 font-heading text-xl font-bold tracking-tight text-white"
          >
            MNUR<span className="text-violet-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 hover:w-full" />
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-violet-500/50 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500 hover:text-white"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-10 rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.8} />
            ) : (
              <Menu size={24} strokeWidth={1.8} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/95 px-6 pb-8 pt-28 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.05,
                      duration: 0.3,
                    }}
                    className="border-b border-zinc-800/70 py-5 font-heading text-2xl font-medium text-zinc-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Let's Talk
              </motion.a>

              <div className="mt-auto">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  MNUR. — Digital & Technology
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
