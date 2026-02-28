import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const FORMSPREE_ENDPOINT = useMemo(
    () => "https://formspree.io/f/xaqdzyzl",
    []
  );

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = await res.json().catch(() => null);
      const msg =
        data?.errors?.[0]?.message ||
        "Something went wrong. Please try again.";
      setStatus("error");
      setErrorMsg(msg);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "96px 16px 56px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 880 }}>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: -0.6,
            marginBottom: 12,
          }}
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          style={{
            fontSize: 16,
            opacity: 0.85,
            lineHeight: 1.6,
            marginBottom: 20,
            maxWidth: 720,
          }}
        >
          <strong>Book your free website audit.</strong> Tell us a bit about your
          business and what you need — we’ll reply fast with clear next steps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          style={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.25)",
            padding: 18,
          }}
        >
          {/* ✅ No long forms: Name, Email, Business type, Message */}
          <form onSubmit={handleSubmit}>
            {/* Honeypot (anti-spam) */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div style={{ display: "grid", gap: 12 }}>
              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, opacity: 0.9 }}>Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, opacity: 0.9 }}>Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@business.com"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, opacity: 0.9 }}>
                  Business type
                </label>
                <input
                  name="businessType"
                  type="text"
                  required
                  placeholder="e.g. Plumber, Electrician, Cleaning, Salon..."
                  style={inputStyle}
                />
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, opacity: 0.9 }}>Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="What do you need help with? (new website, redesign, more leads, speed, SEO...)"
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  ...buttonStyle,
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Request"}
              </button>

              {status === "success" && (
                <div style={successStyle}>
                  ✅ Sent! We’ll reply shortly (check your inbox).
                </div>
              )}

              {status === "error" && (
                <div style={errorStyle}>❌ {errorMsg}</div>
              )}

              <p style={{ marginTop: 8, fontSize: 13, opacity: 0.7 }}>
                Tip: If you already have a website, paste the link in your message
                so we can audit it faster.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "inherit",
  outline: "none",
};

const buttonStyle = {
  width: "fit-content",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.10)",
  color: "inherit",
  fontWeight: 700,
};

const successStyle = {
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(0, 255, 140, 0.35)",
  background: "rgba(0, 255, 140, 0.10)",
  fontSize: 14,
};

const errorStyle = {
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255, 70, 70, 0.35)",
  background: "rgba(255, 70, 70, 0.10)",
  fontSize: 14,
};