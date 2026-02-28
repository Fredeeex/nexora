import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Page>
                <Home />
              </Page>
            }
          />

          <Route
            path="/services"
            element={
              <Page>
                <Services />
              </Page>
            }
          />

          <Route
            path="/work"
            element={
              <Page>
                <Work />
              </Page>
            }
          />

          <Route
            path="/work/:slug"
            element={
              <Page>
                <CaseStudy />
              </Page>
            }
          />

          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />

          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}