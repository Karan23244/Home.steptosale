import React from "react";

export default function FraudSafety() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="section-inner">
          <div className="section-label">LEGAL INFORMATION</div>

          <h1 className="legal-title">FRAUD SAFETY POLICY</h1>

          <p className="legal-subtitle">
            Last Updated: June 2026
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="section-inner">

          <div className="legal-section">
            <h2>Our Commitment to Security</h2>
            <p>
              Step to Sale LLC operates performance advertising, lead generation, and affiliate 
              marketing networks. Because our ecosystem connects businesses, advertisers, and 
              consumers, we take fraud and deceptive activities seriously. This Fraud Safety Policy 
              outlines the measures we take to keep our platform clean and how you can protect yourself 
              from bad actors.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. Protecting Against Brand Impersonation (Phishing)</h2>
            <p>
              Scammers sometimes misuse reputable brand names to execute phishing schemes. Please stay 
              alert to the following parameters to ensure you are interacting directly with Step to Sale LLC:
            </p>
            <ul>
              <li>
                <strong>Official Email Domain:</strong> All official corporate correspondence from our team 
                will exclusively originate from an <code>@steptosale.com</code> email address. We will 
                never email you from public domains like Gmail, Yahoo, or Outlook.
              </li>
              <li>
                <strong>No Financial Solicitations:</strong> Step to Sale LLC does not directly solicit 
                or collect consumer payments, bank wires, or cryptocurrency deposits on this website. 
                If someone contacts you demanding upfront fees or security deposits using our name, treat 
                it as fraudulent.
              </li>
              <li>
                <strong>Verify URL Security:</strong> Always verify that the domain in your browser address 
                bar reads exactly <code>https://home.steptosale.com/</code> or <code>https://steptosale.com/</code>.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. Advertiser Compliance (Anti-Fraud)</h2>
            <p>
              To maintain the integrity of our lead generation and affiliate operations, we enforce a 
              zero-tolerance policy against traffic and data manipulation. Prohibited behaviors include:
            </p>
            <ul>
              <li>Submitting fraudulent, automated, or synthetic lead data through our forms.</li>
              <li>Utilizing bots, click farms, or incentivized script manipulations to artificially inflate affiliate conversions.</li>
              <li>Masking traffic sources, utilizing unauthorized redirects, or engaging in cookie-stuffing practices.</li>
            </ul>
            <p>
              Accounts found violating these guidelines will face immediate termination, forfeiture of accrued 
              commissions, and potential legal escalation.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Third-Party Affiliate Offers</h2>
            <p>
              We partner with various digital third-party advertisers. While we vet our business partners, 
              we encourage users to perform due diligence before sharing highly sensitive financial records 
              or completing high-value offers on external landing pages. 
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Reporting Suspicious Activity</h2>
            <p>
              If you identify a suspicious listing, receive an unverified communication pretending to represent 
              us, or notice potential system exploits, please report it immediately to our security desk.
            </p>

            <p>
              <strong>Step to Sale LLC</strong>
              <br />
              5830 E 2nd St, Ste 7000 #33149
              <br />
              Casper, WY 82609
              <br />
              Wyoming, United States
            </p>

            <p>
              <strong>Security Contact Email:</strong>{" "}
              <a href="mailto:partners@steptosale.com">
                partners@steptosale.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}