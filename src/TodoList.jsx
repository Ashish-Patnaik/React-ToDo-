import React from "react";
import './TodoList.css';

function TodoList({todos, removeTodo}){
  return(
    <ul className="todo-list">
      {todos.map((todo , index)=>(
        <li key={index} className="todo-item">
        {todo.text}
        <button onClick={()=>removeTodo(index)}>Remove</button>
       </li>
      ))} 
    </ul>
  );
}

export default TodoList;