import { Link } from "react-router-dom";
import {
  DiscordIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../Icons";
import { useSectionNav } from "../../hooks/useSectionNav";
import "./Footer.css";

function Footer() {
  const { goToSection } = useSectionNav();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">BLRVK</span>
          <p className="footer-tagline">
            Intelligent automation systems for modern businesses.
          </p>
        </div>

        <div className="footer-column">
          <h5 className="footer-heading">Navigation</h5>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <a
            href="/#services"
            className="footer-link"
            onClick={(event) => goToSection(event, "services")}
          >
            Services
          </a>
          <a
            href="/#about"
            className="footer-link"
            onClick={(event) => goToSection(event, "about")}
          >
            About
          </a>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <div className="footer-column">
          <h5 className="footer-heading">Legal</h5>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link">
            Terms &amp; Conditions
          </Link>
        </div>

        <div className="footer-column">
          <h5 className="footer-heading">Contact</h5>
          <div className="footer-contact-item">
            <span className="footer-label">Email</span>
            <a href="mailto:sales.support@blrvk.com" className="footer-link">
              sales.support@blrvk.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 BLRVK. All rights reserved.</p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/company/blrvk/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://discord.com/invite/ExtPHpAc6"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="footer-social-link"
          >
            <DiscordIcon />
          </a>
          <a
            href="https://chat.whatsapp.com/Bi3ASFjX1yE6h63B1dfYO0"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Channel"
            className="footer-social-link"
          >
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
