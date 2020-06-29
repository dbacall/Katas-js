it("returns '(' for a single letter string", () => {
  expect(duplicateEncoder('a')).toEqual('(');
});

it("returns '((' for a single letter string", () => {
  expect(duplicateEncoder('aa')).toEqual('((');
});
