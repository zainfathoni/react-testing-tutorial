import { expect, test } from "vitest";
import { convertToUpperCase } from "../uppercase";

test("convertToUpperCase", () => {
  expect(convertToUpperCase("hello")).toBe("HELLO");
});
