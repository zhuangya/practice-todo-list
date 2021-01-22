import { FC, useEffect, useCallback, useRef } from "react";
import { TextField } from "@material-ui/core";

export const Input: FC<{ onAppend?: (content: string) => void }> = ({
  onAppend,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onKeyPressed = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Enter" && ref.current !== null) {
        onAppend && onAppend(ref.current.value);
        ref.current.value = "";
      }
    },
    [onAppend]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);
    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    };
  }, [onKeyPressed]);

  return (
    <TextField
      inputRef={ref}
      label="What needs to be done?"
      fullWidth
      type="text"
      id="new-todo-input"
    />
  );
};
