var test = require('tap').test
var LRU = require('../')

test('basic', function (t) {
  var cache = new LRU({max: 10})
  cache.set('key', 'value')
  t.equal(cache.get('key'), 'value')
  t.equal(cache.get('nada'), undefined)
  t.equal(cache.length, 1)
  t.equal(cache.max, 10)
  t.end()
})

test('least recently set', function (t) {
  var cache = new LRU(2)
  cache.set('a', 'A')
  cache.set('b', 'B')
  cache.set('c', 'C')
  t.equal(cache.get('c'), 'C')
  t.equal(cache.get('b'), 'B')
  t.equal(cache.get('a'), undefined)
  t.end()
})

test('lru recently gotten', function (t) {
  var cache = new LRU(2)
  cache.set('a', 'A')
  cache.set('b', 'B')
  cache.get('a')
  cache.set('c', 'C')
  t.equal(cache.get('c'), 'C')
  t.equal(cache.get('b'), undefined)
  t.equal(cache.get('a'), 'A')
  t.end()
})

test('del', function (t) {
  var cache = new LRU(2)
  cache.set('a', 'A')
  cache.del('a')
  t.equal(cache.get('a'), undefined)
  t.end()
})

test('max', function (t) {
  var cache = new LRU(3)

  // test changing the max, verify that the LRU items get dropped.
  cache.max = 100
  var i
  for (i = 0; i < 100; i++) cache.set(i, i)
  t.equal(cache.length, 100)
  for (i = 0; i < 100; i++) {
    t.equal(cache.get(i), i)
  }
  cache.max = 3
  t.equal(cache.length, 3)
  for (i = 0; i < 97; i++) {
    t.equal(cache.get(i), undefined)
  }
  for (i = 98; i < 100; i++) {
    t.equal(cache.get(i), i)
  }

  // now remove the max restriction, and try again.
  cache.max = 'hello'
  for (i = 0; i < 100; i++) cache.set(i, i)
  t.equal(cache.length, 100)
  for (i = 0; i < 100; i++) {
    t.equal(cache.get(i), i)
  }
  // should trigger an immediate resize
  cache.max = 3
  t.equal(cache.length, 3)
  for (i = 0; i < 97; i++) {
    t.equal(cache.get(i), undefined)
  }
  for (i = 98; i < 100; i++) {
    t.equal(cache.get(i), i)
  }
  t.end()
})

test('reset', function (t) {
  var cache = new LRU(10)
  cache.set('a', 'A')
  cache.set('b', 'B')
  cache.reset()
  t.equal(cache.length, 0)
  t.equal(cache.max, 10)
  t.equal(cache.get('a'), undefined)
  t.equal(cache.get('b'), undefined)
  t.end()
})

test('basic with weighed length', function (t) {
  var cache = new LRU({
    max: 100,
    length: function (item, key) {
      t.isa(key, 'string')
      return item.size
    }
  })
  cache.set('key', {val: 'value', size: 50})
  t.equal(cache.get('key').val, 'value')
  t.equal(cache.get('nada'), undefined)
  t.equal(cache.lengthCalculator(cache.get('key'), 'key'), 50)
  t.equal(cache.length, 50)
  t.equal(cache.max, 100)
  t.end()
})

test('weighed length item too large', function (t) {
  var cache = new LRU({
    max: 10,
    length: function (item) { return item.size }
  })
  t.equal(cache.max, 10)

  // should fall out immediately
  cache.set('key', {val: 'value', size: 50})

  t.equal(cache.length, 0)
  t.equal(cache.get('key'), undefined)
  t.end()
})

test('least recently set with weighed length', function (t) {
  var cache = new LRU({
    max: 8,
    length: function (item) { return item.length }
  })
  cache.set('a', 'A')
  cache.set('b', 'BB')
  cache.set('c', 'CCC')
  cache.set('d', 'DDDD')
  t.equal(cache.get('d'), 'DDDD')
  t.equal(cache.get('c'), 'CCC')
  t.equal(cache.get('b'), undefined)
  t.equal(cache.get('a'), undefined)
  t.end()
})

test('lru recently gotten with weighed length', function (t) {
  var cache = new LRU({
    max: 8,
    length: function (item) { return item.length }
  })
  cache.set('a', 'A')
  cache.set('b', 'BB')
  cache.set('c', 'CCC')
  cache.get('a')
  cache.get('b')
  cache.set('d', 'DDDD')
  t.equal(cache.get('c'), undefined)
  t.equal(cache.get('d'), 'DDDD')
  t.equal(cache.get('b'), 'BB')
  t.equal(cache.get('a'), 'A')
  t.end()
})

test('lru recently updated with weighed length', function (t) {
  var cache = new LRU({
    max: 8,
    length: function (item) { return item.length }
  })
  cache.set('a', 'A')
  cache.set('b', 'BB')
  cache.set('c', 'CCC')
  t.equal(cache.length, 6) // CCC BB A
  cache.set('a', '+A')
  t.equal(cache.length, 7) // +A CCC BB
  cache.set('b', '++BB')
  t.equal(cache.length, 6) // ++BB +A
  t.equal(cache.get('c'), undefined)

  cache.set('c', 'oversized')
  t.equal(cache.length, 6) // ++BB +A
  t.equal(cache.get('c'), undefined)

  cache.set('a', 'oversized')
  t.equal(cache.length, 4) // ++BB
  t.equal(cache.get('a'), undefined)
  t.equal(cache.get('b'), '++BB')
  t.end()
})

test('set returns proper booleans', function (t) {
  var cache = new LRU({
    max: 5,
    length: function (item) { return item.length }
  })

  t.equal(cache.set('a', 'A'), true)

  // should return false for max exceeded
  t.equal(cache.set('b', 'donuts'), false)

  t.equal(cache.set('b', 'B'), true)
  t.equal(cache.set('c', 'CCCC'), true)
  t.end()
})

test('drop the old items', function (t) {
  var cache = new LRU({
    max: 5,
    maxAge: 50
  })

  cache.set('a', 'A')

  setTimeout(function () {
    cache.set('b', 'b')
    t.equal(cache.get('a'), 'A')
  }, 25)

  setTimeout(function () {
    cache.set('c', 'C')
    // timed out
    t.notOk(cache.get('a'))
  }, 60 + 25)

  setTimeout(function () {
    t.notOk(cache.get('b'))
    t.equal(cache.get('c'), 'C')
  }, 90)

  setTimeout(function () {
    t.notOk(cache.get('c'))
    t.end()
  }, 155)
})

test('manual pruning', function (t) {
  var cache = new LRU({
    max: 5,
    maxAge: 50
  })

  cache.set('a', 'A')
  cache.set('b', 'b')
  cache.set('c', 'C')

  setTimeout(function () {
    cache.prune()

    t.notOk(cache.get('a'))
    t.notOk(cache.get('b'))
    t.notOk(cache.get('c'))

    t.end()
  }, 100)
})

test('individual item can have its own maxAge', function (t) {
  var cache = new LRU({
    max: 5,
    maxAge: 50
  })

  cache.set('a', 'A', 20)
  setTimeout(function () {
    t.notOk(cache.get('a'))
    t.end()
  }, 25)
})

test('individual item can have its own maxAge > cache', function (t) {
  var cache = new LRU({
    max: 5,
    maxAge: 20
  })

  cache.set('a', 'A', 50)
  setTimeout(function () {
    t.equal(cache.get('a'), 'A')
    t.end()
  }, 25)
})

test('disposal function', function (t) {
  var disposed = false
  var cache = new LRU({
    max: 1,
    dispose: function (k, n) {
      disposed = n
    }
  })

  cache.set(1, 1)
  cache.set(2, 2)
  t.equal(disposed, 1)
  cache.set(2, 10)
  t.equal(disposed, 2)
  cache.set(3, 3)
  t.equal(disposed, 10)
  cache.reset()
  t.equal(disposed, 3)
  t.end()
})

test('disposal function on too big of item', function (t) {
  var disposed = false
  var cache = new LRU({
    max: 1,
    length: function (k) {
      return k.length
    },
    dispose: function (k, n) {
      disposed = n
    }
  })
  var obj = [ 1, 2 ]

  t.equal(disposed, false)
  cache.set('obj', obj)
  t.equal(disposed, obj)
  t.end()
})

test('has()', function (t) {
  var cache = new LRU({
    max: 1,
    maxAge: 10
  })

  cache.set('foo', 'bar')
  t.equal(cache.has('foo'), true)
  cache.set('blu', 'baz')
  t.equal(cache.has('foo'), false)
  t.equal(cache.has('blu'), true)
  setTimeout(function () {
    t.equal(cache.has('blu'), false)
    t.end()
  }, 15)
})

test('stale', function (t) {
  var cache = new LRU({
    maxAge: 10,
    stale: true
  })

  t.equal(cache.allowStale, true)

  cache.set('foo', 'bar')
  t.equal(cache.get('foo'), 'bar')
  t.equal(cache.has('foo'), true)
  setTimeout(function () {
    t.equal(cache.has('foo'), false)
    t.equal(cache.get('foo'), 'bar')
    t.equal(cache.get('foo'), undefined)
    t.end()
  }, 15)
})

test('lru update via set', function (t) {
  var cache = LRU({ max: 2 })

  cache.set('foo', 1)
  cache.set('bar', 2)
  cache.del('bar')
  cache.set('baz', 3)
  cache.set('qux', 4)

  t.equal(cache.get('foo'), undefined)
  t.equal(cache.get('bar'), undefined)
  t.equal(cache.get('baz'), 3)
  t.equal(cache.get('qux'), 4)
  t.end()
})

test('least recently set w/ peek', function (t) {
  var cache = new LRU(2)
  cache.set('a', 'A')
  cache.set('b', 'B')
  t.equal(cache.peek('a'), 'A')
  cache.set('c', 'C')
  t.equal(cache.get('c'), 'C')
  t.equal(cache.get('b'), 'B')
  t.equal(cache.get('a'), undefined)
  t.end()
})

test('pop the least used item', function (t) {
  var cache = new LRU(3)
  var last

  cache.set('a', 'A')
  cache.set('b', 'B')
  cache.set('c', 'C')

  t.equal(cache.length, 3)
  t.equal(cache.max, 3)

  // Ensure we pop a, c, b
  cache.get('b', 'B')

  last = cache.pop()
  t.equal(last.key, 'a')
  t.equal(last.value, 'A')
  t.equal(cache.length, 2)
  t.equal(cache.max, 3)

  last = cache.pop()
  t.equal(last.key, 'c')
  t.equal(last.value, 'C')
  t.equal(cache.length, 1)
  t.equal(cache.max, 3)

  last = cache.pop()
  t.equal(last.key, 'b')
  t.equal(last.value, 'B')
  t.equal(cache.length, 0)
  t.equal(cache.max, 3)

  last = cache.pop()
  t.equal(last, null)
  t.equal(cache.length, 0)
  t.equal(cache.max, 3)

  t.end()
})

test('get and set only accepts strings and numbers as keys', function (t) {
  var cache = new LRU()

  cache.set('key', 'value')
  cache.set(123, 456)

  t.equal(cache.get('key'), 'value')
  t.equal(cache.get(123), 456)

  t.end()
})

test('peek with wierd keys', function (t) {
  var cache = new LRU()

  cache.set('key', 'value')
  cache.set(123, 456)

  t.equal(cache.peek('key'), 'value')
  t.equal(cache.peek(123), 456)

  t.equal(cache.peek({
    toString: function () { return 'key' }
  }), undefined)

  t.end()
})

test('invalid length calc results in basic length', function (t) {
  var l = new LRU({ length: true })
  t.isa(l.lengthCalculator, 'function')
  l.lengthCalculator = 'not a function'
  t.isa(l.lengthCalculator, 'function')
  t.end()
})

test('change length calculator recalculates', function (t) {
  var l = new LRU({ max: 3 })
  l.set(2, 2)
  l.set(1, 1)
  l.lengthCalculator = function (key, val) {
    return key + val
  }
  t.equal(l.itemCount, 1)
  t.equal(l.get(2), undefined)
  t.equal(l.get(1), 1)
  l.set(0, 1)
  t.equal(l.itemCount, 2)
  l.lengthCalculator = function (key, val) {
    return key
  }
  t.equal(l.lengthCalculator(1, 10), 1)
  t.equal(l.lengthCalculator(10, 1), 10)
  l.lengthCalculator = { not: 'a function' }
  t.equal(l.lengthCalculator(1, 10), 1)
  t.equal(l.lengthCalculator(10, 1), 1)
  t.end()
})

test('delete non-existent item has no effect', function (t) {
  var l = new LRU({ max: 2 })
  l.set('foo', 1)
  l.set('bar', 2)
  l.del('baz')
  t.same(l.dumpLru().toArray().map(function (hit) {
    return hit.key
  }), [ 'bar', 'foo' ])
  t.end()
})

test('maxAge on list, cleared in forEach', function (t) {
  var l = new LRU({ stale: true })
  l.set('foo', 1)

  // hacky.  make it seem older.
  l.dumpLru().head.value.now = Date.now() - 100000

  // setting maxAge to invalid values does nothing.
  t.equal(l.maxAge, 0)
  l.maxAge = -100
  t.equal(l.maxAge, 0)
  l.maxAge = {}
  t.equal(l.maxAge, 0)

  l.maxAge = 1

  var saw = false
  l.forEach(function (val, key) {
    saw = true
    t.equal(key, 'foo')
  })
  t.ok(saw)
  t.equal(l.length, 0)

  t.end()
})
