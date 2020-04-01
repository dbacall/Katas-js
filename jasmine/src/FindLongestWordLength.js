findLongestWordLength = str => {
  longestWord = "";
  str.split(" ").forEach(word => {
    if (word.length > longestWord.length) longestWord = word;
  });
  return longestWord.length;
};
