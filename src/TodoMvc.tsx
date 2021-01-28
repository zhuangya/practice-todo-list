import { FC, KeyboardEvent, useState } from "react";
import { Input } from "./Input";
import { useTodo } from "./useTodo";
import {
  ListItem,
  Typography,
  Button,
  Box,
  List,
  Checkbox,
} from "@material-ui/core";
import { ITodoItem } from "./types";
import { TodoContent, Item, UpdateInput } from "./ui";

const UpdateBox: FC<{
  todo: ITodoItem;
  handleUpdate: (todo: ITodoItem) => void;
}> = ({ todo, handleUpdate }) => {
  const [isEditting, setIsEditting] = useState(() => false);
  const [newTodo, setNewTodo] = useState(() => todo.content);

  return (
    <TodoContent>
      {isEditting ? (
        <UpdateInput
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
        <Typography
          variant="body2"
          sx={{ fontSize: 18 }}
          onDoubleClick={() => {
            setIsEditting(true);
          }}
        >
          {todo.content}
        </Typography>
      )}
    </TodoContent>
  );
};

export function TodoMvc() {
  const {
    todoList,
    filter: currentFilter,
    setFilter,
    filters,
    toggleTodo,
    appendTodo,
    getActiveTodoCount,
    clearCompleted,
    removeTodo,
    updateTodo,
  } = useTodo();

  return (
    <>
      <Input onAppend={(content) => appendTodo(content)} />

      <List>
        {todoList.map((todo) => (
          <Item as={ListItem} key={todo.id}>
            <Checkbox
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
            />
            <UpdateBox todo={todo} handleUpdate={updateTodo} />
            <Button className="op" onClick={() => removeTodo(todo.id)}>
              {" "}
              x{" "}
            </Button>
          </Item>
        ))}
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography variant="body2">
          {" "}
          {getActiveTodoCount() + " active todo(s)."}{" "}
        </Typography>

        <section>
          {filters.map((filter) => (
            <Button
              variant={filter === currentFilter ? "outlined" : "text"}
              key={filter}
              onClick={() => setFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </section>

        <Button onClick={() => clearCompleted()}>Clear</Button>
      </Box>
    </>
  );
}
