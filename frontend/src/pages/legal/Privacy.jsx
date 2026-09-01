import "./Legal.css";

function Privacy() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <span className="legal-eyebrow">
          <span className="legal-eyebrow-dot" aria-hidden="true" />
          Understanding Our
        </span>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: August 2026</p>
      </header>

      <div className="legal-body">
        <p className="legal-intro">
          At BLRVK, we respect your privacy. This Privacy Policy explains what information we
          collect, how we use it, and how we protect it when you interact with our website.
        </p>

        <section className="legal-block">
          <h2>Information We Collect</h2>
          <p>
            We only collect the information you voluntarily provide through our contact form,
            including:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company name (if provided)</li>
            <li>Project details or message</li>
          </ul>
          <p>We do not collect unnecessary personal information.</p>
        </section>

        <section className="legal-block">
          <h2>How We Use Your Information</h2>
          <p>The information you submit is used only to:</p>
          <ul>
            <li>Respond to your inquiry.</li>
            <li>Discuss your project requirements.</li>
            <li>Communicate with you regarding our services.</li>
            <li>Provide quotations or project proposals when requested.</li>
          </ul>
          <p>
            <strong>Your information will never be sold or shared for marketing purposes.</strong>
          </p>
        </section>

        <section className="legal-block">
          <h2>Third-Party Services</h2>
          <p>
            To receive and process contact form submissions, we may use trusted third-party
            services such as email delivery providers.
          </p>
          <p>
            These services only process the information necessary to deliver your message
            securely.
          </p>
        </section>

        <section className="legal-block">
          <h2>Data Storage</h2>
          <p>
            The information you submit may be stored only for as long as necessary to respond to
            your inquiry, communicate about your project, or maintain business records.
          </p>
          <p>We do not keep personal information longer than necessary.</p>
        </section>

        <section className="legal-block">
          <h2>Your Privacy</h2>
          <p>
            If you have submitted information through our contact form and would like it updated
            or removed, you may contact us at any time. We will make reasonable efforts to process
            your request.
          </p>
        </section>

        <section className="legal-block">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be published on
            this page with an updated revision date.
          </p>
        </section>

        <section className="legal-block">
          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us.
            <br />
            BLRVK
            <br />
            <strong>Email: sales.support@blrvk.com</strong>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Privacy;
