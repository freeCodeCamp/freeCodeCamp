var tape = require('tape')
var Lock = require('../').Lock

tape('single lock', function (t) {

  var lock = Lock(), r = Math.random(), r2 = Math.random()

  lock('hello', function (release) {

    t.equal(lock.isLocked('hello'), true)
    var _release = release(function (_r, _r2) {
      t.equal(lock.isLocked('hello'), false)
      t.equal(_r, r)
      t.equal(_r2, r2)
      t.end()
    })
    t.equal(lock.isLocked('hello'), true)
    _release(r, r2)
    t.equal(lock.isLocked('hello'), false)

  })

})

tape('2 locks', function (t) {

  var lock = Lock(), released = 0

  lock('what?', function (release) {
    t.equal(lock.isLocked('what?'), true)
    release(function () {
      console.log('released!')
      released = 1
    })()
  })

  lock('what?', function (release) {
    console.log(released)
    t.equal(released, 1, 'first lock should be completely released')
    t.equal(lock.isLocked('what?'), true)
    release(function () {
      t.equal(lock.isLocked('what?'), false)
      t.end()
    })()
  })

})

tape('3 locks', function (t) {

  var lock = Lock(), released = 0

  lock('what?', function (release) {
    t.equal(lock.isLocked('what?'), true)
    release(function () {
      console.log('released! 1')
      released = 1
    })()
  })
  lock('what?', function (release) {
    console.log('1st', released)
    t.equal(released, 1, 'first lock should be completely released')
    t.equal(lock.isLocked('what?'), true)
    release(function () {
      console.log('released! 2')
      released = 2
      t.equal(lock.isLocked('what?'), false)
    })()
  })
  lock('what?', function (release) {
    console.log('2nd', released)
    t.equal(released, 2, 'second lock should be completely released')
    t.equal(lock.isLocked('what?'), true)
    release(function () {
      console.log('released! 3')
      t.equal(lock.isLocked('what?'), false)
      t.end()
    })()
  })
})

tape('lock with optional done', function (t) {
  var lock = Lock(), released = 0

  lock('what?', function (release) {
    released = 1
    process.nextTick(release())
  })

  lock('what?', function (release) {
    t.equal(released, 1, 'first lock should be completely released')
    release(function () {
      t.end()
    })()
  })
})