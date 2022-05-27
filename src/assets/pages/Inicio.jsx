import React, {useState, useRef, useEffect} from 'react';
import ReactPlayer from 'react-player';
import frasco from '../videos/frasco.mp4'
import torta from '../videos/torta.mp4'
import tortadefresas from '../videos/tortadefresas.mp4'
import corazon from '../videos/corazon.mp4'
import Slider from './components/Slider';
import Navbar from '../pages/components/Navbar';
import StyleInicio from '../pages/css/StyleInicio.css'

export default function Inicio() {
  /*const [data, setData] = useState([]);
  const [todo, setTodo] = useState([]);

  const requestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)*/

/*fetch('http://localhost:8000/todo', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))*/
  
    //alert(JSON.stringify(inputValue))

  return (
    <div>
        <Navbar />
        <Slider />
        <br/><br/>
      <h2>
        ¡Un poco de nosotros!
      </h2>

      <div className="lines"></div>
          <div role="tablist" className="images_indicadores"></div>

            <div className="conetendedor-players">
                  <ReactPlayer
          url={torta}
          className='react-player'
          playing
        />
                  <ReactPlayer
          url={frasco}
          className='react-player'
          playing
        />
                  <ReactPlayer
          url={corazon}
          className='react-player'
          playing
        />
                  <ReactPlayer
          url={tortadefresas}
          className='react-player'
          playing
        />
        
        </div> 

        <div>

        </div>

</div>
    
  )
}//torta.mp4
