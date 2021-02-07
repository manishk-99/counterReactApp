import React, {useState} from 'react';
import './App.css';

const App = () => {

  const[count, setCount] = useState(0);

  return(
    <div>
      <header>
        <h1>Counter App Using State/hooks</h1>
        <h1>Current Value of Count is: <span style={{color: "white"}}>{count}</span></h1>
      </header>
       <div className="App">
         
         <button onClick={() => setCount(0)}>Reset Button</button>
         <button onClick={() => (count >= 100 ? "" : setCount(count + 1))}>Increase Button</button>
         <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>Decrease Button</button>
       </div>
    </div>
  )
}

export default App;