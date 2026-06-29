import React, { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiDownload,
  FiGlobe,
  FiPieChart,
  FiTrendingUp,
  FiUsers,
  FiLayers,
  FiShield,
  FiCpu,
  FiFileText,
  FiPhone,
  FiShoppingBag,
  FiDollarSign,
  FiCode,
  FiActivity,
  FiTruck,
  FiLayers as FiBox,
  FiHome,
} from "react-icons/fi";
import CTA from "../components/CTA";

// ==========================================
// ENTERPRISE ADVERTISER DATA STORES
// ==========================================

const stats = [
  { id: 1, target: 3000, suffix: "+", label: "Advertises On Board" },
  { id: 2, target: 100, suffix: "%", label: "Publishers are happy with us" },
  {
    id: 3,
    target: 2000,
    suffix: "+",
    label: "Offers",
  },
  { id: 4, target: "2", suffix: "Mn+", label: "Monthly Engagements" },
];

const verticals = [
  {
    id: 1,
    name: "Travel & Mobility",
    icon: <FiTruck />,
    count: "Dynamic API Inventory Mapping",
    growth: "+15%",
  },
  {
    id: 2,
    name: "Fashion",
    icon: <FiShoppingBag />,
    count: "Premium Lifestyle Publisher Network",
    growth: "+31%",
  },
  {
    id: 3,
    name: "SaaS",
    icon: <FiCode />,
    count: "High LTV Custom Integrations",
    growth: "+41%",
  },
  {
    id: 4,
    name: "E-Commerce & Retail",
    icon: <FiShoppingBag />,
    count: "Active Flow: $12M+ GMV",
    growth: "+34%",
  },
  {
    id: 5,
    name: "Health",
    icon: <FiActivity />,
    count: "Trusted Healthcare & Wellness Publishers",
    growth: "+26%",
  },
  {
    id: 6,
    name: "Furniture & Household",
    icon: <FiHome />,
    count: "Home Improvement & Lifestyle Audience",
    growth: "+19%",
  },
];

const geos = [
  {
    id: 1,
    country: "United States",
    code: "US",
    traffic: "Tier-1 Premium",
    publishers: "850+ Top Partners",
    device: "Desktop 80% | Mobile 20%",
  },
  {
    id: 2,
    country: "United Kingdom",
    code: "UK",
    traffic: "High-Intent Content",
    publishers: "420+ Top Partners",
    device: "Desktop 82% | Mobile 18%",
  },
  {
    id: 3,
    country: "Germany",
    code: "DE",
    traffic: "Euro Scale Engine",
    publishers: "310+ Top Partners",
    device: "Desktop 79% | Mobile 21%",
  },
  {
    id: 4,
    country: "Australia",
    code: "AU",
    traffic: "High Order Value APAC",
    publishers: "220+ Top Partners",
    device: "Desktop 81% | Mobile 19%",
  },
  {
    id: 5,
    country: "Singapore",
    code: "SG",
    traffic: "SaaS & Fintech Hub",
    publishers: "180+ Top Partners",
    device: "Desktop 78% | Mobile 22%",
  },
  {
    id: 6,
    country: "United Arab Emirates",
    code: "AE",
    traffic: "Luxury & High-Net-Worth",
    publishers: "140+ Top Partners",
    device: "Desktop 80% | Mobile 20%",
  },
];

const channels = [
  {
    id: 1,
    title: "Premium Content & Media Houses",
    desc: "Secure placements on top-tier editorial sites, product review portals, and high-authority publications to capture raw consumer intent.",
    types: ["Content Led Sites", "Mass Media Placements", "Native Commerce"],
  },
  {
    id: 2,
    title: "Strategic Creator & Influencer Networks",
    desc: "Deploy tracked, performance-driven campaigns across verified content creators who move products via contextual content.",
    types: ["Instagram Curators", "YouTube Partnerships", "Telegram Channels"],
  },
  {
    id: 3,
    title: "Conversion-Engine Platforms",
    desc: "Reach ready-to-buy audiences through performance-driven coupon, cashback, and browser extension ecosystems that consistently deliver incremental revenue.",
    types: ["Coupon Websites", "Cashback Platforms", "Deal Communities"],
  },
];

const mediaKit = [
  {
    id: 1,
    title: "Enterprise Advertiser Network Deck",
    type: "PDF • 12.4 MB",
    category: "Network Overview",
  },
  {
    id: 2,
    title: "Global Traffic Metrics & ROI Case Studies",
    type: "PDF • 18.2 MB",
    category: "Performance Reports",
  },
  {
    id: 3,
    title: "Server-to-Server (S2S) API Integration Guide",
    type: "XLSX • 3.5 MB",
    category: "Technical Specs",
  },
  {
    id: 4,
    title: "Brand Safety & Anti-Fraud Compliance Protocol",
    type: "PDF • 6.1 MB",
    category: "Compliance Legalities",
  },
];

// ==========================================
// SMOOTH COUNTER HOOK
// ==========================================
const AnimatedNumber = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function AdvertiserPage() {
  return (
    <div className="adv-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="adv-hero">
        <div className="adv-grid-bg"></div>
        <div className="adv-glow-orb header-orb"></div>

        <div className="adv-container adv-hero-inner">
          <div className="adv-hero-content">
            <div className="adv-badge-announcement">
              ENTERPRISE ACQUISITION PLATFORM
            </div>
            <h1 className="adv-hero-title">
              Acquire Customers.
              <br />
              <span className="adv-gradient-text">Pay For Performance.</span>
            </h1>
            <p className="adv-hero-subtitle">
              Eliminate wasted ad spend. Deploy scalable acquisition campaigns
              across an elite ecosystem of vetted publishers, media buyers, and
              content platforms while staying in absolute control of your ROAS.
            </p>
            <div className="adv-btn-group">
              <button className="btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a
                  href="/media-kit.pdf"
                  download="Step-to-Sale-Media-Kit.pdf"
                  onClick={(e) => {
                    e.preventDefault();

                    const link = document.createElement("a");
                    link.href = "/media-kit.pdf";
                    link.download = "Step-to-Sale-Media-Kit.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}>
                  Download Network Specs
                </a>
                <span> ⬇</span>
              </button>
            </div>
          </div>

          <div className="adv-hero-visual">
            <img
              src="/services.jpg"
              alt="editorial content"
              className="adv-hero-image"
            />
          </div>
        </div>

        {/* ANCHOR STATS */}
        <div className="adv-stats-strip">
          <div className="adv-container adv-stats-grid">
            {stats.map((stat) => (
              <div className="adv-stat-card" key={stat.id}>
                <h3>
                  <AnimatedNumber value={stat.target} suffix={stat.suffix} />
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES WE SCALE */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Vetted Volume Across Verticals</h2>
            <p className="adv-subtitle">
              We build resilient traffic corridors tailor-made to your specific
              industry constraints and conversion benchmarks.
            </p>
          </div>
          <div className="adv-cards-grid grid-3">
            {verticals.map((item) => (
              <div className="adv-premium-card" key={item.id}>
                <div className="card-glow-layer"></div>
                <div className="card-icon-box">{item.icon}</div>
                <h3 className="card-title">{item.name}</h3>
                <div className="card-footer-metrics">
                  <span className="lbl">{item.count}</span>
                  <span className="val badge-green">
                    {item.growth} Volume YoY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GEO COVERAGE */}
      <section className="adv-section geo-section">
        <div className="adv-glow-orb geo-orb"></div>
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Global Customer Sourcing</h2>
            <p className="adv-subtitle">
              Expand effortlessly into localized, hyper-monetized global spaces
              with cross-border compliance tracking built-in.
            </p>
          </div>
          <div className="adv-cards-grid grid-3">
            {geos.map((geo) => (
              <div className="adv-geo-card" key={geo.id}>
                <div className="geo-header">
                  <div className="geo-country-info">
                    <span className="geo-badge">{geo.code}</span>
                    <h3>{geo.country}</h3>
                  </div>
                  <span className="geo-traffic">{geo.traffic}</span>
                </div>
                <div className="geo-body">
                  <div className="geo-metric">
                    <span className="lbl">Publisher Nodes:</span>{" "}
                    <span className="val">{geo.publishers}</span>
                  </div>
                  <div className="geo-metric">
                    <span className="lbl">Device Topology:</span>{" "}
                    <span className="val">{geo.device}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROMOTION CHANNELS */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Approved Promotion Channels</h2>
            <p className="adv-subtitle">
              Deploy your brand assets across strict, brand-safe marketing
              channels engineered to scale customer acquisition lines cleanly.
            </p>
          </div>
          <div className="adv-cards-grid grid-3">
            {channels.map((chan) => (
              <div className="adv-channel-card" key={chan.id}>
                <div className="channel-icon-header">
                  <FiBox />
                </div>
                <h3>{chan.title}</h3>
                <p>{chan.desc}</p>
                <div className="channel-tags">
                  {chan.types.map((type, idx) => (
                    <span key={idx} className="channel-tag">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEDIA KIT & API ACCESS */}
      {/* <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Enterprise Assets & Media Kits</h2>
            <p className="adv-subtitle">
              Review our corporate compliance handbooks, tracking frameworks,
              and legal structures before integration.
            </p>
          </div>
          <div className="adv-cards-grid grid-2">
            {mediaKit.map((asset) => (
              <div className="adv-kit-card glass-card" key={asset.id}>
                <div className="kit-left">
                  <div className="kit-icon">
                    <FiFileText />
                  </div>
                  <div>
                    <h4>{asset.title}</h4>
                    <span>
                      {asset.type} • {asset.category}
                    </span>
                  </div>
                </div>
                <button className="adv-icon-btn">
                  <FiDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. FINAL CTA */}
      <CTA />
    </div>
  );
}
