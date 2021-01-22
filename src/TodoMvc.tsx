import { Input } from "./Input";
import { useTodo } from "./useTodo";

export function TodoMvc() {
  const { appendTodo } = useTodo();

  return <Input onAppend={(content) => appendTodo(content)} />;
}
