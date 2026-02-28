import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { delay: d, duration: 0.5, ease: "easeOut" } },
});

export default function Home() {
  return (
    <main className="pageWrap">
      <section className="hero">
        <motion.h1 {...fade(0)} className="heroTitle heroTitleAnim">
          NEXORA
        </motion.h1>

        <motion.p {...fade(0.10)} className="heroSub">
          <strong>Nexora Team</strong> builds premium websites from zero to launch — strategy, design,
          development, and ongoing support. We also integrate lightweight <strong>AI automation</strong> to
          help businesses save time and increase conversions.
        </motion.p>

        <motion.div {...fade(0.18)} className="heroActions">
          <NavLink className="btnPrimary" to="/work">View Work</NavLink>
          <NavLink className="btnGhost" to="/contact">Get a Proposal</NavLink>
        </motion.div>
      </section>

      <section className="sectionGrid">
        <article className="card">
          <h3>Websites (End-to-End)</h3>
          <p>Corporate websites, landing pages, and multi-page builds — fast, clean, and conversion-driven.</p>
        </article>
        <article className="card">
          <h3>AI Automation (Lightweight)</h3>
          <p>Smart forms, lead routing, reporting, and simple AI workflows to reduce manual work.</p>
        </article>
        <article className="card">
          <h3>Ongoing Support</h3>
          <p>Updates, fixes, content changes, and performance improvements — you’re never left alone.</p>
        </article>
      </section>
    </main>
  );
}