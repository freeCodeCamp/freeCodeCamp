import { getStatusCodeColor } from './getStatusCodeColor'

test('returns a green color for status codes lower than 300', () => {
  expect(getStatusCodeColor(100)).toBe('#69AB32')
  expect(getStatusCodeColor(200)).toBe('#69AB32')
  expect(getStatusCodeColor(204)).toBe('#69AB32')
})

test('returns a yellow color for status codes between 201 and 400', () => {
  expect(getStatusCodeColor(300)).toBe('#F0BB4B')
  expect(getStatusCodeColor(304)).toBe('#F0BB4B')
})

test('returns a red color for status codes higher than 400', () => {
  expect(getStatusCodeColor(400)).toBe('#E95F5D')
  expect(getStatusCodeColor(404)).toBe('#E95F5D')
  expect(getStatusCodeColor(500)).toBe('#E95F5D')
})

test('returns a red color for unknown status code', () => {
  expect(getStatusCodeColor(700)).toBe('#E95F5D')
})
