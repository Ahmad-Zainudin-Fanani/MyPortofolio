export const profile = {
  name: "Ahmad Zainudin Fanani",
  displayName: "Fanani",
  handle: "fanani.dev",
  role: "Software Developer",
  location: "Kabupaten Kediri, Jawa Timur",
  email: "a.zainudinfanani@gmail.com",
  phone: "+62 858-1505-2369",
  whatsapp: "https://wa.me/6285815052369",
  github: "https://github.com/Ahmad-Zainudin-Fanani",
  linkedin: "https://www.linkedin.com/in/ahmad-zainudin-fanani",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=a.zainudinfanani@gmail.com",
  // Foto hero. Ganti path-nya kalau file fotonya diganti (rasio 3:4, taruh di public/).
  // Kalau diisi null, hero otomatis kembali menampilkan ilustrasi placeholder.
  photo: "/foto-fanani.webp",
  tagline:
    "Mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang yang berfokus pada pengembangan aplikasi web dan mobile. Memiliki pengalaman mengerjakan berbagai proyek menggunakan Next.js, Laravel, dan Flutter. Aktif mengembangkan kemampuan teknis, mengeksplorasi teknologi baru, serta membangun solusi digital untuk berbagai kebutuhan.",
};

export const navLinks = [
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Kontak", href: "#contact" },
];

export const skillsStrip = [
  { name: "Next.js", icon: "next" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Laravel", icon: "laravel" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Flutter", icon: "flutter" },
];

export const projects = [
  {
    slug: "sdplus",
    index: "01",
    year: "2026",
    title: "Website SD Plus An-Nur",
    type: "Company Profile, CMS & CRM Sekolah",
    description:
      "Mengembangkan website profil sekolah sebagai pusat informasi digital, dilengkapi panel Content Management System (CMS) untuk pengelolaan konten serta Customer Relationship Management (CRM) untuk mencatat dan menindaklanjuti pertanyaan calon siswa.",
    details: [
      "Membangun halaman profil, visi dan misi, guru, prestasi, kurikulum, galeri, ekstrakurikuler, serta kontak dan lokasi.",
      "Mengembangkan panel CMS agar tim sekolah dapat memperbarui konten secara mandiri.",
      "Membangun fitur CRM untuk mencatat dan menindaklanjuti pertanyaan calon siswa, dilengkapi autentikasi admin dan validasi data.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Laravel", "PostgreSQL"],
    accent: "sky",
    repos: [
      {
        label: "GitHub Frontend",
        short: "Frontend",
        href: "https://github.com/Ahmad-Zainudin-Fanani/frontend-annur",
      },
      {
        label: "GitHub Backend",
        short: "Backend",
        href: "https://github.com/AdityaFahrezyD/backend-annur",
      },
    ],
  },
  {
    slug: "edusense",
    index: "02",
    year: "2026",
    title: "EduSense",
    type: "Aplikasi Mobile Monitoring Siswa",
    description:
      "Mengembangkan aplikasi mobile untuk membantu guru memantau perkembangan akademik dan kedisiplinan siswa. Proyek ini mengintegrasikan teknologi pengenalan wajah dan Machine Learning untuk mendukung identifikasi serta analisis data siswa.",
    details: [
      "Mengembangkan antarmuka aplikasi mobile untuk pemantauan data nilai dan kehadiran siswa.",
      "Mengintegrasikan pengenalan wajah menggunakan FaceNet dan RetinaFace melalui DeepFace untuk mendukung identifikasi siswa.",
      "Mengembangkan model Machine Learning untuk menganalisis data akademik dan perilaku siswa.",
    ],
    tags: ["Flutter", "Riverpod", "Python", "DeepFace", "FaceNet", "scikit-learn"],
    accent: "violet",
    repos: [
      {
        label: "GitHub",
        short: "GitHub",
        href: "https://github.com/FahrulKhoiruzaki/PBL_EduSense",
      },
    ],
  },
  {
    slug: "hunian",
    index: "03",
    year: "2026",
    title: "Hunian Lestari",
    type: "Platform Properti & CMS Perumahan",
    description:
      "Mengembangkan platform properti berbasis web yang menyediakan katalog hunian, informasi pemasaran, denah unit interaktif, dan tur virtual 360°. Membangun dashboard admin menggunakan Filament untuk memudahkan pengelolaan data dan konten properti.",
    details: [
      "Membangun halaman katalog properti, berita, promo, testimoni, pencarian properti, denah unit interaktif, dan tur rumah 360°.",
      "Mengembangkan dashboard admin berbasis Filament untuk pengelolaan data perumahan, konten, brosur, dan testimoni, dilengkapi autentikasi dan validasi data.",
    ],
    tags: ["Laravel", "Filament", "MySQL", "Tailwind CSS", "Alpine.js"],
    accent: "lime",
    repos: [
      {
        label: "GitHub",
        short: "GitHub",
        href: "https://github.com/MadeOka06/PBL_Kelompok_3/tree/main/PBL_Kelompok_03",
      },
    ],
  },
  {
    slug: "pbl",
    index: "04",
    year: "2025",
    title: "PBL Lab Software Engineering",
    type: "Website Profil Laboratorium Berbasis CMS",
    description:
      "Mengembangkan website profil Laboratorium Software Engineering berbasis CMS menggunakan PHP Native dan PostgreSQL. Berkontribusi dalam perancangan Class Diagram, Sequence Diagram, serta pengembangan backend menggunakan pola arsitektur MVC.",
    details: [
      "Berkontribusi dalam perancangan Class Diagram dan Sequence Diagram untuk menggambarkan struktur serta alur interaksi sistem.",
      "Mengembangkan routing dan controller backend menggunakan PHP Native dengan pola arsitektur MVC, termasuk refactoring kode.",
      "Mengelola dan mengintegrasikan database PostgreSQL pada backend CMS.",
    ],
    tags: ["PHP Native", "PostgreSQL", "MVC", "Bootstrap 5"],
    accent: "orange",
    repos: [
      {
        label: "GitHub",
        short: "GitHub",
        href: "https://github.com/wandi1209/web_profil_lab_se_pbl2025",
      },
    ],
  },
];

export const techStacks = [
  {
    title: "Frontend",
    icon: "next",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "bg-pink",
  },
  {
    title: "Backend",
    icon: "laravel",
    items: ["Laravel", "PHP Native", "Filament", "REST API"],
    color: "bg-violet",
  },
  {
    title: "Mobile",
    icon: "flutter",
    items: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    color: "bg-sky",
  },
  {
    title: "Database & Tools",
    icon: "postgresql",
    items: ["PostgreSQL", "MySQL", "Git", "GitHub"],
    color: "bg-orange",
  },
];

export const experiences = [
  {
    role: "Web Developer",
    org: "SD Plus An-Nur",
    period: "2026",
    description:
      "Mengembangkan website profil sekolah, panel CMS, dan CRM untuk mendukung pengelolaan informasi serta komunikasi dengan calon siswa.",
  },
  {
    role: "Mobile Developer",
    org: "EduSense",
    period: "2026",
    description:
      "Mengembangkan aplikasi mobile untuk mendukung pemantauan perkembangan akademik dan kedisiplinan siswa melalui integrasi teknologi pengenalan wajah dan Machine Learning.",
  },
  {
    role: "Full Stack Developer",
    org: "Hunian Lestari",
    period: "2026",
    description:
      "Mengembangkan platform properti berbasis web beserta dashboard admin untuk pengelolaan katalog, informasi, dan konten perumahan.",
  },
  {
    role: "Backend Developer",
    org: "PBL Lab Software Engineering",
    period: "2025",
    description:
      "Mengembangkan backend CMS menggunakan PHP Native dan PostgreSQL, serta berkontribusi dalam perancangan arsitektur dan dokumentasi sistem.",
  },
];

export const education = {
  school: "Politeknik Negeri Malang",
  department: "Jurusan Teknologi Informasi",
  degree: "D4 Teknik Informatika",
  period: "2024 – Sekarang",
  semester: "Semester 5",
  gpa: "3,64",
  focus:
    "Mobile Programming, Computer Vision, Machine Learning, Web Programming",
};

export const cvPages = [
  {
    src: "/cv/cv-page-1.webp",
    width: 1836,
    height: 2376,
    label: "Halaman 1",
  },
  {
    src: "/cv/cv-page-2.webp",
    width: 1836,
    height: 2376,
    label: "Halaman 2",
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "WhatsApp", href: profile.whatsapp, icon: "whatsapp" },
  { label: "Email", href: profile.gmailCompose, icon: "mail" },
];


