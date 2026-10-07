'use strict'

const { test } = require('node:test')
const { reqIdGenFactory } = require('../../lib/req-id-gen-factory')

test('should create incremental ids deterministically', t => {
  t.plan(1)
  const reqIdGen = reqIdGenFactory()

  for (let i = 1; i < 1e4; ++i) {
    if (reqIdGen() !== 'req-' + i.toString(36)) {
      t.assert.fail()
      break
    }
  }
  t.assert.ok(true)
})

test('should have prefix "req-"', t => {
  t.plan(1)
  const reqIdGen = reqIdGenFactory()

  t.assert.ok(reqIdGen().startsWith('req-'))
})

test('different id generator functions should have separate internal counters', t => {
  t.plan(5)
  const reqIdGenA = reqIdGenFactory()
  const reqIdGenB = reqIdGenFactory()

  t.assert.strictEqual(reqIdGenA(), 'req-1')
  t.assert.strictEqual(reqIdGenA(), 'req-2')
  t.assert.strictEqual(reqIdGenB(), 'req-1')
  t.assert.strictEqual(reqIdGenA(), 'req-3')
  t.assert.strictEqual(reqIdGenB(), 'req-2')
})

test('should start counting with 1', t => {
  t.plan(1)
  const reqIdGen = reqIdGenFactory()

  t.assert.strictEqual(reqIdGen(), 'req-1')
})

test('should handle requestIdHeader and return provided id in header', t => {
  t.plan(1)

  const reqIdGen = reqIdGenFactory('id')

  t.assert.strictEqual(reqIdGen({ headers: { id: '1337' } }), '1337')
})

test('should handle requestIdHeader and fallback if id is not provided in header', t => {
  t.plan(1)

  const reqIdGen = reqIdGenFactory('id')

  t.assert.strictEqual(reqIdGen({ headers: { notId: '1337' } }), 'req-1')
})

test('should handle requestIdHeader and increment internal counter if no header was provided', t => {
  t.plan(4)

  const reqIdGen = reqIdGenFactory('id')

  t.assert.strictEqual(reqIdGen({ headers: {} }), 'req-1')
  t.assert.strictEqual(reqIdGen({ headers: {} }), 'req-2')
  t.assert.strictEqual(reqIdGen({ headers: { id: '1337' } }), '1337')
  t.assert.strictEqual(reqIdGen({ headers: {} }), 'req-3')
})

test('should use optGenReqId to generate ids', t => {
  t.plan(4)

  let i = 1
  let gotCalled = false
  function optGenReqId () {
    gotCalled = true
    return (i++).toString(16)
  }
  const reqIdGen = reqIdGenFactory(undefined, optGenReqId)

  t.assert.strictEqual(gotCalled, false)
  t.assert.strictEqual(reqIdGen(), '1')
  t.assert.strictEqual(gotCalled, true)
  t.assert.strictEqual(reqIdGen(), '2')
})

test('should use optGenReqId to generate ids if requestIdHeader is used but not provided', t => {
  t.plan(4)

  let i = 1
  let gotCalled = false
  function optGenReqId () {
    gotCalled = true
    return (i++).toString(16)
  }
  const reqIdGen = reqIdGenFactory('reqId', optGenReqId)

  t.assert.strictEqual(gotCalled, false)
  t.assert.strictEqual(reqIdGen({ headers: {} }), '1')
  t.assert.strictEqual(gotCalled, true)
  t.assert.strictEqual(reqIdGen({ headers: {} }), '2')
})

test('should not use optGenReqId to generate ids if requestIdHeader is used and provided', t => {
  t.plan(2)

  function optGenReqId () {
    t.assert.fail()
  }
  const reqIdGen = reqIdGenFactory('reqId', optGenReqId)

  t.assert.strictEqual(reqIdGen({ headers: { reqId: 'r1' } }), 'r1')
  t.assert.strictEqual(reqIdGen({ headers: { reqId: 'r2' } }), 'r2')
})

test('should fallback to use optGenReqId to generate ids if requestIdHeader is sometimes provided', t => {
  t.plan(4)

  let i = 1
  let gotCalled = false
  function optGenReqId () {
    gotCalled = true
    return (i++).toString(16)
  }
  const reqIdGen = reqIdGenFactory('reqId', optGenReqId)

  t.assert.strictEqual(reqIdGen({ headers: { reqId: 'r1' } }), 'r1')
  t.assert.strictEqual(gotCalled, false)
  t.assert.strictEqual(reqIdGen({ headers: {} }), '1')
  t.assert.strictEqual(gotCalled, true)
})
