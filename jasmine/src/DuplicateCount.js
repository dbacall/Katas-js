duplicateCount = text => {
  count = 0;
  letterArray = [];
  duplicateArray = [];
  text
    .toLowerCase()
    .split("")
    .forEach(letter => {
      if (duplicateArray.includes(letter)) {
      } else if (letterArray.includes(letter)) {
        count++;
        duplicateArray.push(letter);
      } else {
        letterArray.push(letter);
      }
    });
  return count;
};
