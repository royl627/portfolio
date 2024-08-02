import React from 'react';
import locationIcon from '../icons/location.png';
import emailIcon from '../icons/contact.png';
import phoneIcon from '../icons/phone.png';
import languagesIcon from '../icons/language.png';
import './Contact.css';
import Underline from '../components/Underline'

const Contact = () => {
    return (
        <div className="contact-page">
          <div className='contact-container'>
            <div className='contact-header'>
              Contact Information
              <Underline color='#149ddd' />
            </div>
            <div className="contact-item">
                <img src={locationIcon} alt="Location Icon" className="icon" />
                <span>Richmond Hill, Ontario</span>
            </div>
            <div className="contact-item">
                <img src={emailIcon} alt="Email Icon" className="icon" />
                <a href='mailto:royliwork627@gmail.com'>royliwork627@gmail.com</a>
            </div>
            <div className="contact-item">
                <img src={phoneIcon} alt="Phone Icon" className="icon" />
                <span>+1 (437) - 230 - 8870</span>
            </div>
            <div className="contact-item">
                <img src={languagesIcon} alt="Languages Icon" className="icon" />
                <span>English, Mandarin</span>
            </div>
          </div>
        </div>
    );
}

export default Contact;