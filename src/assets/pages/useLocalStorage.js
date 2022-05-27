
const valor = () => { 
    producto.filter(dato => 
    dato.Id === 1).map(
      product =>
      <>
      <p>{product.Descripcion}</p>
      {alert(product.Titulo)}
      </>
    )}
    
export default {

    valor

}





    /*.map(
      product =>
    <>
    {<img src={Cake_heart_strawberry} />}
    <h4>{product.Titulo}</h4>
    <p>{product.Descripcion}</p>
    <button onClick={carrito} className="add-to-shopping-cart">AÑADIR AL CARRITO</button>
      {/*<ShoppongCart />*}
    //<span
    //onChange={e => setText(e.target.value)}
    //value={text}
    >{'$'+product.Precio}</span>
    </>*/

   
















/*import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            return initialValue;
        }
    });
        const setValue = value => {
            try{
              setStoredValue(value)
              window.localStorage.setItem(key,JSON.stringify(value))
            } catch(e){
              console.error(e)
      
            }
        }
      
    
    return [storedValue, setValue]
}  */