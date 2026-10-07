'use strict'

/* eslint no-prototype-builtins: 0 */

const { test } = require('tap')
const { sink, once } = require('./helper')

test('pino.stdTimeFunctions.isoTimeNano returns RFC 3339 timestamps', async ({ equal }) => {
  // Mock Date.now at module initialization time
  const now = Date.now
  Date.now = () => new Date('2025-08-01T15:03:45.000000000Z').getTime()

  // Mock process.hrtime.bigint at module initialization time
  const hrTimeBigint = process.hrtime.bigint
  process.hrtime.bigint = () => 100000000000000n

  const pino = require('../')

  const opts = {
    timestamp: pino.stdTimeFunctions.isoTimeNano
  }
  const stream = sink()

  // Mock process.hrtime.bigint at invocation time, add 1 day to the timestamp
  process.hrtime.bigint = () => 100000000000000n + 86400012345678n

  const instance = pino(opts, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  equal(result.time, '2025-08-02T15:03:45.012345678Z')

  Date.now = now
  process.hrtime.bigint = hrTimeBigint
})
