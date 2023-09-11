import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span>Business</span>
            </div>
            <div className="navbar-right">
                <ul className={isMobileMenuOpen ? "active" : ""}>
                    <li onClick={() => setIsMobileMenuOpen(false)}>Services</li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>Work</li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>About</li>
                    <li onClick={() => setIsMobileMenuOpen(false)}>Contact</li>
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
