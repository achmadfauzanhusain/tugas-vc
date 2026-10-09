
"use client";

import { useState } from "react";

const startups = [
  {
    name: "NeuraPay",
    sector: "Fintech",
    stage: "Seed",
    funding: "$2.5M",
    status: "Active",
  },
  {
    name: "GreenGrid",
    sector: "Climate",
    stage: "Pre-seed",
    funding: "$1.8M",
    status: "Active",
  },
  {
    name: "MedLoop",
    sector: "Health",
    stage: "Series A",
    funding: "$3.2M",
    status: "Scaling",
  },
  {
    name: "Stackly",
    sector: "AI",
    stage: "Pre-seed",
    funding: "$900K",
    status: "Active",
  },
  {
    name: "Orbit Labs",
    sector: "AI",
    stage: "Seed",
    funding: "$4.0M",
    status: "Exited",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-lime-100 text-slate-800",
    Scaling: "bg-sky-100 text-sky-700",
    Exited: "bg-[#075b91] text-white",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function StartupsPage() {
  const [search, setSearch] = useState("");

  const filteredStartups = startups.filter((startup) =>
    [
      startup.name,
      startup.sector,
      startup.stage,
      startup.status,
    ].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Blue hero header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0865a5] via-[#078acb] to-[#52c4f5] px-4 pb-12 pt-32 text-white sm:px-6 sm:pb-16 sm:pt-36">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-sky-100">
            Our portfolio
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Backing what&apos;s next.
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Meet the ambitious startups building the future
                with Chang.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="rounded-2xl border border-white/30 bg-white/15 px-5 py-3 backdrop-blur-md">
                <p className="text-xs text-white/70">Startups</p>
                <p className="mt-1 text-2xl font-extrabold">05</p>
              </div>

              <div className="rounded-2xl bg-lime-300 px-5 py-3 text-slate-900">
                <p className="text-xs text-slate-700">Total funding</p>
                <p className="mt-1 text-2xl font-extrabold">$12.4M</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio table */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
              Companies
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Our portfolio
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore the startups backed by Seedbridge.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
              className="w-full rounded-full border-0 bg-white py-3 pl-11 pr-5 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-sky-400"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-sky-50/80 text-slate-500">
                <tr>
                  <th className="px-6 py-5 font-semibold">Startup</th>
                  <th className="px-6 py-5 font-semibold">Sector</th>
                  <th className="px-6 py-5 font-semibold">Stage</th>
                  <th className="px-6 py-5 font-semibold">Funding</th>
                  <th className="px-6 py-5 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredStartups.map((startup) => (
                  <tr
                    key={startup.name}
                    className="transition hover:bg-sky-50/50"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-extrabold text-sky-700">
                          {startup.name.charAt(0)}
                        </div>

                        <span className="font-bold text-slate-900">
                          {startup.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {startup.sector}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {startup.stage}
                      </span>
                    </td>

                    <td className="px-6 py-5 font-bold text-sky-700">
                      {startup.funding}
                    </td>

                    <td className="px-6 py-5">
                      <StatusBadge status={startup.status} />
                    </td>
                  </tr>
                ))}

                {filteredStartups.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-16 text-center"
                    >
                      <p className="font-bold text-slate-700">
                        No startups found
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Try another startup name, sector, or stage.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/70 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredStartups.length} of {startups.length} startups
            </p>

            <span className="text-xs font-semibold text-sky-700">
              Seedbridge portfolio ↗
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-sky-50 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-xl font-extrabold">
              Building something ambitious?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your startup could be the next addition to our portfolio.
            </p>
          </div>

          <a
            href="/apply"
            className="shrink-0 rounded-full bg-lime-300 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-lime-200"
          >
            Apply to Chang ↗
          </a>
        </div>
      </section>

      <footer className="bg-[#075b91] px-4 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-extrabold">
            seedbridge<span className="text-lime-300">.</span>
          </p>
          <p className="text-xs text-sky-100">
            Backing the next generation of founders.
          </p>
        </div>
      </footer>
    </main>
  );
}