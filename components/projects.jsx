"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectArt from "@/components/project-art";
import { ArrowLeft, ArrowRight, ArrowUpRight, SocialIcon } from "@/components/icons";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [openSlug, setOpenSlug] = useState(null);

  const project = projects[active];
  const expanded = openSlug === project.slug;

  const goTo = (index) => {
    setActive((index + projects.length) % projects.length);
    setOpenSlug(null);
  };

  return (
    <div className="min-w-0 p-5 sm:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/55">
            Portfolio / 2025 — 2026
          </p>
          <h2
            id="projects-heading"
            className="mt-2 font-display text-[clamp(1.65rem,3.2vw,2.6rem)] uppercase leading-none tracking-tight"
          >
            Featured Projects
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setViewAll((value) => !value)}
          className="group inline-flex items-center gap-2 border-[3px] border-ink bg-paper-light px-3.5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-lime hover:shadow-none"
        >
          {viewAll ? "Tutup Galeri" : "Lihat Semua Project"}
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>

      {viewAll ? (
        <div className="mt-7 grid animate-rise gap-4 sm:grid-cols-2">
          {projects.map((item, index) => (
            <div
              key={item.slug}
              className="group min-w-0 border-[3px] border-ink bg-paper-light shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
            >
              <button
                type="button"
                onClick={() => {
                  setActive(index);
                  setViewAll(false);
                  setOpenSlug(null);
                }}
                className="block w-full text-left"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b-[3px] border-ink bg-paper">
                  <ProjectArt slug={item.slug} title={item.title} />
                  <span className="absolute left-2.5 top-2.5 border-[2px] border-ink bg-lime px-2 py-0.5 font-mono text-[9px] font-bold">
                    {item.index}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/55">
                      {item.year} · {item.type}
                    </p>
                    <h3 className="mt-1 truncate font-display text-lg uppercase leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="grid size-8 shrink-0 place-items-center border-[3px] border-ink bg-paper transition-colors group-hover:bg-pink">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </button>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t-[2px] border-ink/15 px-4 py-2.5">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/45">
                  Source code
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.repos.map((repo) => (
                    <a
                      key={repo.href}
                      href={repo.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${repo.label} untuk project ${item.title}`}
                      className="inline-flex items-center gap-1.5 border-[2px] border-ink bg-paper px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.08em] transition-colors hover:bg-lime"
                    >
                      <SocialIcon name="github" className="size-3" />
                      {repo.short}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div key={project.slug} className="mt-7 animate-rise">
            <div className="border-[3px] border-ink bg-pink p-3 shadow-brutal-lg sm:p-4">
              <div className="relative aspect-[16/9] overflow-hidden border-[3px] border-ink bg-paper">
                <ProjectArt slug={project.slug} title={project.title} />
                <span className="absolute left-3 top-3 border-[2px] border-ink bg-lime px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.12em] shadow-brutal-sm">
                  {project.index}
                </span>
                <span className="absolute right-3 top-3 border-[2px] border-ink bg-paper px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.12em]">
                  {project.year}
                </span>
              </div>
            </div>

            <div className="border-[3px] border-t-0 border-ink bg-paper-light p-5 sm:p-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-violet-deep">
                {project.type}
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-[2px] border-ink bg-paper px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {expanded && (
                <div className="mt-5 animate-rise border-[3px] border-ink bg-lime p-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                    Apa yang saya kerjakan
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2 text-[13px] leading-relaxed text-ink/85"
                      >
                        <span aria-hidden="true" className="font-mono font-bold">
                          &gt;
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOpenSlug(expanded ? null : project.slug)}
                    aria-expanded={expanded}
                    className="group inline-flex items-center gap-2 border-[3px] border-ink bg-paper-light px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-lime hover:shadow-none"
                  >
                    {expanded ? "Tutup Detail" : "Detail Project"}
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {project.repos.map((repo) => (
                    <a
                      key={repo.href}
                      href={repo.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${repo.label} untuk project ${project.title}`}
                      className="group inline-flex items-center gap-2 border-[3px] border-ink bg-ink px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-paper shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-violet hover:shadow-none"
                    >
                      <SocialIcon name="github" className="size-3.5" />
                      {repo.short}
                      <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                  ))}
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink/45">
                  {project.index} / 0{projects.length}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Pilih project">
              {projects.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Tampilkan project ${item.title}`}
                  onClick={() => goTo(index)}
                  className={`size-3 border-[2px] border-ink transition-colors ${
                    index === active ? "bg-ink" : "bg-paper hover:bg-pink"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Project sebelumnya"
                className="grid size-10 place-items-center border-[3px] border-ink bg-paper-light shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-pink hover:shadow-none"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Project selanjutnya"
                className="grid size-10 place-items-center border-[3px] border-ink bg-paper-light shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-lime hover:shadow-none"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
