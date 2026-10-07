'use strict'

const tap = require('tap')
const prettifyLevel = require('./prettify-level')
const getColorizer = require('../colors')
const {
  LEVEL_KEY
} = require('../constants')

const context = {
  colorizer: getColorizer(),
  customLevelNames: undefined,
  customLevels: undefined,
  levelKey: LEVEL_KEY,
  customPrettifiers: undefined
}

tap.test('returns `undefined` for unknown level', async t => {
  const colorized = prettifyLevel({
    log: {},
    context: {
      ...context
    }
  })
  t.equal(colorized, undefined)
})

tap.test('returns non-colorized value for default colorizer', async t => {
  const log = {
    level: 30
  }
  const colorized = prettifyLevel({
    log,
    context: {
      ...context
    }
  })
  t.equal(colorized, 'INFO')
})

tap.test('returns colorized value for color colorizer', async t => {
  const log = {
    level: 30
  }
  const colorizer = getColorizer(true)
  const colorized = prettifyLevel({
    log,
    context: {
      ...context,
      colorizer
    }
  })
  t.equal(colorized, '\u001B[32mINFO\u001B[39m')
})

tap.test('passes output through provided prettifier', async t => {
  const log = {
    level: 30
  }
  const colorized = prettifyLevel({
    log,
    context: {
      ...context,
      customPrettifiers: { level () { return 'modified' } }
    }
  })
  t.equal(colorized, 'modified')
})
