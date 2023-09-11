import React from 'react';
import './Hero.css';
import heroImage from "/photography-hero-image.jpg"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-image" style={{backgroundImage: `url(${heroImage})`}}></div>
        </section>
    );
}

export default Hero;
