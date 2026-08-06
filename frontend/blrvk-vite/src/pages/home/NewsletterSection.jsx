import { useState } from "react";
import { ArrowRightIcon, LockIcon, MailIcon } from "../../components/Icons";
import { postJson } from "../../lib/api";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./NewsletterSection.css";

function NewsletterSection() {
  const sectionRef = useScrollReveal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      await postJson("/api/newsletter", { email });
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <section className="newsletter-section" ref={sectionRef}>
      <div className="newsletter-container">
        <span className="newsletter-eyebrow">Stay Connected</span>

        <span className="newsletter-logo">BLRVK</span>

        <h2 className="newsletter-heading">
          Everything <span className="newsletter-heading-accent">AI.</span>
        </h2>

        <p className="newsletter-description">
          Monthly insights on AI automation, intelligent systems, and practical workflows. No
          spam. Just useful ideas.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="newsletter-input-wrap">
            <MailIcon className="newsletter-input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              aria-label="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="btn btn-dark newsletter-submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : (
              <>
                Subscribe <ArrowRightIcon />
              </>
            )}
          </button>
        </form>

        {status === "success" && (
          <p className="newsletter-status newsletter-status-success" role="status">
            You're subscribed. Welcome aboard.
          </p>
        )}

        {status === "error" && (
          <p className="newsletter-status newsletter-status-error" role="alert">
            {errorMessage}
          </p>
        )}

        <p className="newsletter-privacy">
          <LockIcon className="newsletter-privacy-icon" />
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default NewsletterSection;
