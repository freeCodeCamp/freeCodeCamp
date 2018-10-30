var makeTest = require('./context')
var Bottleneck = require('../lib/index.js')
var assert = require('assert')

describe('Stop', function () {
  var c

  afterEach(function () {
    return c.limiter.disconnect(false)
  })

  it('Should stop and drop the queue', function (done) {
    c = makeTest({
      maxConcurrent: 2,
      minTime: 100,
      trackDoneStatus: true
    })
    var submitFailed = false
    var queuedDropped = false
    var scheduledDropped = false
    var dropped = 0

    c.limiter.on('dropped', function () {
      dropped++
    })

    c.pNoErrVal(c.limiter.schedule({id: '0'}, c.promise, null, 0), 0)

    c.pNoErrVal(c.limiter.schedule({id: '1'}, c.slowPromise, 100, null, 1), 1)

    c.limiter.schedule({id: '2'}, c.promise, null, 2)
    .catch(function (err) {
      c.mustEqual(err.message, 'Dropped!')
      scheduledDropped = true
    })

    c.limiter.schedule({id: '3'}, c.promise, null, 3)
    .catch(function (err) {
      c.mustEqual(err.message, 'Dropped!')
      queuedDropped = true
    })

    setTimeout(function () {
      var counts = c.limiter.counts()
      c.mustEqual(counts.RECEIVED, 0)
      c.mustEqual(counts.QUEUED, 1)
      c.mustEqual(counts.RUNNING, 1)
      c.mustEqual(counts.EXECUTING, 1)
      c.mustEqual(counts.DONE, 1)

      c.limiter.stop({
        enqueueErrorMessage: 'Stopped!',
        dropErrorMessage: 'Dropped!'
      })
      .then(function () {
        counts = c.limiter.counts()
        c.mustEqual(submitFailed, true)
        c.mustEqual(scheduledDropped, true)
        c.mustEqual(queuedDropped, true)
        c.mustEqual(dropped, 2)
        c.mustEqual(counts.RECEIVED, 0)
        c.mustEqual(counts.QUEUED, 0)
        c.mustEqual(counts.RUNNING, 0)
        c.mustEqual(counts.EXECUTING, 0)
        c.mustEqual(counts.DONE, 2)

        c.checkResultsOrder([[0], [1]])
        done()
      })

      c.limiter.schedule(() => Promise.resolve(true))
      .catch(function (err) {
        c.mustEqual(err.message, 'Stopped!')
        submitFailed = true
      })

    }, 125)
  })

  it('Should stop and let the queue finish', function (done) {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100,
      trackDoneStatus: true
    })
    var submitFailed = false
    var dropped = 0

    c.limiter.on('dropped', function () {
      dropped++
    })

    c.pNoErrVal(c.limiter.schedule({id: '1'}, c.promise, null, 1), 1)
    c.pNoErrVal(c.limiter.schedule({id: '2'}, c.promise, null, 2), 2)
    c.pNoErrVal(c.limiter.schedule({id: '3'}, c.slowPromise, 100, null, 3), 3)

    setTimeout(function () {
      var counts = c.limiter.counts()
      c.mustEqual(counts.RECEIVED, 0)
      c.mustEqual(counts.QUEUED, 1)
      c.mustEqual(counts.RUNNING, 1)
      c.mustEqual(counts.EXECUTING, 0)
      c.mustEqual(counts.DONE, 1)

      c.limiter.stop({
        enqueueErrorMessage: 'Stopped!',
        dropWaitingJobs: false
      })
      .then(function () {
        counts = c.limiter.counts()
        c.mustEqual(submitFailed, true)
        c.mustEqual(dropped, 0)
        c.mustEqual(counts.RECEIVED, 0)
        c.mustEqual(counts.QUEUED, 0)
        c.mustEqual(counts.RUNNING, 0)
        c.mustEqual(counts.EXECUTING, 0)
        c.mustEqual(counts.DONE, 4)

        c.checkResultsOrder([[1], [2], [3]])
        done()
      })

      c.limiter.schedule(() => Promise.resolve(true))
      .catch(function (err) {
        c.mustEqual(err.message, 'Stopped!')
        submitFailed = true
      })

    }, 75)
  })

  it('Should still resolve when rejectOnDrop is false', function (done) {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100,
      rejectOnDrop: false
    })

    c.pNoErrVal(c.limiter.schedule({id: '1'}, c.promise, null, 1), 1)
    c.pNoErrVal(c.limiter.schedule({id: '2'}, c.promise, null, 2), 2)
    c.pNoErrVal(c.limiter.schedule({id: '3'}, c.slowPromise, 100, null, 3), 3)

    c.limiter.stop()
    .then(function () {
      return c.limiter.stop()
    })
    .then(function () {
      done(new Error("Should not be here"))
    })
    .catch(function (err) {
      c.mustEqual(err.message, "stop() has already been called")
      done()
    })
  })

  it('Should not allow calling stop() twice when dropWaitingJobs=true', function (done) {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100
    })
    var failed = 0
    var handler = function (err) {
      c.mustEqual(err.message, "This limiter has been stopped.")
      failed++
    }

    c.pNoErrVal(c.limiter.schedule({id: '1'}, c.promise, null, 1), 1).catch(handler)
    c.pNoErrVal(c.limiter.schedule({id: '2'}, c.promise, null, 2), 2).catch(handler)
    c.pNoErrVal(c.limiter.schedule({id: '3'}, c.slowPromise, 100, null, 3), 3).catch(handler)

    c.limiter.stop({ dropWaitingJobs: true })
    .then(function () {
      return c.limiter.stop({ dropWaitingJobs: true })
    })
    .then(function () {
      done(new Error("Should not be here"))
    })
    .catch(function (err) {
      c.mustEqual(err.message, "stop() has already been called")
      c.mustEqual(failed, 3)
      done()
    })
  })

  it('Should not allow calling stop() twice when dropWaitingJobs=false', function (done) {
    c = makeTest({
      maxConcurrent: 1,
      minTime: 100
    })

    c.pNoErrVal(c.limiter.schedule({id: '1'}, c.promise, null, 1), 1)
    c.pNoErrVal(c.limiter.schedule({id: '2'}, c.promise, null, 2), 2)
    c.pNoErrVal(c.limiter.schedule({id: '3'}, c.slowPromise, 100, null, 3), 3)

    c.limiter.stop({ dropWaitingJobs: false })
    .then(function () {
      return c.limiter.stop({ dropWaitingJobs: false })
    })
    .then(function () {
      done(new Error("Should not be here"))
    })
    .catch(function (err) {
      c.mustEqual(err.message, "stop() has already been called")
      done()
    })
  })

})
