import { renderHook, act } from "@testing-library/react-hooks";
import { useTodo } from "./useTodo";

test("should append todo", () => {
  const { result } = renderHook(() => useTodo());

  act(() => {
    result.current.appendTodo("drink");
  });

  expect(result.current.todoList[0].content).toBe("drink");
});

test("should toggle todo", () => {
  const { result } = renderHook(() => useTodo());

  act(() => {
    result.current.appendTodo("switch");
  });

  expect(result.current.todoList[0].content).toBe("switch");
  expect(result.current.todoList[0].isCompleted).toBe(false);

  act(() => {
    result.current.toggleTodo(result.current.todoList[0].id);
  });

  expect(result.current.todoList[0].isCompleted).toBe(true);
});

test("should clear all completed", () => {
  const { result } = renderHook(() =>
    useTodo([
      {
        id: "fake-uuid-1",
        content: "eat",
        isCompleted: true,
      },
      {
        id: "fake-uuid-2",
        content: "pray",
        isCompleted: true,
      },
      {
        id: "fake-uuid-3",
        content: "love",
        isCompleted: true,
      },
    ])
  );

  act(() => {
    result.current.clearCompleted();
  });

  expect(result.current.todoList.length).toBe(0);
});

test("should get correct todolist by filter", () => {
  const { result } = renderHook(() =>
    useTodo([
      {
        id: "fake-uuid-1",
        content: "eat",
        isCompleted: false,
      },
      {
        id: "fake-uuid-2",
        content: "pray",
        isCompleted: false,
      },
      {
        id: "fake-uuid-3",
        content: "love",
        isCompleted: true,
      },
    ])
  );

  expect(result.current.getTodoListByFilter("all")).toMatchInlineSnapshot(`
    Array [
      Object {
        "content": "eat",
        "id": "fake-uuid-1",
        "isCompleted": false,
      },
      Object {
        "content": "pray",
        "id": "fake-uuid-2",
        "isCompleted": false,
      },
      Object {
        "content": "love",
        "id": "fake-uuid-3",
        "isCompleted": true,
      },
    ]
  `);

  expect(result.current.getTodoListByFilter("active")).toMatchInlineSnapshot(`
    Array [
      Object {
        "content": "eat",
        "id": "fake-uuid-1",
        "isCompleted": false,
      },
      Object {
        "content": "pray",
        "id": "fake-uuid-2",
        "isCompleted": false,
      },
    ]
  `);
  expect(result.current.getTodoListByFilter("completed"))
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "content": "love",
        "id": "fake-uuid-3",
        "isCompleted": true,
      },
    ]
  `);
});

test("should update todo", () => {
  const { result } = renderHook(() =>
    useTodo([
      {
        id: "fake-uuid-1",
        content: "eat",
        isCompleted: false,
      },
      {
        id: "fake-uuid-2",
        content: "pray",
        isCompleted: false,
      },
      {
        id: "fake-uuid-3",
        content: "love",
        isCompleted: false,
      },
    ])
  );

  act(() => {
    result.current.updateTodo({
      id: "fake-uuid-1",
      content: "chi",
      isCompleted: false,
    });
  });

  expect(result.current.todoList).toMatchInlineSnapshot(`
    Array [
      Object {
        "content": "chi",
        "id": "fake-uuid-1",
        "isCompleted": false,
      },
      Object {
        "content": "pray",
        "id": "fake-uuid-2",
        "isCompleted": false,
      },
      Object {
        "content": "love",
        "id": "fake-uuid-3",
        "isCompleted": false,
      },
    ]
  `);
});
