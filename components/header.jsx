"use client";

import { useEffect, useState } from "react";
import { navLinks, profile, socialLinks } from "@/lib/data";
import { ArrowRight, SocialIcon } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="flex h-[70px] items-stretch justify-between md:h-[76px]">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5 border-r-[3px] border-ink bg-lime px-4 transition-colors hover:bg-lime-soft sm:px-6"
          aria-label={`${profile.name} — beranda`}
        >
          <span className="grid size-8 place-items-center border-[3px] border-ink bg-paper font-mono text-[11px] font-bold transition-transform duration-200 group-hover:-rotate-6">
            {"</>"}
          </span>
          <span className="font-display text-sm tracking-tight sm:text-base">
            FANANI<span className="hidden sm:inline"> DEV</span>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-violet-deep"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[3px] w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="group hidden items-center gap-3 border-l-[3px] border-ink bg-violet px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-violet-deep sm:flex md:px-7"
        >
          Hubungi Saya
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="flex w-[62px] items-center justify-center border-l-[3px] border-ink bg-paper transition-colors hover:bg-lime lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[3px] w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6.5px] h-[3px] w-6 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[13px] h-[3px] w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t-[3px] border-ink bg-paper transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav aria-label="Navigasi mobile" className="flex flex-col">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b-[3px] border-ink px-5 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-lime"
            >
              <span>{link.label}</span>
              <span className="text-ink/40">0{index + 1}</span>
            </a>
          ))}
          <div className="flex items-center justify-between gap-4 px-5 py-5">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noreferrer"}
                  aria-label={social.label}
                  className="grid size-9 place-items-center border-[3px] border-ink bg-paper-light transition-colors hover:bg-pink"
                >
                  <SocialIcon name={social.icon} className="size-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-[3px] border-ink bg-violet px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-paper shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              Hubungi Saya
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
