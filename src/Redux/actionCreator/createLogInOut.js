import { LOGIN, LOGOUT } from "../action"


export function logInCreator(){
    return { type: LOGIN }
}

export function logOutCreator(){
    return { type: LOGOUT }
}