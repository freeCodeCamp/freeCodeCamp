var makeTest = require('./context')
var Bottleneck = require('../lib/index.js')
var assert = require('assert')

describe('Priority', function () {
  var c

  afterEach(function () {
    return c.limiter.disconnect(false)
  })

  it('Should do basic ordering', function () {
    c = makeTest({maxConcurrent: 1, minTime: 100, rejectOnDrop: false})

    c.limiter.submit(c.slowJob, 50, null, 1, c.noErrVal(1))
    c.limiter.submit(c.job, null, 2, c.noErrVal(2))
    c.limiter.submit(c.job, null, 3, c.noErrVal(3))
    c.limiter.submit(c.job, null, 4, c.noErrVal(4))
    c.limiter.submit({priority: 1}, c.job, null, 5, 6, c.noErrVal(5, 6))

    return c.last()
    .then(function (results) {
      c.checkResultsOrder([[1], [5,6], [2] ,[3], [4]])
      c.checkDuration(400)
    })
  })

  it('Should support LEAK', function () {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100,
      highWater: 3,
      strategy: Bottleneck.strategy.LEAK,
      rejectOnDrop: false
    })

    var called = false
    c.limiter.on('dropped', function (dropped) {
      c.mustExist(dropped.task)
      c.mustExist(dropped.args)
      c.mustExist(dropped.cb)
      called = true
    })

    c.limiter.submit(c.slowJob, 50, null, 1, c.noErrVal(1))
    c.limiter.submit(c.job, null, 2, c.noErrVal(2))
    c.limiter.submit(c.job, null, 3, c.noErrVal(3))
    c.limiter.submit(c.job, null, 4, c.noErrVal(4))
    c.limiter.submit({priority: 2}, c.job, null, 5, c.noErrVal(5))
    c.limiter.submit({priority: 1}, c.job, null, 6, c.noErrVal(6))
    c.limiter.submit({priority: 9}, c.job, null, 7, c.noErrVal(7))

    return c.last({ weight: 0 })
    .then(function (results) {
      c.checkDuration(200)
      c.checkResultsOrder([[1], [6], [5]])
      c.mustEqual(called, true)
    })
  })

  it('Should support OVERFLOW', function () {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100,
      highWater: 2,
      strategy: Bottleneck.strategy.OVERFLOW,
      rejectOnDrop: false
    })
    var called = false
    c.limiter.on('dropped', function (dropped) {
      c.mustExist(dropped.task)
      c.mustExist(dropped.args)
      c.mustExist(dropped.cb)
      called = true
    })

    c.limiter.submit(c.slowJob, 50, null, 1, c.noErrVal(1))
    c.limiter.submit(c.job, null, 2, c.noErrVal(2))
    c.limiter.submit(c.job, null, 3, c.noErrVal(3))
    c.limiter.submit(c.job, null, 4, c.noErrVal(4))
    c.limiter.submit({priority: 2}, c.job, null, 5, c.noErrVal(5))
    c.limiter.submit({priority: 1}, c.job, null, 6, c.noErrVal(6))

    return c.limiter.submit({priority: 9}, c.job, null, 7, c.noErrVal(7))
    .then(function () {
      return c.limiter.updateSettings({ highWater: null })
    })
    .then(c.last)
    .then(function (results) {
      c.checkDuration(200)
      c.checkResultsOrder([[1], [2], [3]])
      c.mustEqual(called, true)
    })
  })

  it('Should support OVERFLOW_PRIORITY', function () {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100,
      highWater: 2,
      strategy: Bottleneck.strategy.OVERFLOW_PRIORITY,
      rejectOnDrop: false
    })
    var called = false
    c.limiter.on('dropped', function (dropped) {
      c.mustExist(dropped.task)
      c.mustExist(dropped.args)
      c.mustExist(dropped.cb)
      called = true
    })

    c.limiter.submit(c.slowJob, 50, null, 1, c.noErrVal(1))
    c.limiter.submit(c.job, null, 2, c.noErrVal(2))
    c.limiter.submit(c.job, null, 3, c.noErrVal(3))
    c.limiter.submit(c.job, null, 4, c.noErrVal(4))
    c.limiter.submit({priority: 2}, c.job, null, 5, c.noErrVal(5))
    c.limiter.submit({priority: 2}, c.job, null, 6, c.noErrVal(6))

    return c.limiter.submit({priority: 2}, c.job, null, 7, c.noErrVal(7))
    .then(function () {
      return c.limiter.updateSettings({highWater: null})
    })
    .then(c.last)
    .then(function (results) {
      c.checkDuration(200)
      c.checkResultsOrder([[1], [5], [6]])
      c.mustEqual(called, true)
    })
  })

  it('Should support BLOCK', function (done) {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100,
      highWater: 2,
      trackDoneStatus: true,
      strategy: Bottleneck.strategy.BLOCK
    })
    var called = 0

    c.limiter.on('dropped', function (dropped) {
      c.mustExist(dropped.task)
      c.mustExist(dropped.args)
      c.mustExist(dropped.cb)
      called++
      if (called === 3) {
        c.limiter.updateSettings({ highWater: null })
        .then(function () {
          return c.limiter.schedule(c.job, null, 8)
        })
        .catch(function (err) {
          assert(err instanceof Bottleneck.BottleneckError)
          c.mustEqual(err.message, 'This job has been dropped by Bottleneck')
          c.limiter.removeAllListeners('error')
          done()
        })
      }
    })

    c.limiter.submit(c.slowJob, 20, null, 1, c.noErrVal(1))
    c.limiter.submit(c.slowJob, 20, null, 2, (err) => c.mustExist(err))
    c.limiter.submit(c.slowJob, 20, null, 3, (err) => c.mustExist(err))
    c.limiter.submit(c.slowJob, 20, null, 4, (err) => c.mustExist(err))
  })

  it('Should have the right priority', function () {
    c = makeTest({maxConcurrent: 1, minTime: 100})

    c.pNoErrVal(c.limiter.schedule({priority: 6}, c.slowPromise, 50, null, 1), 1)
    c.pNoErrVal(c.limiter.schedule({priority: 5}, c.promise, null, 2), 2)
    c.pNoErrVal(c.limiter.schedule({priority: 4}, c.promise, null, 3), 3)
    c.pNoErrVal(c.limiter.schedule({priority: 3}, c.promise, null, 4), 4)

    return c.last()
    .then(function (results) {
      c.checkDuration(300)
      c.checkResultsOrder([[1], [4], [3], [2]])
    })
  })

})
