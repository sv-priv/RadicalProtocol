import { combineReducers } from "redux";

const ethersProviderReducer = (ethersProvider = null, action) =>{

    switch(action.type) {
        case "ethersProvider":
            ethersProvider = action.payload
            return action.payload;
        default : 
            return ethersProvider
    }
    return ethersProvider

}


export default combineReducers({
    ethersProvider: ethersProviderReducer
});