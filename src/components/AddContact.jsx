import React,{useState} from "react"
import { Form,Button } from "react-bootstrap"
import {connect} from "react-redux"
import {addContact} from "../actions/userActions"



const AddContact=(props)=>{

    const [contact,setContact]=useState({
        name:"", telephone:"", location:"", id:"",
    })
    
    const handleChange=(event)=>{
        setContact({...contact, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        contact.id=Math.floor(Math.random()*100).toString()
        props.addContact(contact)
        props.handleClose()
    }
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="telephone" placeholder="Eg. 0205478909"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="location" placeholder="Enter your address"/>
            </Form.Group>
            <Button variant="primary" size="" type="submit" block>Add Contact</Button>
        </Form>

    )
}

//const mapDispatchToProps={addNewContact: addContact} 
export default connect(null, {addContact})(AddContact)