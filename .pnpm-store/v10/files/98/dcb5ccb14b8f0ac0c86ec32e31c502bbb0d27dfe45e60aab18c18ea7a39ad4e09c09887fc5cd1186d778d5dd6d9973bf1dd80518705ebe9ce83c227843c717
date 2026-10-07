import { cleanUrl } from './cleanUrl'

it('removes query parameters from a URL string', () => {
  expect(cleanUrl('/user?id=123')).toEqual('/user')
  expect(cleanUrl('/user?id=123&id=456')).toEqual('/user')
  expect(cleanUrl('/user?id=123&role=admin')).toEqual('/user')
})

it('removes hashes from a URL string', () => {
  expect(cleanUrl('/user#hash')).toEqual('/user')
  expect(cleanUrl('/user#hash-with-dashes')).toEqual('/user')
})

it('removes both query parameters and hashes from a URL string', () => {
  expect(cleanUrl('/user?id=123#some')).toEqual('/user')
  expect(cleanUrl('/user?id=123&role=admin#some')).toEqual('/user')
})

it('preserves optional path parameters', () => {
  expect(cleanUrl('/user/:id?')).toEqual('/user/:id?')
  expect(cleanUrl('/user/:id?/:messageId?')).toEqual('/user/:id?/:messageId?')
})
