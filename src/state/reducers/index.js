import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"
 
const testProviderReducer = (state={age:0}, action) =>{
    // console.log(state,action)

    switch(action.type) {
        case "objectTest":
            return {...state, age:action.payload}
        default : 
            return state
    }
}
const ethersProviderReducer = (state = {}, action)=>{
    switch(action.type){
        case "ethersProvider":
            return {...state, ethersProvider: action.payload}
        default : 
            return state
    }
}

export default combineReducers({
    testProvider: testProviderReducer,
    form: formReducer,
    ethersProvider: ethersProviderReducer
    
});