/*export function addContact(newContact){
    return{
        type:"ADD_CONTACT",
        payload:newContact,
    }
}*/

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

export const addContact=(contact)=>{
    return(dispatch,state,{getFirestore})=>{
        //async call to firebase to create project and return the result
        const db=getFirestore() ;
        //add data to firestore collection using the firestore object
        db.collection('contacts').add(contact)
        .then(
            ()=>{
                //When async call is successful dispatch redux action
                dispatch({type: "ADD_CONTACT", payload: contact,});
            }
        )
        .catch(
            (err)=>{
                //if async call fails, log to error log or some mechanism
                console.log(err)
            }
        )
        //asynchronous call to firebase to create users and return result
       
    }

}