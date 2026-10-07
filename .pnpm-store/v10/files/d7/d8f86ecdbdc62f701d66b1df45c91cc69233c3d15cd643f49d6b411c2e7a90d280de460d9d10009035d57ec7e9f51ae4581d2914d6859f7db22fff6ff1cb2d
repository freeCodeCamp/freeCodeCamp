import { toReadonlyArray } from './toReadonlyArray'

it('creates a copy of an array', () => {
  expect(toReadonlyArray([1, 2, 3])).toEqual([1, 2, 3])
})

it('does not affect the source array', () => {
  const source = ['a', 'b', 'c']
  toReadonlyArray(source)

  expect(source.push('d')).toBe(4)
  expect(source).toEqual(['a', 'b', 'c', 'd'])
})

it('forbids modifying the array copy', () => {
  const source = [1, 2, 3]
  const copy = toReadonlyArray(source)

  expect(() => {
    // @ts-expect-error Intentional runtime misusage.
    copy[2] = 1
  }).toThrow(/Cannot assign to read only property '\d+' of object/)

  expect(() => {
    // @ts-expect-error Intentional runtime misusage.
    copy.push(4)
  }).toThrow(/Cannot add property \d+, object is not extensible/)

  expect(source).toEqual([1, 2, 3])
})
