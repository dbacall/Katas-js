it("returns an array of the words doing a mexican wave", () => {
  expect(wave("hello")).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
});

it("returns an array of the words doing a mexican wave even with spaces", () => {
  expect(wave("hel lo")).toEqual([
    "Hel lo",
    "hEl lo",
    "heL lo",
    "hel Lo",
    "hel lO"
  ]);
});
