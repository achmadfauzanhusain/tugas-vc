
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/", id: "dashboard" },
  { label: "Portfolio", href: "/startups", id: "startups" },
  { label: "Apply", href: "/apply", id: "apply" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(link) {
    return pathname === link.href;
  }

  const navItemClass = (link) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive(link)
        ? "bg-slate-900 text-white"
        : "text-slate-700 hover:bg-white/70"
    }`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200 backdrop-blur">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2 font-bold tracking-tight text-slate-900"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lime-300 text-sm">
            S
          </span>
          Chang
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={navItemClass(link)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/apply"
          className="hidden rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-lime-400 md:inline-block"
        >
          Get funded
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nb-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="nb-menu"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl bg-white/95 p-3 shadow ring-1 ring-slate-200 backdrop-blur md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={navItemClass(link)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className="block rounded-full bg-lime-300 px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:bg-lime-400"
          >
            Get funded
          </Link>
        </div>
      )}
    </header>
  );
}