"use client";

import { useEffect, useState } from "react";
import { topHeadlines } from "@/services/external";

const categories = [
  { id: "technology", label: "Technology" },
];

const regions = [
  { id: "global", label: "Global", country: "us", lang: "en" },
];

const eyebrow =
  "text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";
const muted = "text-neutral-600 dark:text-neutral-400";
const border = "border-neutral-900/10 dark:border-white/10";
const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200";
const btnGhost =
  "inline-flex items-center justify-center rounded-full border border-neutral-900/15 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";

const pillBase =
  "rounded-full border px-4 py-2 text-sm font-medium transition-colors";
const pillActive =
  "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900";
const pillIdle =
  "border-neutral-900/15 text-neutral-700 hover:bg-neutral-900/5 dark:border-white/20 dark:text-neutral-300 dark:hover:bg-white/10";

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function Thumb({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-neutral-900/5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 dark:bg-white/10 ${className}`}
      >
        No image
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

function ArticleCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-colors hover:bg-neutral-900/[0.03] dark:hover:bg-white/[0.04] ${border}`}
    >
      <Thumb src={article.image} alt={article.title} className="h-48 w-full" />
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div>
          <p className={eyebrow}>{article.source?.name || "News"}</p>
          <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
            {article.title}
          </h3>
          <p className={`mt-3 line-clamp-3 text-sm leading-6 ${muted}`}>
            {article.description}
          </p>
        </div>
        <div className={`flex items-center justify-between text-xs ${muted}`}>
          <span>{formatDate(article.publishedAt)}</span>
          <span className="transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">
            Read more →
          </span>
        </div>
      </div>
    </a>
  );
}

function FeaturedCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid overflow-hidden rounded-3xl border transition-colors hover:bg-neutral-900/[0.03] md:grid-cols-2 dark:hover:bg-white/[0.04] ${border}`}
    >
      <Thumb
        src={article.image}
        alt={article.title}
        className="h-64 w-full md:h-full md:min-h-80"
      />
      <div className="flex flex-col justify-between gap-10 p-7 sm:p-10">
        <div>
          <p className={eyebrow}>
            Featured · {article.source?.name || "News"}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {article.title}
          </h2>
          <p className={`mt-4 line-clamp-4 text-base leading-7 ${muted}`}>
            {article.description}
          </p>
        </div>
        <div className={`flex items-center justify-between text-sm ${muted}`}>
          <span>{formatDate(article.publishedAt)}</span>
          <span className="transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">
            Read the full story →
          </span>
        </div>
      </div>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div className={`animate-pulse overflow-hidden rounded-2xl border ${border}`}>
      <div className="h-48 bg-neutral-900/5 dark:bg-white/10" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-1/3 rounded bg-neutral-900/10 dark:bg-white/10" />
        <div className="h-5 w-full rounded bg-neutral-900/10 dark:bg-white/10" />
        <div className="h-5 w-2/3 rounded bg-neutral-900/10 dark:bg-white/10" />
        <div className="h-3 w-full rounded bg-neutral-900/5 dark:bg-white/5" />
      </div>
    </div>
  );
}

const News = () => {
  const [category, setCategory] = useState("technology");
  const [regionId, setRegionId] = useState("id");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const region = regions.find((r) => r.id === regionId) || regions[0];

    async function load() {
      setLoading(true);
      setError("");

      try {
        const res = await topHeadlines({
          category,
          country: region.country,
          lang: region.lang,
          max: 10,
        });

        if (cancelled) return;

        if (res?.error) {
          setArticles([]);
          setError(res.message || "Failed to load news.");
        } else {
          // callApi bisa mengembalikan { data: { articles } } atau { articles }
          const list = res?.data?.articles ?? res?.articles ?? [];
          setArticles(list);
        }
      } catch (err) {
        if (cancelled) return;
        setArticles([]);
        setError("Something went wrong while loading the news.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [category, regionId, reloadKey]);

  const [featured, ...rest] = articles;

  return (
    <main
      id="main-content"
      className="bg-white text-neutral-900 dark:bg-black dark:text-white"
    >
      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-5 pb-12 pt-36 text-center sm:px-8 sm:pt-44"
      >
        <p className={`${eyebrow} mb-6`}>Market intelligence</p>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          News that moves
          <br />
          the market
        </h1>

        <p className={`mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg ${muted}`}>
          The latest headlines on startups, funding, and the industries we back.
          Stay ahead of what founders and investors are talking about.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={`${pillBase} ${category === c.id ? pillActive : pillIdle}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs ${muted}`}>Region</span>
            {regions.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRegionId(r.id)}
                className={`${pillBase} !px-3 !py-1.5 text-xs ${
                  regionId === r.id ? pillActive : pillIdle
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        {loading && (
          <div className="space-y-4">
            <div
              className={`h-80 animate-pulse rounded-3xl border bg-neutral-900/5 dark:bg-white/5 ${border}`}
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        )}

        {!loading && error && (
          <div
            className={`mx-auto max-w-xl rounded-2xl border p-10 text-center ${border}`}
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              Couldn&apos;t load the news
            </h2>
            <p className={`mt-3 text-sm leading-6 ${muted}`}>{error}</p>
            <button
              type="button"
              onClick={() => setReloadKey((k) => k + 1)}
              className={`${btnPrimary} mt-6`}
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div
            className={`mx-auto max-w-xl rounded-2xl border p-10 text-center ${border}`}
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              No stories right now
            </h2>
            <p className={`mt-3 text-sm leading-6 ${muted}`}>
              Nothing came back for this category and region. Try another filter.
            </p>
          </div>
        )}

        {!loading && !error && featured && (
          <div className="space-y-4">
            <FeaturedCard article={featured} />

            {rest.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((a) => (
                  <ArticleCard key={a.id || a.url} article={a} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-3xl bg-neutral-900 px-7 py-14 text-white sm:px-14 sm:py-20 dark:bg-neutral-900 dark:ring-1 dark:ring-white/10">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Building something worth reading about?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-neutral-300">
            Apply to chang and let us back the next story the headlines will
            be written about.
          </p>
          <a
            href="/apply"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Get started
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <a href="#top" className={btnGhost}>
          Back to top
        </a>
      </section>
    </main>
  );
};

export default News;