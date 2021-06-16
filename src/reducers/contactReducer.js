const initialContacts={ contacts:[
    {name:"Adowa", phoneNum:"0209996664", address:"", id:"0"},
    {name:"Amina", phoneNum:"0507778889", address:"", id:"1"},
    {name:"Toli", phoneNum:"0593335556", address:"", id:"2"},
]}


const contactReducer=(state=initialContacts, action)=>{
    switch(action.type){
        default:
            return state;
    }

}

export default contactReducer