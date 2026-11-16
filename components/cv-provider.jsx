"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cvPages, profile } from "@/lib/data";
import { ArrowUpRight } from "@/components/icons";

const CvContext = createContext(null);

export function useCv() {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error("useCv harus dipakai di dalam CvProvider");
  }

  return context;
}

export function CvButton({ children, className = "", ...props }) {
  const { openCv } = useCv();

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={openCv}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

function CvDialog({ onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const scrollRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);

  // Ukur tinggi toolbar supaya area gambar tidak tertutup saat toolbar tampil.
  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const measure = () => setHeaderHeight(header.offsetHeight);
    measure();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Scroll ke bawah -> toolbar turun keluar frame. Scroll ke atas -> muncul lagi.
  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    let lastScrollTop = scroller.scrollTop;
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      const scrollTop = scroller.scrollTop;
      const delta = scrollTop - lastScrollTop;

      if (scrollTop <= 4) {
        setHeaderHidden(false);
        lastScrollTop = scrollTop;
      } else if (delta > 8) {
        setHeaderHidden(true);
        lastScrollTop = scrollTop;
      } else if (delta < -8) {
        setHeaderHidden(false);
        lastScrollTop = scrollTop;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(evaluate);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center bg-ink/80 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-title"
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl animate-rise flex-col overflow-hidden border-[3px] border-ink bg-paper shadow-brutal-lg sm:max-h-[calc(100dvh-3rem)]"
      >
        <div
          ref={headerRef}
          style={{
            transform: headerHidden
              ? "translate3d(0, calc(-100% - 4px), 0)"
              : "translate3d(0, 0, 0)",
          }}
          className={`absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 border-b-[3px] border-ink bg-lime px-4 py-3 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:px-6 ${
            headerHidden ? "pointer-events-none" : ""
          }`}
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center border-[3px] border-ink bg-paper font-mono text-[10px] font-bold">
              CV
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink/60">
                Curriculum Vitae
              </p>
              <p
                id="cv-title"
                className="truncate font-display text-sm uppercase tracking-tight"
              >
                Ahmad Zainudin Fanani
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden border-2 border-ink bg-paper-light px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest sm:inline-flex">
              {cvPages.length} halaman
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Tutup CV"
              className="group inline-flex shrink-0 items-center gap-2 border-[3px] border-ink bg-paper-light px-2.5 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-pink hover:shadow-none sm:px-3.5"
            >
              <span className="hidden sm:inline">Tutup</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                className="size-4"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{ paddingTop: headerHeight }}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        >
          <div className="space-y-5 p-4 sm:p-6">
            {cvPages.map((page, index) => (
              <figure
                key={page.src}
                className="border-[3px] border-ink bg-paper-light shadow-brutal"
              >
                <div
                  className={`flex items-center justify-between gap-3 border-b-[3px] border-ink px-3 py-2 ${
                    index % 2 === 0 ? "bg-lime" : "bg-pink"
                  }`}
                >
                  <figcaption className="font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                    CV — Halaman {String(index + 1).padStart(2, "0")}
                  </figcaption>
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/55">
                    {index + 1} / {cvPages.length}
                  </span>
                </div>

                <div className="p-2.5 sm:p-3">
                  <div className="overflow-hidden border-[3px] border-ink bg-white">
                    <Image
                      src={page.src}
                      alt={`Halaman ${index + 1} CV ${profile.name}`}
                      width={page.width}
                      height={page.height}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 860px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </figure>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-ink bg-pink px-4 py-3 sm:px-6">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/65">
              {profile.name} · CV
            </p>
            <a
              href={profile.gmailCompose}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border-[3px] border-ink bg-paper-light px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime hover:shadow-none"
            >
              Hubungi via Email
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CvProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openCv = useCallback(() => setOpen(true), []);
  const closeCv = useCallback(() => setOpen(false), []);

  return (
    <CvContext.Provider value={{ openCv }}>
      {children}
      {open && <CvDialog onClose={closeCv} />}
    </CvContext.Provider>
  );
}
