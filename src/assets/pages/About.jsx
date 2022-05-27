import React from 'react'
//import wallpapersden from '../images/wallpapersden.jpg'
//import fondo from '../images/fondo.png'
//import fondo1 from '../images/fondo1.png'
//import Panther from '../images/Panther.gif'
//import dolor from '../images/dolor.jpg'
import StyleAbout from '../pages/css/StyleAbout.css'
import Navbar from './components/Navbar';
import Slider from './components/Slider';

export default function About() {
  return (
    <div>
      <Navbar />
      <Slider />

      <h2>
        Conocenos un poco
      </h2>

      <h3>Postres Dolce Livelli aqui podrás encontrar gran variedad de postres,
        desde un delicioso cheescake de fresa hasta una torta de aniversario especial.
        Nuestras tortas, son elaboradas bajo estrictas normas sanitarias y sobre todo con insumos
        calificados que permiten otorgarle a nuestro cliente lo mejor.</h3>

      <h5>Puedes comprar en línea o en cualquiera de nuestras sucursales, realizamos delivery a Lima.</h5>

      <div className="direccion">
      <strong className="Instagram">Instragram: </strong>  @Dolce Livelli<br></br>
      <strong className="Ubicacion">Ubicacion: </strong>  Lima - Perú 📍<br></br>
          
          <strong className="contactados"> Contactanos: </strong>📲 Cotización y pedido al DM 🍰<br></br>
          <strong className="frase">Sentimientos convertidos en postres ♡</strong>
      </div>
      
    </div>
  )
}
