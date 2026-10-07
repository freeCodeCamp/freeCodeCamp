'use strict'

const { test } = require('tap')
const { getPluginName } = require('../../lib/get-plugin-name')
const { kPluginMeta } = require('../../lib/symbols')

test('getPluginName of function', (t) => {
  t.plan(1)

  t.equal(getPluginName(function aPlugin () { }), 'aPlugin')
})

test('getPluginName of async function', (t) => {
  t.plan(1)

  t.equal(getPluginName(async function aPlugin () { }), 'aPlugin')
})

test('getPluginName of arrow function without name', (t) => {
  t.plan(2)

  t.equal(getPluginName(() => { }), '() => { }')
  t.equal(getPluginName(() => { return 'random' }), '() => { return \'random\' }')
})

test('getPluginName of arrow function assigned to variable', (t) => {
  t.plan(1)

  const namedArrowFunction = () => { }
  t.equal(getPluginName(namedArrowFunction), 'namedArrowFunction')
})

test("getPluginName based on Symbol 'plugin-meta' /1", (t) => {
  t.plan(1)

  function plugin () {

  }

  plugin[kPluginMeta] = {}
  t.equal(getPluginName(plugin), 'plugin')
})

test("getPluginName based on Symbol 'plugin-meta' /2", (t) => {
  t.plan(1)

  function plugin () {

  }

  plugin[kPluginMeta] = {
    name: 'fastify-non-existent'
  }
  t.equal(getPluginName(plugin), 'fastify-non-existent')
})

test('getPluginName if null is provided as options', (t) => {
  t.plan(1)

  t.equal(getPluginName(function a () {}, null), 'a')
})

test('getPluginName if name is provided in options', (t) => {
  t.plan(1)

  t.equal(getPluginName(function defaultName () {}, { name: 'providedName' }), 'providedName')
})
