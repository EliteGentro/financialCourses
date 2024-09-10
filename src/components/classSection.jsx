import React from 'react'

const classSection = ({ title, link, icon }) => {
    const handleClick = () => {
      window.open(link, '_blank'); // Opens the link in a new tab
    };
  
    return (
      <div className='classSection-container'>
        <img className='classSection-icon' src={icon} alt="Icon" />
        <h1>{title}</h1>
        <h2>Esta es una clase</h2>
        <button className='Play Button' onClick={handleClick}>Reproducir</button>
      </div>
    );
  };

export default classSection
