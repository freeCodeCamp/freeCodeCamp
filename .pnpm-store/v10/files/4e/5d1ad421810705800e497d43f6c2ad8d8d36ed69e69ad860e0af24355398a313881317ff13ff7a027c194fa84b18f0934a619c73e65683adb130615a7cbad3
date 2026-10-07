'use strict'

const { test } = require('node:test')
const decorator = require('../../lib/decorate')
const {
  kState
} = require('../../lib/symbols')

test('decorate should add the given method to its instance', t => {
  t.plan(1)
  function build () {
    server.add = decorator.add
    server[kState] = {
      listening: false,
      closing: false,
      started: false
    }
    return server
    function server () {}
  }

  const server = build()
  server.add('test', () => {})
  t.assert.ok(server.test)
})

test('decorate is chainable', t => {
  t.plan(3)
  function build () {
    server.add = decorator.add
    server[kState] = {
      listening: false,
      closing: false,
      started: false
    }
    return server
    function server () {}
  }

  const server = build()
  server
    .add('test1', () => {})
    .add('test2', () => {})
    .add('test3', () => {})

  t.assert.ok(server.test1)
  t.assert.ok(server.test2)
  t.assert.ok(server.test3)
})

test('checkExistence should check if a property is part of the given instance', t => {
  t.plan(1)
  const instance = { test: () => {} }
  t.assert.ok(decorator.exist(instance, 'test'))
})

test('checkExistence should find the instance if not given', t => {
  t.plan(1)
  function build () {
    server.add = decorator.add
    server.check = decorator.exist
    server[kState] = {
      listening: false,
      closing: false,
      started: false
    }
    return server
    function server () {}
  }

  const server = build()
  server.add('test', () => {})
  t.assert.ok(server.check('test'))
})

test('checkExistence should check the prototype as well', t => {
  t.plan(1)
  function Instance () {}
  Instance.prototype.test = () => {}

  const instance = new Instance()
  t.assert.ok(decorator.exist(instance, 'test'))
})

test('checkDependencies should throw if a dependency is not present', t => {
  t.plan(2)
  const instance = {}
  try {
    decorator.dependencies(instance, 'foo', ['test'])
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_DEC_MISSING_DEPENDENCY')
    t.assert.strictEqual(e.message, 'The decorator is missing dependency \'test\'.')
  }
})

test('decorate should internally call checkDependencies', t => {
  t.plan(2)
  function build () {
    server.add = decorator.add
    server[kState] = {
      listening: false,
      closing: false,
      started: false
    }
    return server
    function server () {}
  }

  const server = build()

  try {
    server.add('method', () => {}, ['test'])
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_DEC_MISSING_DEPENDENCY')
    t.assert.strictEqual(e.message, 'The decorator is missing dependency \'test\'.')
  }
})

test('decorate should recognize getter/setter objects', t => {
  t.plan(6)

  const one = {
    [kState]: {
      listening: false,
      closing: false,
      started: false
    }
  }
  decorator.add.call(one, 'foo', {
    getter: () => this._a,
    setter: (val) => {
      t.assert.ok(true)
      this._a = val
    }
  })
  t.assert.strictEqual(Object.hasOwn(one, 'foo'), true)
  t.assert.strictEqual(one.foo, undefined)
  one.foo = 'a'
  t.assert.strictEqual(one.foo, 'a')

  // getter only
  const two = {
    [kState]: {
      listening: false,
      closing: false,
      started: false
    }
  }
  decorator.add.call(two, 'foo', {
    getter: () => 'a getter'
  })
  t.assert.strictEqual(Object.hasOwn(two, 'foo'), true)
  t.assert.strictEqual(two.foo, 'a getter')
})
