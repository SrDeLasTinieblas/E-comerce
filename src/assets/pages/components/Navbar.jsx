import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../../images/Instagram.png';
import signin from '../../images/signin.png'
//import login from './login';
import StyleNavbar from '../css/StyleNavBar.css';

export default function Navbar() {
    return (

        <nav className="Menu">
            <label className="logo">
                <a href="https://www.instagram.com/dolcelivelli/" target="_blank"><img src={Instagram} /></a>
            </label>
            <button className="toggle">
                <i className="bar">bar</i>
            </button>
            <ul className="menu_items">
                <li className="inicio"><Link to="/">Inicio </Link></li>
                <li className="productos"><Link to="/productos">Productos</Link></li>
                <li className="about"><Link to="/about">About</Link></li>
            </ul>
            
        </nav>

    )
}
