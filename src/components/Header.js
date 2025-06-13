import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Divya Darshini Varasala</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/art" className={location.pathname === '/art' ? 'active' : ''}>Art</Link></li>
          <li><Link to="/photography" className={location.pathname === '/photography' ? 'active' : ''}>Photography</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;