import React from 'react'
import SideBar from '../components/SideBar'
import classSection from '../components/classSection'
import ahorro from '../assets/ahorro.png'
import data from '../data/index.json'

const AhorroYPresupuesto = () => {

const handleClick = (link) => {
  window.open(link, '_blank'); // Opens the link in a new tab
};
  
return (
  <div className='container'>
    <div className='sideBar'>
      <SideBar/>
    </div>
    <div className='site'>
      <h1>Ahorro y Presupuesto</h1>
      {data.ahorro.map((item, index) => (
        <div className='classSection-container' key={index}>
          <img className='classSection-icon' src={ahorro} alt="Icon" />
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

export default AhorroYPresupuesto
