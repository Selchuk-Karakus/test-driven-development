const { sum, subtract, multiply, divide } = require("./example");

describe("additive functions", () => {
  test("adds numbers correctly", () => {
    expect(sum(10, 20)).toBe(30);
  });

  test("subtracts numbers correctly", () => {
    expect(subtract(20, 20)).toBe(0);
  });
});

describe("multiplicative functions", () => {
  test("multiplies numbers correctly", () => {
    expect(multiply(10, 10)).toBe(100);
  });

  test("divides numbers correctly", () => {
    expect(divide(10, 20)).toBe(0.5);
  });
});
