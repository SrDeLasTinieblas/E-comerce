import React, {useState, useRef, useEffect} from 'react';
import shopping_30px from '../../images/shopping_30px.png';
import StyleCards from '../css/StyleCards.css'
import { Link } from 'react-router-dom';

const URL_LOGIN = 'http://127.0.0.1:8000/productos'; //api

const Cards = () => {
const [productos, setProducto] = useState([])

useEffect(() => {/*Se iniciar haciendo esto */
    const getProductos = () => {
      fetch(URL_LOGIN)
      .then(res => res.json())
      .then(res => setProducto(res))
      //console.log("hola")
    }
    getProductos()
}, [])

const card = (producto) => (e) => {
    {productos.filter(dato => 
        dato.Id === producto.Id).map(
        product =>
        {
        if(localStorage.getItem("a")){
            localStorage.removeItem("a")
            localStorage.removeItem("b")
            localStorage.removeItem("c")
            let a = btoa(product.Image);
            //let c = btoa(product.Precio); --quitar el comentario para que funcione el precio
            localStorage.setItem("a", JSON.stringify(a))
            localStorage.setItem("b", product.Titulo)
            localStorage.setItem("c", product.Precio)

          }else{
            let a = btoa(product.Image);
            let c = btoa(product.Precio);
            //console.log()
            localStorage.setItem("a", JSON.stringify(a))
            localStorage.setItem("b", product.Titulo)
            localStorage.setItem("c", JSON.stringify(c))
          }
      }
      )
    }
  

  }
    return (
        <div className="grid">
              {productos.map((producto) => {
                return (
                <div className="card" >
                  <div>
                    {<>
                    <img loading='lazy' className="ico" src={producto.Image}></img>

                    <h4>{producto.Titulo}</h4>

                    <p>{producto.Descripcion}</p>

                    <span className="precio">{'$' + producto.Precio}</span>

                    <a onClick={card(producto)}> <Link to="/Finaliza-Compra">Comprar</Link> </a></>}
                    
                    </div>
                </div>
              )
            })}
            
        </div>  
    )
}
export default Cards
