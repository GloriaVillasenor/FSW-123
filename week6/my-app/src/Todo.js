function Todo(props) {

    //console.log('Completed: ', props.todo.isCompleted)

    return (
        <li key={props.todo.id}>
            <input 
                type='checkbox' 
                checked={props.todo.isCompleted} 
                onChange={() => props.completeTodo(props.todo.id)}
                />
            <span style={{textDecoration: props.todo.isCompleted ? "line-through" : ""}}>{props.todo.text}</span>
            <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
        </li> 
    )
}

export default Todo