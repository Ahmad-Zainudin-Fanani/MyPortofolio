import { skillsStrip } from "@/lib/data";
import { ArrowRight, TechIcon } from "@/components/icons";

export default function SkillsStrip() {
  return (
    <section id="skills" className="border-b-[3px] border-ink bg-paper-light">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between gap-4 border-b-[3px] border-ink bg-violet px-5 py-4 text-paper lg:w-[210px] lg:shrink-0 lg:border-b-0 lg:border-r-[3px] lg:px-6 lg:py-6">
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-paper/60">
              Kompetensi inti
            </p>
            <h2 className="mt-1 font-display text-2xl uppercase leading-none tracking-tight">
              Keahlian
            </h2>
          </div>
          <ArrowRight className="size-5" />
        </div>

        <div className="grid flex-1 grid-cols-3 md:grid-cols-6">
          {skillsStrip.map((skill, index) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center justify-center gap-2.5 px-2 py-6 transition-colors duration-200 hover:bg-lime md:py-7 ${
                index < skillsStrip.length - 1 ? "md:border-r-[3px] md:border-ink" : ""
              } ${(index + 1) % 3 !== 0 ? "border-r-[3px] border-ink" : ""} ${
                index < 3 ? "border-b-[3px] border-ink md:border-b-0" : ""
              }`}
            >
              <TechIcon
                name={skill.icon}
                className="size-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-ink/70">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
