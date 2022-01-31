import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {


  const [value, setValue] = useState('some text');


  return (
    <div className="App">

        <h4>{value}</h4>
        <input value={value} 
          onChange={event => setValue(event.target.value)}
        ></input>

        <Counter/>
        <ClassCounter/>

 
        <PostItem post = {{id: 1, title: 'Javascript', body: 'Description'}}/>
        <PostItem post = {{id: 2, title: 'Test', body: 'Description tests'}}/>
        <PostItem post = {{id: 3, title: 'Hi', body: 'How are u?'}}/>
    </div>


  );
}

export default App;
