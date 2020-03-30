it("returns an array of the words doing a mexican wave", () => {
  expect(wave("hello")).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
});
