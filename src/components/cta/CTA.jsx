// This is the call to action component
import React from 'react';
import './cta.css';


const CTA = () => {
  return (
    <div className="website__cta">
      <div className="website__cta-content">
        <p>What are you waiting for?</p>
        <h3>Register today and start exploring the endless oportunities</h3>
      </div>
      <div className="website__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  )
}

export default CTA