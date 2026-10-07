'use strict'

const tap = require('tap')
const filterLog = require('./filter-log')

const context = {
  includeKeys: undefined,
  ignoreKeys: undefined
}
const logData = {
  level: 30,
  time: 1522431328992,
  data1: {
    data2: { 'data-3': 'bar' },
    error: new Error('test')
  }
}
const logData2 = Object.assign({
  'logging.domain.corp/operation': {
    id: 'foo',
    producer: 'bar'
  }
}, logData)

tap.test('#filterLog with an ignoreKeys option', t => {
  t.test('filterLog removes single entry', async t => {
    const result = filterLog({
      log: logData,
      context: {
        ...context,
        ignoreKeys: ['data1.data2.data-3']
      }
    })
    t.same(result, { level: 30, time: 1522431328992, data1: { data2: { }, error: new Error('test') } })
  })

  t.test('filterLog removes multiple entries', async t => {
    const result = filterLog({
      log: logData,
      context: {
        ...context,
        ignoreKeys: ['time', 'data1']
      }
    })
    t.same(result, { level: 30 })
  })

  t.test('filterLog keeps error instance', async t => {
    const result = filterLog({
      log: logData,
      context: {
        ...context,
        ignoreKeys: []
      }
    })
    t.equal(logData.data1.error, result.data1.error)
  })

  t.test('filterLog removes entry with escape sequence', async t => {
    const result = filterLog({
      log: logData2,
      context: {
        ...context,
        ignoreKeys: ['data1', 'logging\\.domain\\.corp/operation']
      }
    })
    t.same(result, { level: 30, time: 1522431328992 })
  })

  t.test('filterLog removes entry with escape sequence nested', async t => {
    const result = filterLog({
      log: logData2,
      context: {
        ...context,
        ignoreKeys: ['data1', 'logging\\.domain\\.corp/operation.producer']
      }
    })
    t.same(result, { level: 30, time: 1522431328992, 'logging.domain.corp/operation': { id: 'foo' } })
  })

  t.end()
})

const ignoreKeysArray = [
  undefined,
  ['level'],
  ['level', 'data1.data2.data-3']
]
ignoreKeysArray.forEach(ignoreKeys => {
  tap.test(`#filterLog with an includeKeys option when the ignoreKeys being ${ignoreKeys}`, t => {
    t.test('filterLog include nothing', async t => {
      const result = filterLog({
        log: logData,
        context: {
          ...context,
          ignoreKeys,
          includeKeys: []
        }
      })
      t.same(result, {})
    })

    t.test('filterLog include single entry', async t => {
      const result = filterLog({
        log: logData,
        context: {
          ...context,
          ignoreKeys,
          includeKeys: ['time']
        }
      })
      t.same(result, { time: 1522431328992 })
    })

    t.test('filterLog include multiple entries', async t => {
      const result = filterLog({
        log: logData,
        context: {
          ...context,
          ignoreKeys,
          includeKeys: ['time', 'data1']
        }
      })
      t.same(result, {
        time: 1522431328992,
        data1: {
          data2: { 'data-3': 'bar' },
          error: new Error('test')
        }
      })
    })

    t.end()
  })
})

tap.test('#filterLog with circular references', t => {
  const logData = {
    level: 30,
    time: 1522431328992,
    data1: 'test'
  }
  logData.circular = logData

  t.test('filterLog removes single entry', async t => {
    const result = filterLog({
      log: logData,
      context: {
        ...context,
        ignoreKeys: ['data1']
      }
    })

    t.same(result.circular.level, result.level)
    t.same(result.circular.time, result.time)

    delete result.circular
    t.same(result, { level: 30, time: 1522431328992 })
  })

  t.test('filterLog includes single entry', async t => {
    const result = filterLog({
      log: logData,
      context: {
        ...context,
        includeKeys: ['data1']
      }
    })

    t.same(result, { data1: 'test' })
  })

  t.test('filterLog includes circular keys', async t => {
    const result = filterLog({
      log: logData,
      context: {
        ...context,
        includeKeys: ['level', 'circular']
      }
    })

    t.same(result.circular.level, logData.level)
    t.same(result.circular.time, logData.time)

    delete result.circular
    t.same(result, { level: 30 })
  })

  t.end()
})
