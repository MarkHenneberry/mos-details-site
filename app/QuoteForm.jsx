"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [quoteSent, setQuoteSent] = useState(false);

  function handleQuoteSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setQuoteSent(true);
  }

  return (
    <form className="quote-form" onSubmit={handleQuoteSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label>
        Vehicle type
        <input
          name="vehicle"
          type="text"
          placeholder="Car, SUV, truck, van"
          required
        />
      </label>
      <label>
        Service interested in
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          <option>Quick Refresh</option>
          <option>Interior Reset</option>
          <option>Full Detail</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="form-message">
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your vehicle, location, and any problem areas."
        />
      </label>
      <button className="button button-primary form-button" type="submit">
        Request My Quote
      </button>
      {quoteSent ? (
        <p className="form-success">Thanks &mdash; Mike will follow up shortly.</p>
      ) : null}
    </form>
  );
}
