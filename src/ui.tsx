import styled from "@emotion/styled";
import { Button, Container } from "@material-ui/core";

export const Wrapper = styled(Container)`
  margin: 40px auto;
  padding: 40px 20px;
  box-shadow: 0 0.5em 2em -0.3em rgba(0, 0, 0, 0.25);
`;

export const Footer = styled.footer`
  text-align: center;
  color: gray;
  padding: 10px;
`;

export const TodoButton = styled(Button)`
  visibility: hidden;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  margin: 4px;
  background-color: rgba(233, 233, 233, 0.2);
  .op {
    visibility: hidden;
  }
  &:hover {
    .op {
      visibility: visible;
    }
  }
`;

export const TodoContent = styled.span`
  flex-grow: 1;
  font-size: 16px;
`;

export const UpdateInput = styled.input`
  font-size: 18px;
  width: 100%;
  display: block;
  padding: 8px;
  border-radius: 0;
  margin: 0;
  &:active,
  &:focus {
    border-radius: 0;
  }
`;
