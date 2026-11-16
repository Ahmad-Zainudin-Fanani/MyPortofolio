import { Archivo_Black, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Ahmad Zainudin Fanani — Software Developer",
  description:
    "Portofolio Ahmad Zainudin Fanani (Fanani), mahasiswa D4 Teknik Informatika Politeknik Negeri Malang yang mengembangkan aplikasi web dan mobile dengan Next.js, Laravel, dan Flutter.",
  keywords: [
    "Ahmad Zainudin Fanani",
    "Fanani",
    "Software Developer",
    "Web Developer",
    "Flutter Developer",
    "Laravel",
    "Next.js",
    "Politeknik Negeri Malang",
    "Teknik Informatika",
    "Portofolio",
  ],
  authors: [{ name: "Ahmad Zainudin Fanani" }],
  creator: "Ahmad Zainudin Fanani",
  openGraph: {
    title: "Ahmad Zainudin Fanani — Software Developer",
    description:
      "Portofolio Ahmad Zainudin Fanani, Software Developer dengan fokus pada web development, mobile development, dan machine learning.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#f4efe3",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper-dark text-ink">{children}</body>
    </html>
  );
}
