const BmsPage = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-violet-100 bg-violet-50/60 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
          BMS
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Battery management built for performance and safety.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          This BMS page is separated into its own page folder to keep monitoring,
          diagnostics, and battery features neatly grouped.
        </p>
      </div>
    </section>
  );
};

export default BmsPage;
