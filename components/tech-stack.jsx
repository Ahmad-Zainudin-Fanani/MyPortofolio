import { Fragment } from "react";
import { techStacks } from "@/lib/data";
import { ArrowRight, ArrowUpRight, TechIcon } from "@/components/icons";

export default function TechStack() {
  return (
    <aside
      id="tech-stack"
      className="flex min-w-0 flex-col border-t-[3px] border-ink bg-lime p-5 sm:p-8 lg:border-l-[3px] lg:border-t-0 xl:p-10"
    >
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/55">
        Teknologi yang saya gunakan
      </p>
      <h2 className="mt-2 font-display text-[clamp(1.65rem,3.2vw,2.6rem)] uppercase leading-none tracking-tight">
        Tech Stack
      </h2>

      <div className="mt-6 flex flex-col gap-3">
        {techStacks.map((stack) => (
          <div
            key={stack.title}
            className="group border-[3px] border-ink bg-paper-light p-3.5 shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid size-11 shrink-0 place-items-center border-[3px] border-ink ${stack.color} transition-transform duration-300 group-hover:-rotate-6`}
              >
                <TechIcon name={stack.icon} className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg uppercase leading-none tracking-tight">
                  {stack.title}
                </h3>
                <p className="mt-1.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-ink/60">
                  {stack.items.map((item, index) => (
                    <Fragment key={item}>
                      <span className="whitespace-nowrap">{item}</span>
                      {index < stack.items.length - 1 ? " · " : ""}
                    </Fragment>
                  ))}
                </p>
              </div>
              <ArrowUpRight className="ml-auto size-4 shrink-0 opacity-35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-[3px] border-ink bg-paper-light p-4">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink/50">
          Teknologi pendukung
        </p>
        <p className="mt-1.5 text-[13px] font-medium leading-snug">
          Python, OpenCV, scikit-learn, Pentaho Data Integration, Microsoft Power BI
        </p>
      </div>

      <a
        href="#skills"
        className="group mt-5 flex items-center justify-between gap-3 border-[3px] border-ink bg-paper-light px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-violet hover:text-paper hover:shadow-none"
      >
        Lihat Semua Keahlian
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      <div className="mt-3 border-[3px] border-ink bg-lime-soft p-4 shadow-brutal-sm">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink/55">
          Bidang yang saya minati
        </p>
        <p className="mt-1.5 text-[13px] font-medium leading-snug">
          Web Development, Mobile Development, Computer Vision, dan Machine Learning.
        </p>
      </div>

      <div className="mt-auto pt-8">
        <div className="border-[3px] border-ink bg-violet p-4 text-paper shadow-brutal-sm">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-paper/60">
            Bahasa
          </p>
          <div className="mt-2.5 flex flex-col items-start gap-2">
            <span className="border-2 border-paper/60 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.08em]">
              Indonesia · Native
            </span>
            <span className="border-2 border-paper/60 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.08em]">
              English · Basic
            </span>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/55">
          <span aria-hidden="true" className="size-2 border border-ink bg-ink" />
          Berlokasi di Kabupaten Kediri, Indonesia
        </p>
      </div>
    </aside>
  );
}
