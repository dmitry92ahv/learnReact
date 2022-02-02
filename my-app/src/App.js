import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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

  const [title, setTitle] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
    alert(title)
  }

  

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title} 
          onChange = {e => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton onClick = {addNewPost} >Создать пост</MyButton>
      </form>
      <PostList posts={posts} title ="Список постов 1"/>
    </div>
  );
}

export default App;
