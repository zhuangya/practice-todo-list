import { TextField } from "@material-ui/core";

export default function Input() {
  // TODO:
  // bind enter key event
  // send todo item to inner state.

  return (
    <TextField
      label="What needs to be done?"
      fullWidth
      type="text"
      id="new-todo-input"
    />
  );
}
