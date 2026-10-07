'use strict'

const { test } = require('tap')
const { join } = require('node:path')
const { fork } = require('node:child_process')
const { once } = require('./helper')
const writer = require('flush-write-stream')
const pino = require('..')

test('do not use SonicBoom is someone tampered with process.stdout.write', async ({ not }) => {
  let actual = ''
  const child = fork(join(__dirname, 'fixtures', 'stdout-hack-protection.js'), { silent: true })

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))
  await once(child, 'close')
  not(actual.match(/^hack/), null)
})

test('do not use SonicBoom is someone has passed process.stdout to pino', async ({ equal }) => {
  const logger = pino(process.stdout)
  equal(logger[pino.symbols.streamSym], process.stdout)
})

test('do not crash if process.stdout has no fd', async ({ teardown }) => {
  const fd = process.stdout.fd
  delete process.stdout.fd
  teardown(function () { process.stdout.fd = fd })
  pino()
})

test('use fd=1 if process.stdout has no fd in pino.destination() (worker case)', async ({ teardown }) => {
  const fd = process.stdout.fd
  delete process.stdout.fd
  teardown(function () { process.stdout.fd = fd })
  pino.destination()
})
