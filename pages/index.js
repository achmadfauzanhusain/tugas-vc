const portfolio = [
  { name: "NeuraPay", stage: "Seed", date: "Today at 9:14 AM", amount: "$2.5M" },
  { name: "GreenGrid", stage: "Pre-seed", date: "Yesterday at 6:02 PM", amount: "$1.8M" },
  { name: "MedLoop", stage: "Series A", date: "Yesterday at 3:40 PM", amount: "$3.2M" },
  { name: "Stackly", stage: "Pre-seed", date: "9/23/26, 1:18 PM", amount: "$900K" },
];

const stats = [
  { label: "Capital deployed", value: "$420M" },
  { label: "Startups funded", value: "320+" },
  { label: "Acceptance rate", value: "1.5%" },
  { label: "Successful exits", value: "48" },
];

const features = [
  {
    title: "Decisions in days, not months",
    body: "Send your application and get an answer fast. No endless rounds of meetings before you hear back.",
  },
  {
    title: "Founder-friendly terms",
    body: "Simple, standard paperwork with no surprises, so you can spend your time building the company.",
  },
  {
    title: "A network of operators",
    body: "Intro to engineers, designers, and operators who have already scaled what you are building.",
  },
  {
    title: "Support at every stage",
    body: "We reserve capital for follow-on rounds and stay with you from the first check to the exit.",
  },
  {
    title: "Transparent from day one",
    body: "Clear reporting, clear expectations, and a team that answers when you write to us.",
  },
];

const sectors = [
  { name: "AI & Machine Learning", percentage: 38 },
  { name: "Fintech", percentage: 24 },
  { name: "Health & Biotech", percentage: 20 },
  { name: "Climate", percentage: 18 },
];

const useCases = [
  {
    tag: "AI & Machine Learning",
    title: "Back the teams building intelligent software.",
    href: "/sectors#ai",
  },
  {
    tag: "Fintech",
    title: "Fund the next generation of payments and banking.",
    href: "/sectors#fintech",
  },
  {
    tag: "Health & Biotech",
    title: "Help care reach more people, faster.",
    href: "/sectors#health",
  },
  {
    tag: "Climate",
    title: "Build bigger without costing the planet.",
    href: "/sectors#climate",
  },
];

const faqs = [
  {
    q: "What is chang?",
    a: "chang is a venture capital firm that backs early-stage startups with capital, mentorship, and a network of operators who have built companies before.",
  },
  {
    q: "Who can apply?",
    a: "Any early-stage team building a technology company. We focus on AI, fintech, health and biotech, and climate.",
  },
  {
    q: "How selective is the process?",
    a: "Very. Our acceptance rate is around 1.5%, so we read every application carefully and answer all of them.",
  },
  {
    q: "How long does a decision take?",
    a: "Most founders hear back within seven days of submitting a complete application.",
  },
  {
    q: "Do you invest in follow-on rounds?",
    a: "Yes. We reserve capital for follow-on rounds so we can keep supporting the companies we back.",
  },
  {
    q: "Where are you based?",
    a: "We work with founders worldwide and meet remotely, with regular in-person events for our portfolio.",
  },
];

const footerCols = [
  {
    title: "Product",
    links: [
      ["Overview", "#overview"],
      ["Sectors", "#sectors"],
      ["Use cases", "#use-cases"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Blog", "/blog"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Notice", "/privacy"],
      ["Terms of Use", "/terms"],
      ["Cookie Policy", "/cookies"],
    ],
  },
  {
    title: "Social",
    links: [
      ["X", "https://x.com"],
      ["GitHub", "https://github.com"],
      ["LinkedIn", "https://linkedin.com"],
    ],
  },
];

const eyebrow =
  "text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";
const muted = "text-neutral-600 dark:text-neutral-400";
const border = "border-neutral-900/10 dark:border-white/10";
const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200";
const btnGhost =
  "inline-flex items-center justify-center rounded-full border border-neutral-900/15 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";

function Window({ title, children, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-2xl shadow-black/10 dark:bg-neutral-900 dark:shadow-black/50 ${border} ${className}`}
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

export default function Dashboard() {
  return (
    <main
      id="main-content"
      className="bg-white text-neutral-900 dark:bg-black dark:text-white"
    >
      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-5 pb-20 pt-36 text-center sm:px-8 sm:pt-44"
      >
        <p className={`${eyebrow} mb-6`}>Your partner in venture capital</p>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          The founder-first
          <br />
          venture firm
        </h1>

        <p className={`mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg ${muted}`}>
          Capital, mentorship, and a network of operators for early-stage
          startups. One partner from the first check to the exit.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <a href="/apply" className={btnPrimary}>
            Get started
          </a>
          <p className={`text-xs ${muted}`}>
            Applications open · Next batch starts in January
          </p>
        </div>

        {/* Portfolio window (mirip jendela Finder) */}
        <div id="overview" className="mx-auto mt-20 max-w-4xl text-left">
          <Window title="Portfolio — Latest funded">
            <div className="grid grid-cols-[1fr_auto] gap-x-6 px-5 py-2 text-xs text-neutral-500 sm:grid-cols-[1.4fr_1fr_1fr_auto] dark:text-neutral-400">
              <span className="py-2">Name</span>
              <span className="hidden py-2 sm:block">Stage</span>
              <span className="hidden py-2 sm:block">Date funded</span>
              <span className="py-2 text-right">Amount</span>
            </div>
            <ul className={`divide-y ${border} border-t ${border}`}>
              {portfolio.map((s) => (
                <li
                  key={s.name}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-6 px-5 py-3 text-sm sm:grid-cols-[1.4fr_1fr_1fr_auto]"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900/5 text-xs font-semibold dark:bg-white/10">
                      {s.name.charAt(0)}
                    </span>
                    {s.name}
                  </span>
                  <span className={`hidden sm:block ${muted}`}>{s.stage}</span>
                  <span className={`hidden sm:block ${muted}`}>{s.date}</span>
                  <span className="text-right font-medium">{s.amount}</span>
                </li>
              ))}
            </ul>
          </Window>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hundreds of millions.
            <br />
            Zero red tape.
          </h2>
          <p className={`mt-5 text-base leading-7 sm:text-lg ${muted}`}>
            We back ambitious teams early and keep backing them as they grow.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl border p-6 ${border}`}
            >
              <p className={`text-sm ${muted}`}>{s.label}</p>
              <p className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Numbered features */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Never wait on your
            <br />
            investor again
          </h2>
          <p className={`mt-5 text-base leading-7 sm:text-lg ${muted}`}>
            We move at the speed of the founders we back, with fast answers and
            real help when you need it.
          </p>
        </div>

        <ol className={`mt-16 divide-y border-y ${border} ${border}`}>
          {features.map((f, i) => (
            <li
              key={f.title}
              className="grid gap-4 py-8 sm:grid-cols-[6rem_1fr_1.2fr] sm:items-baseline"
            >
              <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className={`text-base leading-7 ${muted}`}>{f.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Sectors */}
      <section id="sectors" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Find your
              <br />
              fit. Fast.
            </h2>
            <p className={`mt-5 max-w-md text-base leading-7 sm:text-lg ${muted}`}>
              Our capital goes to the sectors shaping the next decade of
              technology and industry.
            </p>
            <a href="#use-cases" className={`${btnGhost} mt-8`}>
              Explore sectors
            </a>
          </div>

          <Window title="Funding by sector">
            <div className="space-y-6 p-6">
              {sectors.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className={muted}>{s.percentage}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-900/10 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-neutral-900 dark:bg-white"
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Window>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for every kind
            <br />
            of founder
          </h2>
          <p className={`mt-5 text-base leading-7 sm:text-lg ${muted}`}>
            One partner for your team, your product, and your next round.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {useCases.map((u) => (
            <a
              key={u.tag}
              href={u.href}
              className={`group flex min-h-56 flex-col justify-between rounded-2xl border p-7 transition-colors hover:bg-neutral-900/[0.03] dark:hover:bg-white/[0.04] ${border}`}
            >
              <p className={eyebrow}>{u.tag}</p>
              <div>
                <h3 className="text-2xl font-semibold leading-snug tracking-tight">
                  {u.title}
                </h3>
                <p className={`mt-4 text-sm ${muted} transition-colors group-hover:text-neutral-900 dark:group-hover:text-white`}>
                  Learn more about {u.tag} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Enterprise-style block */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-3xl bg-neutral-900 px-7 py-14 text-white sm:px-14 sm:py-20 dark:bg-neutral-900 dark:ring-1 dark:ring-white/10">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Governed, on your terms.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-neutral-300">
            Clear terms and a transparent process, with reporting and
            oversight built in from the first day.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-neutral-200 sm:grid-cols-2">
            {[
              "Standard, simple paperwork",
              "Regular investor updates",
              "Clear governance",
              "Follow-on reserves",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Common questions
        </h2>
        <p className={`mt-4 text-center text-sm ${muted}`}>
          Still have a question?{" "}
          <a
            href="/contact"
            className="text-neutral-900 underline underline-offset-4 dark:text-white"
          >
            Write to the team
          </a>
          . One of us will read it.
        </p>

        <div className={`mt-12 divide-y border-y ${border} ${border}`}>
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl font-light text-neutral-500 transition-transform group-open:rotate-45 dark:text-neutral-400">
                  +
                </span>
              </summary>
              <p className={`mt-3 max-w-2xl text-base leading-7 ${muted}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Ready to build
          <br />
          what&apos;s next?
        </h2>
        <p className={`mx-auto mt-5 max-w-md text-base leading-7 sm:text-lg ${muted}`}>
          Apply to chang and see how fast the right partner can move.
        </p>
        <a href="/apply" className={`${btnPrimary} mt-9`}>
          Get started
        </a>
      </section>

      {/* Footer */}
      <footer className={`border-t ${border}`}>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#top" className="text-lg font-semibold tracking-tight">
              chang
            </a>
            <p className={`mt-3 max-w-[16rem] text-sm leading-6 ${muted}`}>
              The founder-first venture firm.
            </p>
            <a href="/apply" className={`${btnPrimary} mt-6 !px-5 !py-2`}>
              Get started
            </a>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`${muted} transition-colors hover:text-neutral-900 dark:hover:text-white`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`border-t ${border}`}>
          <p className={`mx-auto max-w-6xl px-5 py-6 text-xs sm:px-8 ${muted}`}>
            © 2026 chang. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}