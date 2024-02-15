import React, { useState } from 'react'; // Importa React y useState para poder usar hooks
import md5 from 'md5'; // Importa la librería md5 para generar el hash

const BuscarPersonaje = ({ onBuscar }) => { // Recibe la función onBuscar como prop
    const [nombrePersonaje, setNombrePersonaje] = useState('');// Inicializa el estado del input con una cadena vacía

    const clavePublica = 'f31a9d04d30464e549d7d6cd33972cb8'; // Clave pública
    const clavePrivada = '2471a7465fc7cb8c034732fb6e009f163cc5cc02'; // Clave privada

    const manejarBusqueda = async () => {
        try {
            const ts = 1000 // Genera un timestamp para usar como parte del hash
            const timestamp = "&ts=" + ts; // Genera un timestamp para usar como parte del hash
            const hash = md5(`${ts}${clavePrivada}${clavePublica}`); // Genera el hash utilizando md5, combinando el timestamp, la clave privada y la clave pública

            const url = `https://gateway.marvel.com/v1/public/characters?&name=${nombrePersonaje}${timestamp}&apikey=${clavePublica}&hash=${hash}`;
            const respuesta = await fetch(url); // Realiza la solicitud a la API de Marvel

            if (!respuesta.ok) { // Verifica si la respuesta no fue exitosa
                throw new Error('No se pudo obtener la respuesta de la API'); // Lanza un error si no se pudo obtener la respuesta
            }

            const datos = await respuesta.json(); // Convierte la respuesta en formato JSON

            const datosPersonaje = datos.data.results[0]; // Guarda los datos del personaje en una variable
            onBuscar(datosPersonaje); // Llama a la función onBuscar y pasa los datos del personaje

        } catch (error) { // Maneja cualquier error que pueda ocurrir
            console.error('Error buscando personaje:', error); // Imprime el error en la consola
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ingrese el nombre del personaje"
                value={nombrePersonaje}
                onChange={(event) => setNombrePersonaje(event.target.value)} // Actualiza el estado del input al cambiar el valor del input
            />
            <button onClick={manejarBusqueda}>Buscar</button> {/* Agrega un botón para iniciar la búsqueda cuando se haga clic */}
        </div>
    );
};

export default BuscarPersonaje;
