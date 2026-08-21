import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logo2.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "KNX", to: "/knx" },
  { label: "WiFi", to: "/wifi" },
  { label: "Zigbee", to: "/zigbee" },
  { label: "Home Assistant", to: "/home-assistant" },
  { label: "ETS", to: "/ets" },
  { label: "Python", to: "/python" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <nav>
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

        <NavLink to="/">
          <img
            src={logo}
            alt="Soroush"
            draggable={false}
            className="h-14 w-auto select-none object-contain"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
