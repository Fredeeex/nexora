export default function About() {
  return (
    <main className="pageWrap">
      <section className="pageHead">
        <h1 className="h1">About</h1>
        <p className="lead">
          Nexora Team builds corporate-grade web experiences — clean structure, premium motion, and
          dependable delivery from day one.
        </p>
      </section>

      <section className="sectionGrid">
        <article className="card">
          <h3>Corporate Quality</h3>
          <p>Design that looks credible and global — built to win trust instantly.</p>
        </article>
        <article className="card">
          <h3>End-to-End Delivery</h3>
          <p>We handle everything: planning, design, development, deployment, and support.</p>
        </article>
        <article className="card">
          <h3>AI-Ready Mindset</h3>
          <p>We integrate lightweight automation where it makes sense — no hype, just value.</p>
        </article>
      </section>
    </main>
  );
}