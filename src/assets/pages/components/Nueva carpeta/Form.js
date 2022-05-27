import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//import { request } from 'express';

const Form = ({/*cliente, setCliente*/}) => {

    return (
        <div>
            <form action="http://localhost:7000/orden_detalles" method="POST"  className="Formulario_Compra">
                <img src="https://i.postimg.cc/MGBTDSxG/favicon.png" alt=""/>
                <div className="linea"></div>
                <label className="sub-titulo">Sentimientos convertidos en postres ♡</label>

                <h2 className="compra-text">Detalles de la Facturacion</h2>

                <div className="Formulario_Compra_Datos"  >
                    <div className="Columna-a">
                        <label className="nombre-text">Nombres</label>
                        <input type="text" placeholder="Nombre" className="Nombre" name="Nombres" required/>

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
                        <input type="hidden" name="nombre_Pedido" value={localStorage.getItem("b")} name="nombre_Pedido" required/>
                        
                        <input type="hidden" name="Precio" value={localStorage.getItem("c")} name="Precio" required/>
                    
                    </div>

                    <div className="btn-cancel">

                        <Button className="btn-cancel" color="error">
                        <Link to="/"> Cancel</Link></Button>
                    </div>

                        {<input type="submit" className="btn-save" value="Save"/>}
                        {/*<input onClick={handleClick} type="submit" className="btn-sav1e1" value="S1ave"/>*/}
                        <div className="linea-vertical"></div>
                </div>
                
            </form>
        </div>
    )
}

export default Form
