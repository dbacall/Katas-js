it("returns an array of the word repeated the same amount as the number of letters", () => {
  expect(wave("hello")).toEqual(["hello", "hello", "hello", "hello", "hello"]);
});
