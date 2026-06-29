import React, { useState } from "react";
import CTA from "../components/CTA";

export default function EditorialContent() {
  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 1. Categories Data (What We Publish)
  const categories = [
    {
      title: "Travel & Exploration",
      desc: "Curated itineraries, safe-harbor digital maps, and premium cultural reports mapping global destinations.",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff0013]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Fashion & Aesthetics",
      desc: "Analyzing visual design shifts, brand trends, material production, and identity aesthetics scaling worldwide markets.",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff0013]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "E-Commerce & Scale",
      desc: "The mechanics of conversion rate performance, digital product drops, and scaling international business funnels.",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff0013]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Lifestyle & Workspace",
      desc: "Actionable frameworks for full-stack freelancers balancing output optimization with premium remote workspace design.",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff0013]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },

    {
      title: "Technology & Code",
      desc: "Deep-dives into modern functional engineering architectures, developer productivity models, and AI integrations.",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff0013]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Finance & Fintech",
      desc: "Expert breakdowns of scalable market performance, operational investments, and financial technology updates.",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff0013]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  // 2. Editorial Process Data
  const steps = [
    {
      phase: "01",
      title: "Research",
      desc: "Analyzing programmatic trends, raw datasets, and verifiable keyword intent before writing.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      phase: "02",
      title: "Write",
      desc: "Human writers execute clear, accessible concepts mapping strictly to real-world usage specifications.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      phase: "03",
      title: "Review",
      desc: "Intensive fact-checking and brand-safety filters confirm absolute context validity.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      phase: "04",
      title: "Publish",
      desc: "Distribution across targeted network funnels optimized for clean, multi-device UX visibility.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
    },
  ];

  // 3. Why Advertise (Features) Data
  const features = [
    {
      title: "Brand Safe",
      desc: "Zero programmatic risk. Content undergoes dual-layer human verification protocols to ensure complete contextual safety.",
    },
    {
      title: "SEO Optimized",
      desc: "Engineered with semantic web standards, structured schema markup, and robust keyword distribution patterns.",
    },
    {
      title: "High Engagement",
      desc: "Clean reading metrics boasting intentional user attention spans that exceed standardized bounce limits.",
    },
    {
      title: "Transparent Reporting",
      desc: "Granular access to absolute reach logs, accurate impressions metrics, and real-time click tracking.",
    },
    {
      title: "Human Reviewed",
      desc: "No unvetted automated text models. Every editorial byproduct undergoes modification by experienced editors.",
    },
    {
      title: "Premium Placements",
      desc: "Native, high-visibility layout segments framed by white space to complement advertiser conversions.",
    },
  ];

  // 4. Sample Articles Data
  const articles = [
    {
      title: "Architecting Micro-Frontends via Functional React Components",
      excerpt:
        "How scaling enterprise interfaces requires breaking monolithic design down into secure, isolated client-side environments.",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Velocity of Next-Gen Mobile Payments and Affiliate Systems",
      excerpt:
        "Analyzing the transaction infrastructure driving high-volume referral commissions across distributed ad tech APIs.",
      category: "Finance",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Optimizing Core Web Vitals for Modern E-Commerce Assets",
      excerpt:
        "Practical tactics for minimizing input latency, balancing layout shift parameters, and scaling global image CDNs.",
      category: "E-Commerce",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Minimalist Workspace Frameworks for the Remote Web Developer",
      excerpt:
        "Building high-performance environments that minimize visual cognitive load while optimizing hardware processing setups.",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Decentralized Brand Strategies Disrupting Luxury Design Houses",
      excerpt:
        "How traditional physical aesthetics are converting to limited digital runs and agile user-centric marketing templates.",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Remote Geo-Arbitrage: Best High-Speed Tech Hubs This Year",
      excerpt:
        "A data-driven assessment ranking emerging cities based on infrastructure durability, native digital tax policies, and internet latency.",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 5. FAQ Data
  const faqs = [
    {
      q: "What does Step to Sale do?",
      a: "Step to Sale helps brands grow through affiliate marketing, strategic partnerships, and performance-based customer acquisition programs. We connect advertisers with high-quality publishers to drive measurable, scalable results.",
    },
    {
      q: "Do you operate as an affiliate network?",
      a: "No. Step to Sale is a performance marketing and affiliate management company, not an affiliate network. We help advertisers build, manage, and optimize partnership programs through approved marketing channels and carefully selected partner relationships.",
    },
    {
      q: "How do you ensure editorial content remains neutral and objective?",
      a: "We maintain an ironclad boundary between our production writers and advertising channels. Advertisers can buy placement visibility but cannot modify analytical verdicts, product reviews, or systemic comparisons.",
    },
    {
      q: "What parameters dictate your choice of affiliate links?",
      a: "We only link to third-party assets that pass technical vetting benchmarks. If a digital platform demonstrates poor security, unreliable support, or predatory frameworks, we refuse integration entirely.",
    },
    {
      q: "Can my business secure programmatic native ad space within your feature grids?",
      a: "Yes. We offer dedicated custom card slots optimized for brand-safe layouts. All sponsored insertions are rendered natively using clean CSS guidelines that align with surrounding content.",
    },
    {
      q: "How frequently are your published articles and statistics updated?",
      a: "We audit our content repository every 90 days. Obsolete links, broken code snippets, and outdated pricing frameworks are actively flagged and updated to protect data accuracy.",
    },
    {
      q: "Do you accept unsolicited guest editorial contributions?",
      a: "We only accept submissions from verified engineering, marketing, and design practitioners. Every external byline must match our strict human-review requirements before being queue-approved.",
    },
  ];

  return (
    <div className="adv-page-wrapper">
      {/* SECTION 1: HERO */}
      <section className="adv-hero">
        <div className="adv-grid-bg"></div>
        <div className="adv-glow-orb header-orb"></div>

        <div className="adv-container adv-hero-inner">
          <div className="adv-hero-content">
            <div className="">CONTENT INFRASTRUCTURE</div>

            <h1 className="adv-hero-title">
              Premium Media.
              <br />
              Data-Driven Impact.
            </h1>

            <p className="adv-hero-subtitle">
              Step to Sale LLC produces highly tactical, expert-vetted digital
              publications designed to bridge the gap between objective consumer
              analysis and premium advertiser engagement.
            </p>

            <div className="adv-btn-group">
              <button className="btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href="/advertisers">Become an Advertiser</a>
              </button>
            </div>
          </div>

          <div className="adv-hero-visual">
            <img
              src="/content.jpg"
              alt="editorial content"
              className="adv-hero-image"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE PUBLISH */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">What We Publish</h2>

            <p className="adv-subtitle">
              Our networks deploy localized content platforms built exclusively
              across six high-intent verticals.
            </p>
          </div>

          <div className="adv-cards-grid grid-3">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl transform hover:-translate-y-1 hover:border-[#ff0013]/30 transition-all duration-300 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2a2a2a] group-hover:bg-[#ff0013]/10 transition-colors duration-300 mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff3b3f] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-lg text-[#888] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EDITORIAL PROCESS */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Our Editorial Process</h2>

            <p className="adv-subtitle">
              Four structured development gates designed to verify accuracy and
              context before code deployment.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative top-10">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#2a2a2a]" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group relative">
                  {/* Mobile Connecting Line */}
                  {idx !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-20 bottom-[-3rem] left-1/2 w-0.5 bg-[#2a2a2a]" />
                  )}

                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border-2 border-[#2a2a2a] group-hover:border-[#ff0013] flex items-center justify-center text-white mb-6 relative bg-gradient-to-b group-hover:from-[#ff0013]/10 group-hover:to-transparent transition-all duration-300">
                    <span className="absolute -top-1 -right-1 bg-[#ff0013] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full font-mono">
                      {step.phase}
                    </span>
                    <div className="text-[#ff3b3f] group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Text */}
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-[#ff3b3f] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#888] max-w-xs leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY ADVERTISE WITH OUR CONTENT */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Why Advertise With Our Content</h2>

            <p className="adv-subtitle">
              We align monetization streams exclusively alongside safe,
              high-authority web assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#ff0013]/20 transform hover:scale-[1.01] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-[#ff0013]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="text-xs lg:text-lg text-[#888] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED ARTICLES */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Featured Publications</h2>

            <p className="adv-subtitle">
              Live examples of recent human-authored entries deployed across our
              affiliate marketing networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden flex flex-col transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                {/* Article Image Container */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#0a0a0a]/90 text-[#ff3b3f] border border-[#2a2a2a] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                    {art.category}
                  </span>
                </div>

                {/* Article Content Core */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff3b3f] transition-colors duration-300 line-clamp-2 leading-tight">
                    {art.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-[#888] line-clamp-3 leading-relaxed flex-grow">
                    {art.excerpt}
                  </p>
                  <div className="pt-4 border-t border-[#2a2a2a] flex justify-between items-center">
                    <button className="text-xs font-semibold text-[#ff3b3f] group-hover:text-white flex items-center gap-1 transition-colors duration-300">
                      Read Blueprint
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    <span className="text-[11px] font-mono text-neutral-600">
                      June 2026
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTENT PERFORMANCE (STATS) */}
      <section className="adv-section">
        <div className="absolute inset-0 bg-[#ff0013]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                3000<span>+</span>
              </p>
              <p className="text-xs lg:text-sm font-semibold tracking-wider text-[#888] uppercase">
                Advertises On Board
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                100<span>%</span>
              </p>
              <p className="text-xs lg:text-lg font-semibold tracking-wider text-[#888] uppercase">
                Publishers are happy with us
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                2000<span>+</span>
              </p>
              <p className="text-xs lg:text-lg font-semibold tracking-wider text-[#888] uppercase">
                Offers
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                2Mn<span>+</span>
              </p>
              <p className="text-xs lg:text-lg font-semibold tracking-wider text-[#888] uppercase">
                Monthly Engagements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ (ACCORDION) */}
      <section className="adv-section">
        <div className="adv-container">
          <div className="adv-section-header">
            <h2 className="adv-title">Frequently Asked Questions</h2>

            <p className="adv-subtitle">
              Granular technical operational details concerning Step to Sale LLC
              network parameters.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 md:p-6 text-left font-medium text-white hover:text-[#ff3b3f] transition-colors focus:outline-none gap-4">
                    <span className="text-sm lg:text-base tracking-wide font-semibold">
                      {faq.q}
                    </span>
                    <span
                      className={`transform transition-transform duration-300 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-[#2a2a2a] text-[#ff3b3f] ${isOpen ? "rotate-180 bg-[#ff0013] text-white" : ""}`}>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] border-t border-[#2a2a2a]/60" : "max-h-0"}`}>
                    <p className="p-5 md:p-6 text-xs lg:text-lg text-[#888] leading-relaxed bg-[#0a0a0a]/30">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA SECTION */}
      <CTA />
    </div>
  );
}
