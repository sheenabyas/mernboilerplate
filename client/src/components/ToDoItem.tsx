import React from "react";

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}
const Todo: React.FC<Props> = ({todo, updateTodo, deleteTodo}) => {
    const checkTodo: string = todo.status ? `line-through`: ""
    return(
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{todo.name}</h1>
                <p className={checkTodo}>{todo.description}</p>
            </div>
            <div className="Card--button">
                <button onClick={()=>updateTodo(todo)} className={todo.status ? `hide-button` : "Card--button_done"}>Complete</button>
                <button onClick={()=>deleteTodo(todo._id)} className="Card--button_delete">Delete</button>
            </div>
        </div>
    )
}
export default Todo