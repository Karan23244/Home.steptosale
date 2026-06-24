import React from "react";

export default function Audience() {
  return (
    <section className="audience" id="advertisers">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Who We Serve
          </div>
          <h2 className="section-title">
            BUILT FOR
            <br />
            ADVERTISERS
          </h2>
        </div>
        <div className="audience-grid">
          <div className="audience-panel reveal">
            <div className="audience-tag">Advertisers</div>
            <h3 className="mb-4">
              GROW YOUR
              <br />
              REVENUE
            </h3>
            <p className="mb-6">
              You need customers. We build the performance engine that finds
              them, converts them, and keeps them coming back.
            </p>
            <ul className="benefit-list">
              <li>Access to premium programmatic inventory at scale</li>
              <li>Cross-channel attribution — know what's really working</li>
              <li>Retargeting that recovers lost revenue automatically</li>
            </ul>
            <div className="mt-6">
              <a
                href="mailto:info@steptosale.com?subject=Book%20a%20Call"
                className="btn-primary">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
