import React, {memo, useState} from 'react';

const Todo = memo(props => {
    const {todo, getTodoEditingId, todoEditingId} = props
    const isEditing = todoEditingId === todo.id
    const [text, setText] = useState(todo.text)
    return(
        <li className={`${isEditing ? 'editing' : ''} ${todo.isCompleted ? 'completed' : ''}` }>
            {!isEditing ? 
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.isCompleted} />
                    <label onDoubleClick={() => getTodoEditingId(todo.id)}>{todo.text}</label>
                    <button className="destroy"></button>
                </div> : 
                <input 
                    className="edit" 
                    type="text" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            }
        </li>
    )
})

export default Todo;