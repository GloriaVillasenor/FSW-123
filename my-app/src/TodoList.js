const items = [
    'do laundry',
    'attend class',
    'make a shopping list',
    'go to dinner',
]

//const mappedItems = items.map(item => <div> <input type='checkbox'/> 
//<span> {item} </span></div>)

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