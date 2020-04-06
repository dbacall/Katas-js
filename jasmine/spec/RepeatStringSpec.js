it("repeats the string twice", () => {
  expect(repeatString("abc", 2)).toEqual("abcabc");
});

it("repeats the string three times", () => {
  expect(repeatString("abc", 3)).toEqual("abcabcabc");
});
