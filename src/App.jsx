import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="app">
      {/* Background layers */}
      <div className="bgOrbs" aria-hidden="true" />
      <div className="gridOverlay" aria-hidden="true" />
      <Particles className="netParticles" init={particlesInit} options={particlesOptions} />

      {/* Nav */}
      <header className="nav">
        <NavLink className="brand" to="/">
          <span className="brandMark" />
          <span className="brandText">NEXORA</span>
        </NavLink>

        <nav className="navLinks">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <NavLink className="navCta" to="/contact">
          Let’s Talk
        </NavLink>
      </header>

      {/* Pages */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/work/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route
            path="*"
            element={
              <PageTransition>
                <main className="pageWrap">
                  <section className="pageHead">
                    <h1 className="h1">404</h1>
                    <p className="lead">Page not found.</p>
                  </section>
                </main>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <div className="footerLogo">
              <span className="brandMark" />
              <span>NEXORA</span>
            </div>
            <p>Corporate Web Presence, Done Right</p>
          </div>

          <div className="footerCols">
            <div>
              <h4>Company</h4>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
              <h4>Services</h4>
              <NavLink to="/services">Web Development</NavLink>
              <NavLink to="/services">AI Automation</NavLink>
              <NavLink to="/services">Branding</NavLink>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:hello@nexoraweb.online">hello@nexoraweb.online</a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Nexora Team. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

const particlesOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  detectRetina: true,
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 45, density: { enable: true, area: 1000 } },
    color: { value: ["#22d3ee", "#2563eb", "#7c3aed"] },
    links: {
      enable: true,
      distance: 160,
      color: "#22d3ee",
      opacity: 0.10,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      outModes: { default: "out" },
    },
    opacity: { value: 0.42 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 130, duration: 0.35 },
      push: { quantity: 2 },
    },
  },
};