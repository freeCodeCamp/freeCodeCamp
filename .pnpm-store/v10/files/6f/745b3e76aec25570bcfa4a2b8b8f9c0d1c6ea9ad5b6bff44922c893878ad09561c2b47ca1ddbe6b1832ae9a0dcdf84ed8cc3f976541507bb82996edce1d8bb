import { isObject } from './isObject'

test('returns true given an object', () => {
  expect(isObject({})).toBe(true)
  expect(isObject({ a: 1 })).toBe(true)
})

test('returns false given a non-object value', () => {
  expect(isObject(1)).toBe(false)
  expect(isObject('string')).toBe(false)
  expect(isObject([])).toBe(false)
  expect(
    isObject(function () {
      return 2
    }),
  ).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject(undefined)).toBe(false)
  expect(isObject(null)).toBe(false)
})
