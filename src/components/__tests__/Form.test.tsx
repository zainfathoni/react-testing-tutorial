import { fireEvent, render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { Form } from "../Form";

test("submits form data", async () => {
  const handleSubmit = vi.fn();
  const { getByLabelText, getByText } = render(
    <Form onSubmit={handleSubmit} />,
  );

  fireEvent.change(getByLabelText(/log anything/i), {
    target: { value: "Test" },
  });
  fireEvent.click(getByText(/submit/i));

  expect(handleSubmit).toHaveBeenCalledWith("TEST");
});
