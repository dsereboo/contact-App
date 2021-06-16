import React from "react"
import {Card,Button} from "react-bootstrap"

const Contact=()=>{
    return (
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
            <Button size="sm" variant="primary" >
              Edit
            </Button>
          </Card.Link>
          <Card.Link href="#">
            <Button size="sm" variant="danger" >
              Delete
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    );
}
export default Contact