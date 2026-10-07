var tape = require('tape')
var Lock = require('../').Lock

tape('3 locks with nextTick', function (t) {

  var lock = Lock(), released = 0

  lock('what?', function (release) {
    t.equal(lock.isLocked('what?'), true)
    
    process.nextTick(release(function () {
      console.log('released! 1')
      released = 1
    }))
  })

  lock('what?', function (release) {
    console.log('1st', released)
    t.equal(released, 1, 'first lock should be completely released')
    t.equal(lock.isLocked('what?'), true)
    process.nextTick(release(function () {
      console.log('released! 2')
      released = 2
    }))
  })

  lock('what?', function (release) {
    console.log('2nd', released)
    t.equal(released, 2, 'second lock should be completely released')
    t.equal(lock.isLocked('what?'), true)
    process.nextTick(release(function () {
      console.log('released! 3')
      t.equal(lock.isLocked('what?'), false)
      t.end()
    }))
  })

})

