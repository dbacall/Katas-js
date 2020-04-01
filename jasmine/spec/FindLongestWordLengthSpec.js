it("returns the longest word length in a one word string", () => {
  expect(findLongestWordLength("hello")).toEqual(5);
});

it("returns the longest word length in a two word string", () => {
  expect(findLongestWordLength("hello worldie")).toEqual(7);
});

it("returns the longest word length in a long string", () => {
  expect(
    findLongestWordLength(
      "What if we try a super-long word such as otorhinolaryngology"
    )
  ).toEqual(19);
});
