import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {


  const [value, setValue] = useState('some text');


  return (
    <div className="App">

        <h1>{value}</h1>
        <input value={value} 
          onChange={event => setValue(event.target.value)}
        ></input>

        <Counter/>

        <Counter/>

        <Counter/>

        <ClassCounter/>

    </div>
  );
}

export default App;
