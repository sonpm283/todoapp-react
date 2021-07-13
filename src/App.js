import React, {PureComponent} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoList from "./components/TodoList"
import './css/Todo.css'

const isNotCheckedAll = (todos = []) => todos.find(todo => !todo.isCompleted)
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
        isCompleted: true
      },
      {
        id: 3,
        text: 'todo 3',
        isCompleted: false
      }
    ],
    todoEditingId: '',
    isCheckedAll: false
  }

  UNSAFE_componentWillMount () {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todoList)
    })
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

  checkAllTodos = () => {
    const {todoList, isCheckedAll} = this.state
    this.setState(preState => ({
      todoList: todoList.map(todo => ({...todo, isCompleted: ! isCheckedAll})),
      isCheckedAll: !preState.isCheckedAll
    }))
  }

  markCompleted = (id = '') => {
    const { todoList } = this.state
    const updateList = todoList.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}): todo)
    this.setState(({
      todoList: updateList,
      isCheckedAll: !isNotCheckedAll(updateList)
    }))
  }

  render() {
    const {todoList, todoEditingId, isCheckedAll} = this.state
    return (
      <div className="todoapp">
        <Header addTodo = {this.addTodo} />
        <TodoList 
          todoList={todoList}
          todoEditingId = {todoEditingId}
          getTodoEditingId = {this.getTodoEditingId}
          onEditTodo = {this.onEditTodo}
          markCompleted = {this.markCompleted}
          isCheckedAll = {isCheckedAll}
          checkAllTodos = {this.checkAllTodos}
         />
        <Footer />
      </div>
    )
  }
}

export default App
