largestFour = arr => {
  console.log(Math.max(...[4, 5, 1, 3]));
  return arr.map(numbers => {
    return Math.max(...numbers);
  });
};
