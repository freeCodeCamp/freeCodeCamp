'use strict'

const { test } = require('tap')
const rfdc = require('..')
const cloneDefault = require('../default')
const clone = rfdc()
const cloneProto = rfdc({ proto: true })
const cloneCircles = rfdc({ circles: true })
const cloneCirclesProto = rfdc({ circles: true, proto: true })

const rnd = (max) => Math.round(Math.random() * max)

types(clone, 'default')
types(cloneProto, 'proto option')
types(cloneCircles, 'circles option')
types(cloneCirclesProto, 'circles and proto option')

test('default – does not copy proto properties', async ({ is }) => {
  is(clone(Object.create({ a: 1 })).a, undefined, 'value not copied')
})
test('default – shorthand import', async ({ same }) => {
  same(
    clone(Object.create({ a: 1 })),
    cloneDefault(Object.create({ a: 1 })),
    'import equals clone with default options'
  )
})
test('proto option – copies enumerable proto properties', async ({ is }) => {
  is(cloneProto(Object.create({ a: 1 })).a, 1, 'value copied')
})
test('circles option - circular object', async ({ same, is, isNot }) => {
  const o = { nest: { a: 1, b: 2 } }
  o.circular = o
  same(cloneCircles(o), o, 'same values')
  isNot(cloneCircles(o), o, 'different objects')
  isNot(cloneCircles(o).nest, o.nest, 'different nested objects')
  const c = cloneCircles(o)
  is(c.circular, c, 'circular references point to copied parent')
  isNot(c.circular, o, 'circular references do not point to original parent')
})
test('circles option – deep circular object', async ({ same, is, isNot }) => {
  const o = { nest: { a: 1, b: 2 } }
  o.nest.circular = o
  same(cloneCircles(o), o, 'same values')
  isNot(cloneCircles(o), o, 'different objects')
  isNot(cloneCircles(o).nest, o.nest, 'different nested objects')
  const c = cloneCircles(o)
  is(c.nest.circular, c, 'circular references point to copied parent')
  isNot(
    c.nest.circular,
    o,
    'circular references do not point to original parent'
  )
})
test('circles option alone – does not copy proto properties', async ({
  is
}) => {
  is(cloneCircles(Object.create({ a: 1 })).a, undefined, 'value not copied')
})
test('circles and proto option – copies enumerable proto properties', async ({
  is
}) => {
  is(cloneCirclesProto(Object.create({ a: 1 })).a, 1, 'value copied')
})
test('circles and proto option - circular object', async ({
  same,
  is,
  isNot
}) => {
  const o = { nest: { a: 1, b: 2 } }
  o.circular = o
  same(cloneCirclesProto(o), o, 'same values')
  isNot(cloneCirclesProto(o), o, 'different objects')
  isNot(cloneCirclesProto(o).nest, o.nest, 'different nested objects')
  const c = cloneCirclesProto(o)
  is(c.circular, c, 'circular references point to copied parent')
  isNot(c.circular, o, 'circular references do not point to original parent')
})
test('circles and proto option – deep circular object', async ({
  same,
  is,
  isNot
}) => {
  const o = { nest: { a: 1, b: 2 } }
  o.nest.circular = o
  same(cloneCirclesProto(o), o, 'same values')
  isNot(cloneCirclesProto(o), o, 'different objects')
  isNot(cloneCirclesProto(o).nest, o.nest, 'different nested objects')
  const c = cloneCirclesProto(o)
  is(c.nest.circular, c, 'circular references point to copied parent')
  isNot(
    c.nest.circular,
    o,
    'circular references do not point to original parent'
  )
})
test('circles and proto option – deep circular array', async ({
  same,
  is,
  isNot
}) => {
  const o = { nest: [1, 2] }
  o.nest.push(o)
  same(cloneCirclesProto(o), o, 'same values')
  isNot(cloneCirclesProto(o), o, 'different objects')
  isNot(cloneCirclesProto(o).nest, o.nest, 'different nested objects')
  const c = cloneCirclesProto(o)
  is(c.nest[2], c, 'circular references point to copied parent')
  isNot(c.nest[2], o, 'circular references do not point to original parent')
})
test('custom constructor handler', async ({ same, ok, isNot }) => {
  class Foo {
    constructor (s) {
      this.s = s
    }
  }
  const data = { foo: new Foo('foo') }
  const cloned = rfdc({ constructorHandlers: [[Foo, (o) => new Foo(o.s)]] })(data)
  ok(cloned.foo instanceof Foo)
  same(cloned.foo.s, data.foo.s, 'same values')
  isNot(cloned.foo, data.foo, 'different objects')
})
test('custom RegExp handler', async ({ same, ok, isNot }) => {
  const data = { regex: /foo/ }
  const cloned = rfdc({ constructorHandlers: [[RegExp, (o) => new RegExp(o)]] })(data)
  isNot(cloned.regex, data.regex, 'different objects')
  ok(cloned.regex.test('foo'))
})

function types (clone, label) {
  test(label + ' – number', async ({ is }) => {
    is(clone(42), 42, 'same value')
  })
  test(label + ' – string', async ({ is }) => {
    is(clone('str'), 'str', 'same value')
  })
  test(label + ' – boolean', async ({ is }) => {
    is(clone(true), true, 'same value')
  })
  test(label + ' – function', async ({ is }) => {
    const fn = () => {}
    is(clone(fn), fn, 'same function')
  })
  test(label + ' – async function', async ({ is }) => {
    const fn = async () => {}
    is(clone(fn), fn, 'same function')
  })
  test(label + ' – generator function', async ({ is }) => {
    const fn = function * () {}
    is(clone(fn), fn, 'same function')
  })
  test(label + ' – date', async ({ is, isNot }) => {
    const date = new Date()
    is(+clone(date), +date, 'same value')
    isNot(clone(date), date, 'different object')
  })
  test(label + ' – null', async ({ is }) => {
    is(clone(null), null, 'same value')
  })
  test(label + ' – shallow object', async ({ same, isNot }) => {
    const o = { a: 1, b: 2 }
    same(clone(o), o, 'same values')
    isNot(clone(o), o, 'different object')
  })
  test(label + ' – shallow array', async ({ same, isNot }) => {
    const o = [1, 2]
    same(clone(o), o, 'same values')
    isNot(clone(o), o, 'different arrays')
  })
  test(label + ' – deep object', async ({ same, isNot }) => {
    const o = { nest: { a: 1, b: 2 } }
    same(clone(o), o, 'same values')
    isNot(clone(o), o, 'different objects')
    isNot(clone(o).nest, o.nest, 'different nested objects')
  })
  test(label + ' – deep array', async ({ same, isNot }) => {
    const o = [{ a: 1, b: 2 }, [3]]
    same(clone(o), o, 'same values')
    isNot(clone(o), o, 'different arrays')
    isNot(clone(o)[0], o[0], 'different array elements')
    isNot(clone(o)[1], o[1], 'different array elements')
  })
  test(label + ' – nested number', async ({ is }) => {
    is(clone({ a: 1 }).a, 1, 'same value')
  })
  test(label + ' – nested string', async ({ is }) => {
    is(clone({ s: 'str' }).s, 'str', 'same value')
  })
  test(label + ' – nested boolean', async ({ is }) => {
    is(clone({ b: true }).b, true, 'same value')
  })
  test(label + ' – nested function', async ({ is }) => {
    const fn = () => {}
    is(clone({ fn }).fn, fn, 'same function')
  })
  test(label + ' – nested async function', async ({ is }) => {
    const fn = async () => {}
    is(clone({ fn }).fn, fn, 'same function')
  })
  test(label + ' – nested generator function', async ({ is }) => {
    const fn = function * () {}
    is(clone({ fn }).fn, fn, 'same function')
  })
  test(label + ' – nested date', async ({ is, isNot }) => {
    const date = new Date()
    is(+clone({ d: date }).d, +date, 'same value')
    isNot(clone({ d: date }).d, date, 'different object')
  })
  test(label + ' – nested date in array', async ({ is, isNot }) => {
    const date = new Date()
    is(+clone({ d: [date] }).d[0], +date, 'same value')
    isNot(clone({ d: [date] }).d[0], date, 'different object')
    is(+cloneCircles({ d: [date] }).d[0], +date, 'same value')
    isNot(cloneCircles({ d: [date] }).d, date, 'different object')
  })
  test(label + ' – nested null', async ({ is }) => {
    is(clone({ n: null }).n, null, 'same value')
  })
  test(label + ' – arguments', async ({ isNot, same }) => {
    function fn (...args) {
      same(clone(arguments), args, 'same values')
      isNot(clone(arguments), arguments, 'different object')
    }
    fn(1, 2, 3)
  })
  test(`${label} copies buffers from object correctly`, async ({ ok, is, isNot }) => {
    const input = Date.now().toString(36)
    const inputBuffer = Buffer.from(input)
    const clonedBuffer = clone({ a: inputBuffer }).a
    ok(Buffer.isBuffer(clonedBuffer), 'cloned value is buffer')
    isNot(clonedBuffer, inputBuffer, 'cloned buffer is not same as input buffer')
    is(clonedBuffer.toString(), input, 'cloned buffer content is correct')
  })
  test(`${label} copies buffers from arrays correctly`, async ({ ok, is, isNot }) => {
    const input = Date.now().toString(36)
    const inputBuffer = Buffer.from(input)
    const [clonedBuffer] = clone([inputBuffer])
    ok(Buffer.isBuffer(clonedBuffer), 'cloned value is buffer')
    isNot(clonedBuffer, inputBuffer, 'cloned buffer is not same as input buffer')
    is(clonedBuffer.toString(), input, 'cloned buffer content is correct')
  })
  test(`${label} copies TypedArrays from object correctly`, async ({ ok, is, isNot }) => {
    const [input1, input2] = [rnd(10), rnd(10)]
    const buffer = new ArrayBuffer(8)
    const int32View = new Int32Array(buffer)
    int32View[0] = input1
    int32View[1] = input2
    const cloned = clone({ a: int32View }).a
    ok(cloned instanceof Int32Array, 'cloned value is instance of class')
    isNot(cloned, int32View, 'cloned value is not same as input value')
    is(cloned[0], input1, 'cloned value content is correct')
    is(cloned[1], input2, 'cloned value content is correct')
  })
  test(`${label} copies TypedArrays from array correctly`, async ({ ok, is, isNot }) => {
    const [input1, input2] = [rnd(10), rnd(10)]
    const buffer = new ArrayBuffer(16)
    const int32View = new Int32Array(buffer)
    int32View[0] = input1
    int32View[1] = input2
    const [cloned] = clone([int32View])
    ok(cloned instanceof Int32Array, 'cloned value is instance of class')
    isNot(cloned, int32View, 'cloned value is not same as input value')
    is(cloned[0], input1, 'cloned value content is correct')
    is(cloned[1], input2, 'cloned value content is correct')
  })
  test(`${label} copies complex TypedArrays`, async ({ ok, deepEqual, is, isNot }) => {
    const [input1, input2, input3] = [rnd(10), rnd(10), rnd(10)]
    const buffer = new ArrayBuffer(4)
    const view1 = new Int8Array(buffer, 0, 2)
    const view2 = new Int8Array(buffer, 2, 2)
    const view3 = new Int8Array(buffer)
    view1[0] = input1
    view2[0] = input2
    view3[3] = input3
    const cloned = clone({ view1, view2, view3 })
    ok(cloned.view1 instanceof Int8Array, 'cloned value is instance of class')
    ok(cloned.view2 instanceof Int8Array, 'cloned value is instance of class')
    ok(cloned.view3 instanceof Int8Array, 'cloned value is instance of class')
    isNot(cloned.view1, view1, 'cloned value is not same as input value')
    isNot(cloned.view2, view2, 'cloned value is not same as input value')
    isNot(cloned.view3, view3, 'cloned value is not same as input value')
    deepEqual(Array.from(cloned.view1), [input1, 0], 'cloned value content is correct')
    deepEqual(Array.from(cloned.view2), [input2, input3], 'cloned value content is correct')
    deepEqual(Array.from(cloned.view3), [input1, 0, input2, input3], 'cloned value content is correct')
  })
  test(`${label} - maps`, async ({ same, isNot }) => {
    const map = new Map([['a', 1]])
    same(Array.from(clone(map)), [['a', 1]], 'same value')
    isNot(clone(map), map, 'different object')
  })
  test(`${label} - sets`, async ({ same, isNot }) => {
    const set = new Set([1])
    same(Array.from(clone(set)), [1])
    isNot(clone(set), set, 'different object')
  })
  test(`${label} - nested maps`, async ({ same, isNot }) => {
    const data = { m: new Map([['a', 1]]) }
    same(Array.from(clone(data).m), [['a', 1]], 'same value')
    isNot(clone(data).m, data.m, 'different object')
  })
  test(`${label} - nested sets`, async ({ same, isNot }) => {
    const data = { s: new Set([1]) }
    same(Array.from(clone(data).s), [1], 'same value')
    isNot(clone(data).s, data.s, 'different object')
  })
}
