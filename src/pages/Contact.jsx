import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBullhorn,
} from "react-icons/fa";

export default function Contact() {
  const handleSubmit = async (e) => {
    const [submitted, setSubmitted] = useState(false);
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      website: e.target.website.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    const response = await fetch("https://formspree.io/f/mgojoebq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.ok) {

      // Clear all fields
      form.reset();
      setSubmitted(true);
      e.target.reset();
    }
  };
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="section-inner">
          <div className="section-label">CONTACT</div>

          <h1>
            LET'S BUILD YOUR
            <br />
            NEXT <span>GROWTH STORY</span>
          </h1>

          <p>
            Whether you're an advertiser looking for scale, our team is ready to
            help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards">
        <div className="section-inner cards-grid">
          <div className="contact-card">
            <FaEnvelope />
            <h3>General Inquiries</h3>
            <span>partners@steptosale.com</span>
          </div>

          <div className="contact-card">
            <FaBullhorn />
            <h3>Advertisers</h3>
            <span>ravindra@steptosale.com</span>
          </div>

          <div className="contact-card">
            <FaPhoneAlt />
            <h3>Partnerships</h3>
            <span>partners@steptosale.com</span>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <h3>Location</h3>
            <span>Wyoming, USA</span>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="contact-main">
        <div className="section-inner contact-grid">
          <div className="contact-content">
            <div className="section-label">GET IN TOUCH</div>

            <h2>
              PERFORMANCE
              <br />
              STARTS WITH A
              <br />
              CONVERSATION.
            </h2>

            <p>
              Share your goals and our team will reach out with tailored
              recommendations designed to increase conversions and maximize ROI.
            </p>

            <ul>
              <li>✓ Performance Marketing</li>
              <li>✓ Lead Generation</li>
              <li>✓ Programmatic Advertising</li>
              <li>✓ Mobile Marketing</li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="company" placeholder="Company Name" />
              <input type="text" name="website" placeholder="Website" />

              <select name="service">
                <option value="">Select Service</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Programmatic Advertising">
                  Programmatic Advertising
                </option>
                <option value="Social Media Advertising">
                  Social Media Advertising
                </option>
                <option value="Mobile Marketing">Mobile Marketing</option>
              </select>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your goals..."
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
