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

export type IUpdateEvent = {
  type: "UPDATE_TODO";
  id: string;
  content: string;
};

export type IAppendEvent = {
  type: "APPEND_TODO";
  content: string;
};

export type IRemoveEvent = {
  type: "REMOVE_TODO";
  id: string;
};

export type IToggleEvent = {
  type: "TOGGLE_TODO";
  id: string;
};

export type IClearEvent = {
  type: "CLEAR_COMPLETED";
};

export type ISetFilterEvent = {
  type: "SET_FILTER";
  filter: IStatus;
};

export type ILoadEvent = {
  type: "LOAD";
  context: any;
};

export type ILaunchEvent = {
  type: "LAUNCH";
};

export type IMachineEvent =
  | IUpdateEvent
  | IAppendEvent
  | IRemoveEvent
  | IToggleEvent
  | IClearEvent
  | ISetFilterEvent
  | ILoadEvent
  | ILaunchEvent;
