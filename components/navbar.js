"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const pages = [
  { label: "Home", href: "/" },
  { label: "Startups", href: "/startups" },
  { label: "Apply", href: "/apply" },
  { label: "News", href: "/news" },
];

const sectors = [
  { label: "AI & Machine Learning", href: "/startup" },
  { label: "Fintech", href: "/startup" },
  { label: "Health & Biotech", href: "/startup" },
  { label: "Climate", href: "/startup" },
];

const socials = [
  { label: "Instagran", href: "https://instagram.com/_fauzanhusain/" },
  { label: "GitHub", href: "https://github.com/achmadfauzanhusain" },
];

const label =
  "text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500";
const bigLink =
  "block text-[22px] font-medium leading-9 tracking-[-0.02em] text-neutral-900 transition-colors hover:text-neutral-500";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Klik di luar panel untuk menutup */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={close}
          className="pointer-events-auto fixed inset-0 -z-10 cursor-default"
        />
      )}

      <a
        href="#main-content"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      <div className="relative flex items-start justify-between px-4 pt-4 sm:px-11">
        {/* Kiri: teks saja, tanpa background */}
        <Link
          href="/"
          onClick={close}
          aria-label="chang home"
          className="pointer-events-auto flex h-11 items-center text-xl font-semibold tracking-tight text-white"
        >
          chang
        </Link>

        {/* Tengah: pill Menu / panel */}
        <div
          className={`pointer-events-auto absolute left-1/2 top-3 z-10 -translate-x-1/2 p-2 transition-[width,background-color,box-shadow,backdrop-filter] duration-300 ease-out ${
            open
              ? "w-[min(440px,calc(100vw-1rem))] rounded-[22px] bg-white/85 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.04] backdrop-blur-2xl"
              : "w-[116px] rounded-[22px] bg-transparent sm:w-[140px]"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="chang-menu"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white text-[15px] font-medium text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.08] transition-colors hover:bg-neutral-50"
          >
            {open ? (
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2.5 6h13M2.5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
            {open ? "Close" : "Menu"}
          </button>

          {/* Isi panel */}
          <div
            id="chang-menu"
            className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out ${
              open
                ? "visible grid-rows-[1fr] opacity-100"
                : "invisible grid-rows-[0fr] opacity-0"
            }`}
          >
            <div
              className={`min-h-0 max-h-[calc(100dvh-6rem)] ${
                open ? "overflow-y-auto" : "overflow-hidden"
              }`}
            >
              <div className="px-3 pb-3 pt-6">
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <p className={`${label} mb-2`}>Product</p>
                    <ul>
                      {pages.map((p) => (
                        <li key={p.label}>
                          <Link href={p.href} onClick={close} className={bigLink}>
                            {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className={`${label} mb-2`}>Solutions</p>
                    <Link href="/startup" onClick={close} className={bigLink}>
                      Sectors
                    </Link>
                    <ul className="mt-0.5">
                      {sectors.map((s) => (
                        <li key={s.label}>
                          <Link
                            href={s.href}
                            onClick={close}
                            className="block pl-0.5 text-[14px] font-medium leading-7 text-neutral-500 transition-colors hover:text-neutral-900"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 border-t border-black/10 pt-4">
                  <p className={`${label} mb-2`}>Social media</p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-0.5">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] font-medium leading-7 text-neutral-700 transition-colors hover:text-neutral-950"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/apply"
          onClick={close}
          className="pointer-events-auto inline-flex h-11 items-center justify-center rounded-full bg-[#0b0b0b] px-5 text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-colors hover:bg-neutral-800"
        >
          Apply
        </Link>
      </div>
    </header>
  );
};

export default Navbar;