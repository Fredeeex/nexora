import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const baseLink =
  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-white/10";

const activeLink = "bg-white/10";

export default function Navbar() {
  const { pathname, hash } = useLocation();

  // لو داخل على /contact#audit يركز على الفورم
  useEffect(() => {
    if (pathname === "/contact" && hash === "#audit") {
      const el = document.getElementById("audit");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname, hash]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "rgba(8,10,20,0.65)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              boxShadow: "0 10px 30px rgba(124,58,237,0.25)",
            }}
          />
          <span style={{ fontWeight: 800, letterSpacing: 0.5 }}>NEXORA</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Contact
          </NavLink>

          {/* CTA مميز */}
          <Link
            to="/contact#audit"
            style={{
              marginLeft: 8,
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 13,
              background: "linear-gradient(135deg, #f97316, #fb7185)",
              color: "white",
              boxShadow: "0 14px 40px rgba(249,115,22,0.25)",
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            🔥 Free Audit
          </Link>
        </div>
      </nav>
    </header>
  );
}