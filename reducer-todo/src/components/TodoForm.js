import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChanges = event => {
    setInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" value={input} onChange={handleChanges} />
      <button>Add Todo!</button>
    </form>
  );
}
export default TodoForm;
