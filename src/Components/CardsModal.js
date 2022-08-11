import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
const CardsModal= () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="text-center">
      <Card.Header>Cooperativa multiactiva LTA.</Card.Header>
      <Card.Body>
        <Card.Title>Tarjeta de credito</Card.Title>
        <Card.Text>
          Reciba hoy su tarjeta y participe de las promociones
        </Card.Text>


        <Button variant="primary" onClick={handleShow}>
                Asociarse
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Inscribite Hoy!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Accede a todos los beneficios</Modal.Body>
                <Modal.Footer>
                  <a href="#"><Button variant="secondary" onClick={handleClose}>
                    Cancelar
                  </Button></a>
                  <a href="Contact">
                  <Button variant="primary">
                    Ingresar
                  </Button>
                  </a>
                </Modal.Footer>
              </Modal>


      </Card.Body>
      <Card.Footer className="text-muted">2 dias</Card.Footer>
    </Card>
  );
}

export default CardsModal;
