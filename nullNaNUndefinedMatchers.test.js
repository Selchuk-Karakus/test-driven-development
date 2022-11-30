import { getVowels } from "./nullNaNUndefinedMatchers";

describe("matchers for null, undefined, or NaN", () => {
  test("toBeNull() tests for null", () => {
    expect(getVowels("sky")).toBeNull();
  });
  test("toBeNull() tests for null", () => {
    expect(getVowels("karakus")).not.toBeNull();
  });
});
