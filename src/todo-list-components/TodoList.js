import React, {useState} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList, remove, addCompleted, tab}) => {
    switch (tab) {
        case 'Completed' : 
            return(
                todoList.filter(({completed}) => completed).map((todo) => <TodoItem 
                    key={todo.id} 
                    todoItem={todo} 
                    removeTodo={remove} 
                    addCompleted={addCompleted} 
                />)
            ) 

        case 'All' : 
            return (
                todoList.map((todo) => <TodoItem 
                    key={todo.id} 
                    todoItem={todo} 
                    removeTodo={remove} 
                    addCompleted={addCompleted} 
                />)
            )

        case 'Active' : 
            return (
                todoList.filter(({completed}) => !completed).map((todo) => <TodoItem 
                    key={todo.id} 
                    todoItem={todo} 
                    removeTodo={remove} 
                    addCompleted={addCompleted} 
                /> )
            )

        default: 
            return
    }
      
    
}

export default TodoList; 