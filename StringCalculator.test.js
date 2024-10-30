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
});
