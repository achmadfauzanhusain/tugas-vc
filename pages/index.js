
const stats = [
  {
    label: "Capital deployed",
    value: "$420M",
    style: "bg-lime-300",
    labelStyle: "text-slate-700",
  },
  {
    label: "Startups funded",
    value: "320+",
    style: "bg-white",
    labelStyle: "text-slate-500",
  },
  {
    label: "Acceptance rate",
    value: "1.5%",
    style: "bg-sky-50",
    labelStyle: "text-slate-500",
  },
  {
    label: "Successful exits",
    value: "48",
    style: "bg-sky-100",
    labelStyle: "text-slate-600",
  },
];

const sectors = [
  { name: "AI & Machine Learning", percentage: 38, color: "bg-sky-500" },
  { name: "Fintech", percentage: 24, color: "bg-lime-400" },
  { name: "Health & Biotech", percentage: 20, color: "bg-blue-300" },
  { name: "Climate", percentage: 18, color: "bg-sky-200" },
];

const startups = [
  { name: "NeuraPay", amount: "$2.5M" },
  { name: "GreenGrid", amount: "$1.8M" },
  { name: "MedLoop", amount: "$3.2M" },
  { name: "Stackly", amount: "$900K" },
];

export default function Dashboard() {
  return (
    <main>
      {/* Blue hero */}
      <section className="relative overflow-hidden rounded-b-[28px] bg-gradient-to-br from-[#0865a5] via-[#078acb] to-[#52c4f5] px-4 pb-20 pt-32 text-center text-white sm:pb-28 sm:pt-40">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-sky-100">
            Your partner in venture capital
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Funding the founders
            <br />
            building what&apos;s next
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Chang backs early-stage startups with capital,
            mentorship and a network of operators.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#funding"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              View details
            </a>

            <a
              href="/apply"
              className="rounded-full bg-lime-300 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-blue-950/10 transition hover:bg-lime-200"
            >
              Get started ↗
            </a>
          </div>

          {/* Floating metrics */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
            <div className="rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md">
              <p className="text-xs text-white/70">Capital</p>
              <p className="mt-2 text-xl font-extrabold">$420M</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md">
              <p className="text-xs text-white/70">Portfolio</p>
              <p className="mt-2 text-xl font-extrabold">320+</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md">
              <p className="text-xs text-white/70">Acceptance</p>
              <p className="mt-2 text-xl font-extrabold">1.5%</p>
            </div>
            <div className="rounded-2xl border border-lime-200/50 bg-lime-300 p-4 text-slate-900">
              <p className="text-xs text-slate-700">Successful exits</p>
              <p className="mt-2 text-xl font-extrabold">48</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / statistics */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
            About Seedbridge
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            A funding partner
            <br />
            dedicated to building{" "}
            <span className="text-sky-500">smarter</span>
            <br />
            and <span className="text-slate-400">more adaptive</span> startups.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            We connect ambitious founders with capital, strategic
            guidance and a network built to help businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-3xl p-6 ring-1 ring-slate-200/70 ${stat.style}`}
            >
              <p className={`text-sm font-semibold ${stat.labelStyle}`}>
                {stat.label}
              </p>
              <p className="mt-8 text-4xl font-extrabold tracking-tight">
                {stat.value}
              </p>
              <div className="mt-5 h-1.5 w-12 rounded-full bg-sky-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Funding sectors */}
      <section id="funding" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
              Our investment focus
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Capital meets innovation.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
              Supporting ambitious teams shaping the next generation
              of technology and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 lg:col-span-2 sm:p-8">
              <h3 className="text-lg font-extrabold">
                Funding by sector
              </h3>

              <div className="mt-7 space-y-6">
                {sectors.map((sector) => (
                  <div key={sector.name}>
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="font-semibold text-slate-700">
                        {sector.name}
                      </span>
                      <span className="font-bold text-slate-500">
                        {sector.percentage}%
                      </span>
                    </div>

                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${sector.color}`}
                        style={{ width: `${sector.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-sky-600 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-100">
                Our mission
              </p>

              <h3 className="mt-5 text-2xl font-extrabold leading-snug">
                Great ideas deserve the right support.
              </h3>

              <p className="mt-4 text-sm leading-7 text-sky-100">
                From early funding to meaningful connections, we help
                founders turn ambitious ideas into growing companies.
              </p>

              <a
                href="/apply"
                className="mt-8 inline-flex rounded-full bg-lime-300 px-5 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-lime-200"
              >
                Apply to Seedbridge ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest startups */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
              Our portfolio
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Latest funded
            </h2>
          </div>

          <a
            href="/startups"
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-lime-200"
          >
            View all startups ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {startups.map((startup, index) => (
            <article
              key={startup.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 font-extrabold text-sky-600">
                  {startup.name.charAt(0)}
                </span>
                <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Funded
                </span>
              </div>

              <h3 className="mt-6 text-lg font-extrabold">
                {startup.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Funding amount
              </p>
              <p className="mt-3 text-2xl font-extrabold text-sky-600">
                {startup.amount}
              </p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${
                    index % 2 === 0 ? "bg-sky-500" : "bg-lime-400"
                  }`}
                  style={{ width: `${65 + index * 8}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#075b91] px-4 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-extrabold">
            chang<span className="text-lime-300">.</span>
          </p>
          <p className="text-xs text-sky-100">
            Backing the next generation of founders.
          </p>
        </div>
      </footer>
    </main>
  );
}