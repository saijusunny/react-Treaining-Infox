
import './App.css';
import Classfunction from './Components/Classfunction';
import Function from './Components/Function';
import Mulstate from './Components/Mulstates';
import States from './Components/Satates';

function App() {
  const user="Username"
  return (
    <>
    <Classfunction/>
    <Function username={user}/>
    <States/>
    <Mulstate/>
    </>

  );
}

export default App;
