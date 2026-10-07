// @vitest-environment jsdom
import { getAbsoluteUrl } from './getAbsoluteUrl'

const rawLocation = window.location

afterAll(() => {
  Object.defineProperty(window, 'location', {
    value: rawLocation,
  })
})

it('resolves a relative URL against the current location (default)', () => {
  expect(getAbsoluteUrl('/reviews')).toBe('http://localhost/reviews')
})

it('supports relative URLs starting with search parameters', () => {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost/nested',
    },
  })

  expect(getAbsoluteUrl('?resourceId=abc-123')).toBe(
    'http://localhost/nested?resourceId=abc-123',
  )
})

it('resolves a relative URL against a custom base URL', () => {
  expect(getAbsoluteUrl('/user', 'https://api.github.com')).toBe(
    'https://api.github.com/user',
  )
})

it('returns a given absolute URL as-is', () => {
  expect(getAbsoluteUrl('https://api.mswjs.io/users')).toBe(
    'https://api.mswjs.io/users',
  )
})

it('returns an absolute URL given a relative path without a leading slash', () => {
  expect(getAbsoluteUrl('users')).toBe('http://localhost/users')
})

it('returns a path with a pattern as-is', () => {
  expect(getAbsoluteUrl(':api/user')).toBe('http://localhost/:api/user')
  expect(getAbsoluteUrl('*/resource/*')).toBe('*/resource/*')
})
