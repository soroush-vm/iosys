import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo2.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "IOT", to: "/iot" },
  { label: "AccessControl&CCTV", to: "/accesscontrol-cctv" },
  { label: "Power&Electronics", to: "/power-electronics" },
  { label: "BMS", to: "/bms" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full shrink-0 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 hover:text-cyan-500 ${
                      isActive ? "text-cyan-500" : "text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink to="/" className="hidden lg:block">
          <img
            src={logo}
            alt="Soroush"
            draggable={false}
            className="h-14 w-auto select-none object-contain"
          />
        </NavLink>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-500 lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute top-full left-0 w-full border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="flex flex-col px-6 py-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 transition-colors duration-300 hover:bg-slate-50 hover:text-cyan-500 ${
                      isActive ? "text-cyan-500" : "text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
