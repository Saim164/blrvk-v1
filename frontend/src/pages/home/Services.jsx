import { Link } from "react-router-dom";

import {
  ArrowRightIcon,
  BoltIcon,
  WorkflowIcon,
  BotIcon,
  PuzzleIcon,
  RocketIcon,
  GraduationCapIcon,
} from "../../components/Icons";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Services.css";

const SERVICES = [
  {
    title: "AI Automation",
    description:
      "Eliminate repetitive work with intelligent automations that save time and reduce manual effort.",
    Icon: BoltIcon,
  },
  {
    title: "Workflow Intelligence",
    description:
      "Connect your tools into one seamless workflow that keeps your business moving effortlessly.",
    Icon: WorkflowIcon,
  },
  {
    title: "Custom AI Agents",
    description:
      "AI assistants designed around your business to handle tasks, answer questions and support your team.",
    Icon: BotIcon,
  },
  {
    title: "System Integration",
    description:
      "Unify your software, data and processes into one intelligent ecosystem built for growth.",
    Icon: PuzzleIcon,
  },
  {
    title: "Deployment & Scale",
    description:
      "From launch to continuous optimization, we ensure your AI systems perform reliably as you grow.",
    Icon: RocketIcon,
  },
  {
    title: "Corporate Training",
    description:
      "Empower your team with the knowledge and skills to leverage AI and automation effectively.",
    Icon: GraduationCapIcon,
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
        <p className="services-subtitle">
          We combine intelligent automation with modern technology to help your
          business operate faster, smarter, and more efficiently.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map(({ title, description, Icon }) => (
          <article className="service-card" key={title}>
            <span className="service-card-icon" aria-hidden="true">
              <Icon />
            </span>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-desc">{description}</p>
            <Link to="/contact" className="service-card-link">
              Learn more <ArrowRightIcon />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
