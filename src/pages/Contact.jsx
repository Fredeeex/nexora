import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // هنسيب ده زي ما هو عندك (الإيميل هنركنه)
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

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 text-white">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-7"
        >
          <h1 className="text-3xl font-semibold leading-tight">
            Book your free website audit.
          </h1>
          <p className="mt-3 text-white/75">
            We’ll review your website and send quick wins to improve calls,
            bookings, and leads — no fluff.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              ✅ 10–15 minute review (homepage + contact + speed)
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              ✅ Action list tailored for your business type
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              ✅ If you want, we can implement it fast
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-7"
        >
          <h2 className="text-xl font-semibold">Request your audit</h2>
          <p className="mt-2 text-sm text-white/70">
            No long forms — just the basics.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                placeholder="you@business.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white/80">
                Business type
              </label>
              <input
                name="business_type"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                placeholder="Plumber, Electrician, Barber, Restaurant..."
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white/80">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
                placeholder="What do you need help with? (optional link to your site)"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 font-semibold text-black hover:opacity-95 active:opacity-90 transition"
            >
              {status === "sending" ? "Sending..." : "Get my free audit"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-300">
                ✅ Sent! We’ll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-300">{errorMsg}</p>
            )}
          </form>

          <p className="mt-4 text-xs text-white/55">
            Tip: If you already have a website, paste the URL in the message for
            a faster audit.
          </p>
        </motion.section>
      </div>

      {/* Sticky CTA */}
      <a
        href="/contact"
        className="fixed bottom-5 right-5 z-40 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/25 hover:opacity-95 active:opacity-90 transition"
      >
        🔥 Free Audit
      </a>
    </main>
  );
}