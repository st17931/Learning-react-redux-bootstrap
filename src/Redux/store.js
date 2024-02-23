import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./Reducers/logReducer";

const store = configureStore({
    reducer:{
        logInLogOut: logReducer
    }
})

export default store;