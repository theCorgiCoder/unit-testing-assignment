const { calculator, doCalculation } = require("../scripts/calculator");

// Test for basic calculator functions
test("adds 1 + 2 to equal 3", () => {
  expect(doCalculation(1, 2, calculator.add)).toBe(3);
});
test("subtracts 2 - 1 to equal 1", () => {
  expect(doCalculation(2, 1, calculator.subtract)).toBe(1);
});
test("multiplies 2 * 2 to equal 4", () => {
  expect(doCalculation(2, 2, calculator.multiply)).toBe(4);
});
test("divides 4 / 2 to equal 2", () => {
  expect(doCalculation(4, 2, calculator.divide)).toBe(2);
});
// Test for calculator functions with negative numbers
test("adds -1 + -2 to equal -3", () => {
  expect(doCalculation(-1, -2, calculator.add)).toBe(-3);
});
test("subtracts -2 - -1 to equal -1", () => {
  expect(doCalculation(-2, -1, calculator.subtract)).toBe(-1);
});
test("multiplies -2 * -2 to equal 4", () => {
  expect(doCalculation(-2, -2, calculator.multiply)).toBe(4);
});
test("divides -4 / -2 to equal 2", () => {
  expect(doCalculation(-4, -2, calculator.divide)).toBe(2);
});
// Test for calculator functions with decimal numbers
test("adds 1.5 + 2.5 to equal 4", () => {
  expect(doCalculation(1.5, 2.5, calculator.add)).toBe(4);
});
test("subtracts 2.5 - 1.5 to equal 1", () => {
  expect(doCalculation(2.5, 1.5, calculator.subtract)).toBe(1);
});
test("multiplies 2.5 * 2.5 to equal 6.25", () => {
  expect(doCalculation(2.5, 2.5, calculator.multiply)).toBe(6.25);
});
test("divides 4.5 / 2.5 to equal 1.8", () => {
  expect(doCalculation(4.5, 2.5, calculator.divide)).toBe(1.8);
});
// Test for calculator functions with large numbers
test("adds 1000000  + 2000000 to equal 3000000", () => {
  expect(doCalculation(1000000, 2000000, calculator.add)).toBe(3000000);
});
test("subtracts 2000000 - 1000000 to equal 1000000", () => {
  expect(doCalculation(2000000, 1000000, calculator.subtract)).toBe(1000000);
});
test("multiplies 2000000 * 2000000 to equal 4000000000000", () => {
  expect(doCalculation(2000000, 2000000, calculator.multiply)).toBe(
    4000000000000
  );
});
test("divides 4000000 / 2000000 to equal 2", () => {
  expect(doCalculation(4000000, 2000000, calculator.divide)).toBe(2);
});
// Test for calculator functions with zero
test("using 0 in the function", () => {
  expect(doCalculation(0, 0, calculator.add)).toBe(0);
  expect(doCalculation(0, 0, calculator.subtract)).toBe(0);
  expect(doCalculation(0, 0, calculator.multiply)).toBe(0);
  expect(() => doCalculation(0, 0, calculator.divide)).toThrow(
    "Cannot divide by zero"
  );
  expect(() =>
    doCalculation(8, 0, calculator.divide).toThrow("Cannot divide by zero")
  );
});

//Test for invalid inputs
test("Takes input of 1 and uses 'a' for the b operation", () => {
  expect(() => doCalculation(1, "a", calculator.add)).toThrow(
    "Invalid input, your first or second input is not a number"
  );
  expect(() => doCalculation(1, "a", calculator.subtract)).toThrow(
    "Invalid input, your first or second input is not a number"
  );
  expect(() => doCalculation(1, "a", calculator.multiply)).toThrow(
    "Invalid input, your first or second input is not a number"
  );
  expect(() => doCalculation(1, "a", calculator.divide)).toThrow(
    "Invalid input, your first or second input is not a number"
  );
});

//Test for multiple operations
test("performs multiple operations using previous result", () => {
  let result = doCalculation(2, 3, calculator.add); // 2 + 3 = 5

  result = doCalculation(result, 2, calculator.subtract); // 5 - 2 = 3

  result = doCalculation(result, 4, calculator.multiply); // 3 * 4 = 12

  result = doCalculation(result, 2, calculator.divide); // 12 / 2 = 6

  expect(result).toBe(6);
});

//Test for rounding errors
test("Performs calculation without rounding errors", () => {
  expect(doCalculation(0.3222, 0.1, calculator.add)).toBeCloseTo(0.4222);
});
