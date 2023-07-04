import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import App from "../App";

describe("App", () => {
  test("App counter", () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText("count is 0"));

    expect(getByText("count is 1")).toBeDefined();
  });

  test("App form", () => {
    const consoleLog = console.log;
    console.log = vi.fn();

    const { getByLabelText, getByText } = render(<App />);

    fireEvent.change(getByLabelText(/log anything/i), {
      target: { value: "Test" },
    });

    fireEvent.click(getByText(/submit/i));

    expect(console.log).toHaveBeenCalledWith("TEST");

    console.log = consoleLog;
  });
});
