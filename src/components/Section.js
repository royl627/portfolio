import React from 'react'
import './Section.css'
import PropTypes from 'prop-types';

const Section = ({logo, timeline, title, subtitle, bullets}) => {
  return (
    <div className="section">
        <div className="left-container">
            <img src={logo} alt="Logo" className="section-logo" />
            <div className="vertical-line"></div>
        </div>
        <div className="right-container">
            <div className='title-container'>
                <div className='title'>
                    <span>{title}</span>
                </div>
                <div className="timeline">
                    <span>{timeline}</span>
                </div>
            </div>
            <div className='content-container'>
                <div className="subtitle">
                    <span>{subtitle}</span>
                </div>
                <div className="bullets">
                    {bullets.map((bullet, index) => (
                        <span key={index}>{bullet}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

Section.propTypes = {
    logo: PropTypes.string.isRequired,
    timeline: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    bullets: PropTypes.arrayOf(PropTypes.string),
};

export default Section
