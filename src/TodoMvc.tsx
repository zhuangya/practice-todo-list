import { FC, KeyboardEvent, useState } from "react";
import { Input } from "./Input";
import { useTodo } from "./useTodo";
import { Button, Divider, List, ListItem, Checkbox } from "@material-ui/core";
import { ITodoItem, IStatus } from "./types";

const UpdateBox: FC<{
  todo: ITodoItem;
  handleUpdate: (todo: ITodoItem) => void;
}> = ({ todo, handleUpdate }) => {
  const [isEditting, setIsEditting] = useState(() => false);
  const [newTodo, setNewTodo] = useState(() => todo.content);

  return (
    <>
      {isEditting ? (
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Escape") {
              setIsEditting(false);
            } else if (event.key === "Enter") {
              handleUpdate({
                ...todo,
                content: newTodo,
              });
              setIsEditting(false);
            }
          }}
        />
      ) : (
        <span
          onDoubleClick={() => {
            setIsEditting(true);
          }}
        >
          {todo.content}
        </span>
      )}
    </>
  );
};

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
    updateTodo,
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
            <UpdateBox todo={todo} handleUpdate={updateTodo} />
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
