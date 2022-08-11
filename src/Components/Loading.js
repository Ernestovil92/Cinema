import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
    </div>
  );
}

export default Loading;
