import React,{useState} from "react"
import {Form,Button} from "react-bootstrap"

const EditContact=()=>{

    const [contact,editContact]=useState()

    const handleChange=(event)=>{
        editContact({...contact, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleChange} name="name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={handleChange} name="telephone"/>
            </Form.Group>
            <Form.Group> 
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={handleChange} name="location"/>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default EditContact