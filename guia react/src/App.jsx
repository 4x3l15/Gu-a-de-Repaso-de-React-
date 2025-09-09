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
import Reducir from './componentes/Reducir';
import Formulario from './componentes/Formulario';
import EfectoConsola from './componentes/EfectoConsola';
import CorrectorAuto from './componentes/CorrectorAuto';
import FormularioControlado from './componentes/FormularioControlado';
import AppTareas from './componentes/AppTareas';



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
    <hr />
    <div>
      <h1>Ejercicio 10: Reducir con .reduce()</h1>
      <Reducir/>
    </div>
    <hr />
    <div>
      <h1>Formulario</h1>
      <Formulario/>
    </div>
    <hr />
    <div>
      <h1>Ejercicio 12</h1>
      <EfectoConsola />
    </div>
    <hr />
    <div>
      <h1>Ejercicio 13</h1>
      <CorrectorAuto />
    </div>
    <hr />
    <div>
      <h1>Formulario Controlado</h1>
      <FormularioControlado />
    </div>
    <hr />
    <div>
      <h1>Fin</h1>
      <AppTareas/>
    </div>
    </>

  )
}

export default App
