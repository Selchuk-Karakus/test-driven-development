import { compares } from "./standardMatchers";

describe("matchers for equality", () => {
  test("toBe() compares using ===", () => {
    expect(compares(4, 4)).toBe(4);
    expect(compares(1, 4)).not.toBe(4);
  });
});
