duplicateCount = word => {
  count = 0;
  let letterArray = [];
  let duplicateArray = [];
  word
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
