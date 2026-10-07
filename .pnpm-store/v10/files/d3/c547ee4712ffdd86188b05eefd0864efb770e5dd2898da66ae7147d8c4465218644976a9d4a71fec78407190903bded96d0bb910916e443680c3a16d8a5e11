'use strict'

const { test } = require('tap')
const { sink, once } = require('./helper')
const pino = require('../')

const level = 50
const name = 'error'

test('default merge strategy', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    base: {},
    mixin () {
      return { tag: 'k8s' }
    }
  }, stream)
  instance.level = name
  instance[name]({
    tag: 'local'
  }, 'test')
  const result = await once(stream, 'data')
  ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  same(result, {
    level,
    msg: 'test',
    tag: 'local'
  })
})

test('custom merge strategy with mixin priority', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    base: {},
    mixin () {
      return { tag: 'k8s' }
    },
    mixinMergeStrategy (mergeObject, mixinObject) {
      return Object.assign(mergeObject, mixinObject)
    }
  }, stream)
  instance.level = name
  instance[name]({
    tag: 'local'
  }, 'test')
  const result = await once(stream, 'data')
  ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  same(result, {
    level,
    msg: 'test',
    tag: 'k8s'
  })
})
