import { useState } from 'react';
import './App.css';
import BuscarPersonaje from './BuscarPersonaje';
import CardPersonaje from './CardPersonaje';

function App() {

  const [datosPersonaje, setDatosPersonaje] = useState(null);
  const [mostrarCard, setMostrarCard] = useState(false);
  // Define una función que maneje lo que sucede cuando se realiza una búsqueda
  const handleBuscar = (datosPersonajeApi) => {
    // Aquí puedes hacer lo que quieras con los datos del personaje
    console.log(typeof datosPersonajeApi);
    setDatosPersonaje(datosPersonajeApi);
    setMostrarCard(true);
    //Cambiar la visibilidad de CardPersonaje
  };

  const borrarDatos = () => {
    setDatosPersonaje(null);
    setMostrarCard(false);
  }

  return (
    <>

      <BuscarPersonaje devolverPersonaje={handleBuscar} borrarDatosPersonaje={borrarDatos} />
      {mostrarCard && <CardPersonaje datosPersonaje={datosPersonaje} />}
    </>
  );
}

export default App;