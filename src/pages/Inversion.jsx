import React from 'react'
import SideBar from '../components/SideBar'
import inversion from '../assets/inversion.png'
import data from '../data/index.json'


const Inversion = () => {
  const handleClick = (link) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };
  
  return (
    <div className='container'>
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='site'>
        <h1>Inversión</h1>
        {data.inversion.map((item, index) => (
          <div className='classSection-container' key={index}>
            <img className='classSection-icon' src={inversion} alt="Icon" />
            <div className='classSection-text'>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
            </div>
            <button
              className='classSection-button'
              onClick={() => handleClick(item.link)}
            >
              ►
            </button>
          </div>
        ))}
      </div>
    </div>
  )
  }

export default Inversion
