import React, {PureComponent} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoList from "./components/TodoList"
import './css/Todo.css'

class App extends PureComponent {
    state = {
      todoList: [
        {
          id: 1,
          text: 'todo 1',
          isCompleted: true
        },
        {
          id: 2,
          text: 'todo 2',
          isCompleted: false
        },
        {
          id: 3,
          text: 'todo 3',
          isCompleted: false
        }
      ],
      todoEditingId: ''
  }

  addTodo= (todo={}) => {
    this.setState(preState => ({
      todoList: [...preState.todoList, todo]
    }))
  }

  getTodoEditingId = (id='') => {
    this.setState({
      todoEditingId: id
    })
  }

  onEditTodo = (todo = {}, index = -1) => {
    if(index >= 0) {
      const {todoList: list} = this.state
      list.splice(index, 1, todo)
      this.setState({
        todoList: list,
        todoEditingId: ''
      })
    }
  }

  markCompleted = (id = '') => {
    this.setState(preState => ({
      todoList: preState.todoList.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}): todo)
    }))
  }

  render() {
    const {todoList, todoEditingId} = this.state
    return (
      <div className="todoapp">
        <Header addTodo = {this.addTodo} />
        <TodoList 
          todoList={todoList}
          todoEditingId = {todoEditingId}
          getTodoEditingId = {this.getTodoEditingId}
          onEditTodo = {this.onEditTodo}
          markCompleted = {this.markCompleted}
         />
        <Footer />
      </div>
    )
  }
}

export default App
