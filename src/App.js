import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [msg,setMsg] = useState('even');
  const [value,setValue] = useState("please enter here");
  useEffect(()=>{
    if(value===""){
      setValue("please enter here")
    }
  },[value])

  const onInputHandler = (event)=>{
    let val = event.target.value;
    setValue(val)
    
  }

useEffect(()=>{
  if(counter%2===0){
    setMsg("even")
}else{
    setMsg("odd")
}
},[counter])
    
    
  return (
    <div className="App">
     
     <p>{msg} </p>
     <p>{counter}</p>
                  <button disabled={counter === 0} onClick={()=> setCounter(counter-1)}>dec</button>
                  <button onClick={()=> setCounter(counter+1)}>inc</button>

                  <div>
                    <input onChange={onInputHandler} type="text" name="" id="" placeholder='type here' />
                    <p>{value}</p>
                  </div>
    </div>
  );
}

export default App;
