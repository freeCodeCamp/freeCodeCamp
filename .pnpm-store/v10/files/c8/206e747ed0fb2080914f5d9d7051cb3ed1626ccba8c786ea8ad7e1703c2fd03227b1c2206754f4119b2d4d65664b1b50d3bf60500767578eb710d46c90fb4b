import { getMessageLength } from './getMessageLength'

it('returns the length of the string', () => {
  expect(getMessageLength('')).toBe(0)
  expect(getMessageLength('hello')).toBe(5)
})

it('returns the size of the Blob', () => {
  expect(getMessageLength(new Blob())).toBe(0)
  expect(getMessageLength(new Blob(['hello']))).toBe(5)
})

it('returns the byte length of ArrayBuffer', () => {
  expect(getMessageLength(new ArrayBuffer(0))).toBe(0)
  expect(getMessageLength(new ArrayBuffer(5))).toBe(5)
})
