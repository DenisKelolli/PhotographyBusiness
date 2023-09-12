import React from 'react';
import './About.css';
import profileImage from "/photography-about-image.jpg";

function About() {
    return (
        <>  
        <h1 className='AboutMeH1'>About Me</h1>
        <section id="about" className="AboutMeContainer">
            <div className="ProfileImageContainer">
                <img src={profileImage} alt="Profile" className="ProfileImage" />
            </div>
            <div className="InfoContainer">
                <p>
                    Hello! I'm Rea, a professional photographer based in Connecticut. 
                    I specialize in capturing moments that matter to you. From weddings and events to portrait sessions, 
                    I'm committed to making memories last a lifetime.
                </p>
                <p>
                    When I'm not behind the camera, I enjoy shopping and eating cheese.
                </p>
                
            </div>
        </section>
        </>
        
    );
}

export default About;
