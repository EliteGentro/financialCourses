import React from 'react';
import PageButton from '../components/PageButton';
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <div className='container'>

      <div className='sideBar'>
        <SideBar className = 'SideBar'/>
      </div>

      <div className='site'>
        <h1>Quienes Somos</h1>
        <h2>En un mundo donde la educación financiera sigue siendo un privilegio reservado para unos pocos, nuestro proyecto surge con un propósito claro: democratizar el conocimiento financiero y hacerlo accesible para aquellos que más lo necesitan. Fundada en 2024 como una iniciativa de innovación frugal, nuestra plataforma ofrece cursos de educación financiera a precios accesibles, específicamente diseñados para las personas que se encuentran en la base de la pirámide socioeconómica.</h2>
        <h2>La misión de este proyecto es sencilla pero poderosa: empoderar a los adultos para que tomen control de su futuro financiero. Sabemos que nunca es demasiado tarde para comenzar a ahorrar y planificar un retiro digno y seguro. Por eso, nuestros cursos están dirigidos a aquellos que aún están a tiempo de tomar esa decisión crucial que les permitirá jubilarse con un ahorro considerable, sin la necesidad de seguir trabajando durante su tercera edad. Queremos que todos tengan la oportunidad de disfrutar de una jubilación tranquila, sin preocupaciones económicas.</h2>
        <h2>Para lograr nuestro objetivo, hemos optimizado todos nuestros recursos de manera eficiente y creativa. Aprovechamos la plataforma de YouTube para distribuir nuestro contenido educativo, eliminando así los costos de servidores y mejorando la accesibilidad. Asimismo, hemos recortado costos de salarios de maestros utilizando modelos innovadores de enseñanza y colaboración. Este enfoque nos permite mantener precios bajos sin sacrificar la calidad del aprendizaje, asegurando que nuestros cursos lleguen a quienes más lo necesitan.</h2>
        <h2>Nuestra propuesta es una invitación a cambiar vidas, a transformar el presente financiero y a construir un futuro mejor para todos. Porque creemos firmemente que la educación financiera es un derecho, no un privilegio, y estamos comprometidos a llevar este conocimiento a cada rincón donde sea necesario. ¡Únete a nosotros y comienza hoy tu camino hacia una jubilación digna y libre de preocupaciones!</h2>

        <button
              className='homeButton'
            >
              Suscribirme
            </button>

      </div>
    </div>
  )
}

export default Home
