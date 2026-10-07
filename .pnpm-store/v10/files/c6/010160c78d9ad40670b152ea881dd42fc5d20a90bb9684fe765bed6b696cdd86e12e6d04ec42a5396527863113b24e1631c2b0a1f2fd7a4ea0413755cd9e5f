'use strict'

const t = require('tap')
const { join } = require('node:path')
const { fork } = require('node:child_process')
const { once } = require('./helper')
const pino = require('..')

if (process.platform === 'win32') {
  t.skip('skipping on windows')
  process.exit(0)
}

if (process.env.CITGM) {
  // This looks like a some form of limitations of the CITGM test runner
  // or the HW/SW we run it on. This file can hang on Node.js v18.x.
  // The failure does not reproduce locally or on our CI.
  // Skipping it is the only way to keep pino in CITGM.
  // https://github.com/nodejs/citgm/pull/1002#issuecomment-1751942988
  t.skip('Skipping on Node.js core CITGM because it hangs on v18.x')
  process.exit(0)
}

function test (file) {
  file = join('fixtures', 'broken-pipe', file)
  t.test(file, { parallel: true }, async ({ equal }) => {
    const child = fork(join(__dirname, file), { silent: true })
    child.stdout.destroy()

    child.stderr.pipe(process.stdout)

    const res = await once(child, 'close')
    equal(res, 0) // process exits successfully
  })
}

t.jobs = 42

test('basic.js')
test('destination.js')
test('syncfalse.js')

t.test('let error pass through', ({ equal, plan }) => {
  plan(3)
  const stream = pino.destination({ sync: true })

  // side effect of the pino constructor is that it will set an
  // event handler for error
  pino(stream)

  process.nextTick(() => stream.emit('error', new Error('kaboom')))
  process.nextTick(() => stream.emit('error', new Error('kaboom')))

  stream.on('error', (err) => {
    equal(err.message, 'kaboom')
  })
})
