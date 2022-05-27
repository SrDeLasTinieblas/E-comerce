import React, {useState, useRef, useEffect} from 'react'

const URL = 'http://localhost:3056/api';

const Slider = () => {
const [slider, setSlider] = useState([])

useEffect(() => {/*Se iniciar haciendo esto */
    const getSlider = () => {
        fetch(URL)
        .then(res => res.json()) //promesa
        .then(res => setSlider(res)) //promesa
        //console.log("hola")
    }
        getSlider()
    }, [])

  
    //alert(JSON.stringify(inputValue))

    return (
    
    <div className="slider">
      {slider.map((slide) => {
                return (
                  <div>
                    {<>
                    {
                    <ul>
                      <li><img src={slide.slider} alt=""></img></li>

                    </ul> 
                    }

                    </>}
                    </div>
              )
            })}
        
      </div>
        
    )
}
export default Slider
