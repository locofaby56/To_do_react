import React from 'react'
import { Button } from 'react-bootstrap';

 function TodoItem({todo, onComplete, onDeleteItem}) {

  const getStyle=()=>{
    return{
      textDecoration: todo.completed ? 'line-through': 'none',
      padding: '5px',
      margin:'10px',
      border:'1px solid #ffffff',
      borderRadius:'5px',
      backgroundColor: '#CCF7E3'
    }
  }
  return (
    <div style={getStyle()}>
    <input type='checkbox' checked = {todo.completed} onChange={()=> onComplete(todo.id)} ></input>
    {todo.task}
    <button className = 'add-btn' onClick={()=> onDeleteItem(todo.id)} > X </button>
    </div>
  )
}
export default TodoItem;