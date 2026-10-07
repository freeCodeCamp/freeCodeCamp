'use strict'

const { test } = require('tap')
const pino = require('../browser')

const customLevels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

test('Default levels suite', ({ test, end }) => {
  test('can check if current level enabled', async ({ equal }) => {
    const log = pino({ level: 'debug' })
    equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if current level enabled when as object', async ({ equal }) => {
    const log = pino({ asObject: true, level: 'debug' })
    equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async ({ equal }) => {
    const log = pino()
    equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async ({ equal }) => {
    const log = pino({ level: 'debug' })
    equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async ({ equal }) => {
    const log = pino({ level: 'error' })
    equal(false, log.isLevelEnabled('trace'))
  })

  test('ASC: can check if child has current level enabled', async ({ equal }) => {
    const log = pino().child({}, { level: 'debug' })
    equal(true, log.isLevelEnabled('debug'))
    equal(true, log.isLevelEnabled('error'))
    equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async ({ equal }) => {
    const log = pino({
      customLevels: { foo: 35 },
      level: 'debug'
    })
    equal(true, log.isLevelEnabled('foo'))
    equal(true, log.isLevelEnabled('error'))
    equal(false, log.isLevelEnabled('trace'))
  })

  end()
})

test('Custom levels suite', ({ test, end }) => {
  test('can check if current level enabled', async ({ equal }) => {
    const log = pino({ level: 'debug', customLevels })
    equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async ({ equal }) => {
    const log = pino({ customLevels })
    equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async ({ equal }) => {
    const log = pino({ level: 'debug', customLevels })
    equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async ({ equal }) => {
    const log = pino({ level: 'error', customLevels })
    equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if child has current level enabled', async ({ equal }) => {
    const log = pino().child({ customLevels }, { level: 'debug' })
    equal(true, log.isLevelEnabled('debug'))
    equal(true, log.isLevelEnabled('error'))
    equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async ({ equal }) => {
    const log = pino({
      customLevels: { foo: 35, ...customLevels },
      level: 'debug'
    })
    equal(true, log.isLevelEnabled('foo'))
    equal(true, log.isLevelEnabled('error'))
    equal(false, log.isLevelEnabled('trace'))
  })

  end()
})
