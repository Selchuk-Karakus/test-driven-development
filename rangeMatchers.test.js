import {lessThan} from "./rangeMatchers"

describe("matchers for range", () => {
  test("toBeLessThan() test for < ", () => {
    expect(lessThan(5, 1)).toBeLessThan(5)
  })

})