# React

# Props

- It is a mechanism React sends data from the parent to a component. It is short for properties.

# State

- It holds data that a component owns and can change over time.
- Unlike props (which a component receives from its parent and must not modify), state is private and mutable within the component.

**React Exercise: Build a Simple Todo App**

```js
Requirements
1.	App component (App.jsx)
o	Holds the todos array in state.
o	Renders:
	A header (e.g. <h1>My Todos</h1>).
	A <TodoInput /> child to add new todos.
	A <TodoList /> child to display current todos.
2.	TodoInput component (TodoInput.jsx)
o	Uses its own useState to track the current input text.
o	Renders:
	A text <input> bound to its state.
	An “Add” <button>.
o	On click “Add”:
	Calls a prop callback (e.g. onAdd(text)) passed from App.
	Clears its internal input state.
3.	TodoList component (TodoList.jsx)
o	Receives the todos array and an onRemove(id) callback via props.
o	If todos.length === 0, renders a message: “No todos yet!”
(conditional rendering)
o	Otherwise, maps over todos and renders a <TodoItem /> for each.
4.	TodoItem component (TodoItem.jsx)
o	Receives a single todo object { id, text } and the onRemove callback via props.
o	Renders:
	The todo’s text.
	A “Remove” button that calls onRemove(id) when clicked.
5.	State & Data Flow
o	All state lives in App (lifting state up).
o	App passes todos and handlers down via props.
o	Children call those handlers to update the shared state.

```
