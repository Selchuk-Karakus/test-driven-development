import { getVowels, isItDefined, isANumber } from "./nullNaNUndefinedMatchers";

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
  test("toBeNaN() test for NaN", () => {
    expect(isANumber(-25)).toBeNaN();
    expect(isANumber(25)).not.toBeNaN()
  })
});
