import { Headers } from './Headers'
import { getRawHeaders } from './getRawHeaders'

it('returns a headers objects with the raw names', () => {
  const headers = new Headers({
    Accept: '*/*',
    'ConTent-Type': ['application/json', 'text/plain'],
  })
  expect(getRawHeaders(headers)).toEqual({
    Accept: '*/*',
    'ConTent-Type': 'application/json, text/plain',
  })
})

it('returns an empty object when there is no headers', () => {
  expect(getRawHeaders(new Headers())).toEqual({})
  expect(getRawHeaders(new Headers({}))).toEqual({})
  expect(getRawHeaders(new Headers([]))).toEqual({})
})
