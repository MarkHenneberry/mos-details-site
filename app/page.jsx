import QuoteForm from "./QuoteForm";

const phoneNumber = "(902) 993-0290";
const phoneHref = "tel:19029930290";
const email = "molham.tahina@gmail.com";
const location = "26 Maple Drive, Dartmouth, NS";

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
  "Thorough interior and exterior care for daily drivers",
  "Detail-focused work that targets stains, salt, dust, and buildup",
  "Straightforward booking with call or text follow-up",
];

const beforeAfterPairs = [
  {
    caption: "Interior deep clean",
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
  },
  {
    caption: "Salt and stain removal",
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
  },
];

const specialOffers = [
  "3rd Detail – 15% Off",
  "5th Detail – 50% Off",
];

const loyaltyStamps = [1, 2, 3, 4, 5];

const reviews = [
  {
    quote:
      "Mo brought our SUV back to life. The attention to detail was obvious inside and out.",
    name: "Sarah T.",
    location: "Dartmouth",
  },
  {
    quote:
      "The interior reset was exactly what my work truck needed. Clean mats, clean seats, and a fresh start.",
    name: "Jason M.",
    location: "Halifax",
  },
  {
    quote:
      "Friendly, careful, and easy to deal with. Professional detailing without any hassle.",
    name: "Emily R.",
    location: "Bedford",
  },
];

function CallButton({ className = "" }) {
  return (
    <a className={`button button-primary ${className}`} href={phoneHref}>
      Call or Text
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
        <a className="brand" href="#top" aria-label="Mo's Details home">
          <span className="brand-mark">M</span>
          <span>Mo&apos;s Details</span>
        </a>
        <a className="header-phone" href={phoneHref}>
          {phoneNumber}
        </a>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Halifax & Dartmouth mobile detailer</p>
          <h1>Bring your car back to life with professional detailing.</h1>
          <p className="hero-text">
            Mobile detailing services available across Dartmouth and HRM.
            Mo&apos;s Details refreshes your vehicle with clean, careful work and
            the attention to detail your car deserves.
          </p>
          <p className="booking-note">
            Now booking for spring — spots fill up quickly.
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
          <h2>Choose the detail that brings your vehicle back.</h2>
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

      <section className="section special-offers">
        <div className="section-heading offer-heading">
          <p className="eyebrow">Loyalty offer</p>
          <h2>Loyalty Card</h2>
          <p>Get a stamp after every detail.</p>
        </div>
        <div className="offer-card">
          <div className="stamp-row" aria-label="Loyalty stamp progress">
            {loyaltyStamps.map((stamp) => (
              <span
                className={
                  stamp === 3 || stamp === 5 ? "stamp stamp-reward" : "stamp"
                }
                key={stamp}
              >
                {stamp}
              </span>
            ))}
          </div>
          <div className="offer-list">
            {specialOffers.map((offer) => (
              <p key={offer}>{offer}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>Local service with real attention to detail.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <span aria-hidden="true" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section before-after-section">
        <div className="section-heading">
          <p className="eyebrow">Before / after</p>
          <h2>Real problems, cleaner results.</h2>
        </div>
        <div className="before-after-grid">
          {beforeAfterPairs.map((pair) => (
            <article className="before-after-card" key={pair.caption}>
              <div className="comparison-images">
                <figure>
                  <span>Before</span>
                  <img src={pair.before} alt={`${pair.caption} before`} />
                </figure>
                <figure>
                  <span>After</span>
                  <img src={pair.after} alt={`${pair.caption} after`} />
                </figure>
              </div>
              <h3>{pair.caption}</h3>
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
          <h2>Detailing from Dartmouth across HRM.</h2>
        </div>
        <p>
          Based at {location}. Serving Halifax, Dartmouth, Cole Harbour,
          Bedford, and Sackville. Nearby communities are welcome to request a
          quote.
        </p>
      </section>

      <section className="section quote-section" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">Request a quote</p>
          <h2>Tell Mo&apos;s Details what your vehicle needs.</h2>
          <p>
            Share a few details and Mo&apos;s Details will follow up with a simple
            estimate and available times.
          </p>
          <p className="trust-note">
            Call or text <a href={phoneHref}>{phoneNumber}</a> for fast booking.
          </p>
          <p className="email-note">
            Prefer email? <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <QuoteForm />
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready for a cleaner vehicle?</p>
        <h2>Call or text Mo&apos;s Details today.</h2>
        <a className="final-phone" href={phoneHref}>
          {phoneNumber}
        </a>
        <p className="final-trust">
          Professional detailing in Dartmouth and across HRM. Located at{" "}
          {location}.
        </p>
        <div className="hero-actions">
          <CallButton />
          <QuoteButton />
        </div>
      </section>
    </main>
  );
}
