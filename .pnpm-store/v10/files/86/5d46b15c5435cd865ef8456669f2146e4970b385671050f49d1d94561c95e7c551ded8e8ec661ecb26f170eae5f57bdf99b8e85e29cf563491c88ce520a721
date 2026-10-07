'use strict'

const test = require('node:test')
const Request = require('../lib/request')

test('.port parses port correctly', (t) => {
  const fixtures = [
    {
      expected: 80,
      req: {
        headers: {
          host: 'example.com:80'
        }
      }
    },
    {
      expected: 443,
      req: {
        headers: {
          host: 'example.com:443'
        }
      }
    },
    {
      expected: 80,
      req: {
        headers: {
          host: '[::1]:80'
        }
      }
    },
    {
      expected: 443,
      req: {
        headers: {
          host: '[::1]:443'
        }
      }
    },
    {
      expected: null,
      req: {
        headers: {
          host: '[::1]'
        }
      }
    },
    {
      expected: 80,
      req: {
        headers: {
          ':authority': '1.2.3.4:80'
        }
      }
    },
    {
      expected: null,
      req: {
        headers: {}
      }
    }
  ]

  for (const fixture of fixtures) {
    const req = new Request(1, {}, fixture.req, '', {}, {})
    t.assert.equal(
      req.port,
      fixture.expected,
      `${fixture.req.headers.host} should parse to ${fixture.expected}`
    )
  }
})
