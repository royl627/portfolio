import React, { useEffect, useRef } from 'react';
import './Bar.css';

const Bar = ({ logo, skillName, percentage }) => {
    const barFillRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            barFillRef.current.style.width = `${percentage}%`;
          } else {
            barFillRef.current.style.width = '0%';
          }
        },
        { threshold: 0.1 }
    );
  
    if (barFillRef.current) {
        observer.observe(barFillRef.current);
    } else {
            observer.unobserve(barFillRef.current);
        }   
    
}, [percentage]);

return (
    <div className="bar-container">
      <img src={logo} alt="Logo" className="bar-logo" />
      <div className="bar-details">
        <span className="bar-skill-name">{skillName}</span>
        <span className="bar-percentage">{percentage}%</span>
      </div>
      <div className="bar">
        <div className="bar-fill" ref={barFillRef}></div>
      </div>
    </div>
  );
};

export default Bar;