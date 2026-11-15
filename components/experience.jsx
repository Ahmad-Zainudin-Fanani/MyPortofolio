import { education, experiences, profile } from "@/lib/data";
import { CvButton } from "@/components/cv-provider";
import { ArrowRight, StarBurst } from "@/components/icons";

function ContactPanel() {
  return (
    <aside
      id="contact"
      className="relative flex flex-col justify-between overflow-hidden border-t-[3px] border-ink bg-violet p-6 text-paper sm:p-8 lg:border-l-[3px] lg:border-t-0 xl:p-10"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-20" />
      <StarBurst
        aria-hidden="true"
        className="absolute -bottom-10 -right-8 size-44 rotate-12 text-pink [&>path]:stroke-ink [&>path]:stroke-[3px] sm:size-52"
      />

      <div className="relative">
        <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
          </span>
          Terbuka untuk kolaborasi
        </p>

        <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.9rem)] uppercase leading-[0.92] tracking-[-0.02em]">
          Mari bangun sesuatu yang luar biasa, bersama.
        </h2>

        <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/80">
          Punya ide project, butuh bantuan development, atau ingin sekadar
          berdiskusi? Kirim pesan — saya akan balas secepatnya.
        </p>
      </div>

      <div className="relative mt-8">
        <a
          href={profile.gmailCompose}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2.5 border-[3px] border-ink bg-paper-light px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-brutal transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-lime hover:shadow-none"
        >
          Hubungi Saya
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <div className="mt-6 space-y-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-paper/70">
          <p className="break-all normal-case tracking-normal">
            {profile.email}
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </aside>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-b-[3px] border-ink bg-paper">
      <div className="grid lg:grid-cols-[210px_minmax(0,1fr)_360px] xl:grid-cols-[230px_minmax(0,1fr)_400px]">
        <div className="relative flex items-center justify-between gap-4 overflow-hidden border-b-[3px] border-ink bg-pink px-5 py-5 lg:flex-col lg:items-start lg:justify-center lg:border-b-0 lg:border-r-[3px] lg:px-6 lg:py-10">
          <StarBurst
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 size-24 text-paper/40"
          />
          <div className="relative">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink/55">
              Track record
            </p>
            <h2 className="mt-1 font-display text-2xl uppercase leading-none tracking-tight lg:mt-3 lg:text-[1.7rem]">
              Experience
            </h2>
            <ArrowRight className="mt-3 hidden size-5 lg:block" />
          </div>
          <ArrowRight className="size-5 lg:hidden" />
        </div>

        <div className="p-5 sm:p-8 lg:p-9 xl:p-10">
          <ol className="relative ml-2 space-y-6 border-l-[3px] border-ink pl-6 sm:space-y-7">
            {experiences.map((item) => (
              <li key={`${item.role}-${item.org}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1.5 size-3.5 border-[3px] border-ink bg-lime"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-mono text-[11px] font-bold uppercase leading-snug tracking-[0.06em] sm:text-xs">
                    {item.role}
                    <span className="mx-1.5 text-ink/35">·</span>
                    <span className="text-violet-deep">{item.org}</span>
                  </h3>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-ink/45">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-wrap items-center gap-4 border-[3px] border-ink bg-lime p-4 shadow-brutal-sm">
            <span className="grid size-11 shrink-0 place-items-center border-[3px] border-ink bg-paper-light">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                <path d="M22 10v6" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink/55">
                Pendidikan
              </p>
              <h3 className="mt-0.5 font-display text-base uppercase leading-tight sm:text-lg">
                {education.school}
              </h3>
              <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-ink/65">
                {education.degree} · {education.department}
              </p>
              <p className="mt-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-ink/65">
                Mahasiswa aktif {education.semester} · {education.period} · IPK{" "}
                {education.gpa}
              </p>
            </div>
          </div>

          <CvButton className="group mt-6 inline-flex items-center gap-2 border-[3px] border-ink bg-paper-light px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-lime hover:shadow-none">
            Lihat CV Lengkap
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </CvButton>
        </div>

        <ContactPanel />
      </div>
    </section>
  );
}
