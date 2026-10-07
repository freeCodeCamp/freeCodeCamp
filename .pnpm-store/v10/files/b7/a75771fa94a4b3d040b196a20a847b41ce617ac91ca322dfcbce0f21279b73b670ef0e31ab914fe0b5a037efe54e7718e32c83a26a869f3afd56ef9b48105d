'use strict'

const { test } = require('node:test')
const fs = require('node:fs')
const path = require('node:path')
const { loadESLint } = require('eslint')

const { code } = require('../../build/build-error-serializer')

function unifyLineBreak (str) {
  return str.toString().replace(/\r\n/g, '\n')
}

test('check generated code syntax', async (t) => {
  t.plan(1)

  // standard is a esm, we import it like this
  const Eslint = await loadESLint({ useFlatConfig: true })
  const eslint = new Eslint()
  const result = await eslint.lintText(code)

  // if there are any invalid syntax
  // fatal count will be greater than 0
  t.assert.strictEqual(result[0].fatalErrorCount, 0)
})

const isPrepublish = !!process.env.PREPUBLISH

test('ensure the current error serializer is latest', { skip: !isPrepublish }, async (t) => {
  t.plan(1)

  const current = await fs.promises.readFile(path.resolve('lib/error-serializer.js'))

  // line break should not be a problem depends on system
  t.assert.strictEqual(unifyLineBreak(current), unifyLineBreak(code))
})
