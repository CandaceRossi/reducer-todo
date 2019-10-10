export const initialState = {
  todo: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1
    },
    {
      item: "Finish Today's Assignment",
      completed: false,
      id: 2
    },
    {
      item: "Do Stretch Goals",
      completed: false,
      id: 3
    }
  ]
};
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state.todo);
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "TOGGLE_COMPLETED":
      console.log(state.todo);
      return {
        ...state,

        todo: state.todo.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todo.filter(todo =>
          todo.id === action.payload
            ? {
                ...todo.completed
              }
            : todo
        )
      };

    default:
      return state;
  }
};
