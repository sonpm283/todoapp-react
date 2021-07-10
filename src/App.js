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
      ]
  }

  addTodo= (todo={}) => {
    this.setState(preState => ({
      todoList: [...preState.todoList, todo]
    }))
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="todoapp">
        <Header addTodo = {this.addTodo} />
        <TodoList todoList={todoList} />
        <Footer />
      </div>
    )
  }
}

export default App
