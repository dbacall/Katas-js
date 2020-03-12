it('returns an empty array if given [1]', () => {
  expect(notOdd([1])).toEqual([])
})

it('returns [2] when given [1, 2]', () => {
  expect(notOdd([1,2])).toEqual([2])
})

it('returns [0, 4] when given [0, 3, 4]', () => {
  expect(notOdd([0, 3, 4])).toEqual([0, 4])
})
