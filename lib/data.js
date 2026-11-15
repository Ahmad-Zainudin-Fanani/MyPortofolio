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
    "Mahasiswa aktif D4 Teknik Informatika, Politeknik Negeri Malang. Saya membangun aplikasi web & mobile yang scalable, dan mengubah ide menjadi produk digital yang berdampak dengan kode yang bersih serta efisien.",
};

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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
      "Website resmi sekolah sebagai pusat informasi, lengkap dengan CMS dan CRM untuk menindaklanjuti pertanyaan calon siswa.",
    details: [
      "Membangun website resmi SD Plus An-Nur sebagai pusat informasi sekolah: profil, visi & misi, guru, prestasi, kurikulum, galeri, ekstrakurikuler, hingga kontak dan lokasi.",
      "Mengembangkan panel admin dan CMS agar tim sekolah dapat memperbarui konten secara mandiri.",
      "Membangun sistem CRM untuk menampung dan menindaklanjuti pertanyaan calon siswa, didukung login admin terverifikasi, validasi data, dan tampilan responsif.",
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
      "Aplikasi mobile untuk membantu guru memantau perkembangan akademik dan kedisiplinan siswa, dengan face recognition dan model machine learning.",
    details: [
      "Mengembangkan aplikasi mobile untuk membantu guru memantau perkembangan akademik dan kedisiplinan siswa berdasarkan data nilai dan kehadiran.",
      "Mengimplementasikan pengenalan wajah menggunakan FaceNet dan RetinaFace melalui framework DeepFace untuk mendukung identifikasi siswa.",
      "Mengembangkan model machine learning untuk mengklasifikasikan perkembangan siswa berdasarkan parameter akademik dan perilaku.",
    ],
    tags: ["Flutter", "Riverpod", "Python", "DeepFace", "FaceNet", "Scikit-learn"],
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
      "Website perumahan sebagai media informasi dan pemasaran digital, dengan katalog properti, denah interaktif, dan tur rumah 360Â°.",
    details: [
      "Mengembangkan website perumahan berbasis Laravel sebagai media informasi dan pemasaran digital, lengkap dengan katalog properti, berita, promo, testimoni, pencarian properti, denah unit interaktif, dan tur rumah 360Â°.",
      "Membangun dashboard admin menggunakan Filament untuk pengelolaan data perumahan, konten, brosur, dan testimoni secara mandiri, didukung sistem login, validasi data, dan antarmuka responsif.",
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
      "Website profil Laboratorium Software Engineering untuk mengelola informasi profil, personil, publikasi, artikel, dan rekrutmen anggota.",
    details: [
      "Mengembangkan website profil Laboratorium Software Engineering berbasis Content Management System (CMS) untuk mengelola informasi profil laboratorium, personil, publikasi, artikel, dan rekrutmen anggota.",
      "Merancang Class Diagram dan Sequence Diagram untuk menggambarkan struktur serta alur interaksi sistem.",
      "Mengembangkan routing dan controller menggunakan PHP Native, melakukan refactoring backend, serta berkontribusi dalam pengelolaan database PostgreSQL.",
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
    items: ["Next.js", "React", "Tailwind CSS"],
    color: "bg-pink",
  },
  {
    title: "Backend",
    icon: "laravel",
    items: ["Laravel", "PHP Native", "Filament"],
    color: "bg-violet",
  },
  {
    title: "Mobile",
    icon: "flutter",
    items: ["Flutter", "Dart", "Riverpod"],
    color: "bg-sky",
  },
  {
    title: "Data & Tools",
    icon: "postgresql",
    items: ["PostgreSQL", "MySQL", "Git & GitHub"],
    color: "bg-orange",
  },
];

export const experiences = [
  {
    role: "Web Developer",
    org: "SD Plus An-Nur",
    period: "2026",
    description:
      "Membangun company profile sekolah sekaligus panel CMS dan CRM untuk pengelolaan konten serta follow-up calon siswa.",
  },
  {
    role: "Mobile Developer",
    org: "EduSense",
    period: "2026",
    description:
      "Mengembangkan aplikasi monitoring siswa dengan face recognition (FaceNet, RetinaFace) dan model machine learning untuk klasifikasi perkembangan siswa.",
  },
  {
    role: "Full-Stack Developer",
    org: "Hunian Lestari",
    period: "2026",
    description:
      "Membangun platform properti dengan katalog, denah interaktif, tur 360Â°, dan dashboard admin Filament untuk pengelolaan konten secara mandiri.",
  },
  {
    role: "Backend Developer",
    org: "PBL Lab Software Engineering",
    period: "2025",
    description:
      "Mengembangkan CMS profil laboratorium dengan PHP Native (MVC) dan PostgreSQL, termasuk perancangan class diagram dan sequence diagram.",
  },
];

export const education = {
  school: "Politeknik Negeri Malang",
  department: "Jurusan Teknologi Informasi",
  degree: "D4 Teknik Informatika",
  period: "2024 â€” Sekarang",
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


