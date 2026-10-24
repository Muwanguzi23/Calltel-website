
import { useEffect, useState } from "react";
import "./App.css";

type Country = {
  name: string;
  countryCode: string;
  ratePerMinute: number;
  flag: string;
};

const API_URL = "https://calltel-api.duckdns.org";
const LOGIN_URL = "https://calltel.netlify.app";

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
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

    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()) ||
    country.countryCode.includes(search.replace("+", ""))
  );

  return (
    <div className="website">
      <header className="header">
        <div className="logo">
  <img
    src="/calltel-logo.png"
    alt="CALLTEL globe logo"
    className="calltel-logo-image"
  />
  <span className="logo-name">CALLTEL</span>
</div>

        <a className="login-button" href={LOGIN_URL}>
          Login
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">INTERNATIONAL CALLING, MADE PERSONAL</p>

            <h1>
              Closer to home,
              <br />
              <span>everywhere you are.</span>
            </h1>

            <p className="hero-description">
              Distance shouldn't get in the way of a familiar voice.
              Call the people who matter, wherever life takes you.
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

        <section className="rates-section" id="rates">
          <div className="section-intro">
            <p className="eyebrow">SIMPLE, TRANSPARENT PRICING</p>
            <h2>Stay close, for less.</h2>
            <p>
              Explore our international calling destinations and
              see the rate per minute before you call.
            </p>
          </div>

          <div className="rates-container">
            <input
              className="country-search"
              type="search"
              placeholder="Search country or calling code..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {loading && <p>Loading calling rates...</p>}
            {error && <p role="alert">{error}</p>}

            {!loading && !error && (
              <div className="country-list">
                {filteredCountries.map((country) => (
                  <div className="country-row" key={country.countryCode}>
                    <div className="country-details">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        loading="lazy"
                      />

                      <div>
                        <strong>{country.name}</strong>
                        <span>+{country.countryCode}</span>
                      </div>
                    </div>

                    <div className="country-price">
                      <strong>
                        ${Number(country.ratePerMinute).toFixed(2)}
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

        <section className="how-section">
          <div className="section-intro">
            <p className="eyebrow">KEEPING YOU CONNECTED</p>
            <h2>Calling home should feel easy.</h2>
          </div>

          <div className="steps-grid">
            <article>
              <span className="step-number">01</span>
              <h3>Create your account</h3>
              <p>Sign up to get started with CALLTEL.</p>
            </article>

            <article>
              <span className="step-number">02</span>
              <h3>Add calling credit</h3>
              <p>Choose how you'd like to pay for your calls.</p>
            </article>

            <article>
              <span className="step-number">03</span>
              <h3>Make the call</h3>
              <p>Dial your destination and reconnect with someone special.</p>
            </article>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-intro">
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2>A few common questions.</h2>
          </div>

          <details>
            <summary>How do I start using CALLTEL?</summary>
            <p>Click Login to access the CALLTEL application and register or sign in.</p>
          </details>

          <details>
            <summary>Where can I see international calling rates?</summary>
            <p>Use the country search above to find supported destinations and prices.</p>
          </details>

          <details>
            <summary>Do calling rates change?</summary>
            <p>Rates may change. Check the current displayed rate before calling.</p>
          </details>
        </section>
      </main>

      
<footer className="footer">
  <div className="footer-links">
    <details className="privacy-policy">
      <summary>Privacy Policy</summary>

      <div className="privacy-content">
        <p><strong>Last updated:</strong> October 23, 2026</p>

        <p>
          CALLTEL collects information necessary to provide
          international calling services, including account
          information, payment records, call-related data,
          and technical information.
        </p>

        <p>
          We use this information to operate our services,
          process payments, provide support, maintain security,
          and comply with applicable laws.
        </p>

        <p>
          Information may be shared with service providers
          supporting communications, payments, hosting,
          and security.
        </p>

        <p>
          We use reasonable safeguards to protect information.
          Users may contact us regarding privacy questions
          or applicable data rights.
        </p>

        <p>
          Information may be retained as needed for service,
          security, and legal purposes. This policy may be
          updated as our services evolve.
        </p>
      </div>
    </details>

    <a
      className="footer-contact"
      href="mailto:calltellapp@gmail.com"
    >
      Contact Us: calltellapp@gmail.com
    </a>
  </div>
</footer>
    </div>
  );
}
