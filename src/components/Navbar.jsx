import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="navWrap">
      <div className="navInner">
        <NavLink to="/" className="brand">
          <span className="brandMark">NEXORA</span>
        </NavLink>

        <nav className="navLinks">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            >
              {l.label}
            </NavLink>
          ))}

          <NavLink to="/contact?topic=Free%20Website%20Audit" className="auditBtn">
            <span className="auditGlow" aria-hidden="true" />
            <span className="auditText">🔥 Free Audit</span>
          </NavLink>
        </nav>

        <button
          className="navBurger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navMobile">
          <div className="navMobileCard">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? "mLink active" : "mLink")}
              >
                {l.label}
              </NavLink>
            ))}

            <NavLink to="/contact?topic=Free%20Website%20Audit" className="mAudit">
              🔥 Free Audit
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}