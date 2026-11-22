
import { useEffect, useState } from "react";
import "./App.css";

type Country = {
  name: string;
  countryCode: string;
  ratePerMinute: number;
  flag: string;
};

type LegalPageType = "privacy" | "terms";

const API_URL = "https://calltel-api.duckdns.org";
const LOGIN_URL = "https://calltel.netlify.app";

const PRIVACY_URL = "/privacy-policy";
const TERMS_URL = "/terms-of-service";
const SUPPORT_EMAIL = "calltelapp@gmail.com";

const LAST_UPDATED = "November 22, 2026";

function WebsiteHeader() {
  return (
    <header className="header">
      <a className="logo" href="/" aria-label="CALLTEL home">
        <img
          src="/calltel-logo.png"
          alt="CALLTEL globe logo"
          className="calltel-logo-image"
        />
        <span className="logo-name">CALLTEL</span>
      </a>

      <a className="login-button" href={LOGIN_URL}>
        Login
      </a>
    </header>
  );
}

function WebsiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <nav
          className="legal-footer-links"
          aria-label="Legal and support"
        >
          <a href={PRIVACY_URL}>Privacy Policy</a>
          <a href={TERMS_URL}>Terms of Service</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            Contact Us: {SUPPORT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}

function PrivacyPolicy() {
  return (
    <>
      <h2>1. Information We Collect</h2>

      <p>
        CALLTEL collects information necessary to provide
        international calling services. This may include your
        email address, account details, phone numbers, contacts
        saved in your CALLTEL account, call history, subscription
        information, payment records, and technical information
        related to using our services.
      </p>

      <h2>2. How We Use Your Information</h2>

      <p>
        We use your information to create and manage accounts,
        verify email addresses, connect international calls,
        process payments, manage wallet balances and calling
        packages, provide customer support, prevent fraud,
        maintain security, and improve our services.
      </p>

      <h2>3. Contacts and Calling Information</h2>

      <p>
        With your permission, CALLTEL may access contacts on
        your device to help you place calls.
      </p>

      <p>
        Contacts that you choose to save within CALLTEL may
        be stored in your account. Phone numbers selected
        for calling may be processed by CALLTEL and its
        calling service providers to connect calls.
      </p>

      <p>
        Call history may include destination phone numbers,
        call duration, calling costs, timestamps, and
        call status.
      </p>

      <h2>4. Payments and Third-Party Services</h2>

      <p>
        CALLTEL uses third-party providers to operate its
        services, including Stripe for payment processing,
        Twilio for international calling, and infrastructure
        providers for hosting and data storage.
      </p>

      <p>
        Necessary information may be shared with these
        providers to deliver the requested services,
        maintain security, and comply with applicable laws.
      </p>

      <p>
        CALLTEL does not sell personal information or share
        personal information for third-party advertising.
      </p>

      <h2>5. Information Security</h2>

      <p>
        We use reasonable technical and organizational
        safeguards to protect personal information,
        including account authentication and access controls.
        However, no internet-based service can guarantee
        absolute security.
      </p>

      <h2>6. Account Deletion</h2>

      <p>
        You may request deletion of your CALLTEL account
        through the account management section of the app.
      </p>

      <p>
        Once your deletion request is completed, your
        account is immediately deactivated and you lose
        access to CALLTEL services.
      </p>

      <p>
        All unused wallet balances, calling credits,
        subscription packages, and remaining minutes
        associated with the deleted account are forfeited,
        except where applicable law requires otherwise.
      </p>

      <p>
        Creating a new account using the same email address
        does not restore previously forfeited balances,
        packages, or minutes.
      </p>

      <h2>7. Data Retention</h2>

      <p>
        Following account deletion, eligible personal
        information is scheduled for deletion or
        anonymization after 180 days.
      </p>

      <p>
        Certain billing, transaction, security, and
        service records may be retained for longer
        periods where necessary to meet legal,
        financial, regulatory, or fraud-prevention
        obligations.
      </p>

      <h2>8. Your Privacy Rights</h2>

      <p>
        Subject to applicable law, you may request
        access to, correction of, or deletion of
        eligible personal information associated
        with your account.
      </p>

      <p>
        To submit a privacy-related request,
        contact us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>.
      </p>

      <h2>9. Changes to This Policy</h2>

      <p>
        CALLTEL may update this Privacy Policy
        periodically to reflect changes in our
        services or applicable requirements.
        The latest version will be published
        on this website.
      </p>
    </>
  );
}

function TermsOfService() {
  return (
    <>
      <h2>1. Acceptance of Terms</h2>

      <p>
        By creating an account or using CALLTEL,
        you agree to these Terms of Service.
        If you do not agree, please do not
        use our services.
      </p>

      <h2>2. About CALLTEL</h2>

      <p>
        CALLTEL provides international calling
        services using prepaid wallet credits
        and calling packages.
      </p>

      <p>
        Available destinations, calling rates,
        package prices, included minutes, and
        package validity periods may vary.
      </p>

      <h2>3. Account Responsibilities</h2>

      <p>
        You agree to provide accurate account
        information, maintain the security of
        your login credentials, and use CALLTEL
        only for lawful purposes.
      </p>

      <p>
        You are responsible for activity
        conducted through your account,
        except where applicable law
        provides otherwise.
      </p>

      <h2>4. Payments and Calling Packages</h2>

      <p>
        CALLTEL uses Stripe to process payments
        for wallet credits and calling packages.
      </p>

      <p>
        The applicable purchase price,
        included minutes, and package
        validity period are displayed
        before purchase.
      </p>

      <p>
        Calling packages expire according
        to their stated validity periods.
        Unused package minutes do not roll
        over unless expressly stated.
      </p>

      <p>
        Purchases are not automatically
        renewed unless an automatic
        renewal option is expressly
        offered and authorized.
      </p>

      <h2>5. Calling Rates and Billing</h2>

      <p>
        Calling rates depend on the
        destination country and may
        change over time.
      </p>

      <p>
        CALLTEL displays applicable
        rates before calls are placed.
      </p>

      <p>
        Calls are billed according
        to the applicable minute-rounding
        rules and available account
        balances.
      </p>

      <p>
        When eligible subscription
        minutes are available and
        sufficient for a call,
        they are used before
        wallet credits.
      </p>

      <p>
        Otherwise, calls may be
        charged to your available
        wallet balance according
        to the applicable rate.
      </p>

      <h2>6. Refunds and Account Deletion</h2>

      <p>
        You may request account deletion
        through the CALLTEL app.
      </p>

      <p>
        Account deletion immediately
        deactivates your account and
        terminates access to its
        services and benefits.
      </p>

      <p>
        All remaining wallet balances,
        calling credits, subscription
        packages, and unused minutes
        are forfeited when an account
        is deleted.
      </p>

      <p>
        These benefits cannot be
        transferred to another account.
        Refunds are not provided except
        where required by applicable law.
      </p>

      <p>
        Registering again with the
        same email address does not
        restore previous account
        benefits or balances.
      </p>

      <p>
        Personal information is handled
        according to our Privacy Policy.
      </p>

      <h2>7. Acceptable Use</h2>

      <p>
        You must not use CALLTEL
        for fraud, harassment,
        unlawful communications,
        unauthorized automated
        calling, or activities
        that interfere with
        our services.
      </p>

      <p>
        CALLTEL may suspend or
        restrict accounts involved
        in prohibited activity,
        subject to applicable law.
      </p>

      <h2>8. Service Availability</h2>

      <p>
        CALLTEL relies on
        telecommunications networks
        and third-party service
        providers.
      </p>

      <p>
        Calling availability and
        quality may be affected
        by network conditions,
        service outages, destination
        restrictions, or other
        technical circumstances.
      </p>

      <p>
        CALLTEL is not intended
        to replace emergency
        calling services.
      </p>

      <h2>9. Limitation of Liability</h2>

      <p>
        To the extent permitted
        by applicable law,
        CALLTEL is not responsible
        for losses arising from
        circumstances outside
        its reasonable control,
        including third-party
        telecommunications outages.
      </p>

      <p>
        Nothing in these terms
        excludes or limits rights
        that cannot legally
        be excluded or limited.
      </p>

      <h2>10. Changes to These Terms</h2>

      <p>
        We may update these Terms
        of Service periodically.
        Updated terms will be
        published on this website.
      </p>
    </>
  );
}

function LegalPage({ type }: { type: LegalPageType }) {
  const isPrivacy = type === "privacy";

  useEffect(() => {
    document.title = isPrivacy
      ? "Privacy Policy | CALLTEL"
      : "Terms of Service | CALLTEL";

    window.scrollTo(0, 0);
  }, [isPrivacy]);

  return (
    <div className="website">
      <WebsiteHeader />

      <main className="legal-page">
        <article className="legal-document">
          <p className="eyebrow">CALLTEL · LEGAL</p>

          <h1>
            {isPrivacy
              ? "Privacy Policy"
              : "Terms of Service"}
          </h1>

          <p className="legal-date">
            Last updated: {LAST_UPDATED}
          </p>

          {isPrivacy ? (
            <PrivacyPolicy />
          ) : (
            <TermsOfService />
          )}

          <section className="legal-contact">
            <h2>Contact Us</h2>

            <p>
              For questions about CALLTEL,
              these policies, or your account,
              contact us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>.
            </p>

            <p>
              Website:{" "}
              <a href="https://calltelapp.com">
                calltelapp.com
              </a>
            </p>
          </section>

          <a className="legal-back-link" href="/">
            ← Back to CALLTEL Home
          </a>
        </article>
      </main>

      <WebsiteFooter />
    </div>
  );
}

export default function App() {
  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";

  const isPrivacyPage = path === PRIVACY_URL;
  const isTermsPage = path === TERMS_URL;

  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isPrivacyPage || isTermsPage) {
      return;
    }

    async function loadCountries() {
      try {
        const response = await fetch(`${API_URL}/countries`);

        if (!response.ok) {
          throw new Error("Unable to load calling rates");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected country data");
        }

        setCountries(data);
      } catch {
        setError("Calling rates are temporarily unavailable.");
      } finally {
        setLoading(false);
      }
    }

    void loadCountries();
  }, [isPrivacyPage, isTermsPage]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      country.countryCode.includes(
        search.replace("+", "")
      )
  );

  if (isPrivacyPage) {
    return <LegalPage type="privacy" />;
  }

  if (isTermsPage) {
    return <LegalPage type="terms" />;
  }

  return (
    <div className="website">
      <WebsiteHeader />

      <main>
        {/* Hero section */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              INTERNATIONAL CALLING, MADE PERSONAL
            </p>

            <h1>
              Closer to home,
              <br />
              <span>everywhere you are.</span>
            </h1>

            <p className="hero-description">
              Distance shouldn't get in the way of a
              familiar voice. Call the people who
              matter, wherever life takes you.
            </p>

            <a className="hero-login" href={LOGIN_URL}>
              Start calling
            </a>
          </div>

          <div className="hero-photo">
            <img
              src="/hero-woman.png"
              alt="Woman enjoying a cup of tea while using her phone"
            />
          </div>
        </section>

        {/* Calling rates */}
        <section className="rates-section" id="rates">
          <div className="section-intro">
            <p className="eyebrow">
              SIMPLE, TRANSPARENT PRICING
            </p>

            <h2>Stay close, for less.</h2>

            <p>
              Explore our international calling
              destinations and see the rate per
              minute before you call.
            </p>
          </div>

          <div className="rates-container">
            <input
              className="country-search"
              type="search"
              placeholder="Search country or calling code..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            {loading && (
              <p>Loading calling rates...</p>
            )}

            {error && (
              <p role="alert">{error}</p>
            )}

            {!loading && !error && (
              <div className="country-list">
                {filteredCountries.map((country) => (
                  <div
                    className="country-row"
                    key={country.countryCode}
                  >
                    <div className="country-details">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        loading="lazy"
                      />

                      <div>
                        <strong>{country.name}</strong>
                        <span>
                          +{country.countryCode}
                        </span>
                      </div>
                    </div>

                    <div className="country-price">
                      <strong>
                        $
                        {Number(
                          country.ratePerMinute
                        ).toFixed(2)}
                      </strong>

                      <span>per minute</span>
                    </div>
                  </div>
                ))}

                {filteredCountries.length === 0 && (
                  <p>No matching countries found.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* How it works */}
        <section className="how-section">
          <div className="section-intro">
            <p className="eyebrow">
              KEEPING YOU CONNECTED
            </p>

            <h2>
              Calling home should feel easy.
            </h2>
          </div>

          <div className="steps-grid">
            <article>
              <span className="step-number">
                01
              </span>

              <h3>Create your account</h3>

              <p>
                Sign up to get started with CALLTEL.
              </p>
            </article>

            <article>
              <span className="step-number">
                02
              </span>

              <h3>Add calling credit</h3>

              <p>
                Choose how you'd like to pay
                for your calls.
              </p>
            </article>

            <article>
              <span className="step-number">
                03
              </span>

              <h3>Make the call</h3>

              <p>
                Dial your destination and
                reconnect with someone special.
              </p>
            </article>
          </div>
        </section>

        {/* Frequently asked questions */}
        <section className="faq-section">
          <div className="section-intro">
            <p className="eyebrow">
              GOOD TO KNOW
            </p>

            <h2>
              A few common questions.
            </h2>
          </div>

          <details>
            <summary>
              How do I start using CALLTEL?
            </summary>

            <p>
              Click Login to access the CALLTEL
              application and register or sign in.
            </p>
          </details>

          <details>
            <summary>
              Where can I see international
              calling rates?
            </summary>

            <p>
              Use the country search above
              to find supported destinations
              and prices.
            </p>
          </details>

          <details>
            <summary>
              Do calling rates change?
            </summary>

            <p>
              Rates may change. Check the
              current displayed rate
              before calling.
            </p>
          </details>

          <details>
            <summary>
              How can I delete my account?
            </summary>

            <p>
              Open your CALLTEL app, navigate
              to Profile, and select Delete
              Account under Account Management.
              Account deletion immediately
              deactivates your account and
              forfeits unused balances and
              minutes, except where required
              by law.
            </p>
          </details>
        </section>
      </main>

      <WebsiteFooter />
    </div>
  );
}
