import React, { useReducer } from "react";
import { todoReducer, initialState } from "./reducers/todoReducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = id =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <div className="App">
      <TodoForm clearCompleted={clearCompleted} addTodo={addTodo} />
      <TodoList todos={state.todo} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
