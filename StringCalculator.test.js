const StringCalculator = require("./StringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number when one number is provided", () => {
    expect(calculator.add("5")).toBe(5);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should handle newlines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  //   test("should throw an error for negative numbers", () => {
  //     expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
  //   });

  test("should return the sum of multiple comma-separated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("1,2,3")).toBe(6);
  });

  test('should support custom delimiters specified in the format "//[delimiter]\\n[numbers]"', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
});
