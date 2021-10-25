import Todo from './Todo'

function TodoList(props) {

    const todos = props.todos.map((todo) => {
        return <Todo 
            key={todo.id} 
            todo={todo}
            completeTodo={props.completeTodo}
            deleteTodo={props.deleteTodo} />
    })

    return (
        <div>
            <ul>
                {todos}
            </ul>
        </div>
    )

}

export default TodoList