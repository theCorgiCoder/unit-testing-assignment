const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0 && a !== 0) {
      throw new Error("Cannot divide by zero");
    } else if (a === 0 && b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};

function doCalculation(a, b, operation) {
  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
    throw new Error(
      "Invalid input, your first or second input is not a number"
    );
  }
  return operation(parseFloat(a), parseFloat(b));
}

module.exports = { doCalculation, calculator };
