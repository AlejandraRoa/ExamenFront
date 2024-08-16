import  { useState } from 'react';
import Form from '../Components/Form';
import Card from '../Components/Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [cancion, setCancion] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (nombreInput, songInput) => {
    // Validaciones
    if (nombreInput.trim().length < 3 || songInput.trim().length < 6) {
      setError('Por favor verifica que la información sea correcta');
      setShowCard(false);
      return;
    }

    // Si las validaciones pasan
    setNombre(nombreInput);
    setCancion(songInput);
    setShowCard(true);
    setError('');
  };

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Música</h1>
      <Form onSubmit={handleSubmit} />
      {error && <p style={styles.error}>{error}</p>}
      {showCard && <Card nombre={nombre} cancion={cancion} />}
    </div>
  );
}

export default App;
