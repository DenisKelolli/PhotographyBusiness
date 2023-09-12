import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div id="contact" className="contactUsContainer">
            <h1>Contact Us</h1>
            <p className='contactP'>We're always eager to hear from you. If you have any queries or just want to chat, reach out to us!</p>
            <div className="contactDetails">
                <div className="contactItem">
                    <span className='contactP'>(123) 456-7890</span>
                </div>
                <div className="contactItem">
                    <span className='contactP'>support@photobiz.com</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
