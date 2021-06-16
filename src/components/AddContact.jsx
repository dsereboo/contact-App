import React from "react"
import { Form,Button } from "react-bootstrap"

const AddContact=()=>{
    return(
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phoneNum" placeholder="Eg. 0205478909"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" name="location" placeholder="Enter your address"/>
            </Form.Group>
            <Button variant="primary" size="block" type="submit" >Add Contact</Button>
        </Form>

    )
}
export default AddContact