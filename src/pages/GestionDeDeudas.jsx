import React from 'react'
import SideBar from '../components/SideBar'
import gestion from '../assets/gestion.png'
import data from '../data/index.json'


const GestionDeDeudas = () => {

  const handleClick = (link) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };
  
  return (
    <div className='container'>
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='site'>
        <h1>Gestión de Deudas</h1>
        {data.gestion.map((item, index) => (
          <div className='classSection-container' key={index}>
            <img className='classSection-icon' src={gestion} alt="Icon" />
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

export default GestionDeDeudas
