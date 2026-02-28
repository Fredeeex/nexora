import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive ? "text-white" : "text-white/75 hover:text-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font800 font-semibold tracking-wide text-white">
              NEXORA
            </span>
            <span className="text-xs text-white/50">UK</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/work" className={navLinkClass}>
              Work
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
                         bg-gradient-to-r from-amber-400 to-orange-500 text-black
                         hover:opacity-95 active:opacity-90 transition shadow-lg shadow-orange-500/20"
            >
              🔥 Free Audit
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 px-3 py-2 text-white/90"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-3">
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/work" className={navLinkClass}>
                Work
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              <Link
                to="/contact"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
                           bg-gradient-to-r from-amber-400 to-orange-500 text-black
                           hover:opacity-95 active:opacity-90 transition"
              >
                🔥 Free Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
