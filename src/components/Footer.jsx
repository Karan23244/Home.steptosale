import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/logo.png" alt="Step To Sale" />

            <p>
              A performance marketing agency built to drive results. Every
              channel. Every conversion. Every time.
            </p>

            <div className="footer-tagline">PERFORMANCE, PERFECTED.</div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="#advertisers">For Advertisers</a>
              </li>
              <li>
                <a href="#brands">Our Brands</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>LEGAL</h4>
            <ul>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/cookies">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col footer-contact">
            <h4>CONTACT</h4>

            <p>Email us at</p>

            <a href="mailto:info@steptosale.com" className="footer-email">
              partners@steptosale.com
            </a>

            <div className="footer-address">
              <p>Step To Sale LLC</p>
              <p>5830 E 2nd St, Ste 7000 #33149</p>
              <p>Casper, Wyoming 82609</p>
              <p>Natrona, Wyoming, USA</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Step To Sale LLC. All rights reserved.</span>

          <span>5830 E 2nd St, Ste 7000 #33149, Casper, WY 82609</span>
        </div>
      </div>
    </footer>
  );
}
