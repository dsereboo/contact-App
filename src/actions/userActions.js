/*export function addContact(newContact){
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
}*/

export const editContact=(updatedContact,contactId)=>{
    return(dispatch,state, {getFirestore})=>{
        //async call to firebase to create project and return the result
        const db= getFirestore();
        //edit data from firestore collection using firestore object
        db.collection("contacts").doc(contactId)
            .update(updatedContact)
            .then(
                ()=>{
                    //dispatch({type:"EDIT_CONTACT", payload:updatedContact})
                    
                }
            )
            .catch(
                ()=>{
                    console.log("Error updating docuent")
                }
            )

    }
}
export const deleteContact=(contactId)=>{
    return(dispatch, state, {getFirestore})=>{
        //async call to firebase to return result
        const db= getFirestore()
        //delet data from firestore collection using the firestore objcet
        db.collection("contacts").doc(contactId).delete()
        .then( (response)=>{
           // dispatch({type:"DELETE_CONTACT",payload:contactId})
            
        })
        .catch(
            (err)=>{
                console.log("Error handling for delete user action")
            }
        )
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
                //dispatch({type: "ADD_CONTACT", payload: contact,});
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


export const getContacts = () => {
    return (dispatch, state, { getFirestore }) => {
      //async call to firebase to create project and return the result
      const db = getFirestore();
      //add data to firestore collection using the firestore object
      db.collection("contacts")
        .onSnapshot((response) => {
          let contacts = [];
          response.forEach((item) => {
            contacts.push({ ...item.data(), id:item.id });
          });
          console.log(contacts)
          dispatch({ type: "GET_CONTACTS", payload: contacts });
        }, (err) => {
          //Log for an error
          console.log(err);
        })
    };
  };