'use strict'

const { test } = require('node:test')
const { containsDotFile } = require('../lib/containsDotFile')

test('containsDotFile', function (t) {
  const testCases = [
    ['/.github', true],
    ['.github', true],
    ['index.html', false],
    ['./index.html', false]
  ]
  t.plan(testCases.length)

  for (const testCase of testCases) {
    t.assert.deepStrictEqual(containsDotFile(testCase[0].split('/')), testCase[1], testCase[0])
  }
})
