it("repeats the string twice", () => {
  expect(repeatString("abc", 2)).toEqual("abcabc");
});

it("repeats the string three times", () => {
  expect(repeatString("abc", 3)).toEqual("abcabcabc");
});

it("returns an empty string if asked to repeat negative times", () => {
  expect(repeatString("abc", -3)).toEqual("");
});
