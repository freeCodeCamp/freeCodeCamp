/**
 * @jest-environment jsdom
 */
import { headersToString } from './headersToString'
import { Headers } from '../Headers'

describe('headersToString', () => {
  describe('given a standard Headers instance', () => {
    it('returns its string representation', () => {
      const headers = new Headers({
        date: 'Fri, 08 Dec 2017 21:04:30 GMT',
        'content-encoding': 'gzip',
        'content-type': 'text/html; charset=utf-8',
        connection: 'keep-alive',
        'content-length': '6502',
      })

      expect(headersToString(headers)).toEqual(
        `
connection: keep-alive\r
content-encoding: gzip\r
content-length: 6502\r
content-type: text/html; charset=utf-8\r
date: Fri, 08 Dec 2017 21:04:30 GMT\r
      `.trim()
      )
    })
  })

  describe('given a polyfill Headers instance', () => {
    it('returns its string representation', () => {
      const headers = new Headers({
        date: 'Fri, 08 Dec 2017 21:04:30 GMT',
        'content-encoding': 'gzip',
        'content-type': 'text/html; charset=utf-8',
        connection: 'keep-alive',
        'content-length': '6502',
      })

      expect(headersToString(headers)).toEqual(
        `
connection: keep-alive\r
content-encoding: gzip\r
content-length: 6502\r
content-type: text/html; charset=utf-8\r
date: Fri, 08 Dec 2017 21:04:30 GMT\r
      `.trim()
      )
    })
  })
})
