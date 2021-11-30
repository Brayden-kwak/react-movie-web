import './App.css';
import {useState} from 'react';
import PracCoin from './PracCoin.js';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => { 
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write to-do"/>
        <button>Add ToDo</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <PracCoin/>
    </div>
  );
}

export default App;
