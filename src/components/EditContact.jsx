import React,{useState} from "react"
import {Form,Button} from "react-bootstrap"
import {connect} from "react-redux"
import { editContact } from "../actions/userActions"

const EditContact=(props)=>{

    const [contact,editContact]=useState({
        id:props.contactData.id,
        name: props.contactData.name,
        telephone: props.contactData.telephone,
      
    })

    const handleChange=(event)=>{
        editContact({...contact, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.editContact(contact)
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

const mapDispatchToProps={editContact:editContact}
export default connect(null,mapDispatchToProps)(EditContact)