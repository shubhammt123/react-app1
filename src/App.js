import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0);

  let msg;
    if(counter%2==0){
        msg = "even"
    }else{
        msg = "odd"
    }
  return (
    <div className="App">
     
     <p>{msg} </p>
     <p>{counter}</p>
                  <button disabled={counter === 0} onClick={()=> setCounter(counter-1)}>dec</button>
                  <button onClick={()=> setCounter(counter+1)}>inc</button>
    </div>
  );
}

export default App;
