import React, {useState} from 'react'


const TodoItem = ({todoItem, removeTodo, addCompleted}) => {
    const [completed, setCompleted] = useState(todoItem.completed)

    const makeCompleted = (event) =>{
        todoItem.completed = !completed
           setCompleted(!completed)
        addCompleted()
    }

    const removeItem = (event) => {
        removeTodo(todoItem.id)
    }
    
    const{id, title} = todoItem;
    return ( 
        <li className={completed ? "completed" : " "}>
            <div className="view">
                <input onChange={makeCompleted} type="checkbox" checked={completed} className="toggle" id={`todo-${id}`} />
                <label htmlFor={`todo-${id}`}>{title}</label>
                <button onClick={removeItem} type="button" className="destroy" />
            </div>
            <input type="text" className="edit" />
        </li>
    )
};

export default TodoItem;