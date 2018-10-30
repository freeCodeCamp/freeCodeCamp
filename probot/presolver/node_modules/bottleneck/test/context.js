global.TEST = true
var Bottleneck = require('../lib/index.js')
var assert = require('assert')

module.exports = function (options={}) {
  var mustEqual = function (a, b) {
    var strA = JSON.stringify(a)
    var strB = JSON.stringify(b)
    if (strA !== strB) {
      console.log(strA + ' !== ' + strB, (new Error('').stack))
      assert(strA === strB)
    }
  }

  var start
  var calls = []

  // set options.datastore
  if (options.datastore == null && process.env.DATASTORE === 'redis') {
    options.datastore = 'redis'
    options.clearDatastore = true
  } else if (options.datastore == null && process.env.DATASTORE === 'ioredis') {
    options.datastore = 'ioredis'
    options.clearDatastore = true
  } else {
    options.datastore = 'local'
  }

  var limiter = new Bottleneck(options)
  // limiter.on("debug", function (str, args) { console.log(`${Date.now()-start} ${str} ${JSON.stringify(args)}`) })
  if (!options.errorEventsExpected) {
    limiter.on("error", function (err) {
      console.log('(CONTEXT) ERROR EVENT', err)
    })
  }
  limiter.ready().then(function (client) {
    start = Date.now()
  })
  var getResults = function () {
    return {
      elapsed: Date.now() - start,
      callsDuration: calls.length > 0 ? calls[calls.length - 1].time : null,
      calls: calls
    }
  }

  var context = {
    job: function (err, ...result) {
      var cb = result.pop()
      calls.push({err: err, result: result, time: Date.now()-start})
      if (process.env.DEBUG) console.log(result, calls)
      cb.apply({}, [err].concat(result))
    },
    slowJob: function (duration, err, ...result) {
      setTimeout(function () {
        var cb = result.pop()
        calls.push({err: err, result: result, time: Date.now()-start})
        if (process.env.DEBUG) console.log(result, calls)
        cb.apply({}, [err].concat(result))
      }, duration)
    },
    promise: function (err, ...result) {
      return new Promise(function (resolve, reject) {
        if (process.env.DEBUG) console.log('In c.promise. Result: ', result)
        calls.push({err: err, result: result, time: Date.now()-start})
        if (process.env.DEBUG) console.log(result, calls)
        if (err == null) {
          return resolve(result)
        } else {
          return reject(err)
        }
      })
    },
    slowPromise: function (duration, err, ...result) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (process.env.DEBUG) console.log('In c.slowPromise. Result: ', result)
          calls.push({err: err, result: result, time: Date.now()-start})
          if (process.env.DEBUG) console.log(result, calls)
          if (err == null) {
            return resolve(result)
          } else {
            return reject(err)
          }
        }, duration)
      })
    },
    pNoErrVal: function (promise, ...expected) {
      if (process.env.DEBUG) console.log('In c.pNoErrVal. Expected:', expected)
      return promise.then(function (actual) {
        mustEqual(actual, expected)
      })
    },
    noErrVal: function (...expected) {
      return function (err, ...actual) {
        mustEqual(err, null)
        mustEqual(actual, expected)
      }
    },
    last: function (options) {
      var opt = options != null ? options : {}
      return limiter.schedule(opt, function () { return Promise.resolve(getResults()) })
      .catch(function (err) { console.error("Error in context.last:", err)})
    },
    wait: function (wait) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, wait)
      })
    },
    limiter: limiter,
    mustEqual: mustEqual,
    mustExist: function (a) { assert(a != null) },
    results: getResults,
    checkResultsOrder: function (order) {
      mustEqual(order.length, calls.length)
      for (var i = 0; i < Math.max(calls.length, order.length); i++) {
        mustEqual(order[i], calls[i].result)
      }
    },
    checkDuration: function (shouldBe, minBound = 10) {
      var results = getResults()
      var min = shouldBe - minBound
      var max = shouldBe + 50
      if (!(results.callsDuration > min && results.callsDuration < max)) {
        console.error('Duration not around ' + shouldBe + '. Was ' + results.callsDuration)
      }
      assert(results.callsDuration > min && results.callsDuration < max)
    }
  }

  return context
}
