import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span>LENS</span>
            </div>
            <div className="navbar-right">
                <ul className={isMobileMenuOpen ? "active" : ""}>
                    <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
                    <li><a href="#work" onClick={handleLinkClick}>Work</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
                <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
