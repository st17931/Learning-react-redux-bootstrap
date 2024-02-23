import { useDispatch } from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logInCreator } from '../Redux/actionCreator/createLogInOut';

function Signin() {

 const dispatch= useDispatch();

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
    if(e.target[0].value === "tripathi@satyam.com" && e.target[1].value === "satyam"){
        dispatch(logInCreator());
    }else{
        alert("Something went wrong")
    }
    e.target[0].value = "";
    e.target[1].value = "";
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signin;