import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BookCall from "./BookCall";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="Step To Sale" />
      </Link>

      {/* Desktop Menu */}
      <ul className="nav-links desktop-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/advertisers">Advertisers</a>
        </li>
        <li>
          <a href="#brands">Brands</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <BookCall/>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/advertisers" onClick={() => setIsOpen(false)}>
          Advertisers
        </Link>
        <Link to="#brands" onClick={() => setIsOpen(false)}>
          Brands
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>

        <div>
          <BookCall />
        </div>
      </div>
    </nav>
  );
}
