import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(open => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={handleClose}>Divya Darshini Varasala</Link>
      </div>
      <button className="menu-toggle" onClick={handleToggle} aria-label="Toggle menu">
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleClose}>Home</Link></li>
          <li><Link to="/art" className={location.pathname === '/art' ? 'active' : ''} onClick={handleClose}>Art</Link></li>
          <li><Link to="/photography" className={location.pathname === '/photography' ? 'active' : ''} onClick={handleClose}>Photography</Link></li>
          <li><Link to="/videos" className={location.pathname === '/videos' ? 'active' : ''} onClick={handleClose}>Videos</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleClose}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleClose}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;