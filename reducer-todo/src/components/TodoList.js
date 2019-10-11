import React from "react";
// import { todoReducer, initialState } from "../reducers/todoReducer";

const TodoList = props => {
  console.log(props.todos);
  // const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      {props.todos.map(item => (
        <h2
          key={item.id}
          onClick={() => props.toggleCompleted(item.id)}
          style={{
            textDecoration: `${item.completed ? "line-through" : "none"}`
          }}
        >
          {item.item}
        </h2>
      ))}
    </div>
  );
};

export default TodoList;
