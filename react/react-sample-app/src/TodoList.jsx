import React from "react";

export default function TodoList({ todos, onRemove }) {
  return (
    <>
      <p>This is to do List:</p>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => onRemove(todo.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No to do list, yet</p>
        )}
      </ul>
    </>
  );
}
