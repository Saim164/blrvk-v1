import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "../Icons";
import { useSectionNav } from "../../hooks/useSectionNav";
import logo from "../../assets/images/logo.png";
import "./Nav.css";

function Nav() {
  const { goToSection, goHome } = useSectionNav();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleSectionClick(event, id) {
    goToSection(event, id);
    setMobileOpen(false);
  }

  function handleLogoClick(event) {
    goHome(event);
    setMobileOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <img src={logo} alt="BLRVK" className="navbar-logo-img" />
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          <a
            href="/#services"
            className="navbar-link"
            onClick={(event) => handleSectionClick(event, "services")}
          >
            Services
          </a>
          <a
            href="/#about"
            className="navbar-link"
            onClick={(event) => handleSectionClick(event, "about")}
          >
            About
          </a>
          <Link to="/terms" className="navbar-link">
            Terms &amp; Conditions
          </Link>
          <Link to="/privacy" className="navbar-link">
            Privacy Policy
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-dark navbar-contact-btn">
            Let's Talk <ArrowRightIcon />
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          className={`navbar-mobile-menu${mobileOpen ? " is-open" : ""}`}
          aria-label="Mobile"
          aria-hidden={!mobileOpen}
          inert={!mobileOpen}
        >
          <a
            href="/#services"
            className="navbar-mobile-link"
            onClick={(event) => handleSectionClick(event, "services")}
          >
            Services
          </a>
          <a
            href="/#about"
            className="navbar-mobile-link"
            onClick={(event) => handleSectionClick(event, "about")}
          >
            About
          </a>
          <Link
            to="/terms"
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Terms &amp; Conditions
          </Link>
          <Link
            to="/privacy"
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="btn btn-dark navbar-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Let's Talk <ArrowRightIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
