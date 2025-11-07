import Link from 'next/link'

export default function Services() {
  return (
    <>
      <section className="hero">
        <h1>Our Services</h1>
        <p>Complete motor rewinding and repair solutions</p>
      </section>

      <section className="container">
        <div className="services-grid">
          <div className="service-card">
            <h3>Motor Rewinding</h3>
            <p>Complete rewinding services for all types of electric motors, restoring them to original specifications or upgrading to improve efficiency.</p>
            <ul>
              <li>Stator rewinding</li>
              <li>Rotor rewinding</li>
              <li>Coil replacement</li>
              <li>Insulation upgrades</li>
              <li>VPI (Vacuum Pressure Impregnation)</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Motor Repair</h3>
            <p>Expert diagnosis and repair of motor failures to extend equipment life and improve performance.</p>
            <ul>
              <li>Bearing replacement</li>
              <li>Shaft repair & replacement</li>
              <li>Frame repairs</li>
              <li>End bell machining</li>
              <li>Balance & vibration analysis</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Testing & Analysis</h3>
            <p>Comprehensive testing services to ensure optimal motor performance and reliability.</p>
            <ul>
              <li>No-load testing</li>
              <li>Full-load testing</li>
              <li>Megger testing</li>
              <li>Surge testing</li>
              <li>Performance analysis</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Preventive Maintenance</h3>
            <p>Scheduled maintenance programs to prevent failures and extend motor life.</p>
            <ul>
              <li>Regular inspections</li>
              <li>Lubrication services</li>
              <li>Thermal imaging</li>
              <li>Vibration monitoring</li>
              <li>Predictive maintenance</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Emergency Services</h3>
            <p>24/7 emergency repair services to minimize your downtime and keep operations running.</p>
            <ul>
              <li>Same-day service available</li>
              <li>On-site repairs</li>
              <li>Rush service options</li>
              <li>Rental motors available</li>
              <li>Weekend & holiday service</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Custom Solutions</h3>
            <p>Specialized services tailored to your unique requirements and applications.</p>
            <ul>
              <li>Motor upgrades</li>
              <li>Efficiency improvements</li>
              <li>Custom modifications</li>
              <li>Reverse engineering</li>
              <li>Technical consulting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={{background: '#f8f9fa', padding: '3rem', borderRadius: '10px', textAlign: 'center'}}>
          <h2 style={{marginBottom: '1rem', color: '#1a2332'}}>Ready to Get Started?</h2>
          <p style={{marginBottom: '2rem', color: '#666', fontSize: '1.1rem'}}>Contact us today for a free consultation and quote</p>
          <Link href="/contact" className="cta-button">Request a Quote</Link>
        </div>
      </section>
    </>
  )
}
