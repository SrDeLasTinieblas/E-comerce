//import React,{useEffect} from 'react';
import './App.css';
import Inicio from './assets/pages/Inicio';
import Productos from './assets/pages/Productos';
import About from './assets/pages/About';
//import Error from './assets/pages/Error';
import Comprando from './assets/pages/components/Comprando';
//import { getFirestore, collection, getDocs } from 'firebase/firestore';
//import db, { firebaseConfig } from './firebase/firebaseConfig';
//import Instagram from './assets/images/Instagram.png';
//import {Error} from './assets/504reallydown.html';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import Navbar from '../src/assets/pages/components/Navbar'
//import { async } from '@firebase/util';

const App = () => {
//<Link to="/Finaliza-Compra">No tienes una cuenta? Registrate</Link>
  return (

    <div className="nav">
      <Router>
        <Switch>
        {/*<Route exact path="/Pdf-Factura" component='#'></Route>*/}
        <Route exact path="/Finaliza-Compra" component={Comprando}></Route>
          <Route exact path="/productos" component={Productos}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/" component={Inicio}></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;