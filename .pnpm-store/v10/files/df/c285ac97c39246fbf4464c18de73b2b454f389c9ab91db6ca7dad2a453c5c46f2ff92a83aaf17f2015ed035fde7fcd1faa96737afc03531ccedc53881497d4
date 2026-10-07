'use strict'

const { test } = require('node:test')
const { normalizeList } = require('../lib/normalizeList')

test('normalizeList', function (t) {
  const testCases = [
    [undefined, new TypeError('test must be array of strings or false')],
    [false, []],
    [[], []],
    ['', ['']],
    [[''], ['']],
    [['a'], ['a']],
    ['a', ['a']],
    [true, new TypeError('test must be array of strings or false')],
    [1, new TypeError('test must be array of strings or false')],
    [[1], new TypeError('test must be array of strings or false')]
  ]
  t.plan(testCases.length)

  for (const testCase of testCases) {
    if (testCase[1] instanceof Error) {
      t.assert.throws(() => normalizeList(testCase[0], 'test'), testCase[1])
    } else {
      t.assert.deepStrictEqual(normalizeList(testCase[0], 'test'), testCase[1])
    }
  }
})
