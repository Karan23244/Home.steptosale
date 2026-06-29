import React from "react";
import { FaCheck } from "react-icons/fa";

const inventories = [
  {
    title: "Performance Marketing",
    desc: "Pay only after results. Our campaigns are optimized for growth, conversions, and measurable ROI across every channel.",
    color: "#e31e24",
  },
  {
    title: "In-House Inventory",
    desc: "Exclusive inventory access and premium placements that help advertisers scale faster",
    color: "#f4a300",
  },
  {
    title: "Audience Network",
    desc: "Reach targeted audiences through our proprietary network powered by data, automation, and real-time optimization.",
    color: "#2563eb",
  },
];

export default function Inventories() {
  return (
    <section className="inventories-section" id="advertisers">
      <div className="section-inner">
        <div className="inventories-grid">
          {/* Left Image */}
          <div className="inventories-image">
            <img src="/team.webp" alt="Team Meeting" />
          </div>

          {/* Right Content */}
          <div className="inventories-content">
            <div className="section-label">OUR INVENTORIES</div>

            <h2 className="inventories-title">
              Premium Traffic.
              <br />
              Proven Results.
            </h2>

            <div className="inventory-list">
              {inventories.map((item, index) => (
                <div className="inventory-item" key={index}>
                  <div
                    className="inventory-icon"
                    style={{ background: item.color }}>
                    <FaCheck />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/advertisers" className="btn-primary">
              Start Growing
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
