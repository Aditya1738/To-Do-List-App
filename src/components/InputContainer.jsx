import React from "react";

function InputContainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="inner-container">
      <input type="text" value={inputVal} onChange={writeTodo} />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;
