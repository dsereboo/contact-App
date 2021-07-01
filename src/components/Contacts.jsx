import React,{ useEffect } from "react"
import Contact from "./Contact"
import {Container, Row} from "react-bootstrap"
import {connect} from "react-redux"
import {getContacts} from "../actions/userActions"

const Contacts=(props)=>{

    useEffect(
        ()=>{
            props.getContacts()
        }, []
    )
    console.log(props.contacts)
    return(
        <Container>
            <Row>
                {props.contacts.map(contact=>(
                    <Contact contactInfo={contact} key={contact.id} deleteUser={props.deleteUser} editUser={props.editUser}/>
                ))}
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        contacts: state.contacts.contacts,
    }
}


const mapDispatchToProps={
    getContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)