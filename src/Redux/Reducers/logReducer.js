import { LOGIN, LOGOUT } from "../action";


const initialState = {
    isLogged: false
}

export default function logReducer(state=initialState, action){
    switch (action.type) {
        case LOGIN:
            
            return { ...state, isLogged: true }

        case LOGOUT:

            return { ...state, isLogged: false }
    
        default:
            return state;
    }
}