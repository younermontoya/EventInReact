import React from 'react'

export const FourthComponent = () => {

  const handleClicked = (e) => {
    alert("Has hecho click al botón!!");
  }

  const handDoubleclicked = (e) =>{
    alert("Haz hecho doble click ")
  }
//onMouseEnter y onMouseLeave con dos funciones
  const handleMouseEnter = (e) =>{
    console.log("Haz entrado a mi caja con el mouse")
  }
  const handleMouseLeave = (e) =>{
    console.log("Haz salido de mi caja con el mouse")
  }
//onMouseEnter y onMouseLeave con una sola funcion
const handleMouse = (e, action) => {
 alert(`Has ${action} de la caja`);
}
//CL     
const handleMouseCL = (e, action) => {
  console.log(`Has ${action} de la caja`);
}    

// onFocus
const insideInput = (e) => {
    console.log("Estas dentro del input, Ecribe tu nombre");
}
// onBlur 
const outsideInput = (e) => {
  console.log("Esta fuera del input, metete xd");
}   

  return (
    <div>
        <h2>Eventos en React</h2>
        {/* Evento Click */}
        <div>
          <button onClick={ () => {
              console.log("Hola, soy un evento Click!!");
          } }>Haz Click!!</button>
        </div>
        <div>
          <button onClick={ handleClicked }>Aquí también haz Click!!</button>
        </div>


        {/* Evento Doble Click */}
        <div>
          <button onDoubleClick={ handDoubleclicked } >Haz doble click</button>
        </div>
        {/* Evento Mouse Enter y Mouse Leave */}
         <div id="boxpadre">    
                <hr/>
        <div id="box"
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <p>Pasa el mouse por encima !!!</p>      
        </div>

        <hr/>
        <div id="box1"
          onMouseEnter={ e => handleMouse(e, "entrando a") }
          onMouseLeave={ e => handleMouse(e, "salido de") }
        >
          <p>Pasa el mouse por encima !!!</p>      
        </div>
        <hr/>
        <div id="box2"
           onMouseEnter={ e => handleMouseCL(e, "entrando a") }
           onMouseLeave={ e => handleMouseCL(e, "salido de") }
        >
          <p>Pasa el mouse por encima !!!</p>      
        </div>
        </div>
        {/* Evento Focus y Blur se usan el input */}
        <br />
        <hr />
          <div className='mt-5'> 

            <input type="text" 
            onFocus={ insideInput}
            onBlur={ outsideInput }
            placeholder='Escribe tu nombre'/>

          </div>



    </div>
  )
}
