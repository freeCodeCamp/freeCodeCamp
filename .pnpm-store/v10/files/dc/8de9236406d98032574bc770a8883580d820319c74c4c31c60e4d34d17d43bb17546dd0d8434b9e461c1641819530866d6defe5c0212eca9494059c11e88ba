/**
 * @vitest-environment node
 */
import { getAbsoluteUrl } from './getAbsoluteUrl'

it('returns a given relative URL as-is', () => {
  expect(getAbsoluteUrl('/reviews')).toBe('/reviews')
})

it('rebases a relative URL against a custom base URL', () => {
  expect(getAbsoluteUrl('/user', 'https://api.github.com')).toEqual(
    'https://api.github.com/user',
  )
})
it('returns a given absolute URL as-is', () => {
  expect(getAbsoluteUrl('https://api.mswjs.io/users')).toBe(
    'https://api.mswjs.io/users',
  )
})
