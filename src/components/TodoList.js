import React, {memo} from "react";
import Todo from "./Todo";

const TodoList = memo(props => {
    const {todoList} = props
    return(
        <section className="main">
            <input className="toggle-all"/>
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {
                    todoList.map(todo => <Todo key={`todo${todo.id}`} {...{todo}} />)
                }
            </ul>
        </section>
    )
})

export default TodoList;