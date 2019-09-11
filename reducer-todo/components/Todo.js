import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

const Todo = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setState(todo: e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.item}{" "}
          <button
            className="far fa-edit"
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTodoText"
            value={newTodoText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TASK", payload: newTodoText });
              setNewTodoText("");
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
