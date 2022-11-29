import { lessThan, greaterThanOrEqual, toBeClose } from "./rangeMatchers";

describe("matchers for range", () => {
  test("toBeLessThan() test for < ", () => {
    expect(lessThan(5, 1)).toBeLessThan(5);
  });

  test("toBeGreaterThanOrEqual() tests for >=", () => {
    expect(greaterThanOrEqual("selchuk")).toBeGreaterThanOrEqual(7);
  });

  test("toBeCloseTo() tests for mathematical proximity", () => {
    expect(toBeClose(0.2, 0.1)).toBeCloseTo(0.3, 5);
  })
});
