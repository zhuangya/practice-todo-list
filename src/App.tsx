import { Typography } from "@material-ui/core";
import { TodoMvc } from "./TodoMvc";
import { Wrapper, Footer } from "./ui";

export default function App() {
  return (
    <>
      <Typography align="center" display="block" variant="h1">
        todo
      </Typography>
      <Wrapper maxWidth="md">
        <TodoMvc />

        <Footer>
          <Typography align="center" display="block" variant="body2">
            &copy; 2021
            <a href="https://github.com/zhuangya/practice-todo-list">
              Source Code
            </a>
          </Typography>
        </Footer>
      </Wrapper>
    </>
  );
}
