import { useState } from 'react'
import TodoList from './TodoList'
import './App.css';
import { todoObj } from './Store'

function App() {

  const[todos, setTodos] = useState(todoObj)

  const completeTodo = id => {
    const tmpTodos = [...todos]
    const index = tmpTodos.findIndex(todo => todo.id === id)

    tmpTodos[index].isCompleted = !tmpTodos[index].isCompleted
    setTodos(tmpTodos)
  }
  
  const deleteTodo = id => {
    const tmpTodos = [...todos]
    const newTodos = tmpTodos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>List of Todos</h1>
      <TodoList 
        todos={todos} 
        completeTodo={completeTodo}
        deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
