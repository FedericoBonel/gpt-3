import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="website__possibility section__padding" id="possibility">
        <div className="website__possibility-image">
          <img src={possibilityImage} alt="possibility"/>
        </div>
        <div className="website__possibility-content">
          <h4>Request early access to get started</h4>
          <h1 className="gradient__text">Next Gen interaction</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <h4>Contact us</h4>      
        </div>
    </div>
  )
}

export default Possibility