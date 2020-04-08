it("returns a string truncated to 8 characters", () => {
  let str = "it should end before here";
  expect(truncateString(str, 8)).toEqual("it shoul...");
});

it("returns a string truncated to 10 characters", () => {
  let str = "it should end before here";
  expect(truncateString(str, 10)).toEqual("it should ...");
});
