import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const cases = [
  {
    slug: "concept-sme-corporate",
    title: "SME Corporate Website",
    subtitle: "A credible global presence for a growing business",
    problem: "The business had no strong online presence and low trust signals.",
    solution: "Corporate structure, clear messaging, modern UI, fast load, and strong CTA flow.",
    results: ["Clear user journey", "Higher trust impression", "Conversion-ready layout"],
    stack: ["React", "Vite", "Framer Motion", "SEO-ready"],
    tag: "Concept",
  },
  {
    slug: "concept-service-business",
    title: "Service Business Multi-Page Website",
    subtitle: "Services, pricing, FAQs, and lead capture",
    problem: "Customers couldn’t find services and pricing quickly.",
    solution: "Service pages, structured sections, lead form, and streamlined navigation.",
    results: ["Better clarity", "More inquiries", "Professional structure"],
    stack: ["React", "Routing", "UI System", "Performance"],
    tag: "Concept",
  },
  {
    slug: "concept-landing-ai",
    title: "Landing Page + AI Lead Routing",
    subtitle: "Campaign landing page with lightweight automation",
    problem: "Leads were slow to process and follow-up was inconsistent.",
    solution: "High-converting landing + basic automation triggers for routing and reporting.",
    results: ["Faster response time", "Cleaner lead pipeline", "Higher conversion potential"],
    stack: ["Landing UX", "Automation", "Analytics-ready", "Integrations"],
    tag: "Concept",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Work() {
  return (
    <main className="pageWrap">
      <motion.section className="pageHead" initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="h1">Case Studies</h1>
        <p className="lead">
          Concept case studies (sample work) presented in a clean corporate structure: problem → solution → results.
        </p>
      </motion.section>

      <section className="caseGrid">
        {cases.map((c, i) => (
          <motion.article
            key={c.slug}
            className="caseCard"
            initial="hidden"
            animate="show"
            custom={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            <div className="caseGlow" />
            <div className="caseTop">
              <span className="caseTag">{c.tag}</span>
            </div>

            <h3 className="caseTitle">{c.title}</h3>
            <p className="caseSub">{c.subtitle}</p>

            <div className="caseBlock">
              <div className="caseLabel">Problem</div>
              <div className="caseText">{c.problem}</div>
            </div>

            <div className="caseBlock">
              <div className="caseLabel">Solution</div>
              <div className="caseText">{c.solution}</div>
            </div>

            <div className="caseBlock">
              <div className="caseLabel">Results</div>
              <ul className="caseList">
                {c.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="caseStack">
              {c.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>

            <div className="caseCtaRow">
              <NavLink className="btnGhost small" to={`/work/${c.slug}`}>View Details</NavLink>
              <NavLink className="btnPrimary small" to={`/contact?topic=${encodeURIComponent(c.title)}`}>
                Request Similar
              </NavLink>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}