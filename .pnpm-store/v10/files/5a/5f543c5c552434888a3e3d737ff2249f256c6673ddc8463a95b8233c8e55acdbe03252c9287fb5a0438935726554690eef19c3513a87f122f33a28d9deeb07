'use strict'

const { test } = require('node:test')
const serialize = require('../lib/serialize')

test('serialize boolean', t => {
  t.plan(2)

  t.assert.deepStrictEqual(serialize(true), 'true')
  t.assert.deepStrictEqual(serialize(false), 'false')
})

test('serialize number', t => {
  t.plan(7)

  t.assert.deepStrictEqual(serialize(0), '0')
  t.assert.deepStrictEqual(serialize(1), '1')
  t.assert.deepStrictEqual(serialize(1.0), '1')
  t.assert.deepStrictEqual(serialize(1.01), '1.01')
  t.assert.deepStrictEqual(serialize(Infinity), 'Infinity')
  t.assert.deepStrictEqual(serialize(-Infinity), '-Infinity')
  t.assert.deepStrictEqual(serialize(NaN), 'NaN')
})

test('serialize string', t => {
  t.plan(3)

  t.assert.deepStrictEqual(serialize('0'), '"0"')
  t.assert.deepStrictEqual(serialize('abc'), '"abc"')
  t.assert.deepStrictEqual(serialize('"a'), '"\\\"a"') // eslint-disable-line no-useless-escape
})

test('serialize bigint', t => {
  t.plan(3)

  t.assert.deepStrictEqual(serialize(0n), '0n')
  t.assert.deepStrictEqual(serialize(1000000000n), '1000000000n')
  t.assert.deepStrictEqual(serialize(-9999n), '-9999n')
})

test('serialize function', t => {
  t.plan(7)

  t.assert.deepStrictEqual(serialize(function a () { }), 'function a () { }')
  t.assert.deepStrictEqual(serialize(async function a () { }), 'async function a () { }')
  t.assert.deepStrictEqual(serialize(() => { }), '() => { }')
  t.assert.deepStrictEqual(serialize(async () => { }), 'async () => { }')
  t.assert.deepStrictEqual(serialize(() => Date.now), '() => Date.now')
  t.assert.deepStrictEqual(serialize(function () { }), 'function () { }')
  t.assert.deepStrictEqual(serialize(async function () { }), 'async function () { }')
})

test('serialize undefined', t => {
  t.plan(1)

  t.assert.deepStrictEqual(serialize(undefined), 'undefined')
})

test('serialize symbol', t => {
  t.plan(2)

  t.assert.deepStrictEqual(serialize(Symbol('a')), 'Symbol("a")')
  t.assert.deepStrictEqual(serialize(Symbol()), 'Symbol()') // eslint-disable-line symbol-description
})

test('serialize null', t => {
  t.plan(1)

  t.assert.deepStrictEqual(serialize(null), 'null')
})

test('serialize RegExp', t => {
  t.plan(1)

  t.assert.deepStrictEqual(serialize(/0-9/gi), '/0-9/gi')
})

test('serialize Date', t => {
  t.plan(1)

  t.assert.deepStrictEqual(serialize(new Date(0)), 'new Date(0)')
})

test('serialize Array', t => {
  t.plan(5)

  t.assert.deepStrictEqual(serialize([]), '[]')
  t.assert.deepStrictEqual(serialize(['a']), '["a"]')
  t.assert.deepStrictEqual(serialize([1, 1n, 'a', true]), '[1,1n,"a",true]')
  t.assert.deepStrictEqual(serialize([{}]), '[{}]')
  t.assert.deepStrictEqual(serialize([{ a: [{}] }]), '[{"a":[{}]}]')
})

test('serialize POJO', t => {
  t.plan(3)

  t.assert.deepStrictEqual(serialize({}), '{}')
  t.assert.deepStrictEqual(serialize({ key: 'value' }), '{"key":"value"}')
  t.assert.deepStrictEqual(serialize({ null: null, undefined }), '{"null":null,"undefined":undefined}')
})

test('serialize Set', t => {
  t.plan(3)

  t.assert.deepStrictEqual(serialize(new Set()), 'new Set([])')
  t.assert.deepStrictEqual(serialize(new Set(['a'])), 'new Set(["a"])')
  t.assert.deepStrictEqual(serialize(new Set(['a', {}])), 'new Set(["a",{}])')
})

test('serialize Map', t => {
  t.plan(3)

  t.assert.deepStrictEqual(serialize(new Map()), 'new Map([])')
  t.assert.deepStrictEqual(serialize(new Map([['a', 1]])), 'new Map([["a",1]])')
  const map = new Map()
  map.set('b', 1)

  t.assert.deepStrictEqual(serialize(map), 'new Map([["b",1]])')
})
