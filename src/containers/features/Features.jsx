import React from 'react';
import './features.css';
import { Feature } from '../../components';

// Array with all the data of every feature to easy maintanence
const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Message or am nothing',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Really boy law county',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  }
]

const Features = () => {
  return (
    <div className="website__features section__padding" id="features">
        <div className="website__features-heading">
          <h1 className="gradient__text">The future is now. Step into it today with our help.</h1>
          <p>Request Early Access To Get Started</p>
        </div>
        <div className="website__features-container">
          {/* for every object in the features data create a new feature component*/}
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
    </div>
  )
}

export default Features