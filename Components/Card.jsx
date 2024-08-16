import PropTypes from 'prop-types';

const Card = ({ nombre, cancion }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{cancion}</p>
    </div>
  );
};

// Validación de las props
Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  cancion: PropTypes.string.isRequired,
};

export default Card;
