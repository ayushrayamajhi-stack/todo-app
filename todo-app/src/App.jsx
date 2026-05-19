import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  // ADD TODO
  const addTodo = () => {

    // prevent empty todo
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);

    // clear input
    setInput("");
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(
      (todo) => todo.id !== id
    );

    setTodos(filteredTodos);
  };

  // TOGGLE COMPLETE
  const toggleTodo = (id) => {

    const updatedTodos = todos.map((todo) => {

      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <hr />

      {
        todos.map((todo) => (

          <div
            key={todo.id}
            style={{
              marginBottom: "10px"
            }}
          >

            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
}

export default App;