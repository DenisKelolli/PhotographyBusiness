import React from 'react';
import './Hero.css';
import heroImage from "../public/photography-hero-image.jpg"

function Hero() {
    return (
        <section className="hero">
            <img src={heroImage} alt="Showcase Photography" className="hero-image" />
            <div className="hero-content">
                <h1>Your Photography Business Name</h1>
                <p>Capturing Moments. Creating Memories.</p>
                <a href="#contact" className="hero-btn">Book a Session</a>
            </div>
        </section>
    );
}

export default Hero;
