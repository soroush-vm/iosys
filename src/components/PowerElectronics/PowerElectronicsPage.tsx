const PowerElectronicsPage = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-amber-100 bg-amber-50/50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          Power Electronics
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Efficient power systems engineered for stability.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          This tab has its own component folder so power electronics sections can
          be developed and maintained independently.
        </p>
      </div>
    </section>
  );
};

export default PowerElectronicsPage;
