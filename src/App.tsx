import { Typography, Container } from "@material-ui/core";
import Input from "./Input";

export default function App() {
  return (
    <Container>
      <Typography align="center" display="block" variant="h1">
        todo
      </Typography>
      <Input />
    </Container>
  );
}
