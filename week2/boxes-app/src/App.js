import './App.css';
import Boxes from './Boxes'

function App() {
  return (
    <div>
      <Boxes title = "Title 1" subtitle = "Sub Title 1" description = "Hello World 1!" bgColor = "red" width = "200px" height = "150px" textAlign = "center" />
      <Boxes title = "Title 2" subtitle = "Sub Title 2" description = "Hello World 2!" bgColor = "orange" width = "200px" height = "150px" textAlign = "center" />
      <Boxes title = "Title 3" subtitle = "Sub Title 3" description = "Hello World 3!" bgColor = "yellow" width = "200px" height = "150px" textAlign = "center" />
      <Boxes title = "Title 4" subtitle = "Sub Title 4" description = "Hello World 4!" bgColor = "green" width = "200px" height = "150px" textAlign = "center" />

    </div>
  );
}

export default App;
