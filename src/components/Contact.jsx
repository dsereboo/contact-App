import React,{useState}from "react"
import {Card,Button,Col,Modal} from "react-bootstrap"

const Contact=()=>{
    //State and methods to hide/show modal
    const[show,setShow]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <Col md="5">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Contact</Card.Subtitle>
            <Card.Title></Card.Title>
            <Card.Text>
              <p>Name: </p>
              <p>Phone Number: </p>
              <p>Address:</p>
            </Card.Text>
            <Card.Link href="#">
              <Button size="sm" variant="primary" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button size="sm" variant="danger">
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
}
export default Contact