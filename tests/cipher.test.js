const { generateCaesarCipher, alphabet } = require("../scripts/cipher.js");

//Test that cipher works with a shift of 1
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
test("non-number values are not accepted as shiftValue", () => {
  expect(() => generateCaesarCipher("hello", "3")).toThrow(
    "Shift value must be a number"
  );
});
