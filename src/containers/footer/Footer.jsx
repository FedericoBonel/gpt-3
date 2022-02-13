import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="website__footer section__padding">
        <div className="website__footer-heading">
          <h1 className="gradient__text">Do you want to step into the future before others?</h1>
        </div>
        <div className="website__footer-btn">
          <p>Request early access</p>
        </div>
        <div className="website__footer-links">
          <div className="website__footer-links_logo">
            <img src={logo} alt="logo" />
            <p>Carterwood K12 DK Alknjbcd, All rights reserved</p>
          </div>
          <div className="website__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="website__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Copyright</p>
          </div>
          <div className="website__footer-links_div">
            <h4>Get in touch</h4>
            <p>Carterwood K12 DK Alknjbcd</p>
            <p>085-1234567</p>
            <p>info@gpt3.org</p>
          </div>
        </div>
        <div className="website__footer-copyright">
          <p>2021 GPT-3. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer