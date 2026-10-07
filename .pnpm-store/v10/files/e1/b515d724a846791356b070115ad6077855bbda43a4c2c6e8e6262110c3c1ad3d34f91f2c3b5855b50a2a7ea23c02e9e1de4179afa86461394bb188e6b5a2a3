'use strict'

const { test } = require('node:test')
const { collapseLeadingSlashes } = require('../lib/collapseLeadingSlashes')

test('collapseLeadingSlashes', function (t) {
  const testCases = [
    ['abcd', 'abcd'],
    ['text/json', 'text/json'],
    ['/text/json', '/text/json'],
    ['//text/json', '/text/json'],
    ['///text/json', '/text/json'],
    ['/.//text/json', '/.//text/json'],
    ['//./text/json', '/./text/json'],
    ['///./text/json', '/./text/json']
  ]
  t.plan(testCases.length)

  for (const testCase of testCases) {
    t.assert.deepStrictEqual(collapseLeadingSlashes(testCase[0]), testCase[1])
  }
})
