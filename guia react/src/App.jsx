import { useState } from 'react'
import Contador from './componentes/Contador'
import MostrarTexto from './componentes/MostrarTexto'
import ValorMultiplicado from './componentes/ValorMultiplicado'
import './App.css'

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
    </>
  )
}

export default App
