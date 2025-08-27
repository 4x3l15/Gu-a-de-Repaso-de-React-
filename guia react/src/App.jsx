import { useState } from 'react'
import './App.css'
import Saludo from './componentes/Saludo';
import Contador from './componentes/Contador'
import MostrarTexto from './componentes/MostrarTexto'
import ValorMultiplicado from './componentes/ValorMultiplicado'
import CambiarFondo from './componentes/CambiarFondo'
import FromConAlerta from './componentes/FromConAlerta'
import ListaNombres from './componentes/ListaNombres'
import ArrayObjetos from './componentes/ArrayObjetos'
import FiltroFrutas from './componentes/FiltroFrutas';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Mi Primer Ejercicio de React</h1>
        <Contador />
      </div>
      <hr />
      <div>
        <h1>Mostrar Texto</h1>
        <MostrarTexto />
      </div>
      <hr />
      <div>
        <h1>Valor Multiplicado en tiempo real</h1>
        <ValorMultiplicado/>
      </div>
      <hr />
      <div>
        <h1>cambiar color del fondo</h1>
        <CambiarFondo/>
      </div>
      <hr />
      <div>
        <h1>Formulario con alerta</h1>
        <FromConAlerta/>
      </div>
      <hr />
      <div>
        <h1>Lista de nombres</h1>
        <ListaNombres/>
      </div>
      <hr />
      <div>
        <h1></h1>
        <ArrayObjetos/>
      </div>
      <hr />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Componente con Props</h1>
      <Saludo nombre="Axel" />
      <Saludo nombre="santi" />
      <Saludo nombre="May" />
      <Saludo nombre="tj" />
    </div>
    <hr />
    <div>
      <h1>Filtros de frutas</h1>
      <FiltroFrutas/>
    </div>
    </>
  )
}

export default App
