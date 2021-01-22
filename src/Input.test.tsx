import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByLabelText("What needs to be done?");
  return {
    ...utils,
    input,
  };
};

test("render Input", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "hello world" } });
  expect(input.value).toBe("hello world");
});
