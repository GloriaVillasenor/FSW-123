import { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './App.css';
import { todoObj } from './Store'
import { v4 as uuidv4 } from "uuid"

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

  const addTodo = text => {
     const newTodos = [
       ...todos,
       {
        id: uuidv4(),
        text: text,
        isCompleted: false 
       }
     ]
     setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos} 
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
         />
    </div>
  );
}

export default App;
