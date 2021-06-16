const initialContacts={ contacts:[
    {name:"Adowa", telephone:"0209996664", location:"London", id:"0"},
    {name:"Amina", telephone:"0507778889", location:"Belize", id:"1"},
    {name:"Toli", telephone:"0593335556", location:"Munich", id:"2"},
]}


const contactReducer=(state=initialContacts, action)=>{
    switch(action.type){
        default:
            return state;
    }

}

export default contactReducer