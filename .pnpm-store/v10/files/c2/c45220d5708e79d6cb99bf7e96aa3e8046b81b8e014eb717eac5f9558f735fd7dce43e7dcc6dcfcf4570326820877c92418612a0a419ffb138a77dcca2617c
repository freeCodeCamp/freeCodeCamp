'use strict'

const { test } = require('tap')
const { join } = require('node:path')
const execa = require('execa')
const writer = require('flush-write-stream')
const { once } = require('./helper')

// https://github.com/pinojs/pino/issues/542
test('pino.destination log everything when calling process.exit(0)', async ({ not }) => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'destination-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  not(actual.match(/hello/), null)
  not(actual.match(/world/), null)
})

test('pino with no args log everything when calling process.exit(0)', async ({ not }) => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'default-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  not(actual.match(/hello/), null)
  not(actual.match(/world/), null)
})

test('sync false logs everything when calling process.exit(0)', async ({ not }) => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'syncfalse-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  not(actual.match(/hello/), null)
  not(actual.match(/world/), null)
})

test('sync false logs everything when calling flushSync', async ({ not }) => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'syncfalse-flush-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  not(actual.match(/hello/), null)
  not(actual.match(/world/), null)
})

test('transports exits gracefully when logging in exit', async ({ equal }) => {
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'transport-with-on-exit.js')])
  child.stdout.resume()

  const code = await once(child, 'close')

  equal(code, 0)
})
