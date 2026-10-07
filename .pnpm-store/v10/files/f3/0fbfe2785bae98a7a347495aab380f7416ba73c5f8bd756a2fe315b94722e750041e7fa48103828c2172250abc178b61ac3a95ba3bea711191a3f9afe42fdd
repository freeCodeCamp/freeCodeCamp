'use strict'

const { test } = require('node:test')
const { isUtf8MimeType } = require('../lib/isUtf8MimeType')

test('isUtf8MimeType', function (t) {
  const testCases = [
    ['application/json', true],
    ['text/json', true],
    ['application/javascript', true],
    ['text/javascript', true],
    ['application/json+v5', true],
    ['text/xml', true],
    ['text/html', true],
    ['image/png', false]
  ]
  t.plan(testCases.length)

  for (const testCase of testCases) {
    t.assert.deepStrictEqual(isUtf8MimeType(testCase[0], 'test'), testCase[1])
  }
})
