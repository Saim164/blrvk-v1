import "./Legal.css";

function Terms() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <span className="legal-eyebrow">
          <span className="legal-eyebrow-dot" aria-hidden="true" />
          Understanding Our
        </span>
        <h1 className="legal-title">Terms &amp; Conditions</h1>
        <p className="legal-updated">Last updated: December 12, 2025</p>
      </header>

      <div className="legal-body">
        <p className="legal-intro">
          Welcome to BLRVK. By accessing our website or using our services, you agree to be bound
          by the following Terms &amp; Conditions. If you do not agree with these terms, please
          do not use our services.
        </p>

        <section className="legal-block">
          <h2>1. Services</h2>
          <p>
            BLRVK provides AI automation solutions, including but not limited to voice agents,
            workflow automation, and operational optimization services. The scope, timeline, and
            deliverables of services will be defined in a separate agreement or proposal.
          </p>
        </section>

        <section className="legal-block">
          <h2>2. No Guaranteed Results</h2>
          <p>
            While BLRVK aims to improve efficiency, lead handling, and operational performance, we{" "}
            <strong>do not guarantee specific revenue, ROI, or business outcomes.</strong> Results
            may vary based on industry, implementation, data quality, and client execution.
          </p>
        </section>

        <section className="legal-block">
          <h2>3. Client Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information required for implementation</li>
            <li>
              Ensure compliance with local laws and regulations related to data, calls, and
              automation
            </li>
            <li>Use our services ethically and legally</li>
          </ul>
          <p>
            BLRVK is not responsible for issues caused by inaccurate data or misuse of systems.
          </p>
        </section>

        <section className="legal-block">
          <h2>4. Payments &amp; Subscriptions</h2>
          <p>
            All fees, billing cycles, and payment terms will be defined in your service agreement.
            Payments are non-refundable unless otherwise stated in writing. Failure to pay may
            result in suspension or termination of services.
          </p>
        </section>

        <section className="legal-block">
          <h2>5. Intellectual Property</h2>
          <p>
            All systems, workflows, automation logic, and materials created by BLRVK remain the
            intellectual property of BLRVK unless otherwise agreed. Clients are granted a license
            to use the systems during the active service period.
          </p>
        </section>

        <section className="legal-block">
          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential information private and not disclose it to
            third parties without written consent, except where required by law.
          </p>
        </section>

        <section className="legal-block">
          <h2>7. Limitation of Liability</h2>
          <p>
            BLRVK shall not be liable for any indirect, incidental, or consequential damages,
            including loss of revenue, data, or business opportunities arising from the use of our
            services.
          </p>
        </section>

        <section className="legal-block">
          <h2>8. Termination</h2>
          <p>
            Either party may terminate services according to the terms outlined in the service
            agreement. Upon termination, access to systems may be revoked unless otherwise agreed.
          </p>
        </section>

        <section className="legal-block">
          <h2>9. Third-Party Tools</h2>
          <p>
            BLRVK may integrate third-party platforms (e.g., AI models, telephony providers).
            BLRVK is not responsible for outages, changes, or failures caused by third-party
            services.
          </p>
        </section>

        <section className="legal-block">
          <h2>10. Modifications</h2>
          <p>
            BLRVK reserves the right to update these Terms &amp; Conditions at any time. Continued
            use of services constitutes acceptance of updated terms.
          </p>
        </section>

        <section className="legal-block">
          <h2>11. Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by and interpreted in accordance with
            applicable international business laws, without regard to conflict of law principles.
          </p>
        </section>

        <section className="legal-block">
          <h2>12. Contact</h2>
          <p>
            For questions regarding these Terms &amp; Conditions, please contact:
            <br />
            <strong>Email: sales.support@blrvk.com</strong>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Terms;
