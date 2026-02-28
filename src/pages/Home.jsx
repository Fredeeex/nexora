import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm text-white/70">UK Local Services • Lead-First Websites</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight">
            Turn your website into a lead machine — fast.
          </h1>
          <p className="mt-4 text-white/75">
            We build clean, high-converting websites for local service businesses in the UK.
            If you already have a site, start with a free audit.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 font-semibold text-black hover:opacity-95 transition"
            >
              🔥 Free Audit
            </Link>
            <Link
              to="/work"
              className="rounded-xl border border-white/15 bg-black/20 px-5 py-3 font-semibold text-white hover:border-white/25 transition"
            >
              View Work
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Fast", "Launch quickly with a simple, proven layout."],
              ["Clear", "One goal: calls, bookings, and quote requests."],
              ["Trusted", "Built for UK local service businesses."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-sm text-white/70">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}