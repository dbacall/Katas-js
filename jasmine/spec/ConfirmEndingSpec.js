it("returns true when given word and d as arguments", () => {
  expect(confirmEnding("word", "d")).toEqual(true);
});

it("returns true when given word and d as arguments", () => {
  expect(confirmEnding("word", "e")).toEqual(false);
});

it("returns true when given word and d as arguments", () => {
  expect(confirmEnding("word", "rd")).toEqual(true);
});
