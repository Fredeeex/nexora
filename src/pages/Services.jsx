import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="page">

      <section className="page-hero">
        <h1>Lead-Generating Websites for Local UK Businesses</h1>
        <p>
          We build fast, conversion-focused websites designed to generate more calls,
          more enquiries, and more local customers.
        </p>
      </section>

      <section className="services-grid">

        <motion.div 
          className="service-card"
          whileHover={{ y: -5 }}
        >
          <h3>Conversion-Focused Design</h3>
          <p>
            Clear call-to-action buttons, structured layouts, and mobile-first design
            built to turn visitors into real enquiries.
          </p>
        </motion.div>

        <motion.div 
          className="service-card"
          whileHover={{ y: -5 }}
        >
          <h3>Local SEO Structure</h3>
          <p>
            Optimised headings, local keywords, Google Maps integration,
            and structured content to improve visibility in local searches.
          </p>
        </motion.div>

        <motion.div 
          className="service-card"
          whileHover={{ y: -5 }}
        >
          <h3>Speed & Performance</h3>
          <p>
            Fast-loading websites that reduce bounce rate and keep potential
            customers engaged.
          </p>
        </motion.div>

      </section>

      <section className="cta-section">
        <h2>Get a Free 15-Minute Website Audit</h2>
        <a href="/contact" className="btn-primary">
          Request Free Audit
        </a>
      </section>

    </div>
  );
}