// This is our main react app 
// it will contain everthing that we need in our website

import React from 'react';
// Import all the needed containers of components from the containers folder
import {Footer, Blog, Possibility, Features, WhatWebsite, Header} from './containers';
// Import all the needed components from the components folder
import {CTA, Brand, Navbar} from './components';
// Import the styling of our website
import './App.css';


// This contains all the html that states how we are going to present our website
function App() {
  return (
    <div className="App">
        {/* The navbar and the header */}
        <div className="gradient__bg">
          <Navbar />
          <Header />
          {/* Aaaall the website goes in here, it'll be presented in this order */}
          <Brand />
          <WhatWebsite />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}

export default App