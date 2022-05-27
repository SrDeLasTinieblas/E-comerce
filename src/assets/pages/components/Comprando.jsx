import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './Nueva carpeta/Form.js';
import StyleComprando from '../css/StyleComprando.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
//import Alert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';
// import "bootswatch/dist/lux/bootstrap.min.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
//pk_test_51JrjxvH8j9vZp3HQAiSMPdeUtykTdkknpgCAKWfmE7zQHgH3dVeCdMjWO4UBgzwcTjlGPZ2hggO8iv44qxOGTmE900wAh7Af5Y

const URL = 'http://127.0.0.1:8000/productos';
// Aqui estoy usando el componente Stripe pegando la key publica de stripe 
const stripePromise = loadStripe("pk_test_51K1HxzInA4seMnObTZKEglgrDGloAeK7gZQcLMVHxKduCVKYjnUVc8hbspGDxbMBtZZlqu9cWOAPcIqLjJ4l6rf100bsncJeKk");
                        //pk_test_51K1HxzInA4seMnObTZKEglgrDGloAeK7gZQcLMVHxKduCVKYjnUVc8hbspGDxbMBtZZlqu9cWOAPcIqLjJ4l6rf100bsncJeKk

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    let img = localStorage.getItem("a");
    let img1;
    let img2;

    let titulo = localStorage.getItem("b");
    //let titulo1;
    //let titulo2;

    let precio = localStorage.getItem("c");
    let precio1;
    let precio2;

// aqui esto es para que no me de error cuando no hay nada en el localstorage
try{
    // aqui reemplazo la coma por un punto para que no me de error
     img1 = img.replace(/["]/g, '');
     img2 = atob(img1);

     //titulo1 = titulo.replace(/["]/g, '');
     //titulo2 = atob(titulo1);

     //precio1 = precio.replace(/["]/g, '');
     //precio2 = atob(precio1);
    //atob("bGFjYXNhYXp1bA==")
}catch(err){
    console.log(err);
}
   //console.log(btoa("lacasaazul"));
   //console.log(typeof(localStorage.getItem("Image_Card1")))
  // let img = String(img1)
function obtener_localStorage(){
    if(localStorage.getItem("a")){
           return (
               <>
               {/** Aqui se carga la imagen el titulo y el precio */}
                <img src={img2}></img>
                <div className="pasarela">
                    <h4>Producto: {titulo}</h4>
                    <h4>Precio: ${precio}<br></br><br></br></h4>
                </div>
                </>
           )
    }
    else{
        return (<h4>Titulo: Escoge algo :3 {/*localStorage.getItem("titulo1")*/}<br></br>
        Precio: Escoge algo :3{/*S/ localStorage.getItem("precio1")*/}<br></br><br></br>
        </h4>)//localStorage.getItem("precio :3")
    }

}

const handleSubmit = async (e) => {
    // aqui se crea el pago con stripe
    /*const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });*/
      const card = elements.getElement(CardElement);
      
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card});
    console.log("Error: "+error + " " + "paymentMethod: "+paymentMethod);

   /* e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', /*card: elements.*//*getElement(CardElement)});*/

    if (!error) {
        // Si no hay error se hace la peticion a la API
        const {id} = paymentMethod;
        const {data} = await axios.post('http://localhost:3025/api/checkout', 
                {id, amount: Math.round(precio * 100)})//precio2 * 
                //const MySwal = withReactContent(Swal)
                Swal.fire(
                    'Pago realizado con exito!',
                    ' :) ',
                    'success'
                  )
        console.log(data);
        console.log(paymentMethod)
    }
    else{
        Swal.fire(
            'Oh no a ocurrido un error por favor intente nuevamente!',
            ' :( ',
            'error'
          )
    }
};

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="imagen">{obtener_localStorage()}</div>
            
            <CardElement/>

            <button className="buy">Comprar</button>
            
        </form>
        
        </div>
    );

}

export default function Comprando() {
    const [newNote, setNewNote] = useState("");

    const handleChange = (event) =>{
        setNewNote(event.target.value);
    };
const guardandodatos = (e) => {
    //var encodedData = window.btoa("Hello, world"); // encode a string
    //var precio = localStorage.getItem("c");
    //var decodedData = decodeURIComponent(escape(window.atob( precio))); // decode the string
    
    //let a = window.atob(localStorage.getItem("c"));

    //alert(decodedData);



    //let b = localStorage.getItem("b");
    //alert(JSON.stringify(b));
    //console.log(e.target.value)
   // localStorage.setItem("nombrecompleto", e.target.value);
    //let nombres = (localStorage.getItem("nombrecompleto"));
    //console.log(nombres);

}

const [productos, setProducto] = useState([])
useEffect(() => {/*Se iniciar haciendo esto */
    const getProductos = () => {
      fetch(URL)
      .then(res => res.json())
      .then(res => setProducto(res))
      //console.log("hola")
    }
    getProductos()
}, [])

const item = (producto) => (e) => {
    {productos.filter(dato => 
        dato.Id === producto.Id).map(
        product =>
        console.log(product.Id),
        {
        }
    )}}

    return (
        <div className="Finaliza-compra">
                <Form />
            <div className="elements-card">

                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>


    );

}