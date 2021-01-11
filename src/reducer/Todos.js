import {TODO_ADD, TODO_TOGGLE} from '../Constants';

const initialState = {
  todos: [],
};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: state.todos.concat({
          id: action.id,
          content: action.content,
          complete: action.complete,
        }),
      };
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                complete: !todo.complete,
              }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default Todos;
