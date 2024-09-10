import React from 'react'
import SideBar from '../components/SideBar'
import presencial from '../assets/presencial.png'
import data from '../data/index.json'


const Presencial = () => {
  const handleClick = (link) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };
  
  return (
    <div className='container'>
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='site'>
        <h1>Reuniones Presenciales</h1>
        {data.presencial.map((item, index) => (
          <div className='classSection-container' key={index}>
            <img className='classSection-icon' src={presencial} alt="Icon" />
            <div className='classSection-text'>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
            </div>
            <button
              className='classSection-button-presencial'
              onClick={() => handleClick(item.link)}
            >
              📍
            </button>
          </div>
        ))}
      </div>
    </div>
  )
  }

export default Presencial
