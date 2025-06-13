import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-art">
        {/* Artistic SVG */}
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="#6C63FF" opacity="0.2" />
          <path d="M30 90 Q60 10 90 90" stroke="#6C63FF" strokeWidth="4" fill="none" />
        </svg>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder=" "
          />
          <label>Name</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder=" "
          />
          <label>Email</label>
        </div>
        <div className="input-group">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder=" "
          />
          <label>Message</label>
        </div>
        <button className="submit-btn" type="submit">
          <span>Send</span>
        </button>
        {submitted && (
          <div className="success-message">
            <svg width="24" height="24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#6C63FF" opacity="0.2" />
              <path d="M7 13l3 3 7-7" stroke="#6C63FF" strokeWidth="2" fill="none" />
            </svg>
            <span>Thank you! Message sent.</span>
          </div>
        )}
      </form>
      <div className="contact-instagram">
        <a
          href="https://www.instagram.com/thislittle_artsylife/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          {/* Simple Instagram SVG icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="24" rx="8" fill="var(--primary-color)"/>
            <circle cx="16" cy="16" r="6" stroke="#fff" strokeWidth="2" fill="none"/>
            <circle cx="22.5" cy="9.5" r="1.5" fill="#fff"/>
          </svg>
          <span style={{marginLeft: '0.5rem', color: 'var(--primary-color)', fontWeight: 500}}>
            Follow on Instagram
          </span>
        </a>
      </div>
    </div>
  );
}
