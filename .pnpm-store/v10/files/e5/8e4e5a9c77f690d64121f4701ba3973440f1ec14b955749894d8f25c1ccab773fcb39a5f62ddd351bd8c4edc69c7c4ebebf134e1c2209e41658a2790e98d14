import { Headers } from '../Headers'
import { stringToHeaders } from './stringToHeaders'

it('returns a Headers instance given a headers string', () => {
  const headersString = `
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
      `
  const headers = stringToHeaders(headersString)

  expect(headers).toBeInstanceOf(Headers)
  expect(headers.get('date')).toEqual('Fri, 08 Dec 2017 21:04:30 GMT')
  expect(headers.get('content-encoding')).toEqual('gzip')
  expect(headers.get('x-content-type-options')).toEqual('nosniff')
  expect(headers.get('server')).toEqual('meinheld/0.6.1')
  expect(headers.get('x-frame-options')).toEqual('DENY')
  expect(headers.get('content-type')).toEqual('text/html; charset=utf-8')
  expect(headers.get('connection')).toEqual('keep-alive')
  expect(headers.get('vary')).toEqual('Cookie, Accept-Encoding')
  expect(headers.get('content-length')).toEqual('6502')
  expect(headers.get('x-xss-protection')).toEqual('1; mode=block')
})

it('returns a Headers instance given an empty string', () => {
  const headers = stringToHeaders('')
  expect(headers).toBeInstanceOf(Headers)
  expect(Object.fromEntries(headers)).toEqual({})
})
