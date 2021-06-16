import React,{useState} from "react"
import { Form,Button } from "react-bootstrap"


const AddContact=()=>{

    const [contact,setContact]=useState({
        name:"", telephone:"", address:"", id:"",
    })

    const handleChange=(event)=>{
        setContact({...contact, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        contact.id=Math.floor(Math.random()*100).toString()
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
            <Button variant="primary" size="block" type="submit">Add Contact</Button>
        </Form>

    )
}
export default AddContact