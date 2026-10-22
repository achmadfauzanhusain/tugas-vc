"use client";

import { useState } from "react";

const startups = [
  { name: "NeuraPay", sector: "Fintech", stage: "Seed", funding: "$2.5M", status: "Active" },
  { name: "GreenGrid", sector: "Climate", stage: "Pre-seed", funding: "$1.8M", status: "Active" },
  { name: "MedLoop", sector: "Health", stage: "Series A", funding: "$3.2M", status: "Scaling" },
  { name: "Stackly", sector: "AI", stage: "Pre-seed", funding: "$900K", status: "Active" },
  { name: "Orbit Labs", sector: "AI", stage: "Seed", funding: "$4.0M", status: "Exited" },
];

const eyebrow =
  "text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";
const muted = "text-neutral-600 dark:text-neutral-400";
const border = "border-neutral-900/10 dark:border-white/10";
const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200";

const dotColors = {
  Active: "bg-[#28c840]",
  Scaling: "bg-[#febc2e]",
  Exited: "bg-neutral-400",
};

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium">
      <span
        className={`h-2 w-2 rounded-full ${dotColors[status] || "bg-neutral-400"}`}
      />
      {status}
    </span>
  );
}

function Window({ title, children }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-2xl shadow-black/10 dark:bg-neutral-900 dark:shadow-black/50 ${border}`}
    >
      <div className={`flex items-center gap-2 border-b px-4 py-3 ${border}`}>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto pr-12 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function StartupsPage() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();
  const filteredStartups = startups.filter((startup) =>
    [startup.name, startup.sector, startup.stage, startup.status].some(
      (value) => value.toLowerCase().includes(query)
    )
  );

  return (
    <main
      id="main-content"
      className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white"
    >
      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-5 pb-12 pt-36 text-center sm:px-8 sm:pt-44"
      >
        <p className={`${eyebrow} mb-6`}>Our portfolio</p>

        <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Backing what&apos;s next.
        </h1>

        <p className={`mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg ${muted}`}>
          Meet the ambitious startups building the future with chang.
        </p>

        <div className="mx-auto mt-10 flex max-w-md justify-center gap-3">
          <div className={`flex-1 rounded-2xl border px-5 py-4 text-left ${border}`}>
            <p className={`text-xs ${muted}`}>Startups</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight">
              {String(startups.length).padStart(2, "0")}
            </p>
          </div>
          <div className={`flex-1 rounded-2xl border px-5 py-4 text-left ${border}`}>
            <p className={`text-xs ${muted}`}>Total funding</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight">$12.4M</p>
          </div>
        </div>
      </section>

      {/* Portfolio table */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              All companies
            </h2>
            <p className={`mt-2 text-sm ${muted}`}>
              Explore the startups backed by chang.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search startups..."
              aria-label="Search startups"
              className={`w-full rounded-full border bg-white py-3 pl-10 pr-5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900/40 dark:bg-neutral-900 dark:text-white dark:focus:border-white/40 ${border}`}
            />
          </div>
        </div>

        <Window title="Portfolio — Companies">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className={`border-b text-xs text-neutral-500 dark:text-neutral-400 ${border}`}>
                  <th className="px-6 py-3 font-medium">Startup</th>
                  <th className="px-6 py-3 font-medium">Sector</th>
                  <th className="px-6 py-3 font-medium">Stage</th>
                  <th className="px-6 py-3 font-medium">Funding</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className={`divide-y ${border}`}>
                {filteredStartups.map((startup) => (
                  <tr
                    key={startup.name}
                    className="transition-colors hover:bg-neutral-900/[0.03] dark:hover:bg-white/[0.04]"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900/5 text-xs font-semibold dark:bg-white/10">
                          {startup.name.charAt(0)}
                        </span>
                        <span className="font-medium">{startup.name}</span>
                      </div>
                    </td>

                    <td className={`px-6 py-4 ${muted}`}>{startup.sector}</td>

                    <td className="px-6 py-4">
                      <span className={`rounded-full border px-3 py-1 text-xs font-medium ${border} ${muted}`}>
                        {startup.stage}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-medium">{startup.funding}</td>

                    <td className="px-6 py-4">
                      <StatusBadge status={startup.status} />
                    </td>
                  </tr>
                ))}

                {filteredStartups.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-16 text-center">
                      <p className="font-medium">No startups found</p>
                      <p className={`mt-2 text-sm ${muted}`}>
                        Try another startup name, sector, or stage.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className={`flex items-center justify-between border-t px-6 py-3 text-xs ${border} ${muted}`}>
            <p>
              Showing {filteredStartups.length} of {startups.length} startups
            </p>
            <p>chang portfolio</p>
          </div>
        </Window>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-neutral-900 px-7 py-10 text-white sm:flex-row sm:items-center sm:px-12 dark:ring-1 dark:ring-white/10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Building something ambitious?
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-neutral-300">
              Your startup could be the next addition to our portfolio.
            </p>
          </div>

          <a
            href="/apply"
            className="inline-flex shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Apply to chang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${border}`}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
          <a href="#top" className="text-lg font-semibold tracking-tight">
            chang
          </a>
          <p className={`text-xs ${muted}`}>
            © 2026 chang. Backing the next generation of founders.
          </p>
        </div>
      </footer>
    </main>
  );
}