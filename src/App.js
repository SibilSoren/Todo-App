import React, { useState } from "react";
import "./App.css";
// import InputForm from "./components/InputForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodos = (e) => {
    // setTodos({ ...todos, input });
    console.log(`The input is ${input}`);
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={addTodos}>Add</button>
      </div>
      <h2>List of todos</h2>
      <div>
        {todos.map((todo) => (
          <h2 key={todo}>{todo}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
