import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p style={{color: '#999', lineHeight: '1.8'}}>
            Professional engine rewinding and motor repair services with over 25 years of experience serving industrial and commercial clients.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/service-area">Service Area</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Motor Rewinding</li>
            <li>Motor Repair</li>
            <li>Testing & Analysis</li>
            <li>Preventive Maintenance</li>
            <li>Emergency Services</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Phone: (555) 123-4567</li>
            <li>Emergency: (555) 123-4568</li>
            <li>Email: info@enginerewinding.com</li>
            <li>1234 Industrial Parkway<br/>Metro City, ST 12345</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Engine Rewinding Pro. All rights reserved.</p>
      </div>
    </footer>
  )
}
