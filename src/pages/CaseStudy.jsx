import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const CASES = [
  {
    slug: "concept-sme-corporate",
    tag: "Concept",
    title: "SME Corporate Website",
    subtitle: "A credible global presence for a growing business",
    overview:
      "This is a concept case study (sample). The goal is to show how Nexora Team structures and delivers a corporate website end-to-end.",
    problem: [
      "Weak trust signals and unclear positioning.",
      "No structured sections to guide users.",
      "Slow or inconsistent performance.",
    ],
    solution: [
      "Corporate hierarchy, clean typography, and premium layout.",
      "Clear CTA flow: services → proof → contact.",
      "Performance-first build and SEO-ready structure.",
    ],
    results: ["Higher trust impression", "Clear user journey", "Conversion-ready website"],
    kpis: [
      { value: "Trust", label: "First impression" },
      { value: "Clear", label: "Structure" },
      { value: "Fast", label: "Performance" },
    ],
    stack: ["React", "Vite", "Framer Motion", "SEO-ready"],
  },
  {
    slug: "concept-service-business",
    tag: "Concept",
    title: "Service Business Multi-Page Website",
    subtitle: "Services, pricing, FAQs, and lead capture",
    overview:
      "This is a concept case study (sample). We design a service website that answers customer questions fast and drives inquiries.",
    problem: [
      "Visitors can’t find services and pricing quickly.",
      "Navigation is unclear and content is scattered.",
      "No clean inquiry pathway.",
    ],
    solution: [
      "Service pages with structured sections + FAQs.",
      "Clear navigation and consistent CTAs.",
      "Lead form routing + basic tracking-ready layout.",
    ],
    results: ["Better clarity", "More inquiries", "Professional presence"],
    kpis: [
      { value: "More", label: "Inquiries" },
      { value: "Clean", label: "Navigation" },
      { value: "Pro", label: "Presence" },
    ],
    stack: ["React", "Routing", "UI System", "Performance"],
  },
  {
    slug: "concept-landing-ai",
    tag: "Concept",
    title: "Landing Page + AI Lead Routing",
    subtitle: "Campaign landing page with lightweight automation",
    overview:
      "This is a concept case study (sample). A high-converting landing page plus lightweight automation to reduce manual follow-up work.",
    problem: [
      "Lead processing is slow.",
      "Follow-up is inconsistent and manual.",
      "No structured conversion journey.",
    ],
    solution: [
      "Conversion-focused landing sections.",
      "Automation triggers for lead routing/reporting (lightweight).",
      "Analytics-ready structure for future optimization.",
    ],
    results: ["Faster response time", "Cleaner lead pipeline", "Higher conversion potential"],
    kpis: [
      { value: "Faster", label: "Response" },
      { value: "Clean", label: "Pipeline" },
      { value: "Higher", label: "Conversion" },
    ],
    stack: ["Landing UX", "Automation", "Analytics-ready", "Integrations"],
  },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const data = useMemo(() => CASES.find((c) => c.slug === slug), [slug]);

  if (!data) {
    return (
      <main className="pageWrap">
        <div className="breadcrumbs">
          <NavLink to="/work">Work</NavLink>
          <span>›</span>
          <span>Not found</span>
        </div>
        <section className="pageHead">
          <h1 className="h1">Case Study Not Found</h1>
          <p className="lead">This case study doesn’t exist.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="pageWrap">
      <div className="breadcrumbs">
        <NavLink to="/work">Work</NavLink>
        <span>›</span>
        <span>{data.title}</span>
      </div>

      <motion.section
        className="detailHero"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="detailTop">
          <span className="caseTag">{data.tag}</span>
          <span className="chip">{data.stack[0]}</span>
          <span className="chip">{data.stack[1]}</span>
          <span className="chip">{data.stack[2]}</span>
        </div>

        <h1 className="h1" style={{ marginBottom: 6 }}>{data.title}</h1>
        <p className="lead">{data.subtitle}</p>

        <div className="kpiRow">
          {data.kpis.map((k) => (
            <div className="kpi" key={k.label}>
              <strong>{k.value}</strong>
              <span>{k.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="detailGrid">
        <article className="panel">
          <h3>Overview</h3>
          <p>{data.overview}</p>
        </article>

        <article className="panel">
          <h3>Tech Stack</h3>
          <div className="caseStack" style={{ marginTop: 0 }}>
            {data.stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </article>

        <article className="panel">
          <h3>Problem</h3>
          <ul>{data.problem.map((x) => <li key={x}>{x}</li>)}</ul>
        </article>

        <article className="panel">
          <h3>Solution</h3>
          <ul>{data.solution.map((x) => <li key={x}>{x}</li>)}</ul>
        </article>

        <article className="panel">
          <h3>Results</h3>
          <ul>{data.results.map((x) => <li key={x}>{x}</li>)}</ul>

          <div className="heroActions" style={{ justifyContent: "flex-start", marginTop: 12 }}>
            <NavLink className="btnGhost" to="/work">Back to Work</NavLink>
            <NavLink className="btnPrimary" to={`/contact?topic=${encodeURIComponent(data.title)}`}>
              Request Similar
            </NavLink>
          </div>
        </article>

        <article className="panel">
          <h3>Next Step</h3>
          <p>
            When Nexora Team completes real client projects, we’ll replace these concept case studies with
            real screenshots, metrics, and timelines.
          </p>
        </article>
      </section>
    </main>
  );
}