"use client";

import { useState } from "react";

const eyebrow =
  "text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";
const muted = "text-neutral-600 dark:text-neutral-400";
const border = "border-neutral-900/10 dark:border-white/10";

const inputClass = `mt-2 w-full rounded-xl border bg-neutral-900/[0.03] px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900/40 focus:bg-white dark:bg-white/[0.04] dark:text-white dark:focus:border-white/40 dark:focus:bg-neutral-900 ${border}`;

const labelClass = "block text-sm font-medium";

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

export default function ApplyPage() {
  const [form, setForm] = useState({
    startupName: "",
    email: "",
    sector: "AI & Machine Learning",
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
    <main
      id="main-content"
      className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white"
    >
      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-3xl px-5 pb-12 pt-36 text-center sm:px-8 sm:pt-44"
      >
        <p className={`${eyebrow} mb-6`}>Start your journey</p>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Apply for funding.
        </h1>

        <p className={`mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg ${muted}`}>
          Tell us about your startup, your vision, and what you want to build.
          Let&apos;s explore what we can achieve together.
        </p>

        <div
          className={`mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${border} ${muted}`}
        >
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          Response time: within 14 days
        </div>
      </section>

      {/* Application form */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
        {submitted ? (
          <Window title="Application — Submitted">
            <div role="status" className="p-8 sm:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-lg font-semibold text-white dark:bg-white dark:text-neutral-900">
                ✓
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                Application completed
              </h2>

              <p className={`mt-3 max-w-md text-sm leading-7 ${muted}`}>
                Your form passed the demo submission step. No data has been
                sent or saved to a server yet.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Back to application
              </button>
            </div>
          </Window>
        ) : (
          <Window title="Founder application">
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tell us about your startup
                </h2>
                <p className={`mt-2 text-sm leading-6 ${muted}`}>
                  Complete the details below to introduce your company to chang.
                </p>
              </div>

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

                <label className={`${labelClass} sm:col-span-2`}>
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

              <div className={`rounded-2xl border p-4 ${border}`}>
                <p className="text-sm font-medium">What happens next?</p>
                <p className={`mt-1 text-sm leading-6 ${muted}`}>
                  We review your startup information and aim to respond within
                  14 days.
                </p>
              </div>

              <div
                className={`flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${border}`}
              >
                <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                  Please provide accurate information about your startup.
                </p>

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-black"
                >
                  Submit application
                </button>
              </div>
            </form>
          </Window>
        )}
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