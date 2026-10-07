import { objectToHeaders } from './objectToHeaders'
import { Headers } from '../Headers'
import { HeadersObject } from '../glossary'

describe('given an object representation of headers', () => {
  it('returns a Headers instance', () => {
    const headersObject: HeadersObject = {
      Accept: ['application/json', 'text/plain'],
      'Content-Length': '1234',
      'Content-Type': 'text/xml',
      'X-Custom-Header': undefined,
    }
    const headers = objectToHeaders(headersObject)

    expect(headers).toBeInstanceOf(Headers)
    expect(headers.get('accept')).toEqual('application/json, text/plain')
    expect(headers.get('content-length')).toEqual('1234')
    expect(headers.get('content-type')).toEqual('text/xml')
    expect(headers.get('x-custom-header')).toBeNull()
  })
})
