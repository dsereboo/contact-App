import {createStore,compose,applyMiddleware,combineReducers} from "redux"
import contactReducer from "../reducers/contactReducer"
import{getFirebase, reduxReactFirebase} from "react-redux-firebase"
import { getFirestore, reduxFirestore } from "redux-firestore"
import thunk from "redux-thunk"
import firebase from "../config"

const initialState={
    contacts:[],
}

const combinedReducers=combineReducers(
    {
        contacts: contactReducer,
    }
)


export const store= createStore(
    combinedReducers,
    initialState,
    compose(
    
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxReactFirebase(firebase),
        reduxFirestore(firebase)
        
    )

)