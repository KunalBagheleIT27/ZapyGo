import React, { useState } from "react";
import logo from "../logo.png";
import WhySection from "./components/WhySection";
import FuelSolution from "./components/FuelSolution";
import TestimonialsDemo from "./components/ui/testimonials-demo";
import Footer03 from "./components/ui/ruixen-footer03";
import { Menu, X } from "lucide-react";

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="page-wrap">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section id="home" className="hero-section">
        <div className="hero-bg">
          <div className="map-grid" />
          <div className="nodes-layer">
            {Array.from({ length: 9 }).map((_, index) => (
              <span className={`node node-${index + 1}`} key={`node-${index}`} />
            ))}
          </div>
          <div className="flow-lines" />
          <div className="bg-phone" />
          <div className="bg-truck" />
          <div className="bg-brand-fade">
            <h2>ZAPYGO</h2>
            <p>Fueling Industry Without Friction</p>
          </div>
          <div className="hero-overlay" />
        </div>

        <header className="top-nav">
          <a href="#home" className="brand">
            <img src={logo} alt="Zapygo" />
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav>
            <a href="#home" className="active-link">Home</a>
            <a href="#why">Why ZapyGo</a>
            <a href="#contact">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <button className="btn btn-primary">Order Fuel</button>
        </header>

        <div id="mobile-navigation" className={`mobile-nav-panel ${mobileMenuOpen ? "is-open" : ""}`}>
          <a href="#home" className="mobile-nav-link active-link" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#why" className="mobile-nav-link" onClick={closeMobileMenu}>
            Why ZapyGo
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            About Us
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact Us
          </a>
          <a href="#contact" className="mobile-nav-cta btn btn-primary" onClick={closeMobileMenu}>
            Order Fuel
          </a>
        </div>

        <div className="hero-content">
          <h1>
            <span className="red-line">Real-Time Fuel Delivery.</span>
            <span className="black-line">
              Zero Loss. <u>Zero Stress.</u>
            </span>
          </h1>

          <p>
            B2B fuel logistics engineered for precision. We eliminate manual errors, spillage, and
            theft through a fully automated, transparent delivery ecosystem.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </section>

      {/* ── Why Section (scroll-controlled storytelling) ──────────────────── */}
      <WhySection />

      {/* ── Fuel Solution (The Six Pillars) ──────────────────── */}
      <FuelSolution />

      <TestimonialsDemo />
      <Footer03 />
    </div>
  );
}
