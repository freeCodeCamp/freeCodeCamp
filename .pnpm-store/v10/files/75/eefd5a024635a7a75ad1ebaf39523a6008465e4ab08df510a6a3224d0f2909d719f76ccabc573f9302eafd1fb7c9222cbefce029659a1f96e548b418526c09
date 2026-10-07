'use strict'

const { test } = require('tap')
const { spawnSync } = require('node:child_process')
const { resolve } = require('node:path')

const entry = resolve(__dirname, '../examples', 'example.js')

test('--no-warnings is set in cli', t => {
  t.plan(1)
  const child = spawnSync(process.execPath, [
    '--no-warnings',
    entry
  ])

  const stderr = child.stderr.toString()
  t.equal(stderr, '')
})

test('--no-warnings is not set in cli', t => {
  t.plan(1)
  const child = spawnSync(process.execPath, [
    entry
  ])

  const stderr = child.stderr.toString()
  t.match(stderr, /\[CUSTDEP001\] DeprecationWarning: This is a deprecation warning/)
})

test('NODE_NO_WARNINGS is set to 1', t => {
  t.plan(1)
  const child = spawnSync(process.execPath, [
    entry
  ], {
    env: {
      NODE_NO_WARNINGS: '1'
    }
  })

  const stderr = child.stderr.toString()
  t.equal(stderr, '')
})

test('NODE_NO_WARNINGS is set to 0', t => {
  t.plan(1)
  const child = spawnSync(process.execPath, [
    entry
  ], {
    env: {
      NODE_NO_WARNINGS: '0'
    }
  })

  const stderr = child.stderr.toString()
  t.match(stderr, /\[CUSTDEP001\] DeprecationWarning: This is a deprecation warning/)
})

test('NODE_NO_WARNINGS is not set', t => {
  t.plan(1)
  const child = spawnSync(process.execPath, [
    entry
  ])

  const stderr = child.stderr.toString()
  t.match(stderr, /\[CUSTDEP001\] DeprecationWarning: This is a deprecation warning/)
})

test('NODE_Options contains --no-warnings', t => {
  t.plan(1)
  const child = spawnSync(process.execPath, [
    entry
  ], {
    env: {
      NODE_OPTIONS: '--no-warnings'
    }
  })

  const stderr = child.stderr.toString()
  t.equal(stderr, '')
})
