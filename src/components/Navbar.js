import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" checked={isOpen} onChange={toggleMenu} />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li><NavLink  to="/" activeclassname="active">Home</NavLink></li>
          <li><NavLink  to="/about" activeclassname="active">About</NavLink></li>
          <li>
            <div className="dropdown">
              <span>Portfolio</span>
              <div className="dropdown-content">
                <NavLink to="/gallery" activeclassname="active">Gallery</NavLink>
                <NavLink to="/visuals" activeclassname="active">Visuals</NavLink>
                <NavLink to="/designs" activeclassname="active">Designs</NavLink>
                <NavLink to="/dev" activeclassname="active">Dev Projects</NavLink>
              </div>
            </div>
          </li>
          <li><NavLink to="/havystore" activeclassname="active">Store</NavLink></li>
          <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
          <li> 
        </li>
        </ul>
        <h1 className={`logo-nav ${isOpen ? 'sticky' : ''}`}>Yung Havy</h1>
      </div>
    </nav>
  );
};

export default Navbar;
