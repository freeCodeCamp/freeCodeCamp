/**
 * @vitest-environment node
 */
import { normalizePath } from './normalizePath'

test('returns RegExp as-is', () => {
  const path = /s/
  expect(normalizePath(path)).toEqual(path)
})

test('returns a clean absolute URL as-is', () => {
  const path = 'https://test.mswjs.io/path'
  expect(normalizePath(path)).toEqual(path)
})

test('returns a relative URL as-is given a string path', () => {
  const path = '/relative/url'
  expect(normalizePath(path)).toEqual(path)
})

test('rebases a relative URL against a custom base URL', () => {
  const path = '/relative/url'
  expect(normalizePath(path, 'https://test.mswjs.io')).toEqual(
    'https://test.mswjs.io/relative/url',
  )
})

test('removes query parameters and hashes from an absolute URL', () => {
  expect(normalizePath('https://test.mswjs.io/user?query=123')).toEqual(
    'https://test.mswjs.io/user',
  )
  expect(normalizePath('https://test.mswjs.io/user#some')).toEqual(
    'https://test.mswjs.io/user',
  )
  expect(normalizePath('https://test.mswjs.io/user?query=123#some')).toEqual(
    'https://test.mswjs.io/user',
  )
})

test('removes query parameters and hashes from a relative URL', () => {
  expect(normalizePath('/user?query=123')).toEqual('/user')
  expect(normalizePath('/user#some')).toEqual('/user')
  expect(normalizePath('/user?query=123#some')).toEqual('/user')
})
