'use strict'

const { test } = require('tap')
const { fork } = require('child_process')
const { join } = require('path')
const { once } = require('events')
const { register } = require('..')

const files = [
  'close.js',
  'beforeExit',
  'gc-not-close.js',
  'unregister.js'
]

for (const file of files) {
  test(file, async ({ equal }) => {
    const child = fork(join(__dirname, 'fixtures', file), [], {
      execArgv: ['--expose-gc']
    })

    const [code] = await once(child, 'close')

    equal(code, 0)
  })
}

test('undefined', async ({ throws }) => {
  throws(() => register(undefined))
})
