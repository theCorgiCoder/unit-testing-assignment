// 1. Returns string with first letter capitalized

function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.trim().length === 0) {
    throw new Error("Please provide a string");
  }
  const firstNonWhitespaceIndex = string.search(/\S/);
  const firstLetter = string.charAt(firstNonWhitespaceIndex).toUpperCase();
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
  return string.split("").reverse().join("");
}

module.exports = { capitalizeFirstLetter, reverseString };
