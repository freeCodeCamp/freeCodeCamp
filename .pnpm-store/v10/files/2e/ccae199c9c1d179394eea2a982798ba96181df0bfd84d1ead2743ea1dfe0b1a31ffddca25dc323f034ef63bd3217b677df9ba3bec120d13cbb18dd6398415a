'use strict'

const { join } = require('node:path')
const { test } = require('tap')
const execa = require('execa')

test('when using a custom transport outside node_modules, the first file outside node_modules should be used', async function (t) {
  const evalApp = join(__dirname, '../', '/fixtures/eval/index.js')
  const { stdout } = await execa(process.argv[0], [evalApp])
  t.match(stdout, /done!/)
})

test('when using a custom transport where some files in stacktrace are in the node_modules, the first file outside node_modules should be used', async function (t) {
  const evalApp = join(__dirname, '../', '/fixtures/eval/node_modules/2-files.js')
  const { stdout } = await execa(process.argv[0], [evalApp])
  t.match(stdout, /done!/)
})

test('when using a custom transport where all files in stacktrace are in the node_modules, the first file inside node_modules should be used', async function (t) {
  const evalApp = join(__dirname, '../', '/fixtures/eval/node_modules/14-files.js')
  const { stdout } = await execa(process.argv[0], [evalApp])
  t.match(stdout, /done!/)
})
