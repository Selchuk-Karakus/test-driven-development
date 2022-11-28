import { lessThan, greaterThanOrEqual } from "./rangeMatchers";

describe("matchers for range", () => {
  test("toBeLessThan() test for < ", () => {
    expect(lessThan(5, 1)).toBeLessThan(5);
  });

  test("toBeGreaterThanOrEqual() tests for >=", () => {
    expect(greaterThanOrEqual("selchuk")).toBeGreaterThanOrEqual(7);
  });
});
