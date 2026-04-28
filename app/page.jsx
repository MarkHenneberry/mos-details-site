import QuoteForm from "./QuoteForm";

const phoneNumber = "(902) 555-0148";
const phoneHref = "tel:19025550148";
const email = "mike@mikesmobiledetailing.ca";

const services = [
  {
    name: "Quick Refresh",
    price: "Starting at $79",
    note: "Great for weekly upkeep",
    items: ["Exterior wash", "Vacuum", "Windows"],
  },
  {
    name: "Interior Reset",
    price: "Starting at $149",
    note: "Best for daily drivers",
    items: ["Deep vacuum", "Wipe-down", "Mats", "Windows"],
  },
  {
    name: "Full Detail",
    price: "Starting at $229",
    note: "Most complete package",
    items: [
      "Interior reset",
      "Exterior hand wash",
      "Tire shine",
    ],
  },
];

const benefits = [
  "We come to you",
  "Honest pricing",
  "Careful, detail-focused work",
];

const steps = [
  "Send a quick quote request",
  "Pick a time and location",
  "We come to you and detail your vehicle",
];

const detailResults = [
  "Salt stains and winter grime",
  "Clean mats, seats, and dash",
  "Exterior wash and tire shine",
];

const reviews = [
  {
    quote:
      "Mike showed up right on time and made our SUV look ready for sale. Booking was simple and the price was fair.",
    name: "Sarah T.",
    location: "Dartmouth",
  },
  {
    quote:
      "The interior reset was exactly what my work truck needed. Clean mats, clean seats, and no hassle.",
    name: "Jason M.",
    location: "Halifax",
  },
  {
    quote:
      "Friendly, careful, and easy to deal with. I liked that the quote matched the final price.",
    name: "Emily R.",
    location: "Bedford",
  },
];

function CallButton({ className = "" }) {
  return (
    <a className={`button button-primary ${className}`} href={phoneHref}>
      Call Now
    </a>
  );
}

function QuoteButton({ className = "" }) {
  return (
    <a className={`button button-secondary ${className}`} href="#quote">
      Request a Quote
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mike's Mobile Detailing home">
          <span className="brand-mark">M</span>
          <span>Mike&apos;s Mobile Detailing</span>
        </a>
        <a className="header-phone" href={phoneHref}>
          {phoneNumber}
        </a>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Halifax & Dartmouth mobile detailer</p>
          <h1>Professional mobile car detailing that comes to you.</h1>
          <p className="hero-text">
            Mike&apos;s Mobile Detailing helps busy drivers keep their vehicles
            clean, comfortable, and cared for at home, work, or wherever is
            most convenient.
          </p>
          <div className="hero-actions">
            <CallButton />
            <QuoteButton />
          </div>
          <p className="quick-contact">
            Call or text <a href={phoneHref}>{phoneNumber}</a>
          </p>
        </div>

        <div className="hero-visual" aria-label="Clean vehicle detailing illustration">
          <div className="shine-card">
            <span className="sparkle sparkle-one" />
            <span className="sparkle sparkle-two" />
            <div className="car-window" />
            <div className="car-body">
              <span className="headlight" />
              <span className="tail-light" />
            </div>
            <div className="car-wheels">
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Simple packages</p>
          <h2>Choose the detail that fits your vehicle.</h2>
        </div>
        <div className="card-grid services-grid">
          {services.map((service) => (
            <article className="card service-card" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p>{service.note}</p>
              </div>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>Local, straightforward, and detail-focused.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <span aria-hidden="true">OK</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Easy booking, no shop visit needed.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section before-after-section">
        <div className="section-heading">
          <p className="eyebrow">Before / after</p>
          <h2>Real problems, cleaner results.</h2>
        </div>
        <div className="detail-placeholder-grid">
          {detailResults.map((result) => (
            <article className="detail-placeholder-card" key={result}>
              <span>{result}</span>
              <div aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Reviews</p>
          <h2>Trusted by local drivers.</h2>
        </div>
        <div className="card-grid">
          {reviews.map((review) => (
            <article className="card review-card" key={review.name}>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <strong>{review.name}</strong>
              <span>{review.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-area">
        <div>
          <p className="eyebrow">Service area</p>
          <h2>Mobile detailing across HRM.</h2>
        </div>
        <p>
          Serving Halifax, Dartmouth, Cole Harbour, Bedford, and Sackville.
          Nearby communities are welcome to request a quote.
        </p>
      </section>

      <section className="section quote-section" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">Request a quote</p>
          <h2>Tell Mike what your vehicle needs.</h2>
          <p>
            Share a few details and Mike will follow up with a simple estimate
            and available times.
          </p>
          <p className="trust-note">
            Serving Halifax, Dartmouth, Cole Harbour, Bedford, and Sackville.
          </p>
          <p className="email-note">
            Prefer email? <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <QuoteForm />
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready for a cleaner vehicle?</p>
        <h2>Call Mike&apos;s Mobile Detailing today.</h2>
        <a className="final-phone" href={phoneHref}>
          {phoneNumber}
        </a>
        <p className="final-trust">
          Serving Halifax, Dartmouth, Cole Harbour, Bedford, and Sackville.
        </p>
        <div className="hero-actions">
          <CallButton />
          <QuoteButton />
        </div>
      </section>
    </main>
  );
}
