import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react';
import ahorro from '../assets/ahorro.png'
import fiscal from '../assets/fiscal.png'
import gestion from '../assets/gestion.png'
import inversion from '../assets/inversion.png'
import presencial from '../assets/presencial.png'




const SideBar = () => {
  return (
    <Sidebar className='SideC'>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/" />}>
        <div className='sidebar-text-container'>
            <p className='sideBar-text'>Educación Financiera</p>
        </div>
        </MenuItem>
        <MenuItem className='MenuItem' component={<Link to="/ahorro" />}>
        <div className='sidebar-text-container'>
            <img className='sideBar-icon' src={ahorro} alt="Gestion Icon" />
            <p className='sideBar-text'>Ahorro y Presupuesto</p>
        </div>
        </MenuItem>
        <MenuItem className='MenuItem' component={<Link to="/inversion" />}>
            <div className='sidebar-text-container'>
                <img className='sideBar-icon' src={inversion} alt="Gestion Icon"/>
                <p className='sideBar-text'>Inversión</p>
            </div>
        </MenuItem>
        <MenuItem className='MenuItem' component={<Link to="/planificacion" />}>
            <div className='sidebar-text-container'>
                <img className='sideBar-icon' src={fiscal} alt="Gestion Icon" />
                <p className='sideBar-text'>Planificación Fiscal</p>
            </div>
        </MenuItem>
        <MenuItem className='MenuItem' component={<Link to="/gestion" />}>
            <div className='sidebar-text-container'>
                <img className='sideBar-icon' src={gestion} alt="Gestion Icon" /> 
                <p className='sideBar-text'>Gestión de Deudas</p>
            </div>
        </MenuItem>
        <MenuItem className='MenuItem' component={<Link to="/presencial" />}>
            <div className='sidebar-text-container'>
                <img className='sideBar-icon' src={presencial} alt="Gestion Icon"/>
                <p className='sideBar-text'>Reuniones Presenciales</p>
            </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
