import React, { useEffect } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Audience from "./components/Audience";
import Brands from "./components/Brands";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import AdvertiserServices from "./pages/AdvertiserServices";
import Leadership from "./pages/Leadership";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Inventories from "./components/Inventry";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/Cookies";
import FraudSafety from "./pages/Fraudsafety";
import DMCAPolicy from "./pages/Dmcapolicy";
import EditorialContent from "./pages/EditorialContent";
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((reveal) => io.observe(reveal));

    return () => io.disconnect();
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((r) => io.observe(r));

    return () => io.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Cursor />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Inventories />
                <Brands />
                <Process />
                <CTA />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<AdvertiserServices />} />
          <Route path="/advertisers" element={<AdvertiserServices />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fraud-safety" element={<FraudSafety />} />
          <Route path="/dmca-policy" element={<DMCAPolicy />} />
          <Route path="/editorial-content" element={<EditorialContent />} />

          <Route
            path="/brands"
            element={
              <>
                <Brands />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
