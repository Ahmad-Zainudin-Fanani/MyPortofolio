import { cacheLife } from "next/cache";
import { profile, socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/icons";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return String(new Date().getFullYear());
}

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

        <div className="flex flex-1 items-center justify-center px-5 py-5 text-center md:py-4">
          <p className="font-mono text-[11px] font-semibold tracking-wider text-ink/80">
            © <CopyrightYear /> {profile.name}
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
