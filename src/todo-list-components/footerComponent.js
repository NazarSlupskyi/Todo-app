import React from 'react'

const footerComponent = ({todoList, completed, clearCompleted, selectTab}) => {
    const tabSelect = (event) =>{
      const targetValue = event.target.textContent
      
      selectTab(targetValue)
    }

    return (
        <footer className="footer">
        <span className="todo-count">
            {todoList.length} items left
        </span>

        <ul className="filters">
            <li>
                <a onClick={tabSelect} href="#/" className="selected">All</a>
            </li>

            <li>
                <a onClick={tabSelect} href="#/active">Active</a>
            </li>

            <li>
                <a onClick={tabSelect} href="#/completed">Completed</a>
            </li>
        </ul>
            {completed.length !== 0  && <button onClick={clearCompleted} type="button" className="clear-completed"> Clear completed </button>}
        </footer>
    )
    
}

export default footerComponent;