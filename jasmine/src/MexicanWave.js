wave = str => {
  stringLength = str.split(" ").join("").length;
  arr = new Array(stringLength).fill(str);
  return arr.map((word, wordIndex) => {
    return word
      .split("")
      .map((letter, letterIndex) => {
        if (letter !== " ") {
          if (letterIndex === wordIndex) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        } else {
          wordIndex++;
          return letter;
        }
      })
      .join("");
  });
};
