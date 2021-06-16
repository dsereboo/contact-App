export function addContact(newContact){
    return{
        type:"ADD_CONTACT",
        payload:newContact,
    }
}

export function editContact(updatedContact){
    return{
        type:"EDIT_CONTACT",
        payload: updatedContact,
    }
}
export function deleteContact(contactID){
    return{
        type:"DELETE_CONTACT",
        payload: contactID,
    }
}