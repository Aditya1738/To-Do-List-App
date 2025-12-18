import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todo todo={todo} delTodo={delTodo} index={index} />
      ))}
    </div>
  );
}

export default TodoContainer;
