import React from 'react';
import './feature.css';

// Title and text are gonna come from wherever this component is instatiated
const Feature = ({title, text}) => {
  return (
    <div className="website__features-container__feature">
      <div className="website__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="website__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature