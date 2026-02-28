import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  const topic = useMemo(() => {
    const q = new URLSearchParams(location.search);
    return q.get("topic") || "Free Website Audit";
  }, [location.search]);

  return (
    <main className="pageWrap">
      <section className="pageHead">
        <h1 className="h1">Contact</h1>
        <p className="lead">
          <strong>Book your free website audit.</strong> Tell us about your business and we’ll reply with clear,
          actionable improvements.
        </p>
      </section>

      <section className="contactGrid">
        <article className="panel">
          <h3>Direct</h3>
          <p style={{ color: "rgba(255,255,255,.78)", lineHeight: 1.75, marginTop: 8 }}>
            Email:{" "}
            <a href="mailto:hello@nexoraweb.online" style={{ textDecoration: "underline" }}>
              hello@nexoraweb.online
            </a>
            <br />
            UK local services • Websites that generate calls & enquiries.
          </p>

          <div className="caseStack" style={{ marginTop: 12 }}>
            <span className="chip">Lead-focused</span>
            <span className="chip">Mobile-first</span>
            <span className="chip">Fast</span>
            <span className="chip">Local SEO</span>
          </div>
        </article>

        <article className="panel">
          <h3>Free Audit Request</h3>

          <form
            className="contactForm"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="topic" value={topic} />

            {/* honeypot */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <label>
              Name
              <input name="name" type="text" placeholder="Your full name" required />
            </label>

            <label>
              Email
              <input name="email" type="email" placeholder="you@email.com" required />
            </label>

            <label>
              Business type
              <input
                name="businessType"
                type="text"
                placeholder="e.g., electrician, cleaning, transport..."
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="What do you offer? What area do you serve? Any link to your current site?"
                required
              />
            </label>

            <button className="btnPrimary" type="submit">
              Send Request
            </button>
          </form>

          <p style={{ marginTop: 10, color: "rgba(255,255,255,.55)", fontSize: 12, lineHeight: 1.6 }}>
            Tip: If you have a website, paste the link in the message for faster feedback.
          </p>
        </article>
      </section>
    </main>
  );
}