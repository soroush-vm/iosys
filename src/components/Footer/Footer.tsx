const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-sm text-slate-500">
          © 2026 Soroush. All rights reserved.
        </p>

        <div className="flex items-center gap-6">

          <a
            href="#hero"
            className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;