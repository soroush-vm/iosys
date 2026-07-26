import logo from "@/assets/images/logo2.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Navigation */}

        <nav>
          <ul className="flex items-center gap-10 text-sm font-medium text-slate-700">

            <li>
              <a
                href="#hero"
                className="transition-colors duration-300 hover:text-cyan-500"
              >
                خانه
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-cyan-500"
              >
                تماس با ما
              </a>
            </li>

          </ul>
        </nav>

        {/* Logo */}

        <a href="#hero">
          <img
            src={logo}
            alt="Soroush"
            draggable={false}
            className="h-14 w-auto select-none object-contain"
          />
        </a>

      </div>
    </header>
  );
};

export default Navbar;