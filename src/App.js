
import './App.css';
import Classfunction from './Components/Classfunction';
import Function from './Components/Function';
import Mulstate from './Components/Mulstates';
import States from './Components/Satates';
import SingleForm from './Components/SingleForm';
import MulinpForm from './Components/MulinpForm';

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
    </>

  );
}

export default App;
