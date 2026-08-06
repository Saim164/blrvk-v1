import "./AboutUs.css";

import aboutHeroImg from "../../assets/images/aboutHeroImg.jpeg";
import aboutRightImg from "../../assets/images/aboutRigthImg.jpeg";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const AboutUs = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <h1 className="about__title">ABOUT BLRVK</h1>

      <div className="about__grid">
        <div className="about__panel">
          <h2 className="about__headline">
            TRANSFORM THE WAY
            <br />
            YOUR BUSINESS WORKS.
          </h2>

          <div className="about__vision">
            <h3 className="about__vision-label">OUR APPROACH</h3>
            <p className="about__vision-text">
              BLRVK creates intelligent automation systems that simplify
              operations, eliminate repetitive work, and help businesses move
              faster. Every workflow is designed around how your business
              actually operates—not around generic templates or unnecessary
              complexity.
            </p>
          </div>
        </div>

        <div className="about__hero-img">
          <img src={aboutHeroImg} alt="about hero image" />
        </div>

        <div className="about__gym-img">
          <img src={aboutRightImg} alt="about right image" />
        </div>

        <div className="about__label-card">
          <h2 className="about__label-heading">
            BUILD TO SCALE <br /> INTELLIGENT SYSTEMS <br /> FOR MODERN
            BUSINESSES.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
