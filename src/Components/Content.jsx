import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logOutCreator } from "../Redux/actionCreator/createLogInOut";

const Content = ()=>{
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(logOutCreator());
    }

    return(
        <>
        <h1>This is content page</h1>
        <Button onClick={handleClick}>LOGOUT!!</Button>
        </>
    )
}


export default Content;