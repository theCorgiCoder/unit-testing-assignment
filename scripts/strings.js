// 1. Returns string with first letter capitalized

function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.trim().length === 0) {
    throw new Error("Please provide a string");
  }
  // determines where the first non-whitespace letteracter is
  const firstNonWhitespaceIndex = string.search(/\S/);
  //seperates the first letter from the rest of the string and capitalizes it
  const firstLetter = string.charAt(firstNonWhitespaceIndex).toUpperCase();
  //returns the string with the first letter capitalized and combines with rest of string with included spaces
  return (
    string.slice(0, firstNonWhitespaceIndex) +
    firstLetter +
    string.slice(firstNonWhitespaceIndex + 1)
  );
}

//2. Reverse String Function
function reverseString(string) {
  if (typeof string !== "string" || string.trim().length === 0) {
    throw new Error("Please provide a string");
  }
  // Trim leading and trailing whitespace
  const trimmedString = string.trim();

  // Reverse the string
  const reversedString = trimmedString.split("").reverse().join("");

  // Add back leading and trailing whitespace
  const leadingWhitespace = string.match(/^\s*/)[0];
  const trailingWhitespace = string.match(/\s*$/)[0];
  //return the reversed string with the leading and trailing whitespace
  return leadingWhitespace + reversedString + trailingWhitespace;
}

module.exports = { capitalizeFirstLetter, reverseString };
