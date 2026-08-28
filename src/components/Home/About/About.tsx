const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Text Content */}

        <div>

          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
            About Me
          </span>

          <h2 className="max-w-2xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Building ideas through
            <span className="text-cyan-500">
              {" "}technology.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            I am a developer passionate about building modern digital
            experiences, connected systems and intelligent technologies.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-slate-500">
            My interests lie at the intersection of web development,
            IoT, automation and artificial intelligence. I enjoy
            turning complex ideas into simple and useful solutions.
          </p>

        </div>

        {/* Visual Card */}

        <div className="relative">

          <div className="absolute -inset-4 rounded-3xl bg-cyan-100/60 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/40">

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-cyan-500">
                  01
                </span>

                <p className="mt-3 text-sm text-slate-600">
                  Web Development
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-cyan-500">
                  02
                </span>

                <p className="mt-3 text-sm text-slate-600">
                  IoT Systems
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-cyan-500">
                  03
                </span>

                <p className="mt-3 text-sm text-slate-600">
                  Automation
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-cyan-500">
                  04
                </span>

                <p className="mt-3 text-sm text-slate-600">
                  AI & ML
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;