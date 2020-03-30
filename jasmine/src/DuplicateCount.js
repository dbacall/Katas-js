duplicateCount = word => {
  count = 0;
  let letterArray = [];
  word.split("").forEach(letter => {
    if (letterArray.includes(letter)) {
      count++;
    } else {
      letterArray.push(letter);
    }
  });
  return count;
};
