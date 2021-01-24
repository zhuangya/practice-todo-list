import { Input } from "./Input";
import { useTodo } from "./useTodo";
import { Button, Divider, List, ListItem, Checkbox } from "@material-ui/core";
import { useState } from "react";
import type { IStatus } from "./types";

export function TodoMvc() {
  const [activeFilter, setFilter] = useState<IStatus>(() => "all");
  const {
    filters,
    toggleTodo,
    appendTodo,
    getTodoListByFilter,
    getActiveTodoCount,
    clearCompleted,
    removeTodo,
  } = useTodo();

  return (
    <>
      <Input onAppend={(content) => appendTodo(content)} />

      <Divider />

      <List>
        {getTodoListByFilter(activeFilter).map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.content}
            <Button onClick={() => removeTodo(todo.id)}> x </Button>
          </ListItem>
        ))}
      </List>

      {filters.map((filter) => (
        <Button key={filter} onClick={() => setFilter(filter)}>
          {filter}
        </Button>
      ))}

      <p> {getActiveTodoCount() + " active todo(s)."} </p>

      <Button onClick={() => clearCompleted()}>Clear</Button>
    </>
  );
}
