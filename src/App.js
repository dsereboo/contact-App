import {Container, Row,Button,Modal} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import { useState } from "react";

function App(props) {

  //State and methods to hide/show modal
  const[show,setShow]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddContact handleClose={handleClose} />
            </Modal.Body>
          </Modal>
      <Row className="no-flex">
        <h1 className="text-center">Contacts</h1>
      </Row>
      <Row>
          <Contacts />
      </Row>
      <Button
        variant="primary"
        size="lg"
        className="btn-float"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </Button>
    </Container>
  );
}

export default App;
