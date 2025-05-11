import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const onAdd = (newText) => {
    setTodos([...todos, { id: Date.now(), text: newText }]);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <>
      <h1>My Todos</h1>
      <TodoInput onAdd={onAdd} />
      <TodoList todos={todos || []} onRemove={onRemove} />
    </>
  );
}

export default App;
