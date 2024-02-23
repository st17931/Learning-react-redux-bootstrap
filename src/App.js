import './App.css';
import Signin from './Components/Signin';
import Content from './Components/Content';
import { useSelector } from 'react-redux';


function App() {
  const isLogged = useSelector((store)=> store.logInLogOut.isLogged);
  return (
    <>
      {!isLogged && <Signin/>}
      {isLogged && <Content/>}
    </>
  );
}

export default App;
