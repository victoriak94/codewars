function tiyFizzBuzz(sentence) {
  return sentence
    .split("")
    .map(char => {
      if (/[aeiou]/.test(char)) return "Yard";
      if (/[AEIOU]/.test(char)) return "Iron Yard";
      if (/[A-Z]/.test(char)) return "Iron";
      else return char;
    })
    .join("");
}
