import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Download, PhoneCall } from "lucide-react";
import logo from "../../../logo.png";
import { cn } from "../../lib/utils";

function Container({ children, className, delay = 0.2, reverse, simple }) {
  return (
    <motion.div
      className={cn("z-footer-container", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: simple ? 0.2 : 0.4,
        type: simple ? "keyframes" : "spring",
        stiffness: simple ? 100 : 70
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Footer03() {
  return (
    <footer id="contact" className="z-footer">
      <div className="z-footer-grid">
        <Container className="z-footer-brand-wrap">
          <img src={logo} alt="Zapygo Logo" className="z-footer-logo" />
          <p className="z-footer-brand-copy">
            Build better fuel operations with Zapygo - the automation-first B2B delivery platform for industrial
            teams.
          </p>
        </Container>

        <div className="z-footer-links-grid">
          <Container delay={0.1}>
            <h3>Quick Contact</h3>
            <p className="z-footer-helper">If you have any questions or need help, feel free to contact with our team.</p>
            <ul>
              <li>
                <a href="mailto:team@zapygo.com">team@zapygo.com</a>
              </li>
              <li>
                <a href="tel:+918800908227">+91 8800908227</a>
              </li>
              <li className="z-footer-address">
                Om Chambers, 648/A, 4th Floor, Binnamangala 1st Stage, Indiranagar, Bangalore - 560038
              </li>
            </ul>
          </Container>

          <Container delay={0.2}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#how">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
            </ul>
          </Container>

          <Container delay={0.3}>
            <h3>Download Our App</h3>
            <p className="z-footer-helper">
              Download now to order diesel at your doorstep. We are here to make the procurement of diesel a smooth
              and smarter process.
            </p>
            <div className="z-footer-app-buttons">
              <a href="#" className="z-store-btn">
                <Download size={15} />
                <span>Download on the App Store</span>
              </a>
              <a href="#" className="z-store-btn">
                <PhoneCall size={15} />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </Container>

          <Container delay={0.35}>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#home" className="z-back-top-inline">
                  Back To Top
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </div>

      <Container delay={0.45} className="z-footer-bottom-wrap">
        <div className="z-footer-bottom">
          <p>©2023 ZapyGo, All Rights Reserved.</p>
          <a href="#home" className="z-back-top">
            <span>Back To Top</span>
            <ArrowUp size={15} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
