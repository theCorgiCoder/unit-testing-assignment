const alphabet = "abcdefghijklmnopqrstuvwxyz";

function generateCaesarCipher(text, shiftValue) {
  let cipheredMessage = "";

  if (typeof text !== "string" || isNaN(text) === false) {
    throw new Error("Text must be a string");
  } else if (typeof shiftValue === "string") {
    throw new Error("Shift value must be a number");
  }

  for (let i = 0; i < text.length; i++) {
    let letter = text[i]; //iterates through each letter in the text and assigns it an index storing inside letter variable
    if (letter.match(/[a-z]/i)) {
      //iterates through each letter in the text to determine if it is a letter
      const index = alphabet.indexOf(letter.toLowerCase());
      const newIndex = (index + shiftValue) % alphabet.length;
      let newletter = alphabet[newIndex];
      if (letter === letter.toUpperCase()) {
        newletter = newletter.toUpperCase();
      }
      cipheredMessage += newletter;
    } else {
      cipheredMessage += letter;
    }
  }
  return cipheredMessage;
}

module.exports = { generateCaesarCipher, alphabet };
