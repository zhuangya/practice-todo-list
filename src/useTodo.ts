import { useEffect, useState } from "react";
import { service } from "./todo-fsm";
import { get, set } from "idb-keyval";

import type { ITodoItem, ITodoList, IStatus } from "./types";

const PERSIST_KEY = "_persiste:todo-list-app";

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

export function useTodo() {
  useEffect(() => {
    service.subscribe((state) => {
      if (state.changed) {
        setTodoList(
          state.context.list.filter(identifyByFilter(state.context.filter))
        );

        window.indexedDB && set(PERSIST_KEY, state.context);
      }
    });

    service.start();

    const launch = () => service.send("LAUNCH");

    async function launchWithPersistedValue() {
      try {
        const persistedValue = await get(PERSIST_KEY);

        if (persistedValue) {
          service.send({
            type: "LAUNCH",
          });
          service.send({
            type: "LOAD",
            context: persistedValue,
          });
        } else {
          launch();
        }
      } catch (e) {
        launch();
      }
    }

    if (window.indexedDB) {
      launchWithPersistedValue();
    } else {
      launch();
    }

    return () => {
      service.stop();
    };
  }, []);

  const [todoList, setTodoList] = useState<ITodoList>([] as ITodoList);

  const dispatch = service.send;

  function appendTodo(content: string) {
    dispatch({
      type: "APPEND_TODO",
      content,
    });
  }

  function updateTodo(todo: ITodoItem) {
    dispatch({
      type: "UPDATE_TODO",
      id: todo.id,
      content: todo.content,
    });
  }

  function toggleTodo(id: string) {
    dispatch({ type: "TOGGLE_TODO", id });
  }

  function clearCompleted() {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  function getTodoListByFilter(status: IStatus = "all") {
    return service.state.context.list.filter(identifyByFilter(status));
  }

  function getTodoById(id: string) {
    return service.state.context.list.find((todo) => todo.id === id);
  }

  function getActiveTodoCount() {
    return getTodoListByFilter("active").length;
  }

  function removeTodo(id: string) {
    dispatch({ type: "REMOVE_TODO", id });
  }

  function setFilter(filter: IStatus) {
    dispatch({ type: "SET_FILTER", filter });
  }

  return {
    todoList,
    getTodoById,
    appendTodo,
    toggleTodo,
    clearCompleted,
    getTodoListByFilter,
    updateTodo,
    getActiveTodoCount,
    removeTodo,
    setFilter,
    filters: ["all", "active", "completed"] as Array<IStatus>,
  };
}
