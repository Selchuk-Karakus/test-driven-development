import { getVowels, isItDefined } from "./nullNaNUndefinedMatchers";

describe("matchers for null, undefined, or NaN", () => {
  test("toBeNull() tests for null", () => {
    expect(getVowels("sky")).toBeNull();
  });
  test("toBeNull() tests for null", () => {
    expect(getVowels("karakus")).not.toBeNull();
  });
  test("toBeDefined() tests if a property is defined", () => {
    expect(isItDefined({name: "Selchuk", age: 18})).toBeDefined()
  })
});
