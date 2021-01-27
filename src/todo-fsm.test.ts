import { IStatus } from "./types";
import { todoListMachine } from "./todo-fsm";

jest.mock("uuid", () => ({
  v4: () => "fake id",
}));

describe("test todo list machine", () => {
  const { initialState } = todoListMachine;

  it("should append", () => {
    const { context } = todoListMachine.transition(initialState, {
      type: "APPEND_TODO",
      content: "hello world",
    });

    expect(context).toStrictEqual({
      filter: "all",
      list: [
        {
          content: "hello world",
          id: "fake id",
          isCompleted: false,
        },
      ],
    });
  });

  it("should toggle", () => {
    const baseState = todoListMachine.transition(initialState, {
      type: "APPEND_TODO",
      content: "hello world",
    });

    const { context } = todoListMachine.transition(baseState, {
      type: "TOGGLE_TODO",
      id: "fake id",
    });

    expect(context).toStrictEqual({
      filter: "all",
      list: [
        {
          content: "hello world",
          id: "fake id",
          isCompleted: true,
        },
      ],
    });
  });

  it("should remove todo", () => {
    const baseState = todoListMachine.transition(initialState, {
      type: "APPEND_TODO",
      content: "hello world",
    });

    const { context } = todoListMachine.transition(baseState, {
      type: "REMOVE_TODO",
      id: "fake id",
    });

    expect(context).toStrictEqual({
      filter: "all",
      list: [],
    });
  });

  it("should update todo", () => {
    const baseState = todoListMachine.transition(initialState, {
      type: "APPEND_TODO",
      content: "hello world",
    });

    const { context } = todoListMachine.transition(baseState, {
      type: "UPDATE_TODO",
      id: "fake id",
      content: "there is no spoon",
    });

    expect(context).toStrictEqual({
      filter: "all",
      list: [
        {
          id: "fake id",
          content: "there is no spoon",
          isCompleted: false,
        },
      ],
    });
  });

  it.each(["active", "all", "completed"] as Array<IStatus>)(
    "should set filter %s",
    (filter: IStatus) => {
      const { context } = todoListMachine.transition(initialState, {
        type: "SET_FILTER",
        filter,
      });

      expect(context.filter).toBe(filter);
    }
  );
});
