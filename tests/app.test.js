const { capitalizeFirstLetter, reverseString } = require("../scripts/app.js");

/*---- Tests for capitalizeFirstLetter() begins ----*/
// test("capitalize the first letter of string hello", () => {
//   expect(capitalizeFirstLetter("hello")).toBe("Hello");
// });
// test("Already capitalized string Hello returns the same", () => {
//   expect(capitalizeFirstLetter("Hello world")).toBe("Hello world");
// });
// test("throws an error if input is not a non-empty string", () => {
//   expect(() => capitalizeFirstLetter(123)).toThrow("Please provide a string");
//   expect(() => capitalizeFirstLetter("")).toThrow("Please provide a string");
//   expect(() => capitalizeFirstLetter(true)).toThrow("Please provide a string");
// });
// test("Handles a string of only one character", () => {
//   expect(capitalizeFirstLetter("a")).toBe("A");
// });
// test("Handles a string with a leading whitespace", () => {
//   expect(capitalizeFirstLetter(" hello")).toBe(" Hello");
// });
// test("Handles a string with a trailing whitespace", () => {
//   expect(capitalizeFirstLetter("hello ")).toBe("Hello ");
// });
// test("Handles a string with leading AND trailing whitespace", () => {
//   expect(capitalizeFirstLetter(" hello ")).toBe(" Hello ");
// });
/*---- Tests for capitalizeFirstLetter() ends ----*/
/*---- Tests for reverseString() starts ----*/
test("reverse the string hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("throws an error if input is not a non-empty string", () => {
  expect(() => reverseString(123)).toThrow("Please provide a string");
  expect(() => reverseString("")).toThrow("Please provide a string");
  expect(() => reverseString(true)).toThrow("Please provide a string");
});
test("Returns same number of characters as input string", () => {
  expect(reverseString("hello").length).toBe(5);
});
test("Handles a string with a leading whitespace", () => {
  expect(reverseString(" hello")).toBe(" olleh");
});
/*---- Tests for reverseString() ends ----*/
