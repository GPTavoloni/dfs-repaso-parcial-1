import { useState } from 'react'
import './App.css'
import Controles from './components/Controles';
import Display from './components/Display';

function App() {
  const [unidad, setUnidad] = useState('Celsius');
  const [clima, setClima] = useState('Soleado')

  const cambiarUnidad = () => {
	  (unidad == 'Fahrenheit') ? setUnidad('Celsius') : setUnidad('Fahrenheit')
	  
  }

  const cambiarClima = (estado) => {
    setClima(estado)
  }
  console.log(clima)

  return (
    <div className="container">
      <h1>Estado del tiempo</h1>
      <Controles onCambiarUnidad={cambiarUnidad} onCambiarClima={cambiarClima} />
      <Display unidad={unidad} clima={clima} />
    </div>
  )
}

export default App
