import { useState } from 'react';
import Card from './Card';

const Form = () => {

  // Estados para los inputs
  const [nombre, setNombre] = useState('');
  const [cancion, setCancion] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Eventos para los inputs
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSongChange = (e) => {
    setCancion(e.target.value);
  };

  //Evento para el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre.trim().length < 2 || nombre.trim() !== nombre || cancion.length < 3) {
      setError(true);
      setSubmitted(false);
    } else {
        setError(false);
        setSubmitted(true);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Ingresa tu nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div>
            <label>Cancion favorita:</label>
            <input
              type="text"
              value={cancion}
              onChange={handleSongChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
  
        {/* Mostrar mensaje de error si es necesario */}
        {error && <p>Por favor verifica que la información sea correcta.</p>}
  
        {/* Renderizar el componente Card si se ha enviado el formulario correctamente */}
        {submitted && !error && (
          <Card nombre={nombre} cancion={cancion} />
        )}
      </div>
    );
  };
  
  export default Form;
