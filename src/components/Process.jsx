import React from "react";

const steps = [
  {
    num: "01",
    title: "STRATEGY & AUDIT",
    desc: "We analyze your current position, competitors, and opportunities. Every campaign starts with a clear, data-backed strategy.",
  },
  {
    num: "02",
    title: "LAUNCH & ACTIVATE",
    desc: "Campaigns go live across programmatic, social, and mobile channels simultaneously. Full-funnel coverage from day one.",
  },
  {
    num: "03",
    title: "OPTIMIZE & SCALE",
    desc: "Real-time data drives constant optimization. We double down on what works and cut what doesn't — relentlessly.",
  },
  {
    num: "04",
    title: "REPORT & GROW",
    desc: "Transparent reporting on every KPI. Attribution clarity across every channel. Your growth, fully accountable.",
  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="section-inner">
        <div className="process-header">
          <div className="section-label">HOW IT WORKS</div>

          <div className="process-title-wrap">
            <h2 className="process-title">
              THE STEP TO
              <br />
              SALE PROCESS
            </h2>

            <div className="process-circle">
              <span />
            </div>
          </div>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={step.num}>
              <div className="card-number">{step.num}</div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

              {index !== steps.length - 1 && <div className="card-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
