'use strict'

const tap = require('tap')
const handleCustomLevelsNamesOpts = require('./handle-custom-levels-names-opts')

tap.test('returns a empty object `{}` for undefined parameter', async t => {
  const handledCustomLevelNames = handleCustomLevelsNamesOpts()
  t.same(handledCustomLevelNames, {})
})

tap.test('returns a empty object `{}` for unknown parameter', async t => {
  const handledCustomLevelNames = handleCustomLevelsNamesOpts(123)
  t.same(handledCustomLevelNames, {})
})

tap.test('returns a filled object for string parameter', async t => {
  const handledCustomLevelNames = handleCustomLevelsNamesOpts('ok:10,warn:20,error:35')
  t.same(handledCustomLevelNames, {
    ok: 10,
    warn: 20,
    error: 35
  })
})

tap.test('returns a filled object for object parameter', async t => {
  const handledCustomLevelNames = handleCustomLevelsNamesOpts({
    ok: 10,
    warn: 20,
    error: 35
  })
  t.same(handledCustomLevelNames, {
    ok: 10,
    warn: 20,
    error: 35
  })
})

tap.test('defaults missing level num to first index', async t => {
  const result = handleCustomLevelsNamesOpts('ok:10,info')
  t.same(result, {
    ok: 10,
    info: 1
  })
})
