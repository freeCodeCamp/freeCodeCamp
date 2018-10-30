var test = require('tap').test
var LRU = require('../')
var Yallist = require('yallist')

test('dump', function (t) {
  var cache = new LRU()

  t.equal(cache.dump().length, 0, 'nothing in dump for empty cache')

  cache.set('a', 'A')
  cache.set('b', 'B')
  t.deepEqual(cache.dump(), [
    { k: 'b', v: 'B', e: 0 },
    { k: 'a', v: 'A', e: 0 }
  ])

  cache.set(123, 456)
  t.deepEqual(cache.dump(), [
    { k: 123, v: 456, e: 0 },
    { k: 'b', v: 'B', e: 0 },
    { k: 'a', v: 'A', e: 0 }
  ])
  cache.del(123)

  cache.set('a', 'A')
  t.deepEqual(cache.dump(), [
    { k: 'a', v: 'A', e: 0 },
    { k: 'b', v: 'B', e: 0 }
  ])

  cache.get('b')
  t.deepEqual(cache.dump(), [
    { k: 'b', v: 'B', e: 0 },
    { k: 'a', v: 'A', e: 0 }
  ])

  cache.del('a')
  t.deepEqual(cache.dump(), [
    { k: 'b', v: 'B', e: 0 }
  ])

  t.end()
})

test('do not dump stale items', function (t) {
  var cache = new LRU({
    max: 5,
    maxAge: 50
  })

  // expires at 50
  cache.set('a', 'A')

  setTimeout(function () {
    // expires at 75
    cache.set('b', 'B')
    var s = cache.dump()
    t.equal(s.length, 2)
    t.equal(s[0].k, 'b')
    t.equal(s[1].k, 'a')
  }, 25)

  setTimeout(function () {
    // expires at 110
    cache.set('c', 'C')
    var s = cache.dump()
    t.equal(s.length, 2)
    t.equal(s[0].k, 'c')
    t.equal(s[1].k, 'b')
  }, 60)

  setTimeout(function () {
    // expires at 130
    cache.set('d', 'D', 40)
    var s = cache.dump()
    t.equal(s.length, 2)
    t.equal(s[0].k, 'd')
    t.equal(s[1].k, 'c')
  }, 90)

  setTimeout(function () {
    var s = cache.dump()
    t.equal(s.length, 1)
    t.equal(s[0].k, 'd')
  }, 120)

  setTimeout(function () {
    var s = cache.dump()
    t.deepEqual(s, [])
    t.end()
  }, 155)
})

test('load basic cache', function (t) {
  var cache = new LRU()
  var copy = new LRU()

  cache.set('a', 'A')
  cache.set('b', 'B')
  cache.set(123, 456)

  copy.load(cache.dump())
  t.deepEquals(cache.dump(), copy.dump())

  t.end()
})

test('load staled cache', function (t) {
  var cache = new LRU({maxAge: 50})
  var copy = new LRU({maxAge: 50})
  var arr

  // expires at 50
  cache.set('a', 'A')
  setTimeout(function () {
    // expires at 80
    cache.set('b', 'B')
    arr = cache.dump()
    t.equal(arr.length, 2)
  }, 30)

  setTimeout(function () {
    copy.load(arr)
    t.equal(copy.get('a'), undefined)
    t.equal(copy.get('b'), 'B')
  }, 60)

  setTimeout(function () {
    t.equal(copy.get('b'), undefined)
    t.end()
  }, 90)
})

test('load to other size cache', function (t) {
  var cache = new LRU({max: 2})
  var copy = new LRU({max: 1})

  cache.set('a', 'A')
  cache.set('b', 'B')

  copy.load(cache.dump())
  t.equal(copy.get('a'), undefined)
  t.equal(copy.get('b'), 'B')

  // update the last read from original cache
  cache.get('a')
  copy.load(cache.dump())
  t.equal(copy.get('a'), 'A')
  t.equal(copy.get('b'), undefined)

  t.end()
})

test('load to other age cache', function (t) {
  var cache = new LRU({maxAge: 250})
  var aged = new LRU({maxAge: 500})
  var simple = new LRU()
  var arr

  // created at 0
  // a would be valid till 0 + 250
  cache.set('a', 'A')
  setTimeout(function () {
    // created at 20
    // b would be valid till 100 + 250
    cache.set('b', 'B')
    // b would be valid till 100 + 350
    cache.set('c', 'C', 350)
    arr = cache.dump()
    t.equal(arr.length, 3)
  }, 100)

  setTimeout(function () {
    t.equal(cache.get('a'), undefined)
    t.equal(cache.get('b'), 'B')
    t.equal(cache.get('c'), 'C')

    aged.load(arr)
    t.equal(aged.get('a'), undefined)
    t.equal(aged.get('b'), 'B')
    t.equal(aged.get('c'), 'C')

    simple.load(arr)
    t.equal(simple.get('a'), undefined)
    t.equal(simple.get('b'), 'B')
    t.equal(simple.get('c'), 'C')
  }, 300)

  setTimeout(function () {
    t.equal(cache.get('a'), undefined)
    t.equal(cache.get('b'), undefined)
    t.equal(cache.get('c'), 'C')

    aged.load(arr)
    t.equal(aged.get('a'), undefined)
    t.equal(aged.get('b'), undefined)
    t.equal(aged.get('c'), 'C')

    simple.load(arr)
    t.equal(simple.get('a'), undefined)
    t.equal(simple.get('b'), undefined)
    t.equal(simple.get('c'), 'C')
  }, 400)

  setTimeout(function () {
    t.equal(cache.get('a'), undefined)
    t.equal(cache.get('b'), undefined)
    t.equal(cache.get('c'), undefined)

    aged.load(arr)
    t.equal(aged.get('a'), undefined)
    t.equal(aged.get('b'), undefined)
    t.equal(aged.get('c'), undefined)

    simple.load(arr)
    t.equal(simple.get('a'), undefined)
    t.equal(simple.get('b'), undefined)
    t.equal(simple.get('c'), undefined)
    t.end()
  }, 500)
})

test('dumpLru', function (t) {
  var l = LRU()
  t.isa(l.dumpLru(), Yallist)
  t.end()
})
