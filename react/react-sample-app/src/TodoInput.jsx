import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  return (
    <>
      <label htmlFor="name">Todos:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(input);
          setInput("");
        }}
      >
        Add
      </button>
    </>
  );
}
