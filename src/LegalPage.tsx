
import "./App.css";

type LegalPageProps = {
  type: "privacy" | "terms";
};

export default function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === "privacy";

  return (
    <div className="website">
      <header className="header">
        <a className="logo" href="/">
          <img
            src="/calltel-logo.png"
            alt="CALLTEL logo"
            className="calltel-logo-image"
          />
          <span className="logo-name">CALLTEL</span>
        </a>
        <a className="login-button" href="/">
          Back to Home
        </a>
      </header>

      <main className="legal-page">
        <article className="legal-document">
          <p className="eyebrow">CALLTEL · LEGAL</p>
          <h1>
            {isPrivacy ? "Privacy Policy" : "Terms of Service"}
          </h1>
          <p className="legal-date">Last updated: November 22, 2026</p>

          {isPrivacy ? (
            <>
              <h2>1. Information We Collect</h2>
              <p>
                CALLTEL collects information needed to provide
                international calling services, including email
                addresses, account details, saved contacts, call
                history, subscription information, payment records,
                and technical information.
              </p>

              <h2>2. How We Use Information</h2>
              <p>
                We use this information to manage accounts, verify
                email addresses, connect calls, process payments,
                manage wallet balances and subscriptions, provide
                support, prevent fraud, and maintain our services.
              </p>

              <h2>3. Contacts and Third-Party Services</h2>
              <p>
                CALLTEL may access device contacts with your
                permission. Contacts you choose to save within
                CALLTEL may be stored in your account. Phone
                numbers used for calling are processed as needed
                to connect calls.
              </p>
              <p>
                We share necessary information with service
                providers, including Twilio for calling, Stripe
                for payments, and hosting providers. We do not
                sell personal information.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We use reasonable technical and organizational
                safeguards to protect information. However, no
                electronic system can guarantee absolute security.
              </p>

              <h2>5. Account Deletion and Retention</h2>
              <p>
                You can request account deletion through the
                CALLTEL app. Your account is deactivated
                immediately, and access to unused wallet balances,
                credits, packages, and minutes ends.
              </p>
              <p>
                Eligible personal information is scheduled for
                deletion or anonymization after 180 days.
                Certain transaction, billing, security, and
                service records may be retained where necessary
                for legal, financial, or regulatory purposes.
                Creating a new account does not restore forfeited
                balances or minutes.
              </p>

              <h2>6. Your Choices and Rights</h2>
              <p>
                You may request access to, correction of, or
                deletion of eligible personal information,
                subject to applicable law.
              </p>

              <h2>7. Policy Updates</h2>
              <p>
                We may update this policy periodically. The
                latest version will be published on this website.
              </p>
            </>
          ) : (
            <>
              <h2>1. Using CALLTEL</h2>
              <p>
                By creating an account or using CALLTEL, you
                agree to these Terms of Service. CALLTEL provides
                prepaid international calling services through
                wallet credits and calling packages.
              </p>

              <h2>2. Accounts</h2>
              <p>
                You must provide accurate account information,
                keep your login credentials secure, and use the
                service lawfully.
              </p>

              <h2>3. Payments and Packages</h2>
              <p>
                Payments are processed through Stripe. Package
                prices, included minutes, and validity periods
                are displayed before purchase. Packages expire
                according to their stated terms. Unused minutes
                do not roll over unless explicitly stated.
              </p>

              <h2>4. Calling Rates and Billing</h2>
              <p>
                Calling rates depend on the destination and may
                change. CALLTEL displays applicable rates before
                calling. Calls are billed according to the
                service's minute-rounding and available-balance
                rules. Eligible subscription minutes are used
                before wallet credits.
              </p>

              <h2>5. Account Deletion</h2>
              <p>
                Deleting your account immediately ends access to
                CALLTEL. Unused wallet balances, credits,
                subscription packages, and minutes are forfeited
                and cannot be transferred to another account.
                Refunds are not provided except where required
                by applicable law.
              </p>
              <p>
                Registering again with the same email address
                does not restore previous balances or benefits.
                Personal information is handled according to
                our Privacy Policy.
              </p>

              <h2>6. Acceptable Use</h2>
              <p>
                You must not use CALLTEL for fraud, harassment,
                unlawful calling, or unauthorized automated
                calling. We may suspend or restrict accounts
                involved in prohibited activity.
              </p>

              <h2>7. Service Availability</h2>
              <p>
                Calling services may be affected by network
                conditions, service-provider outages, or
                destination restrictions. CALLTEL is not a
                replacement for emergency calling services.
              </p>

              <h2>8. Changes and Liability</h2>
              <p>
                We may update these terms and our services.
                Liability is limited to the extent permitted
                by applicable law. Nothing in these terms
                excludes rights that cannot legally be excluded.
              </p>
            </>
          )}

          <h2>Contact Us</h2>
          <p>
            Questions about these policies can be sent to{" "}
            <a href="mailto:calltelapp@gmail.com">
              calltelapp@gmail.com
            </a>.
          </p>
        </article>
      </main>

      <footer className="footer">
        <nav className="legal-footer-links">
          <a href="/">Home</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="mailto:calltelapp@gmail.com">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
}
