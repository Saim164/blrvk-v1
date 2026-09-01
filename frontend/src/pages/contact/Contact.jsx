import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowRightIcon,
  BoltIcon,
  LockIcon,
  MessageCircleIcon,
} from "../../components/Icons";
import { postJson } from "../../lib/api";
import "./Contact.css";

const trustPoints = [
  {
    icon: BoltIcon,
    title: "Fast Response",
    description: "We usually reply within 24 hours.",
  },
  {
    icon: LockIcon,
    title: "Confidential",
    description: "Your information stays private.",
  },
  {
    icon: MessageCircleIcon,
    title: "Real Conversations",
    description: "Talk directly with people.",
  },
];

function Contact() {
  const pageRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const fields = gsap.utils.toArray(".contact-field", formRef.current);

      const tl = gsap.timeline();

      tl.from(leftRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          formRef.current,
          { opacity: 0, y: 60, duration: 0.9, ease: "power3.out" },
          0.15
        )
        .from(
          fields,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
          },
          0.35
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrorMessage("");

    try {
      await postJson("/api/contact", payload);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <main className="contact-page" ref={pageRef}>
      <div className="contact-container">
        <div className="contact-left" ref={leftRef}>
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" aria-hidden="true" />
            Let's Connect
          </span>

          <h1 className="contact-heading">
            <span className="contact-heading-line">Let's build</span>
            <span className="contact-heading-line">your next</span>
            <span className="contact-heading-line contact-heading-line-accent">
              system.
            </span>
          </h1>

          <p className="contact-description">
            Tell us a little about your business and what you're looking to
            build. We'll get back to you within 24 hours.
          </p>

          <ul className="contact-trust-list">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <li className="contact-trust-item" key={title}>
                <span className="contact-trust-icon">
                  <Icon />
                </span>
                <span className="contact-trust-body">
                  <span className="contact-trust-title">{title}</span>
                  <span className="contact-trust-description">
                    {description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">
                Full Name <span className="contact-required">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="contact-input"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">
                Business Email <span className="contact-required">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact-input"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-company">
              Company Name <span className="contact-optional">(Optional)</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              className="contact-input"
              placeholder="Acme Technologies"
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-phone">
              Phone Number <span className="contact-optional">(Optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className="contact-input"
              placeholder="+92 XXX XXXXXXX"
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">
              Message <span className="contact-required">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="contact-textarea"
              rows={5}
              placeholder="Tell us about your business, your challenge, or what you're looking to build. We'll take it from there."
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit contact-field"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                Start the Conversation <ArrowRightIcon />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success" role="status">
              Message sent — we'll be in touch within 24 hours.
            </p>
          )}

          {status === "error" && (
            <p className="contact-status contact-status-error" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="contact-privacy">
            <LockIcon className="contact-privacy-icon" />
            We respect your privacy. No spam. Ever.
          </p>
        </form>
      </div>
    </main>
  );
}

export default Contact;
