// This is the navigation bar of the website
import React, {useState} from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../../assets/logo.svg'
import './navbar.css';

// Variable that contains all the links of the navbar
const Menu = () => (
  <>
    <p> <a href="#home">Home</a> </p>
    <p> <a href="#wwebsite">What is this GPT-3?</a> </p>
    <p> <a href="#possibility">Open AI</a> </p>
    <p> <a href="#features">Case Studies</a> </p>
    <p> <a href="#blog">Library</a> </p>
  </>
)

// Variable that contains all the buttons
const SignButtons = () => (
  <>
    <p>Sign in</p>
    <button type="button">Sign up</button>
  </>
)

const Navbar = () => {
  // (Variable that mantains a state) First is the flag to know if we are showing the menu, the second is a function to set that flag
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Contains all the navbar
    <div className="website__navbar">
      {/* Contains only buttons of the navbar */}

        <div className="website__navbar-links">\
        {/* The logo of our navbar */}
          <div className="website__navbar-links_logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="website__navbar-links_container">
            <Menu />
          </div>
        </div>

        <div className="website__navbar-sign">
            <SignButtons />
        </div>

        {/* Menu that only will be displayed if in mobile */}
        <div className="website__navbar-menu">
            {/* If the toggleMenu is True put the html that has the option to close it and if it gets clicked set its state to false, 
              otherwhise put the html to show the option to open it and set its state as true if clicked*/}
            {<Hamburger toggled={toggleMenu} toggle={setToggleMenu} color="#fff" size={27} />}
            {/* If the toggle menu is activated and only if it is, load the menu */}
            {toggleMenu && (
              <div className="website__navbar-menu_container slide-in-top">
                <div className="website__navbar-menu_container-links"> 
                  <Menu />
                  <div className="website__navbar-menu_container-links-sign">
                    <SignButtons />
                  </div>
                </div>
              </div>
            )}
            {/* Other whise take out with an animation */}
            {!toggleMenu && (
              <div className="website__navbar-menu_container slide-out-top">
                <div className="website__navbar-menu_container-links"> 
                  <Menu />
                  <div className="website__navbar-menu_container-links-sign">
                    <SignButtons />
                  </div>
                </div>
              </div>
            )}
        </div>
        
    </div>
  )
}

export default Navbar