import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoView from './components/TodoListView';

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': description})
      .then(res => console.log(res))
};



  return (
    <div className="App list-group-item 
    justify-content-center align-items-center
    mx-auto" style={{"width":"600px",
    "background-color":"white", "margin-top":"15px"}}>
      <h1 className="card text-white bg-dark mb-1"
      styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className="card text-white bg-secondary mb-3"> Created by Mauro Cortes</h6>
      <div className="card-body">

      <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>

        <span className="card-text">

          <input className="mb-2 form-control titleIn" 
          onChange={event => setTitle(event.target.value)} 
          placeholder='Title'/>

          <input className="mb-2 form-control desIn" 
          onChange={event => setDescription(event.target.value)} 
          placeholder='Description'/>

          <button className="btn btn-outline-dark mx-2 mb-3" style={
            {'borderRadius':'50px', "font-weight":"bold"}}
            onClick={addTodoHandler}>Add Task</button>

        </span>
      
      <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
      <div>
        <TodoView todoList={todoList}/>
      </div>
      </div>
      <h6 className="text-dark bg-light py-1 mb-0"> Copyright 2022,
      All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
