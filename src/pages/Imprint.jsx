import React from "react";

export default function Imprint() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="section-inner">
          <div className="section-label">LEGAL INFORMATION</div>

          <h1 className="legal-title">IMPRINT</h1>

          <p className="legal-subtitle">
            Information pursuant to applicable legal and transparency
            requirements.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="section-inner">

          {/* Company Information */}
          <div className="legal-section">
            <h2>Company Information</h2>

            <p>
              <strong>Company Name:</strong> Step to Sale
            </p>

            <p>
              <strong>Office Address:</strong>
              <br />
              5830 E 2nd St, Ste 7000 #33149
              <br />
              Casper, WY 82609
              <br />
              Natrona County, Wyoming
              <br />
              United States of America
            </p>
          </div>

          {/* Management */}
          <div className="legal-section">
            <h2>Management</h2>

            <ul>
              <li>Anisha Marak</li>
              <li>Emily Anderson</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="legal-section">
            <h2>Contact Information</h2>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:partners@steptosale.com">
                partners@steptosale.com
              </a>
            </p>
          </div>

          {/* Tax Information */}
          <div className="legal-section">
            <h2>Tax Information</h2>

            <p>
              <strong>EIN:</strong> 30-1481498
            </p>
          </div>

          {/* Responsible */}
          <div className="legal-section">
            <h2>Responsible for Website Content</h2>

            <ul>
              <li>Anisha Marak</li>
              <li>Emily Anderson</li>
            </ul>
          </div>

          {/* Affiliate Disclosure */}
          <div className="legal-section">
            <h2>Affiliate Disclosure</h2>

            <p>
              Step to Sale participates in various affiliate marketing and
              advertising programs. As part of these programs, we may earn
              commissions or receive compensation when users interact with
              affiliate links, complete offers, or make purchases through links
              featured on our websites.
            </p>

            <p>
              Such compensation does not affect the price paid by users and
              helps support the operation of our business.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="legal-section">
            <h2>Disclaimer</h2>

            <p>
              The content on this website is provided for general informational
              and marketing purposes only. While we strive to ensure that all
              information is accurate and up to date, Step to Sale makes no
              warranties or representations regarding the completeness,
              accuracy, reliability, or availability of any information,
              products, services, or related graphics contained on this
              website.
            </p>
          </div>

          {/* External Links */}
          <div className="legal-section">
            <h2>External Links</h2>

            <p>
              This website may contain links to third-party websites. Step to
              Sale has no control over the content, policies, or practices of
              such websites and assumes no responsibility for them.
            </p>

            <p>
              Users access third-party websites at their own risk.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="legal-section">
            <h2>Intellectual Property</h2>

            <p>
              Unless otherwise stated, all content, trademarks, logos,
              graphics, and materials displayed on this website are the
              property of Step to Sale or their respective owners and are
              protected by applicable intellectual property laws.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="legal-section">
            <h2>Limitation of Liability</h2>

            <p>
              To the fullest extent permitted by law, Step to Sale shall not be
              liable for any direct, indirect, incidental, consequential, or
              special damages arising from or in connection with the use of
              this website or reliance on any information provided herein.
            </p>
          </div>

          {/* Compliance */}
          <div className="legal-section">
            <h2>Compliance Notice</h2>

            <p>
              Step to Sale operates in accordance with applicable laws and
              regulations governing online publishing, digital marketing, and
              affiliate advertising.
            </p>

            <p>
              We are committed to transparency and responsible business
              practices.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};