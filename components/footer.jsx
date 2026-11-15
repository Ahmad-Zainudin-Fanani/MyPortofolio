import { profile, socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <a
          href="#top"
          aria-label="Kembali ke atas"
          className="group flex items-center gap-2.5 border-b-[3px] border-ink bg-lime px-5 py-4 md:border-b-0 md:border-r-[3px]"
        >
          <span className="grid size-8 place-items-center border-[3px] border-ink bg-paper font-mono text-[11px] font-bold transition-transform duration-200 group-hover:-rotate-6">
            {"</>"}
          </span>
          <span className="font-mono text-sm font-bold tracking-[-0.02em]">
            Fanani_Dev
          </span>
        </a>

        <div className="flex flex-1 flex-col items-center justify-center gap-1 px-5 py-5 text-center md:py-4">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/60">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/40">
            Dibangun dengan Next.js &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 border-t-[3px] border-ink px-5 py-4 md:border-l-[3px] md:border-t-0">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid size-9 place-items-center border-[3px] border-ink bg-paper-light transition-colors duration-150 hover:bg-lime"
            >
              <SocialIcon name={social.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
