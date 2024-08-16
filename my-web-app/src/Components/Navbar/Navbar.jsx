import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const setData = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(true);
  };

  return (
    <div className='navbar'>
      <div className="navbar-content">
        <h1 className="name">Deekshith</h1>
        <div onClick={setData}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='navlink' onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className='navlink' onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className='navlink' onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

