export type ITodoItem = {
  id: string;
  content: string;
  isCompleted: boolean;
};

export type ITodoList = Array<ITodoItem>;
export type IActionLike = { type: string; payload?: any };

export type IStatus = "all" | "completed" | "active";

export type IActionsType = {
  append: "appendTodo";
  toggle: "toggleTodo";
  clear: "clearCompleted";
  update: "updateTodo";
  remove: "removeTodo";
};
