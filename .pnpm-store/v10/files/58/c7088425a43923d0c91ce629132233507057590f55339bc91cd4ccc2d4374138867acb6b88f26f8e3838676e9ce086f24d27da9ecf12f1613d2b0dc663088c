'use strict'

process.env.TZ = 'UTC'

const tap = require('tap')
const prettifyTime = require('./prettify-time')
const {
  TIMESTAMP_KEY
} = require('../constants')
const context = {
  timestampKey: TIMESTAMP_KEY,
  translateTime: true,
  customPrettifiers: {}
}

tap.test('returns `undefined` if `time` or `timestamp` not in log', async t => {
  const str = prettifyTime({ log: {}, context })
  t.equal(str, undefined)
})

tap.test('returns prettified formatted time from custom field', async t => {
  const log = { customtime: 1554642900000 }
  let str = prettifyTime({
    log,
    context: {
      ...context,
      timestampKey: 'customtime'
    }
  })
  t.equal(str, '[13:15:00.000]')

  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: false,
      timestampKey: 'customtime'
    }
  })
  t.equal(str, '[1554642900000]')
})

tap.test('returns prettified formatted time', async t => {
  let log = { time: 1554642900000 }
  let str = prettifyTime({
    log,
    context: {
      ...context
    }
  })
  t.equal(str, '[13:15:00.000]')

  log = { timestamp: 1554642900000 }
  str = prettifyTime({
    log,
    context: {
      ...context
    }
  })
  t.equal(str, '[13:15:00.000]')

  log = { time: '2019-04-07T09:15:00.000-04:00' }
  str = prettifyTime({
    log,
    context: {
      ...context
    }
  })
  t.equal(str, '[13:15:00.000]')

  log = { timestamp: '2019-04-07T09:15:00.000-04:00' }
  str = prettifyTime({
    log,
    context: {
      ...context
    }
  })
  t.equal(str, '[13:15:00.000]')

  log = { time: 1554642900000 }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: 'd mmm yyyy H:MM'
    }
  })
  t.equal(str, '[7 Apr 2019 13:15]')

  log = { timestamp: 1554642900000 }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: 'd mmm yyyy H:MM'
    }
  })
  t.equal(str, '[7 Apr 2019 13:15]')

  log = { time: '2019-04-07T09:15:00.000-04:00' }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: 'd mmm yyyy H:MM'
    }
  })
  t.equal(str, '[7 Apr 2019 13:15]')

  log = { timestamp: '2019-04-07T09:15:00.000-04:00' }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: 'd mmm yyyy H:MM'
    }
  })
  t.equal(str, '[7 Apr 2019 13:15]')
})

tap.test('passes through value', async t => {
  let log = { time: 1554642900000 }
  let str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: undefined
    }
  })
  t.equal(str, '[1554642900000]')

  log = { timestamp: 1554642900000 }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: undefined
    }
  })
  t.equal(str, '[1554642900000]')

  log = { time: '2019-04-07T09:15:00.000-04:00' }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: undefined
    }
  })
  t.equal(str, '[2019-04-07T09:15:00.000-04:00]')

  log = { timestamp: '2019-04-07T09:15:00.000-04:00' }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: undefined
    }
  })
  t.equal(str, '[2019-04-07T09:15:00.000-04:00]')
})

tap.test('handles the 0 timestamp', async t => {
  let log = { time: 0 }
  let str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: undefined
    }
  })
  t.equal(str, '[0]')

  log = { timestamp: 0 }
  str = prettifyTime({
    log,
    context: {
      ...context,
      translateTime: undefined
    }
  })
  t.equal(str, '[0]')
})

tap.test('works with epoch as a number or string', (t) => {
  t.plan(3)
  const epoch = 1522431328992
  const asNumber = prettifyTime({
    log: { time: epoch, msg: 'foo' },
    context: {
      ...context,
      translateTime: true
    }
  })
  const asString = prettifyTime({
    log: { time: `${epoch}`, msg: 'foo' },
    context: {
      ...context,
      translateTime: true
    }
  })
  const invalid = prettifyTime({
    log: { time: '2 days ago', msg: 'foo' },
    context: {
      ...context,
      translateTime: true
    }
  })
  t.same(asString, '[17:35:28.992]')
  t.same(asNumber, '[17:35:28.992]')
  t.same(invalid, '[2 days ago]')
})

tap.test('uses custom prettifier', async t => {
  const str = prettifyTime({
    log: { time: 0 },
    context: {
      ...context,
      customPrettifiers: {
        time () {
          return 'done'
        }
      }
    }
  })
  t.equal(str, 'done')
})
