it("returns 0 if there are no duplicates", () => {
  expect(duplicateCount("word")).toEqual(0);
});

it("returns 1 if there is 1 duplicate", () => {
  expect(duplicateCount("speed")).toEqual(1);
});
