import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Professional Engine Rewinding Services</h1>
        <p>Expert Motor Repair & Maintenance for Industrial Applications</p>
        <Link href="/contact" className="cta-button">Get a Free Quote</Link>
      </section>

      <section className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Industry-leading expertise with over 25 years of experience</p>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Turnaround</h3>
            <p>We understand downtime costs money. Our efficient processes ensure quick turnaround times without compromising quality.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Expert Technicians</h3>
            <p>Our certified technicians have decades of combined experience in motor rewinding and repair services.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Quality Guarantee</h3>
            <p>All our work comes with a comprehensive warranty and satisfaction guarantee for your peace of mind.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>24/7 Support</h3>
            <p>Emergency repair services available around the clock to keep your operations running smoothly.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Our Capabilities</h2>
        <p className="section-subtitle">Comprehensive motor repair and rewinding solutions</p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Motor Types</h3>
            <ul>
              <li>AC & DC Motors</li>
              <li>Single & Three Phase</li>
              <li>High Voltage Motors</li>
              <li>Specialty Motors</li>
              <li>Generators & Alternators</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Industries Served</h3>
            <ul>
              <li>Manufacturing</li>
              <li>Agriculture</li>
              <li>Mining & Construction</li>
              <li>Food Processing</li>
              <li>Water Treatment</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Power Ranges</h3>
            <ul>
              <li>1/4 HP to 5000 HP</li>
              <li>Low Voltage (up to 600V)</li>
              <li>Medium Voltage (up to 15kV)</li>
              <li>High Voltage (above 15kV)</li>
              <li>Custom Applications</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
