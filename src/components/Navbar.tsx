import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Veilig Internet", path: "/veilig-internet" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="text-accessible-xl font-extrabold text-primary tracking-tight">
          Bit<span className="text-accent">Hulp</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-5 py-3 rounded-lg text-accessible-sm font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 rounded-lg bg-secondary text-foreground"
          aria-label="Menu openen"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-5 py-4 rounded-lg text-accessible-base font-semibold my-1 ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
