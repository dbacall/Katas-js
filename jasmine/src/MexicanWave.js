wave = str => {
  arr = new Array(str.length).fill(str);
  return arr.map((word, wordIndex) => {
    return word
      .split("")
      .map((letter, letterIndex) => {
        if (letterIndex == wordIndex) {
          return letter.toUpperCase();
        } else {
          return letter;
        }
      })
      .join("");
  });
};
