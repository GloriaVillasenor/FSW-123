const TodoList = (props) => {
    return(
        <ul>
            {props.todos.map((item, index) => 
                  <li key={index}>
                      <input type='checkbox'/>
                    <span>{item.text}</span>
                  </li>                    
                  )
            }
        </ul>
    )
}

export default TodoList