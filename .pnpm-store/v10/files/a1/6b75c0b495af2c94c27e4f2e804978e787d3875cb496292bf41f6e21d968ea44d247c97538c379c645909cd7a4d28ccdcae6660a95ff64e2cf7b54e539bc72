import { it, expect } from 'vitest'
import { isObject } from './isObject'

it('returns true given an object', () => {
  expect(isObject({})).toBe(true)
  expect(isObject({ a: 1 })).toBe(true)
})

it('returns false given an object-like instance', () => {
  expect(isObject([1])).toBe(false)
  expect(isObject(function () {})).toBe(false)
  expect(isObject(new Response())).toBe(false)
})

it('returns false given a non-object instance', () => {
  expect(isObject(null)).toBe(false)
  expect(isObject(undefined)).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject(123)).toBe(false)
  expect(isObject(Symbol('object Object'))).toBe(false)
})
