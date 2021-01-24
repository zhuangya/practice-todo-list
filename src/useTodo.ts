import { useReducer } from "react";
import { v4 as uuid } from "uuid";

export const actionsType = {
  append: "appendTodo",
  toggle: "toggleTodo",
  clear: "clearCompleted",
  update: "updateTodo",
};

type ITodoItem = {
  id: string;
  todo: string;
  isCompleted: boolean;
};

type ITodoList = Array<ITodoItem>;
type IActionLike = { type: string; payload?: any };

function todoReducer(state: ITodoList, action: IActionLike) {
  switch (action.type) {
    case actionsType.append: {
      return [...state, action.payload];
    }
    case actionsType.toggle: {
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      );
    }
    case actionsType.clear: {
      return state.filter((todo) => !todo.isCompleted);
    }
    case actionsType.update: {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              todo: action.payload.todo,
              isCompleted: action.payload.isCompleted,
            }
          : todo
      );
    }
    default:
      throw new Error("invalid todo action type");
  }
}

type IStatus = "all" | "completed" | "active";

const identifyByFilter = (status: IStatus) => (todo: ITodoItem) => {
  if (status === "all") {
    return true;
  } else if (status === "completed") {
    return todo.isCompleted;
  } else if (status === "active") {
    return !todo.isCompleted;
  } else {
    throw new Error("invalid todo filter");
  }
};

export function useTodo(initialState = [] as ITodoList, reducer = todoReducer) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function appendTodo(todo: string) {
    dispatch({
      type: actionsType.append,
      payload: {
        id: uuid(),
        todo,
        isCompleted: false,
      },
    });
  }

  function updateTodo(todo: ITodoItem) {
    dispatch({
      type: actionsType.update,
      payload: todo,
    });
  }

  function toggleTodo(id: string) {
    dispatch({ type: actionsType.toggle, payload: id });
  }

  function clearCompleted() {
    dispatch({ type: actionsType.clear });
  }

  function getTodoListByFilter(status: IStatus = "all") {
    return state.filter(identifyByFilter(status));
  }

  return {
    todoList: state,
    appendTodo,
    toggleTodo,
    clearCompleted,
    getTodoListByFilter,
    updateTodo,
  };
}
