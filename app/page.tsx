import Image from "next/image";
import { CopyUrlBlock } from "./components/CopyUrlBlock";
import { faqs, steps } from "./lib/content";

export default function Home() {
  return (
    <>
      <nav aria-label="Main navigation">
        <div className="nav-container">
          <a className="brand-mark link-shimmer-inline" href="#overview">
            Perplexity Pro Activation Guide
          </a>
          <ul className="nav-menu">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#steps">Steps</a>
            </li>
            <li>
              <a href="#faq">Checks</a>
            </li>
            <li>
              <a href="#source">Source</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <header className="hero-shell" id="overview">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-surface">
            <div className="eyebrow">Activation guide</div>
            <h1>Complete the Perplexity Pro activation in nine steps.</h1>
            <p className="subtitle">
              This page keeps the process in one place so you can move from sign-in to
              checkout without missing anything. Use a new account, switch to annual
              billing, apply your promo code, and confirm the total changes to €0 before
              payment.
            </p>

            <div className="contact-info">
              <a href="#steps">9-step sequence</a>
              <a href="#steps">Annual billing required</a>
              <a href="#faq">Troubleshooting</a>
            </div>

            <div className="hero-grid">
              <div className="hero-copy-card">
                <div className="hero-copy-meta">Start here</div>
                <h2 className="hero-copy-title">Open the site, sign in, then continue to pricing.</h2>
                <p className="hero-copy-text">
                  Start from the main Perplexity website. After you sign in, move through the
                  pricing flow in order and only finish checkout once the total has dropped to
                  €0.
                </p>
                <CopyUrlBlock
                  value="https://www.perplexity.ai/"
                  label="Perplexity website"
                  hint="Open this website first, then sign in and continue to the pricing flow."
                />
              </div>

              <div className="status-grid">
                <div className="status-card">
                  <span className="status-label">Account</span>
                  <strong>New account only</strong>
                </div>
                <div className="status-card">
                  <span className="status-label">Billing</span>
                  <strong>Annual Billing</strong>
                </div>
                <div className="status-card">
                  <span className="status-label">Confirm</span>
                  <strong>Total = €0</strong>
                </div>
                <div className="status-card status-card--wide">
                  <span className="status-label">Payment</span>
                  <code>Use a valid debit card, preferably Visa or Mastercard.</code>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section" id="steps">
          <div className="section-header">
            <p className="section-eyebrow">Steps</p>
            <h2>Activation steps</h2>
            <p className="section-description">
              Follow the sequence in order. Do not continue to payment until the discount is
              applied and the total shown at checkout is €0.
            </p>
          </div>

          <div className="jobs">
            {steps.map((step) => (
              <article className="job" id={step.anchor} key={step.number}>
                <div className="job-duration">STEP {step.number}</div>
                <h3 className="job-title">{step.title}</h3>
                <div className="job-company">Perplexity Pro procedure</div>
                <p>{step.description}</p>

                <ul>
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {step.image ? (
                  <figure className="guide-image">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={1280}
                      height={751}
                      className="guide-image__asset"
                      priority={step.number === "03"}
                    />
                    <figcaption>{step.image.caption}</figcaption>
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-header">
            <p className="section-eyebrow">Checks</p>
            <h2>Troubleshooting</h2>
            <p className="section-description">
              If the promo code does not work or checkout fails, verify these conditions
              before retrying the activation.
            </p>
          </div>

          <div className="skills">
            <article className="skill note-card">
              <div className="skill-name">If the promo code is invalid</div>
              <p>
                Make sure you are using a new account, enter a valid debit card, and if the
                problem continues change your IP to another European country before trying
                the activation again.
              </p>
            </article>

            {faqs.map((item) => (
              <article className="skill" key={item.question}>
                <div className="skill-name">{item.question}</div>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="source">
          <div className="section-header">
            <p className="section-eyebrow">Source</p>
            <h2>Source trace</h2>
          </div>
          <p>
            The instructional copy and screenshots on this page are adapted from the original
            Perplexity Pro guide and kept here in a cleaner, easier-to-follow format.
          </p>
          <div className="contact-info">
            <a href="https://teletype.in/@sup476/bUMyqDtSoVg" target="_blank" rel="noreferrer">
              Original guide
            </a>
            <a href="#overview">Back to top</a>
          </div>
        </section>
      </main>
    </>
  );
}
