import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Cards from './components/Cards';
import shopping_30px from '../../assets/images/shopping_30px.png';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import StyleProducto from '../pages/css/StyleProducto.css'
//import ShoppongCart from './components/ShoppongCart';

//<Slider />
const URL_LOGIN = 'http://127.0.0.1:8000/productos';

export default function Productos() {

  const [producto, setProducto] = useState([])

  useEffect(() => {/*Se iniciar haciendo esto */
    const getProductos = () => {
      fetch(URL_LOGIN)
      .then(res => res.json())
      .then(res => setProducto(res))
    }
    getProductos()
  }, [])


//----------------------------------------------------CARDS-------------------------------------------------------------

useEffect(() => {
const ClickButton = () => {
/*Se iniciar haciendo esto */
  
    //let click = document.querySelectorAll('.cart');
    //alert('hola')

}
ClickButton()
}, [])

  return (
    <div>
      <Navbar />
      <Slider />
      <br />
      <div className="flexbox">
        <Cards />
      </div>
        <div className="subtexto">
          <h2><br />UNO PERSONALIZADO?<br /><br />
          </h2>
        </div>
              
        {/* Sen Email */}
        <form action="https://formsubmit.co/happynavidad25@gmail.com"
          method="POST">
          <h5 className="mensaje"> Como lo quieres?</h5>

          <label>
            <textarea className="textarea" type="text" name="Ingredientes" required ></textarea>
          </label>
          
          <h5 className="email-text"> Email</h5>
          <input className="email" type="email" name="email" placeholder="name@example.com" required />

          <Button className="submit" type="submit" variant="contained" endIcon={<SendIcon />}  ></Button>
        </form>
      </div>

    
  )
}


/*<button className="submit" type="submit">Send</button>*/
/*<div className="flotante">
<h3>hola</h3>
</div>*/
/*Sweet_cake*/
