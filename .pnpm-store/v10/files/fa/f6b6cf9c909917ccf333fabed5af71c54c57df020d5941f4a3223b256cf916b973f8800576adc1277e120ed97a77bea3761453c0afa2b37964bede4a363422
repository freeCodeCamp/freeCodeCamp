/**
 * @vitest-environment jsdom
 */
import { normalizePath } from './normalizePath'

test('returns RegExp as-is', () => {
  const path = /\/user\/(.+?)\//
  expect(normalizePath(path)).toEqual(path)
})

test('returns a clean absolute URL as-is', () => {
  const path = 'https://test.mswjs.io/user'
  expect(normalizePath(path)).toEqual(path)
})

test('rebases a relative URL against the current location', () => {
  const path = '/relative/url'
  expect(normalizePath(path)).toBe(`${location.origin}/relative/url`)
})

test('rebases a relative URL against a custom base URL', () => {
  const path = '/relative/url'
  expect(normalizePath(path, 'https://test.mswjs.io')).toEqual(
    'https://test.mswjs.io/relative/url',
  )
})

test('removes query parameters and hashes from an absolute URL', () => {
  const path = 'https://test.mswjs.io/user?query=123#some'
  expect(normalizePath(path)).toEqual('https://test.mswjs.io/user')
})

test('removes query parameters and hashes from a relative URL', () => {
  expect(normalizePath('/user?query=123')).toEqual(`${location.origin}/user`)
  expect(normalizePath('/user#some')).toEqual(`${location.origin}/user`)
  expect(normalizePath('/user?query=123#some')).toEqual(
    `${location.origin}/user`,
  )
})

test('returns a path pattern string as-is', () => {
  expect(normalizePath(':api/user')).toEqual('http://localhost/:api/user')
  expect(normalizePath('*/resource/*')).toEqual('*/resource/*')
})

test('removes query parameters and hashes from a path pattern string', () => {
  expect(normalizePath(':api/user?query=123#some')).toEqual(
    'http://localhost/:api/user',
  )
})

test('preserves optional path parameters', () => {
  expect(normalizePath('/user/:userId?')).toEqual(
    'http://localhost/user/:userId?',
  )
})
