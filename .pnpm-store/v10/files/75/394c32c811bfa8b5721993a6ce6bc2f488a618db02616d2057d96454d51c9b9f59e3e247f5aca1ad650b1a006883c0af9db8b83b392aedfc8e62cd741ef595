'use strict'

const { test } = require('node:test')
const { counTests, runTests } = require('./util')

const requiredTestSuite = require('./draft6/required.json')

test('required', async (t) => {
  const skippedTests = ['ignores arrays', 'ignores strings', 'ignores other non-objects']
  t.plan(counTests(requiredTestSuite, skippedTests))
  await runTests(t, requiredTestSuite, skippedTests)
})
