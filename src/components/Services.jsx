import React from "react";
import {
  FaDesktop,
  FaSyncAlt,
  FaGlobe,
  FaMobileAlt,
  FaUserPlus,
  FaNetworkWired,
  FaFacebookF,
} from "react-icons/fa";

const services = [
  {
    num: "01",
    name: "WEB MARKETING",
    desc: "Full-funnel web campaigns.",
    icon: FaNetworkWired,
  },
  {
    num: "02",
    name: "LEAD GENERATION",
    desc: "High-quality leads delivered through targeted campaigns, optimized funnels, and performance-driven acquisition strategies.",
    icon: FaUserPlus,
  },
  {
    num: "03",
    name: "ATTRIBUTION MODELING",
    desc: "Understand exactly what drives revenue.",
    icon: FaGlobe,
  },
  {
    num: "04",
    name: "SOCIAL ADS",
    desc: "High-converting social campaigns.",
    icon: FaFacebookF,
  },
  {
    num: "05",
    name: "MOBILE MARKETING",
    desc: "In-app, SMS, and push campaigns.",
    icon: FaMobileAlt,
  },
  {
    num: "06",
    name: "PROGRAMMATIC DISPLAY",
    desc: "Real-time bidding and automated ad placement across premium inventory.",
    icon: FaDesktop,
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-inner">
        <div className="services-header">
          <div>
            <div className="section-label">WHAT WE DO</div>

            <h2 className="services-title">
              PERFORMANCE
              <br />
              CHANNELS
            </h2>
          </div>

          <p className="services-intro">
            Every impression, every click, every conversion — strategically
            planned, continuously optimized, and measured for growth. We create
            marketing systems that deliver predictable results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.num} className="service-card">
                <span className="service-number">{service.num}</span>

                <div className="service-icon">
                  <Icon size={20} />
                </div>

                <h3>{service.name}</h3>

                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
