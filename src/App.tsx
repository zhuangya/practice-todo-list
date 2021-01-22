import { Typography, Container } from "@material-ui/core";
import { TodoMvc } from "./TodoMvc";

export default function App() {
  return (
    <Container>
      <Typography align="center" display="block" variant="h1">
        todo
      </Typography>

      <TodoMvc />

      <Typography align="center" display="block" variant="body2">
        &copy; 2021
      </Typography>
    </Container>
  );
}
