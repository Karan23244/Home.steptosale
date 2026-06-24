import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-noise" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">Performance Marketing Agency</div>
          <h1 className="hero-title">
            STEP
            <br />
            <span data-text="TO SALE">TO SALE</span>
          </h1>
          <p className="hero-sub">
            We engineer growth at every stage of the funnel — from impression to
            conversion — with data-driven performance marketing that leaves
            nothing to chance.
          </p>
          <div className="hero-actions">
            <a href="#advertisers" className="btn-primary">
              For Advertisers
            </a>
            <a href="/contact" className="btn-primary">
              Contact Sales
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
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-logo-display">
            <div className="hero-ring" />
            <div className="hero-ring" />
            <img src="/logo.png" alt="Step To Sale Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
