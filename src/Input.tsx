import { FC, KeyboardEvent, useRef } from "react";
import { TextField } from "@material-ui/core";

export const Input: FC<{ onAppend?: (content: string) => void }> = ({
  onAppend,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <TextField
      inputRef={ref}
      inputProps={{
        onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
          if (
            event.key === "Enter" &&
            ref.current !== null &&
            ref.current.value !== ""
          ) {
            onAppend && onAppend(ref.current.value);
            ref.current.value = "";
          }
        },
      }}
      label="What needs to be done?"
      fullWidth
      type="text"
      id="new-todo-input"
    />
  );
};
