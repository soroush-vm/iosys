const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern, responsive and scalable web applications using modern technologies.",
  },
  {
    number: "02",
    title: "IoT & Smart Systems",
    description:
      "Designing connected devices and smart systems that connect hardware with software.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Creating intelligent automation solutions that make complex processes simpler.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#FAFCFC] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="max-w-2xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
            What I Do
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Turning ideas into
            <span className="text-cyan-500">
              {" "}real solutions.
            </span>
          </h2>

        </div>

        {/* Services */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/40"
            >

              <div className="flex items-center justify-between">

                <span className="text-4xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-cyan-200">
                  {service.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-cyan-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                  ↗
                </span>

              </div>

              <h3 className="mt-12 text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-500">
                {service.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;