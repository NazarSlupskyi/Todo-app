import React, {useEffect} from 'react'


const AddTodos = ({addTodo}) =>{
  useEffect(() => {
    document.addEventListener("keydown", ({target, code}) =>{
      const todoInput = document.querySelector(".new-todo")

      if (target.value === '') return;
        
      if (code === 'Enter') {
          addTodo({title: todoInput.value, completed: false})
          todoInput.value = ''
      }
      
    })
  }, []) 
  
  return (
    <input 
      className="new-todo"
      placeholder="What needs to be done?"
    />
  )
}

export default AddTodos;