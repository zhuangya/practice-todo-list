import { interpret, assign, createMachine } from "@xstate/fsm";
import { v4 as uuid } from "uuid";
import {
  IStatus,
  IAppendEvent,
  ITodoList,
  ITodoItem,
  IUpdateEvent,
  IMachineEvent,
  IToggleEvent,
} from "./types";

function buildTodoItem(content: string): ITodoItem {
  return {
    id: uuid(),
    content,
    isCompleted: false,
  };
}

type ITodoListContext = {
  list: ITodoList;
  filter: IStatus;
};

type ITodoState = {
  value: "loaded";
  context: {
    list: ITodoList;
    filter: IStatus;
  };
};

export const todoListMachine = createMachine<
  ITodoListContext,
  IMachineEvent,
  ITodoState
>({
  id: "todo-list",
  initial: "loaded",
  context: {
    list: [] as ITodoList,
    filter: "all",
  },
  states: {
    loaded: {
      on: {
        APPEND_TODO: {
          actions: [
            assign({
              list: (ctx, action: IAppendEvent) =>
                ctx.list.concat(buildTodoItem(action.content)),
            }),
          ],
        },
        TOGGLE_TODO: {
          actions: [
            assign({
              list: (
                ctx,
                action: IToggleEvent // TODO: refactor this as look up table.
              ) =>
                ctx.list.map((todoItem) =>
                  todoItem.id === action.id
                    ? {
                        ...todoItem,
                        isCompleted: !todoItem.isCompleted,
                      }
                    : todoItem
                ),
            }),
          ],
        },
        UPDATE_TODO: {
          actions: [
            assign({
              list: (ctx, action: IUpdateEvent) =>
                ctx.list.map((todoItem) =>
                  todoItem.id === action.id
                    ? {
                        ...todoItem,
                        content: action.content,
                      }
                    : todoItem
                ),
            }),
          ],
        },
        REMOVE_TODO: {
          actions: [
            assign({
              list: (ctx, action) =>
                ctx.list.filter(({ id }) => action.id !== id),
            }),
          ],
        },
        CLEAR_COMPLETED: {
          actions: [
            assign({
              list: (ctx) => ctx.list.filter(({ isCompleted }) => !isCompleted),
            }),
          ],
        },
        SET_FILTER: {
          actions: [
            assign({
              filter: (_, action) => action.filter,
            }),
          ],
        },
      },
    },
  },
});

export const service = interpret(todoListMachine);
