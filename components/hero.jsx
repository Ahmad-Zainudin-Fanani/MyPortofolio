import { profile, socialLinks } from "@/lib/data";
import {
  ArrowDown,
  ArrowRight,
  SocialIcon,
  StarBurst,
} from "@/components/icons";

function PortraitPlaceholder() {
  return (
    <div className="relative w-[250px] sm:w-[290px] xl:w-[330px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 border-[3px] border-ink bg-lime"
      />
      <div className="relative border-[3px] border-ink bg-paper p-2.5">
        <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-ink bg-grid">
          <svg
            viewBox="0 0 300 400"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Placeholder foto profil Ahmad Zainudin Fanani"
          >
            <circle cx="150" cy="168" r="118" fill="#ff7dae" />
            <circle
              cx="150"
              cy="168"
              r="118"
              fill="none"
              stroke="#141414"
              strokeWidth="5"
            />
            <path
              d="M60 400c0-78 40-118 90-118s90 40 90 118Z"
              fill="#141414"
            />
            <path d="M150 282v118" stroke="#c9f94b" strokeWidth="5" />
            <path
              d="M96 300c12-22 33-34 54-34s42 12 54 34"
              fill="none"
              stroke="#58a6d6"
              strokeWidth="9"
            />
            <circle
              cx="150"
              cy="152"
              r="64"
              fill="#f4efe3"
              stroke="#141414"
              strokeWidth="6"
            />
            <path
              d="M88 142c2-42 26-64 62-64s60 22 62 64c-8-12-20-18-34-19-10 16-26 22-46 22-16 0-30 0-44-3Z"
              fill="#141414"
            />
            <rect
              x="112"
              y="147"
              width="32"
              height="21"
              rx="5"
              fill="#c9f94b"
              stroke="#141414"
              strokeWidth="4"
            />
            <rect
              x="156"
              y="147"
              width="32"
              height="21"
              rx="5"
              fill="#c9f94b"
              stroke="#141414"
              strokeWidth="4"
            />
            <path d="M144 156h12" stroke="#141414" strokeWidth="4" />
            <circle cx="128" cy="157" r="3" fill="#141414" />
            <circle cx="172" cy="157" r="3" fill="#141414" />
            <path
              d="M136 186c8 7 20 7 28 0"
              fill="none"
              stroke="#141414"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M44 84v30M29 99h30"
              stroke="#f08a3c"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M256 226v22M245 237h22"
              stroke="#8b5cf6"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <g fill="#141414">
              <circle cx="66" cy="206" r="3" />
              <circle cx="76" cy="206" r="3" />
              <circle cx="86" cy="206" r="3" />
            </g>
          </svg>

          <div className="absolute inset-x-3 top-3 flex items-start justify-between">
            <span className="border-[3px] border-ink bg-paper px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em]">
              Foto kamu di sini
            </span>
            <span className="border-[3px] border-ink bg-violet px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-paper">
              2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="relative z-20 -mt-10 ml-1 w-[min(100%,330px)] border-[3px] border-ink bg-violet p-4 text-paper shadow-brutal sm:-mt-14 sm:ml-4 xl:ml-6">
      <div className="mb-3 flex items-center gap-1.5 border-b-[2px] border-paper/25 pb-2.5">
        <span className="size-2.5 border border-ink bg-pink" />
        <span className="size-2.5 border border-ink bg-lime" />
        <span className="size-2.5 border border-ink bg-orange" />
        <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.18em] text-paper/60">
          developer.js
        </span>
      </div>
      <pre className="overflow-x-auto font-mono text-[10px] leading-[1.75] no-scrollbar sm:text-[11px]">
        <code>
          <span className="text-lime">const</span>{" "}
          <span className="text-paper">developer</span>{" "}
          <span className="text-paper">=</span>{" "}
          <span className="text-paper">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-lime">name</span>
          <span className="text-paper">: </span>
          <span className="text-pink-soft">&apos;Fanani&apos;</span>
          <span className="text-paper">,</span>
          {"\n"}
          {"  "}
          <span className="text-lime">role</span>
          <span className="text-paper">: </span>
          <span className="text-pink-soft">&apos;Software Developer&apos;</span>
          <span className="text-paper">,</span>
          {"\n"}
          {"  "}
          <span className="text-lime">campus</span>
          <span className="text-paper">: </span>
          <span className="text-pink-soft">
            &apos;Politeknik Negeri Malang&apos;
          </span>
          <span className="text-paper">,</span>
          {"\n"}
          {"  "}
          <span className="text-lime">semester</span>
          <span className="text-paper">: </span>
          <span className="text-orange">5</span>
          <span className="text-paper">,</span>
          {"\n"}
          {"  "}
          <span className="text-lime">stack</span>
          <span className="text-paper">: [</span>
          <span className="text-pink-soft">&apos;Next.js&apos;</span>
          <span className="text-paper">, </span>
          <span className="text-pink-soft">&apos;Laravel&apos;</span>
          <span className="text-paper">, </span>
          <span className="text-pink-soft">&apos;Flutter&apos;</span>
          <span className="text-paper">],</span>
          {"\n"}
          {"  "}
          <span className="text-lime">location</span>
          <span className="text-paper">: </span>
          <span className="text-pink-soft">&apos;Kab. Kediri, ID&apos;</span>
          {"\n"}
          <span className="text-paper">{"}"}</span>
          <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-blink bg-lime" />
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="border-b-[3px] border-ink">
      <div className="grid lg:grid-cols-[1.62fr_1fr]">
        <div className="relative flex flex-col justify-center overflow-hidden bg-paper bg-grid px-5 py-12 sm:px-9 sm:py-16 lg:px-11 xl:px-14">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 border-[3px] border-ink bg-violet px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-paper shadow-brutal-sm sm:text-[11px]">
              Halo, saya Fanani
              <span aria-hidden="true" className="text-sm leading-none">
                👋
              </span>
            </p>
          </div>

          <h1 className="mt-6 animate-rise font-display text-[clamp(2.7rem,7.4vw,6.15rem)] uppercase leading-[0.88] tracking-[-0.035em] [animation-delay:80ms]">
            <span className="block">Software</span>
            <span className="block">Developer</span>
          </h1>

          <p className="mt-6 max-w-[33rem] animate-rise text-[15px] leading-relaxed text-ink/75 [animation-delay:160ms] sm:text-base">
            {profile.tagline}
          </p>

          <div className="mt-8 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 border-[3px] border-ink bg-lime px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] shadow-brutal transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              Lihat Project Saya
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center justify-center gap-2.5 border-[3px] border-ink bg-paper-light px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] shadow-brutal transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-pink-soft hover:shadow-none"
            >
              Download Resume
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="mt-9 animate-rise [animation-delay:320ms]">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink/60">
              Connect with me
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noreferrer"}
                  aria-label={social.label}
                  className="grid size-10 place-items-center border-[3px] border-ink bg-paper-light shadow-brutal-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-lime hover:shadow-brutal"
                >
                  <SocialIcon name={social.icon} className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-6 overflow-hidden border-t-[3px] border-ink bg-pink px-5 py-12 sm:px-8 lg:border-l-[3px] lg:border-t-0 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-dots opacity-20"
          />
          <StarBurst
            aria-hidden="true"
            className="absolute -right-8 -top-8 size-32 rotate-12 text-lime [&>path]:stroke-ink [&>path]:stroke-[4px] sm:size-40"
          />
          <span className="absolute left-4 top-5 rotate-[-6deg] border-[3px] border-ink bg-lime px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] sm:left-7">
            Open to work
          </span>

          <div className="relative z-10 mt-4">
            <PortraitPlaceholder />
          </div>

          <CodeCard />
        </div>
      </div>
    </section>
  );
}
