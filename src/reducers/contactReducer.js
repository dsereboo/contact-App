const initialContacts={ contacts:[
    {name:"Adowa", telephone:"0209996664", location:"London", id:"0"},
    {name:"Amina", telephone:"0507778889", location:"Belize", id:"1"},
    {name:"Toli", telephone:"0593335556", location:"Munich", id:"2"},
]}


const contactReducer=(state=initialContacts, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            console.log(action.payload)
            return{...state, contacts:[...state.contacts, action.payload]};
        case "EDIT_CONTACT":
            let EditId= action.payload.id
            let updatedContacts= state.contacts.map((contact)=> contact.id===EditId? action.payload:contact)
            return{contacts:updatedContacts};
        case "DELETE_CONTACT":
            console.log(action.payload)
            let id=action.payload
            let undeletedContacts=state.contacts.filter((contact)=>contact.id!==id)
            return{contacts: undeletedContacts};
        default:
            return state;
    }

}

export default contactReducer