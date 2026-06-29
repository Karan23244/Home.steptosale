import React from "react";
import NetworkBackground from "../components/NetworkBackground";
const items = [
  "Programmatic Display",
  "Attribution Modeling",
  "Social Ads",
  "Mobile Marketing",
  "Web Marketing",
  "Performance, Perfected",
];
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-three-bg">
        <NetworkBackground />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">Performance Marketing Agency</div>
          <h1 className="hero-title">Every Click. Every Lead. Every Sale.</h1>
          <p className="hero-sub">
            Step To Sale helps advertisers achieve profitable growth through
            performance-driven marketing solutions. Reach engaged audiences,
            generate quality leads, and turn marketing investments into
            measurable business results.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn-primary">
              Get Started
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">3000+</div>
              <div className="stat-label">Advertises On Board</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Publishers are happy with us</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2000+</div>
              <div className="stat-label">Offers</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2Mn+</div>
              <div className="stat-label">Monthly Engagements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Move here */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {items.map((it) => (
                <React.Fragment key={it}>
                  <span>{it}</span>
                  <div className="marquee-dot" />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
