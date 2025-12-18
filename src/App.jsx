import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputVal != " ") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputValue(" ");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }
  console.log(todos);
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
