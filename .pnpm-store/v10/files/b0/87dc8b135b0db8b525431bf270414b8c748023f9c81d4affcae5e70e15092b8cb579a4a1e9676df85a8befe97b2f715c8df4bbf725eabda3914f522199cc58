var tape = require('tape')
var Lock = require('../').Lock

tape('multiple locks', function (t) {

  var lock = Lock(), released = 0

  lock(['a', 'b', 'c'], function (release) {
    t.equal(lock.isLocked('a'), true)
    t.equal(lock.isLocked('b'), true)
    t.equal(lock.isLocked('c'), true)

    release(function () {
      released = 1
      console.log('RELEASED')
      t.equal(lock.isLocked('b'), false)
      t.equal(lock.isLocked('c'), false)
    })()
  })

  lock('a', function (release) {
    t.equal(lock.isLocked('a'), true)
    t.equal(lock.isLocked('b'), false)
    t.equal(lock.isLocked('c'), false)
    t.equal(released, 1)
    release(function () {
      t.equal(lock.isLocked('a'), false)
      t.end()
    })()
  })
})

tape('wait for a single lock', function (t) {

  var lock = Lock(), released = 0

  lock('a', function (release) {
    t.equal(lock.isLocked('a'), true)
    t.equal(lock.isLocked('b'), false)
    t.equal(lock.isLocked('c'), false)
    release(function () {
      released = 1
      t.equal(lock.isLocked('a'), false)
      t.end()
    })()
  })

  lock(['a', 'b', 'c'], function (release) {
    t.equal(released, 1)
    t.equal(lock.isLocked('a'), true)
    t.equal(lock.isLocked('b'), true)
    t.equal(lock.isLocked('c'), true)

    release(function () {
      console.log('RELEASED')
      t.equal(lock.isLocked('b'), false)
      t.equal(lock.isLocked('c'), false)
    })()
  })
})
