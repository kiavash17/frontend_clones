import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">Casey Scholar</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </nav>
      <button className="cta-button">Sign Up</button>
    </header>
  );
}

export default Header;
