import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import type {
  ITodoItem,
  ITodoList,
  IActionLike,
  IStatus,
  IActionsType,
} from "./types";

const actionsType: IActionsType = {
  append: "appendTodo",
  toggle: "toggleTodo",
  clear: "clearCompleted",
  update: "updateTodo",
  remove: "removeTodo",
};

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
              content: action.payload.content,
              isCompleted: action.payload.isCompleted,
            }
          : todo
      );
    }
    case actionsType.remove: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      throw new Error("invalid todo action type");
  }
}

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

  function appendTodo(content: string) {
    dispatch({
      type: actionsType.append,
      payload: {
        id: uuid(),
        content,
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

  function getTodoById(id: string) {
    return state.find((todo) => todo.id === id);
  }

  function getActiveTodoCount() {
    return getTodoListByFilter("active").length;
  }

  function removeTodo(id: string) {
    dispatch({ type: actionsType.remove, payload: id });
  }

  return {
    todoList: state,
    getTodoById,
    appendTodo,
    toggleTodo,
    clearCompleted,
    getTodoListByFilter,
    updateTodo,
    getActiveTodoCount,
    removeTodo,
    filters: ["all", "active", "completed"] as Array<IStatus>,
  };
}
