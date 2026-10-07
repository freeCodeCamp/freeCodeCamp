// @vitest-environment node
import { toPublicUrl } from './toPublicUrl'

test('returns an absolute request URL without search params', () => {
  expect(toPublicUrl(new URL('https://test.mswjs.io/path'))).toBe(
    'https://test.mswjs.io/path',
  )

  expect(toPublicUrl(new URL('http://192.168.0.10/path'))).toBe(
    'http://192.168.0.10/path',
  )

  expect(
    toPublicUrl(new URL('http://localhost/path?foo=bar')),
    'Must not return relative URL in Node.js',
  ).toBe('http://localhost/path')
})
