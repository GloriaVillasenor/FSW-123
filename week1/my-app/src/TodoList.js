const items = [
    'do laundry',
    'attend class',
    'make a shopping list',
    'go to dinner',
]

const TodoList = () => {
    return(
        <div>
            {items.map((item, index) => 
                  <div key={index}><input type='checkbox'/>
                    {item}
                  </div>                    )
            }
  
        </div>
    )
}

export default TodoList