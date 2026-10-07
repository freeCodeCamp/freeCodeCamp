var t = require('tap')

process.env.TEST_PSEUDOMAP = 'true'

var PM = require('../')
runTests(PM)

// if possible, verify that Map also behaves the same way
if (typeof Map === 'function')
  runTests(Map)


function runTests (Map) {
  t.throws(Map)

  var m = new Map()

  t.equal(m.size, 0)

  m.set(1, '1 string')
  t.equal(m.get(1), '1 string')
  t.equal(m.size, 1)
  m.size = 1000
  t.equal(m.size, 1)
  m.size = 0
  t.equal(m.size, 1)

  m = new Map([[1, 'number 1'], ['1', 'string 1']])
  t.equal(m.get(1), 'number 1')
  t.equal(m.get('1'), 'string 1')
  t.equal(m.size, 2)

  m = new Map(m)
  t.equal(m.get(1), 'number 1')
  t.equal(m.get('1'), 'string 1')
  t.equal(m.size, 2)

  var akey = {}
  var bkey = {}
  m.set(akey, { some: 'data' })
  m.set(bkey, { some: 'other data' })
  t.same(m.get(akey), { some: 'data' })
  t.same(m.get(bkey), { some: 'other data' })
  t.equal(m.size, 4)

  var x = /x/
  var y = /x/
  m.set(x, 'x regex')
  m.set(y, 'y regex')
  t.equal(m.get(x), 'x regex')
  m.set(x, 'x again')
  t.equal(m.get(x), 'x again')
  t.equal(m.size, 6)

  m.set(NaN, 'not a number')
  t.equal(m.get(NaN), 'not a number')
  m.set(NaN, 'it is a ' + typeof NaN)
  t.equal(m.get(NaN), 'it is a number')
  m.set('NaN', 'stringie nan')
  t.equal(m.get(NaN), 'it is a number')
  t.equal(m.get('NaN'), 'stringie nan')
  t.equal(m.size, 8)

  m.delete(NaN)
  t.equal(m.get(NaN), undefined)
  t.equal(m.size, 7)

  var expect = [
    { value: 'number 1', key: 1 },
    { value: 'string 1', key: '1' },
    { value: { some: 'data' }, key: {} },
    { value: { some: 'other data' }, key: {} },
    { value: 'x again', key: /x/ },
    { value: 'y regex', key: /x/ },
    { value: 'stringie nan', key: 'NaN' }
  ]
  var actual = []

  m.forEach(function (value, key) {
    actual.push({ value: value, key: key })
  })
  t.same(actual, expect)

  m.clear()
  t.equal(m.size, 0)
}
