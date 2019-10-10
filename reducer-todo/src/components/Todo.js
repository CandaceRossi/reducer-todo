import React, { useReducer } from "react";
// import "./App.css";
import { todoReducer, initialState } from "../reducers/todoReducer";

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <li
//           className={this.props.todoitem.completed ? "completed" : null}
//           onClick={() => this.props.toggleCompleted(this.props.todoitem.id)}
//         >
//           {this.props.todoitem.task}
//         </li>
//       </div>
//     );
//   }
// }

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      <h3 className={state.todo.completed ? state.todo.completed : "null"}>
        {state.todo.task}
      </h3>
      <button onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}>
        Completed
      </button>
    </div>
  );
};
export default Todo;
//toggleCompleted(todo.id);

// const Todo = props => {
//return (
// <p>{props.val.item}</p>
// )
//}
//export default Todo;
