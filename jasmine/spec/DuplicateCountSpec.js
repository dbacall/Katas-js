it("returns 0 if there are no duplicates", () => {
  expect(duplicateCount("word")).toEqual(0);
});

it("returns 1 if there is 1 duplicate", () => {
  expect(duplicateCount("speed")).toEqual(1);
});

it("returns 2 if there are 2 duplicates", () => {
  expect(duplicateCount("speedaa")).toEqual(2);
});

it("returns 1 if there are 4 of the same letter", () => {
  expect(duplicateCount("speedee")).toEqual(1);
});
