export default function ServiceArea() {
  return (
    <>
      <section className="area-hero">
        <h1>Our Service Area</h1>
        <p>Proudly serving the greater metropolitan region and surrounding counties</p>
      </section>

      <section className="container">
        <div className="area-content">
          <div className="area-description">
            <h3>Regional Coverage</h3>
            <p style={{marginBottom: '1rem', color: '#555', lineHeight: '1.8'}}>
              We provide comprehensive engine rewinding services throughout the metropolitan area and surrounding regions. Our strategically located facility allows us to serve customers efficiently with fast response times.
            </p>
            <p style={{marginBottom: '1rem', color: '#555', lineHeight: '1.8'}}>
              Our service vehicles are equipped to handle on-site assessments and emergency repairs, ensuring minimal downtime for your operations.
            </p>
            <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Service Radius</h3>
            <p style={{color: '#555', lineHeight: '1.8'}}>
              We typically service customers within a 150-mile radius of our facility, though we can accommodate special requests for locations beyond this range. Contact us to discuss your specific needs.
            </p>
          </div>

          <div className="cities-list">
            <h3>Cities & Areas Served</h3>
            <ul>
              <li>Downtown Metro</li>
              <li>North County</li>
              <li>South County</li>
              <li>East Valley</li>
              <li>West Valley</li>
              <li>Riverside District</li>
              <li>Mountain View</li>
              <li>Lakeside</li>
              <li>Springfield</li>
              <li>Riverside</li>
              <li>Brookfield</li>
              <li>Greenville</li>
              <li>Madison</li>
              <li>Fairview</li>
              <li>Oak Park</li>
              <li>Pine Grove</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: '3rem', background: '#fff', padding: '2.5rem', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)'}}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#1a2332'}}>On-Site Services Available</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            <div>
              <h4 style={{color: '#ff6b35', marginBottom: '0.5rem'}}>Field Assessment</h4>
              <p style={{color: '#666'}}>Our technicians can visit your facility to assess motor issues and provide recommendations.</p>
            </div>
            <div>
              <h4 style={{color: '#ff6b35', marginBottom: '0.5rem'}}>Pickup & Delivery</h4>
              <p style={{color: '#666'}}>We offer free pickup and delivery service for motors within our service area.</p>
            </div>
            <div>
              <h4 style={{color: '#ff6b35', marginBottom: '0.5rem'}}>Emergency Response</h4>
              <p style={{color: '#666'}}>24/7 emergency service available for critical operations and urgent repairs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
