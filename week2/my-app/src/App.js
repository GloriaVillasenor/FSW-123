import TodoList from './TodoList'
import './App.css';
import { todoObj } from './Store'

function App() {
  return (
    <div className="App">
      <h1>List of Todos</h1>
      <TodoList todos={todoObj} />
    </div>
  );
}

export default App;
