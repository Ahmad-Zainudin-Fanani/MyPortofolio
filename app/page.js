import Header from "@/components/header";
import Hero from "@/components/hero";
import SkillsStrip from "@/components/skills-strip";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import { profile } from "@/lib/data";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.displayName,
  jobTitle: profile.role,
  description:
    "Mahasiswa aktif D4 Teknik Informatika Politeknik Negeri Malang dan software developer web & mobile.",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kabupaten Kediri",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Negeri Malang",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Web Development",
    "Mobile Development",
    "Next.js",
    "Laravel",
    "Flutter",
    "Machine Learning",
  ],
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1440px] border-x-[3px] border-ink bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main>
        <Hero />
        <SkillsStrip />

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="border-b-[3px] border-ink bg-paper"
        >
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px]">
            <Projects />
            <TechStack />
          </div>
        </section>

        <Experience />
      </main>

      <Footer />
    </div>
  );
}
