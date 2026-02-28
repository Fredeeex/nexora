import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const topic = useMemo(() => {
    const q = new URLSearchParams(location.search);
    return q.get("topic") || "";
  }, [location.search]);

  return (
    <main className="pageWrap">
      <section className="pageHead">
        <h1 className="h1">Contact</h1>
        <p className="lead">
          Tell us what you need. Nexora Team will reply with a clear plan and a professional proposal.
        </p>
      </section>

      <section className="contactGrid">
        <article className="panel">
          <h3>Quick Contact</h3>
          <p style={{ color: "rgba(255,255,255,.78)", lineHeight: 1.75, marginTop: 8 }}>
            Email:{" "}
            <a href="mailto:hello@nexoraweb.online" style={{ textDecoration: "underline" }}>
              hello@nexoraweb.online
            </a>
            <br />
            Typical response time: 24 hours (business days).
          </p>

          <div className="caseStack" style={{ marginTop: 12 }}>
            <span className="chip">Websites</span>
            <span className="chip">Landing Pages</span>
            <span className="chip">AI Automation</span>
            <span className="chip">Support</span>
          </div>
        </article>

        <article className="panel">
          <h3>Request a Proposal</h3>
          <p style={{ color: "rgba(255,255,255,.78)", lineHeight: 1.75, marginTop: 8 }}>
            Fill the form. Your message goes to our inbox (Netlify) and can be forwarded to email.
          </p>

          {/* NETLIFY FORM */}
          <form
            className="contactForm"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* honeypot */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="row2">
              <label>
                Full name
                <input name="name" type="text" placeholder="Your name" required />
              </label>

              <label>
                Email
                <input name="email" type="email" placeholder="you@email.com" required />
              </label>
            </div>

            <div className="row2">
              <label>
                Phone (optional)
                <input name="phone" type="text" placeholder="+44..." />
              </label>

              <label>
                Topic
                <input
                  name="topic"
                  type="text"
                  defaultValue={topic}
                  placeholder="Website / Landing / Automation..."
                />
              </label>
            </div>

            <label>
              Project details
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us what you need, deadline, budget range, and any examples you like."
                required
              />
            </label>

            <div className="row2">
              <label>
                Budget range (optional)
                <select name="budget">
                  <option value="">Select</option>
                  <option value="under-500">Under £500</option>
                  <option value="500-1200">£500–£1,200</option>
                  <option value="1200-2500">£1,200–£2,500</option>
                  <option value="2500-plus">£2,500+</option>
                </select>
              </label>

              <label>
                Timeline (optional)
                <select name="timeline">
                  <option value="">Select</option>
                  <option value="asap">ASAP</option>
                  <option value="2-4-weeks">2–4 weeks</option>
                  <option value="1-2-months">1–2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </label>
            </div>

            <button className="btnPrimary" type="submit">
              Send Message
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}