
"use client";

import { useState } from "react";

const inputClass =
  "mt-2 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-sky-400";

const labelClass = "block text-sm font-semibold text-slate-700";

export default function ApplyPage() {
  const [form, setForm] = useState({
    startupName: "",
    email: "",
    sector: "AI & Machine Learning",
    stage: "Pre-seed",
    funding: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Demo only: this does not send data to a server.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Blue hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0865a5] via-[#078acb] to-[#52c4f5] px-4 pb-12 pt-32 text-white sm:px-6 sm:pb-16 sm:pt-36">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-sky-100">
            Start your journey
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Apply for funding.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Tell us about your startup, your vision, and what you
            want to build. Let&apos;s explore what we can achieve together.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Response time: within 14 days
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-7">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
            Founder application
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Tell us about your startup
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Complete the details below to introduce your company to Chang.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            className="rounded-3xl border border-lime-200 bg-lime-50 p-8 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300 text-xl font-extrabold text-slate-900">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-extrabold">
              Application completed
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Your form passed the demo submission step. No data has
              been sent or saved to a server yet.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              Back to application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Startup name
                <input
                  name="startupName"
                  value={form.startupName}
                  onChange={handleChange}
                  placeholder="e.g. Acme AI"
                  autoComplete="organization"
                  required
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                Founder email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@startup.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                Sector
                <select
                  name="sector"
                  value={form.sector}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>AI &amp; Machine Learning</option>
                  <option>Fintech</option>
                  <option>Health &amp; Biotech</option>
                  <option>Climate</option>
                </select>
              </label>

              <label className={labelClass}>
                Funding stage
                <select
                  name="stage"
                  value={form.stage}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="funding" className={labelClass}>
                Funding requested (USD)
              </label>

              <div className="relative mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  $
                </span>

                <input
                  id="funding"
                  type="number"
                  name="funding"
                  value={form.funding}
                  onChange={handleChange}
                  min="1"
                  step="any"
                  placeholder="250000"
                  className={`${inputClass} mt-0 pl-9`}
                />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Enter the amount you plan to raise in US dollars.
              </p>
            </div>

            <label className={labelClass}>
              What are you building?
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe the problem, your solution, your target customers, and your progress so far..."
                className={`${inputClass} resize-y`}
              />
            </label>

            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="text-sm font-bold text-sky-800">
                What happens next?
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                We review your startup information and aim to respond
                within 14 days.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-400">
                Please provide accurate information about your startup.
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-extrabold text-slate-900 transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                Submit application
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        )}
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