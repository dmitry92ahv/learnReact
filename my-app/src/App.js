import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
    {id: 4, title: 'Javascript', body: 'Description'},
    {id: 5, title: 'Javascript', body: 'Description'},
    {id: 6, title: 'Javascript', body: 'Description'},
    {id: 7, title: 'Javascript', body: 'Description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'C#', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
  ])
  

  return (
    <div className="App">
        <PostList posts={posts} title ="Список постов 1"/>
        <PostList posts={posts2} title ="Список постов 2"/>
    </div>
  );
}

export default App;
