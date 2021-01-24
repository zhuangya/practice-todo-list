import { renderHook, act } from "@testing-library/react-hooks";
import { useTodo } from "./useTodo";

test("should append todo", () => {
  const { result } = renderHook(() => useTodo());

  act(() => {
    result.current.appendTodo("drink");
  });

  expect(result.current.todoList[0].todo).toBe("drink");
});

test("should toggle todo", () => {
  const { result } = renderHook(() => useTodo());

  act(() => {
    result.current.appendTodo("switch");
  });

  expect(result.current.todoList[0].todo).toBe("switch");
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
        todo: "eat",
        isCompleted: true,
      },
      {
        id: "fake-uuid-2",
        todo: "pray",
        isCompleted: true,
      },
      {
        id: "fake-uuid-3",
        todo: "love",
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
        todo: "eat",
        isCompleted: false,
      },
      {
        id: "fake-uuid-2",
        todo: "pray",
        isCompleted: false,
      },
      {
        id: "fake-uuid-3",
        todo: "love",
        isCompleted: true,
      },
    ])
  );

  expect(result.current.getTodoListByFilter("all")).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": "fake-uuid-1",
        "isCompleted": false,
        "todo": "eat",
      },
      Object {
        "id": "fake-uuid-2",
        "isCompleted": false,
        "todo": "pray",
      },
      Object {
        "id": "fake-uuid-3",
        "isCompleted": true,
        "todo": "love",
      },
    ]
  `);

  expect(result.current.getTodoListByFilter("active")).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": "fake-uuid-1",
        "isCompleted": false,
        "todo": "eat",
      },
      Object {
        "id": "fake-uuid-2",
        "isCompleted": false,
        "todo": "pray",
      },
    ]
  `);
  expect(result.current.getTodoListByFilter("completed"))
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "id": "fake-uuid-3",
        "isCompleted": true,
        "todo": "love",
      },
    ]
  `);
});

test("should update todo", () => {
  const { result } = renderHook(() =>
    useTodo([
      {
        id: "fake-uuid-1",
        todo: "eat",
        isCompleted: false,
      },
      {
        id: "fake-uuid-2",
        todo: "pray",
        isCompleted: false,
      },
      {
        id: "fake-uuid-3",
        todo: "love",
        isCompleted: false,
      },
    ])
  );

  act(() => {
    result.current.updateTodo({
      id: "fake-uuid-1",
      todo: "chi",
      isCompleted: false,
    });
  });

  expect(result.current.todoList).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": "fake-uuid-1",
        "isCompleted": false,
        "todo": "chi",
      },
      Object {
        "id": "fake-uuid-2",
        "isCompleted": false,
        "todo": "pray",
      },
      Object {
        "id": "fake-uuid-3",
        "isCompleted": false,
        "todo": "love",
      },
    ]
  `);
});
