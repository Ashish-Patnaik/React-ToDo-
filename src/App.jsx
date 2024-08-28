import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './index.css';

function App(){
  const[todos ,setTodos] = useState([]);
  //add funct
  const addTodo=(text)=>{
    const newTodos=[...todos, {text}];
    setTodos(newTodos);
  };
   //remove funct
  const removeTodo=(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return(
    <div className='app'>
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos} removeTodo={removeTodo}></TodoList>

    </div>
  ) ;
}
export default App;