const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-32"
    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get In Touch
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Have an idea?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Whether you have a project in mind, an interesting idea,
          or simply want to connect, I would be happy to hear from you.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-10 inline-flex items-center rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          Let's Talk
          <span className="ml-3 text-xl">
            ↗
          </span>
        </a>

      </div>

    </section>
  );
};

export default Contact;