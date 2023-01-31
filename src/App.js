
import './App.css';
import Classfunction from './Components/Classfunction';
import Function from './Components/Function';
import Mulstate from './Components/Mulstates';
import States from './Components/Satates';
import SingleForm from './Components/SingleForm';
import MulinpForm from './Components/MulinpForm';
import StoreformArray from './Components/StoreformArray';
import Counter from './Components/Counter';
import Callback from './Components/Callback';

function App() {
  const user="Username"
  return (
    <>
    <Classfunction/>
    <Function username={user}/>
    <States/>
    <Mulstate/>
    <SingleForm/>
    <MulinpForm/>
    <StoreformArray/>
    <Counter/>
    <Callback/>
    </>
  );
}

export default App;
