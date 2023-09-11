import React from 'react';
import './Services.css';
import image1 from "../public/photography-services-image1.jpg"
import image2 from "../public/photography-services-image2.jpg"
import image3 from "../public/photography-services-image3.jpg"

function Services() {
    return (
        <section className="ServicesContainer">
            <h1 className='ServicesH1'>Services</h1>
            <div className="ServicesGrid">
                <div className="ServicesCard">
                    <img src={image1} alt="Service 1" className="ServicesImage" />
                    <h2>Weddings</h2>
                </div>
                <div className="ServicesCard">
                    <img src={image2} alt="Service 2" className="ServicesImage" />
                    <h2>Portraits</h2>
                </div>
                <div className="ServicesCard">
                    <img src={image3} alt="Service 3" className="ServicesImage" />
                    <h2>Families</h2>
                </div>
            </div>
        </section>
    );
}

export default Services;
