'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Get in touch for a free consultation and quote</p>
      </section>

      <section className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 style={{marginBottom: '2rem', color: '#1a2332'}}>Request a Quote</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Needed *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="rewinding">Motor Rewinding</option>
              <option value="repair">Motor Repair</option>
              <option value="testing">Testing & Analysis</option>
              <option value="maintenance">Preventive Maintenance</option>
              <option value="emergency">Emergency Service</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your motor issue or service needs..."
              required
            ></textarea>
          </div>

          <button type="submit" className="cta-button" style={{width: '100%'}}>
            Submit Request
          </button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
                <p>24/7 Emergency: (555) 123-4568</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-content">
                <h4>Email</h4>
                <p>info@enginerewinding.com</p>
                <p>service@enginerewinding.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-content">
                <h4>Address</h4>
                <p>1234 Industrial Parkway</p>
                <p>Metro City, ST 12345</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">⏰</div>
              <div className="contact-item-content">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 2:00 PM</p>
                <p>Sunday: Emergency Service Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
