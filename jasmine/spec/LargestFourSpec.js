it("should return an array with the largest number of each array", () => {
  let arr = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ];
  expect(largestFour(arr)).toBeInstanceOf(Array);
});
