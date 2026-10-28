karena project saya tentang venture capital atau pendanaan startup jadi saya memanggil API berita tentang teknologi dari GNEWS dan output beritanya ada didalam halaman /news,

link api : https://gnews.io/dashboard


state loading yang ada di halaman /news: 
`      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        {loading && (
          <div className="space-y-4" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading news…</span>
            <FeaturedSkeleton />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        )}`

dan ini : `
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
        )}`

## Home
![hide](./public/tampilan/image.png)

## Navbar
![hide](./public/tampilan/image2.png)