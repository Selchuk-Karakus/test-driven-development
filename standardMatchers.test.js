import { compares, country1, country2, welcomeTo, carDesired, carOnSale } from "./standardMatchers";

describe("matchers for equality", () => {
  test("toBe() compares using ===", () => {
    expect(compares(4, 4)).toBe(4);
    expect(compares(1, 4)).not.toBe(4);
  });

  test("toEqual() compares object property values", () => {
    expect(country1).toEqual(country2);
  });

  test("toBe() compares object identity", () => {
    expect(country1).toBe(country1);
    expect(country1).not.toBe(country2);
  });

  test("toMatch() matches a string against an RE", () => {
    expect(welcomeTo("Turkiye")).toMatch("Turkiye");
    expect(welcomeTo("EnGlAnd")).toMatch(/engl../i);
  });

  test("toMatchObject() matches object properties", () => {
    expect(carOnSale).toMatchObject(carDesired)
  })
});
