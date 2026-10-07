'use strict'

const test = require('tape')
const {
  stringArrayToHexStripped
} = require('../lib/utils')

test('stringArrayToHexStripped', (t) => {
  const testCases = [
    [[['0', '0', '0', '0']], ''],
    [[['0', '0', '0', '0'], false], ''],
    [[['0', '0', '0', '0'], true], '0'],
    [[['0', '1', '0', '0'], false], '100'],
    [[['1', '0', '0', '0'], false], '1000'],
    [[['1', '0', '0', '0'], true], '1000']
  ]

  t.plan(testCases.length)

  testCases.forEach(([input, expected]) => {
    t.same(stringArrayToHexStripped(input[0], input[1]), expected)
  })
})
