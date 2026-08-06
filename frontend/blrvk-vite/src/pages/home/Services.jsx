import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import speedImg from "../../assets/images/speedImg.jpeg";
import orchestrationImg from "../../assets/images/orchestrationImg.jpeg";
import customAiImg from "../../assets/images/customAiImg.jpeg";
import systemIntImg from "../../assets/images/systemIntImg.jpeg";
import deployImg from "../../assets/images/deployImg.jpeg";
import { ArrowRightIcon } from "../../components/Icons";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Services.css";

const SERVICES = [
  {
    title: "AI Automation",
    description:
      "Eliminate repetitive work with intelligent automations that save time and reduce manual effort.",
    image: speedImg,
  },
  {
    title: "Workflow Intelligence",
    description:
      "Connect your tools into one seamless workflow that keeps your business moving effortlessly.",
    image: orchestrationImg,
  },
  {
    title: "Custom AI Agents",
    description:
      "AI assistants designed around your business to handle tasks, answer questions and support your team.",
    image: customAiImg,
  },
  {
    title: "System Integration",
    description:
      "Unify your software, data and processes into one intelligent ecosystem built for growth.",
    image: systemIntImg,
  },
  {
    title: "Deployment & Scale",
    description:
      "From launch to continuous optimization, we ensure your AI systems perform reliably as you grow.",
    image: deployImg,
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-header">
        <span className="services-eyebrow">
          <span className="services-eyebrow-dot" aria-hidden="true" />
          Capabilities
        </span>
        <h2 className="services-title">
          Automation Built Around Your <span className="services-title-accent">Business</span>
        </h2>
      </div>

      <Swiper
        speed={1500}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {SERVICES.map(({ title, description, image }) => (
          <SwiperSlide key={title}>
            <div className="service-media" style={{ backgroundImage: `url(${image})` }}>
              <div className="service-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <Link to="/contact" className="btn btn-dark service-cta">
                  Let's Talk <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
