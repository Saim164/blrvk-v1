import heroImg from "../../assets/images/heroImg.jpeg";
import Stats from "./Stats";

import { ArrowRightIcon } from "../../components/Icons";
import { useSectionNav } from "../../hooks/useSectionNav";
import "./Hero.css";

function Hero() {
  const { goToSection } = useSectionNav();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            AI for Modern Businesses
          </span>

          <h1 className="hero-heading">
            <span className="hero-heading-line">Intelligent systems.</span>
            <span className="hero-heading-line hero-heading-line-accent">
              Real results.
            </span>
          </h1>

          <p className="hero-description">
            We design and build AI systems that streamline
            operations, eliminate bottlenecks, and unlock scalable growth.
          </p>

          <div className="hero-actions">
            <a
              href="/#services"
              className="btn btn-dark hero-cta-primary"
              onClick={(event) => goToSection(event, "services")}
            >
              Explore Services <ArrowRightIcon />
            </a>
            <a
              href="/#about"
              className="btn btn-outline hero-cta-secondary"
              onClick={(event) => goToSection(event, "about")}
            >
              Learn More <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img
            src={heroImg}
            alt="Abstract sculptural ring form with a soft purple glow, representing AI-driven automation"
            className="hero-image"
          />
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Hero;
