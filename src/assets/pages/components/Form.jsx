import React from 'react'


const URL = 'http://127.0.0.1:8000/productos';

const Form = () => {

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


const precio = () => {
    let precio = localStorage.getItem("c");
    let precio1 = precio.replace(/[^0-9]/g, '');
    let precio2 = atob(precio1);
    alert(precio2);
    //return precio2;
}

    return (
        <div>
            <form action="http://localhost:7000/orden_detalles" method="POST" className="Formulario_Compra">
                <img src="https://i.postimg.cc/MGBTDSxG/favicon.png" alt=""/>
                <div className="linea"></div>
                <label className="sub-titulo">Sentimientos convertidos en postres ♡</label>

                <h2 className="compra-text">Detalles de la Facturacion</h2>

                <div className="Formulario_Compra_Datos"  >
                    <div className="Columna-a">
                        <label className="nombre-text">Nombres</label>
                        <input type="text" placeholder="Nombre" onChange={guardandodatos} className="Nombre" name="Nombres" required/>

                        <label className="correo-text">Correo Electronico</label>
                        <input type="email" placeholder="Correo electronico" className="Email" name="Email" required/>

                        <label className="direccion">Direccion</label>
                        <input type="text" placeholder="Direccion" ClassName="Direccion" name="Direccion" required/>

                        <label className="direccionOcional">Direccion Opcional</label>
                        <input type="text" placeholder="Direccion Opcional" ClassName="Direccion_Opcional" name="Direccion_Opcional"/>

                        <label className="notaPedido-text">Nota del pedido</label>
                        <textarea placeholder="Nota del pedido" className="Nota_pedido" type="text" name="Nota_pedido"></textarea>

                        <label className="fechaEntrega-text">Fecha de entrega</label>
                        <input type="date" ClassName="Fecha_Entrega" name="Fecha_Entrega" required/>

                        <label className="intevaloTime-text">Intervalo de tiempo</label>
                        <select type="text" ClassName="IntervaloTiempo" name="IntervaloTiempo" required>
                            <option name="IntervaloTiempo">Desde: 8:00 am - Hasta: 10:00 am</option>
                            <option name="IntervaloTiempo">Desde: 10:00 am - Hasta: 12:00 am</option>
                            <option name="IntervaloTiempo">Desde: 12:00 pm - Hasta: 2:00 pm</option>
                            <option name="IntervaloTiempo">Desde: 2:00 pm - Hasta: 4:00 pm</option>
                            <option name="IntervaloTiempo">Desde: 4:00 pm - Hasta: 6:00 pm</option>
                        </select>

                    </div>

                    <div className="Columna-b">

                        <label className="apellido">Apellidos</label>
                        <input type="text" placeholder="Apellido" className="apellidos" name="Apellidos" required/>

                        <label className="telefono-lbl">Telefono</label>
                        <input type="number" placeholder="Telefono" ClassName="telefono-input" name="Telefono" required/>

                        {/*<label name="nombre_Pedido" className="nombre_Pedido">{localStorage.getItem("b")}</label>*/}
                        <input type="hidden" name="nombre_Pedido" value={localStorage.getItem("b")} className="nombre_Pedido" required/>
                        
                        <input type="hidden" name="Precio" value={precio} className="Precio" required/>
                    
                    </div>
                    <div className="btn-cancel">
                        {/*<a href="/" className="btn-cancel1">Cancel</a>
                        
                        localStorage.getItem("nombrecompleto")
                        
                        */}

                        <Button className="btn-cancel" color="error">
                        <Link to="/"> Cancel</Link></Button>
                        

                        </div>
                        <input onClick={precio} disabled={botonActivo} type="submit" className="btn-save" value="Save"/>
                        {/*<input onClick={handleClick} type="submit" className="btn-sav1e1" value="S1ave"/>*/}
                        <div className="linea-vertical"></div>
                </div>
                
            </form>


            
        </div>
    )
}

export default Form
