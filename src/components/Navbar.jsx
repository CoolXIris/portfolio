import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSite } from "../context/SiteContext";

function Navbar() {
  const { language, theme, toggleLanguage, toggleTheme, t } = useSite();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.recognition, href: "#recognition" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="font-heading text-xl font-bold tracking-tight text-[var(--color-primary)]"
        >
          MNUR<span className="text-violet-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-secondary)] transition-colors duration-300 hover:text-[var(--color-primary)]"
            >
              {item.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full border border-violet-500/60 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500 hover:text-white"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="rounded-lg border border-transparent p-2 text-[var(--color-secondary)] transition-colors hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigation}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                    }}
                    className="border-b border-[var(--color-border)] py-4 text-base font-medium text-[var(--color-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                {/* Mobile Language Toggle */}
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-semibold"
                >
                  <Languages size={15} className="text-[var(--color-muted)]" />

                  <span
                    className={
                      language === "en"
                        ? "text-violet-400"
                        : "text-[var(--color-muted)]"
                    }
                  >
                    EN
                  </span>

                  <span className="text-[var(--color-muted)]">/</span>

                  <span
                    className={
                      language === "id"
                        ? "text-cyan-400"
                        : "text-[var(--color-muted)]"
                    }
                  >
                    ID
                  </span>
                </button>

                {/* Mobile Theme Toggle */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-secondary)]"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={16} />
                      Light mode
                    </>
                  ) : (
                    <>
                      <Moon size={16} />
                      Dark mode
                    </>
                  )}
                </button>
              </div>

              <a
                href="#contact"
                onClick={handleNavigation}
                className="mt-5 rounded-full bg-violet-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-violet-400"
              >
                {t.nav.letsTalk}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
