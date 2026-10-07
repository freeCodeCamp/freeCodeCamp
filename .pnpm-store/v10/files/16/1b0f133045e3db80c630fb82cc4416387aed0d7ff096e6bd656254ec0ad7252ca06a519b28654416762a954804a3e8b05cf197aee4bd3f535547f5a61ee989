import { reduceHeadersObject } from './reduceHeadersObject'
import { HeadersObject } from '../glossary'

test('reduces headers to lowercase headers', () => {
  const headers: HeadersObject = {
    Accept: '*/*',
    'Content-Type': ['application/json', 'text/plain'],
  }

  const lowercaseHeaders = reduceHeadersObject<HeadersObject>(
    headers,
    (obj, name, value) => {
      obj[name.toLowerCase()] = value
      return obj
    },
    {}
  )

  expect(lowercaseHeaders).toEqual({
    accept: '*/*',
    'content-type': ['application/json', 'text/plain'],
  })
})
