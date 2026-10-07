import { truncateMessage } from './truncateMessage'

it('returns a short string as-is', () => {
  expect(truncateMessage('')).toBe('')
  expect(truncateMessage('hello')).toBe('hello')
})

it('truncates a long string', () => {
  expect(truncateMessage('this is a very long string')).toBe(
    'this is a very long stri…',
  )
})
