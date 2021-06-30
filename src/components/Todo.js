import React, {memo} from "react";

const Todo = memo(props => {
    return(
        <li>
            <div className="view">
                <input className="toggle" /> 
                <label>Learn React</label>
                <button className="destroy"></button>
            </div>
        </li>
    )
})

export default Todo;