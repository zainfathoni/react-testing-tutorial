import { fireEvent, render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { Button } from "../Button";

test("calls onClick prop when clicked", () => {
  const handleClick = vi.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);

  expect(handleClick).toHaveBeenCalledTimes(0);

  fireEvent.click(getByText("Click Me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
