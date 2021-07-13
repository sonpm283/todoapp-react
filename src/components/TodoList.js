import React, {memo} from "react";
import Todo from "./Todo";

const TodoList = memo(props => {
    const {todoList, isCheckedAll,checkAllTodos} = props
    return(
        <section className="main">
            <input 
                className="toggle-all" 
                type="checkbox"
                checked={isCheckedAll}
                />
            <label htmlFor="toggle-all" onClick={checkAllTodos}></label>
            <ul className="todo-list">
                {
                    todoList.map((todo, index) => <Todo key={index} {...{todo}} {...props} index={index}/>)
                }
            </ul>
        </section>
    )
})

export default TodoList;