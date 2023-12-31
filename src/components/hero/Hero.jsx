import React, { useState } from 'react'
import logoF from '../../assets/restauranfood.jpg';

import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import './Hero.css';


const Hero = () => {

  const [activeSection, setActiveSection] = useState("home")

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };


  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='header-container'>
          <div className='head-text'>
            <div className="text-content">
              <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                  <p>
                    We are a family-owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                  </p>
                <div className='cta'>
                  <NavLink to='/reservation'>Reserve a table</NavLink>
                </div>
          </div>
      <div className="image-container">
        <img className='food-logo' src={logoF} alt='logo'/>
      </div>
      </div>
    </div>

  )
}

export default Hero;