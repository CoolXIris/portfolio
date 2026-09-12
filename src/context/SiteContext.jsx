import { createContext, useContext, useEffect, useState } from "react";

const SiteContext = createContext(null);

const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      recognition: "Recognition",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },

    hero: {
      eyebrow: "Informatics Professional",
      titleFirst: "Building digital",
      titleSecond: "solutions.",
      description:
        "I'm Muhammad Nur Syahputra — an Informatics Management professional focused on web development, technology, data, and digital content.",
      viewWork: "View My Work",
      downloadCv: "Download CV",
    },

    about: {
      eyebrow: "About Me",
      titleFirst: "More than just",
      titleSecond: "a developer.",
      paragraphFirst:
        "I'm an Informatics Management professional with an interest in building useful digital solutions through technology, data, and creative thinking.",
      paragraphSecond:
        "My background combines technical development with visual design, communication, and problem solving — allowing me to approach digital projects from both technical and creative perspectives.",
    },

    skills: {
      eyebrow: "Skills",
      titleFirst: "Tools I work",
      titleSecond: "with.",
      description:
        "A combination of technical, analytical, creative, and professional skills that support the way I approach digital projects.",
    },

    projects: {
      eyebrow: "Selected Projects",
      titleFirst: "Things I've",
      titleSecond: "built.",
      description:
        "A selection of digital products, information systems, data applications, and creative projects.",
      viewDetails: "View Details",
      closeDetails: "Close Details",
    },

    experience: {
      eyebrow: "Experience",
      titleFirst: "Where I have",
      titleSecond: "contributed.",
      description:
        "Professional and academic experiences that shaped my technical, organizational, and communication skills.",
    },

    education: {
      eyebrow: "Education",
      titleFirst: "Learning is part",
      titleSecond: "of the process.",
      description:
        "An academic foundation in Informatics Management with a strong interest in technology and digital solutions.",
    },

    recognition: {
      eyebrow: "Recognition",
      titleFirst: "Credentials that",
      titleSecond: "support my journey.",
      description:
        "Certifications and achievements that reflect my commitment to continuous learning, collaboration, and professional growth.",
      certificate: "Certificate",
      achievement: "Achievement",
      highlights: "Highlights",
      viewCertificate: "View Certificate",
      download: "Download",
    },

    contact: {
      eyebrow: "Contact",
      titleFirst: "Let's build",
      titleSecond: "something useful.",
      description:
        "Have a project, opportunity, or collaboration in mind? I'm always open to discussing ideas and new opportunities.",
      emailMe: "Email Me",
      downloadCv: "Download CV",
    },

    footer: {
      backToTop: "Back to top",
      builtWith: "Built with React & Tailwind CSS",
      rights: "All rights reserved.",
    },
  },

  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      education: "Pendidikan",
      recognition: "Pencapaian",
      contact: "Kontak",
      letsTalk: "Mari Berdiskusi",
    },

    hero: {
      eyebrow: "Profesional Informatika",
      titleFirst: "Membangun solusi",
      titleSecond: "digital.",
      description:
        "Saya Muhammad Nur Syahputra — profesional Manajemen Informatika yang berfokus pada pengembangan web, teknologi, data, dan konten digital.",
      viewWork: "Lihat Proyek",
      downloadCv: "Unduh CV",
    },

    about: {
      eyebrow: "Tentang Saya",
      titleFirst: "Lebih dari sekadar",
      titleSecond: "seorang developer.",
      paragraphFirst:
        "Saya merupakan profesional Manajemen Informatika yang memiliki ketertarikan dalam membangun solusi digital yang bermanfaat melalui teknologi, data, dan pemikiran kreatif.",
      paragraphSecond:
        "Latar belakang saya menggabungkan pengembangan teknis dengan desain visual, komunikasi, dan pemecahan masalah sehingga saya dapat melihat proyek digital dari sisi teknis maupun kreatif.",
    },

    skills: {
      eyebrow: "Keahlian",
      titleFirst: "Tools yang saya",
      titleSecond: "gunakan.",
      description:
        "Kombinasi kemampuan teknis, analitis, kreatif, dan profesional yang mendukung cara saya mengerjakan proyek digital.",
    },

    projects: {
      eyebrow: "Proyek Pilihan",
      titleFirst: "Hal-hal yang telah",
      titleSecond: "saya bangun.",
      description:
        "Kumpulan produk digital, sistem informasi, aplikasi data, dan proyek kreatif yang pernah saya kerjakan.",
      viewDetails: "Lihat Detail",
      closeDetails: "Tutup Detail",
    },

    experience: {
      eyebrow: "Pengalaman",
      titleFirst: "Tempat saya",
      titleSecond: "berkontribusi.",
      description:
        "Pengalaman profesional dan akademik yang membentuk kemampuan teknis, organisasi, dan komunikasi saya.",
    },

    education: {
      eyebrow: "Pendidikan",
      titleFirst: "Belajar merupakan",
      titleSecond: "bagian dari proses.",
      description:
        "Landasan akademik Manajemen Informatika dengan ketertarikan kuat pada teknologi dan solusi digital.",
    },

    recognition: {
      eyebrow: "Pencapaian",
      titleFirst: "Bukti yang mendukung",
      titleSecond: "perjalanan saya.",
      description:
        "Sertifikat dan pencapaian yang mencerminkan komitmen saya terhadap pembelajaran, kolaborasi, dan pengembangan profesional.",
      certificate: "Sertifikat",
      achievement: "Penghargaan",
      highlights: "Sorotan",
      viewCertificate: "Lihat Sertifikat",
      download: "Unduh",
    },

    contact: {
      eyebrow: "Kontak",
      titleFirst: "Mari membangun",
      titleSecond: "sesuatu yang bermanfaat.",
      description:
        "Memiliki proyek, peluang, atau ide kolaborasi? Saya terbuka untuk berdiskusi mengenai berbagai kesempatan baru.",
      emailMe: "Kirim Email",
      downloadCv: "Unduh CV",
    },

    footer: {
      backToTop: "Kembali ke atas",
      builtWith: "Dibangun dengan React & Tailwind CSS",
      rights: "Hak cipta dilindungi.",
    },
  },
};

export function SiteProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("site-language") || "en";
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("site-theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("site-language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("site-theme", theme);

    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "id" : "en"));
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <SiteContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleLanguage,
        toggleTheme,
        t: translations[language],
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error("useSite must be used inside SiteProvider");
  }

  return context;
}
