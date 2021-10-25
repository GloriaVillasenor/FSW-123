import Todo from './Todo'

function TodoList(props) {

    const todos = props.todos.map((todo) => {
        return <Todo 
            key={todo.id} 
            todo={todo}
            completeTodo={props.completeTodo}
            deleteTodo={props.deleteTodo}
            addTodo={props.addTodo} />
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