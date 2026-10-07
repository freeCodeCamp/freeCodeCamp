/**
 * @jest-environment node
 */
import { Headers } from '../Headers'
import { headersToList } from './headersToList'

describe('given Headers with a single header', () => {
  it('should return its list representation', () => {
    const headers = new Headers({ Accept: 'application/json' })
    expect(headersToList(headers)).toEqual([['accept', 'application/json']])
  })
})

describe('given Headers with a single header and multiple values', () => {
  it('should return those values in a nested list', () => {
    const headers = new Headers({ Accept: 'application/json' })
    headers.append('Accept', 'text/plain')

    expect(headersToList(headers)).toEqual([
      ['accept', ['application/json', 'text/plain']],
    ])
  })
})

describe('given Headers with various headers', () => {
  it('should return their list representation', () => {
    const headers = new Headers({
      Accept: 'application/json',
      'Content-Length': '1234',
      'Content-Type': 'text/xml',
    })
    headers.append('Accept', 'text/plain')

    expect(headersToList(headers)).toEqual([
      ['accept', ['application/json', 'text/plain']],
      ['content-length', '1234'],
      ['content-type', 'text/xml'],
    ])
  })
})
