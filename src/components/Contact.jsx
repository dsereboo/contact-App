import React,{useState}from "react"
import {Card,Button,Col,Modal} from "react-bootstrap"
import EditContact from "./EditContact";
import { deleteContact } from "../actions/userActions";
import {connect} from "react-redux"

const Contact=(props)=>{
    //State and methods to hide/show modal
    const[show,setShow]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete=()=>{
        props.deleteContact(props.contactInfo.id)
    }

    return (
      <Col md="3">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditContact contactData={props.contactInfo} handleClose={handleClose}/></Modal.Body>
        </Modal>
        <Card >
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Contact</Card.Subtitle>
            <Card.Title>{props.contactInfo.id}</Card.Title>
            <Card.Text>
              <p>Name: {props.contactInfo.name} </p>
              <p>Phone Number: {props.contactInfo.telephone} </p>
              <p>Location: {props.contactInfo.location}</p>
            </Card.Text>
            <Card.Link href="#" >
              <Button size="sm" variant="primary" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button size="sm" variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
}

const mapDispatchToProps={deleteContact:deleteContact}
export default connect(null,mapDispatchToProps)(Contact)