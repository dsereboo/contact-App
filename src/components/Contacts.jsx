import React from "react"
import Contact from "./Contact"
import {Container, Row} from "react-bootstrap"
import {connect} from "react-redux"

const Contacts=(props)=>{
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
        contacts: state.contacts,
    }
}

export default connect(mapStateToProps, {})(Contacts)