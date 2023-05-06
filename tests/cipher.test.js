const { generateCaesarCipher, alphabet } = require("../scripts/cipher.js");

test("cipher works with a shift of 1", () => {
  expect(generateCaesarCipher("guineapig", 1)).toBe("hvjofbqjh");
});
test("text ciphers correctly with whitespace", () => {
  expect(
    generateCaesarCipher("the quick brown fox jumps over the lazy dog", 1)
  ).toBe("uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph");
});
test("cipher works with negative shift", () => {
  expect(generateCaesarCipher("hello world", -3)).toBe("ebiil tloia");
});
test("cipher works with shift of 0", () => {
  expect(generateCaesarCipher("hello world", 0)).toBe("hello world");
});
test("Preserves capitalization", () => {
  expect(generateCaesarCipher("HeLLo WoRld", 3)).toBe("KhOOr ZrUog");
});
test("Does not modify non-alphabetic characters", () => {
  expect(generateCaesarCipher("hello, world!", 3)).toBe("khoor, zruog!");
});
test("Wraps around to the start of the alphabet", () => {
  expect(generateCaesarCipher("xyz", 3)).toBe("abc");
});
test("non-strings are not ciphered as text input", () => {
  expect(() => generateCaesarCipher("123", 3)).toThrow("Text must be a string");
  expect(() => generateCaesarCipher(587, 3)).toThrow("Text must be a string");
  expect(() => generateCaesarCipher(true, 3)).toThrow("Text must be a string");
});
test("string number values are converted to Integers", () => {
  expect(generateCaesarCipher("guineapig", "1")).toBe("hvjofbqjh");
});
test("If shiftValue is not provided, it defaults to 0", () => {
  expect(generateCaesarCipher("hello")).toBe("hello");
});
test("If shiftValue is null or undefined, it defaults to 0", () => {
  expect(generateCaesarCipher("hello", null)).toBe("hello");
  expect(generateCaesarCipher("hello", undefined)).toBe("hello");
});
test("If shiftValue is 0, it returns the original text", () => {
  expect(generateCaesarCipher("hello", 0)).toBe("hello");
});
test("If shiftValue is greater than 26, it wraps around to the start of the alphabet", () => {
  expect(() => generateCaesarCipher("hello", 29)).toThrow(
    "Shift value must be between 26 and -26"
  );
});
test("If shiftValue is less than -26, it wraps around to the end of the alphabet", () => {
  expect(() =>
    generateCaesarCipher("hello", -29).toThrow(
      "Shift value must be between 26 and -26"
    )
  );
});
test("If shiftValue is a decimal, it is rounded to the nearest integer", () => {
  expect(generateCaesarCipher("hello", 2.5)).toBe("khoor");
});
test("if text includes symbols or numbers, they are not ciphered", () => {
  expect(generateCaesarCipher("hello, world!", 3)).toBe("khoor, zruog!");
  expect(generateCaesarCipher("h3lLo, woRld!", 3)).toBe("k3oOr, zrUog!");
  expect(generateCaesarCipher("h3lLo, woRld!", "3")).toBe("k3oOr, zrUog!");
});
