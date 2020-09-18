import React from 'react';
import TodoList from './todo-list-components/TodoList';
import AddTodos from './todo-list-components/AddTodos';
import FooterComponent from './todo-list-components/footerComponent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      id: 0,
      completed: [],
      tab: 'All'
    }
  }

  addTodo(todo) {
    this.setState({todoList: [...this.state.todoList, {...todo, id: this.state.id + 1}], id: this.state.id + 1})
    this.setState({activ: [...this.state.todoList.filter((todo) => todo.completed === false)]})
  }

  addCompleted() {
    this.setState({completed: [...this.state.todoList.filter((todo) => todo.completed === true)]})
  }

  remove(todoId) {
     const removedItem = this.state.todoList.find((todo) => todoId === todo.id)
     const indexOfTodo = this.state.todoList.findIndex((todo) => removedItem.id === todo.id) 
     
     this.state.todoList.splice(indexOfTodo, 1)
     this.setState({todoList: this.state.todoList})
  }

  clearCompleted = (event) => {
    this.setState({todoList: this.state.todoList.filter((todo) => todo.completed === false)})
    this.setState({completed: []}) 
  }

  selectTab(tab) {
    this.setState({tab: tab})
  } 
  

 render() { 
    let {todoList, completed, tab} = this.state
    
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodos addTodo={this.addTodo.bind(this)}/>
        </header>

        <section className="main">
          <input type="checkbox" id="toggle-all" className="toggle-all" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            <TodoList 
              tab={tab} 
              completed={completed} 
              addCompleted={this.addCompleted.bind(this)} 
              todoList={todoList} 
              remove={this.remove.bind(this)} 
            />
          </ul>
        </section>

        <FooterComponent 
          todoList={todoList} 
          completed={completed} 
          clearCompleted={this.clearCompleted.bind(this)} 
          selectTab={this.selectTab.bind(this)}/>
      </section>
    );
  }
}

export default App;
