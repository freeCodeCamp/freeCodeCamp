var makeTest = require('./context')
var Bottleneck = require('../lib/index.js')
var assert = require('assert')

describe('Group', function () {
  var c

  afterEach(function () {
    return c.limiter.disconnect(false)
  })

  it('Should create limiters', function (done) {
    c = makeTest()
    var group = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100
    })

    var results = []

    var job = function (...result) {
      results.push(result)
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return resolve()
        }, 50)
      })
    }

    group.key('A').schedule(job, 1, 2)
    group.key('A').schedule(job, 3)
    group.key('A').schedule(job, 4)
    setTimeout(function () {
      group.key('B').schedule(job, 5)
    }, 20)
    setTimeout(function () {
      group.key('C').schedule(job, 6)
      group.key('C').schedule(job, 7)
    }, 40)

    group.key('A').submit(function (cb) {
      c.mustEqual(results, [[1,2], [5], [6], [3], [7], [4]])
      cb()
      done()
    }, null)
  })

  it('Should set up the limiter IDs (default)', function () {
    c = makeTest()
    var group = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100
    })

    c.mustEqual(group.key('A').id, 'group-key-A')
    c.mustEqual(group.key('B').id, 'group-key-B')
    c.mustEqual(group.key('XYZ').id, 'group-key-XYZ')

    var ids = group.keys().map(function (key) {
      var limiter = group.key(key)
      c.mustEqual(limiter._store.timeout, group.timeout)
      return limiter.id
    })
    c.mustEqual(ids.sort(), ['group-key-A', 'group-key-B', 'group-key-XYZ'])
  })

  it('Should set up the limiter IDs (custom)', function () {
    c = makeTest()
    var group = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100,
      id: 'custom-id'
    })

    c.mustEqual(group.key('A').id, 'custom-id-A')
    c.mustEqual(group.key('B').id, 'custom-id-B')
    c.mustEqual(group.key('XYZ').id, 'custom-id-XYZ')

    var ids = group.keys().map(function (key) {
      var limiter = group.key(key)
      c.mustEqual(limiter._store.timeout, group.timeout)
      return limiter.id
    })
    c.mustEqual(ids.sort(), ['custom-id-A', 'custom-id-B', 'custom-id-XYZ'])
  })

  it('Should pass new limiter to \'created\' event', function () {
    c = makeTest()
    var group = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100
    })

    var keys = []
    var ids = []
    var promises = []
    group.on('created', function (created, key) {
      keys.push(key)
      promises.push(
        created.updateSettings({ id: key })
        .then(function (limiter) {
          ids.push(limiter.id)
        })
      )
    })

    group.key('A')
    group.key('B')
    group.key('A')
    group.key('B')
    group.key('B')
    group.key('BB')
    group.key('C')
    group.key('A')

    return Promise.all(promises)
    .then(function () {
      c.mustEqual(keys, ids)
      return c.limiter.ready()
    })

  })

  it('Should pass error on failure', function (done) {
    var failureMessage = 'SOMETHING BLEW UP!!'
    c = makeTest()
    var group = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100
    })
    c.mustEqual(Object.keys(group.limiters), [])

    var results = []

    var job = function (...result) {
      results.push(result)
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return resolve()
        }, 50)
      })
    }

    group.key('A').schedule(job, 1, 2)
    group.key('A').schedule(job, 3)
    group.key('A').schedule(job, 4)
    group.key('B').schedule(() => Promise.reject(new Error(failureMessage)))
    .catch(function (err) {
      results.push(['CAUGHT', err.message])
    })
    setTimeout(function () {
      group.key('C').schedule(job, 6)
      group.key('C').schedule(job, 7)
    }, 40)


    group.key('A').submit(function (cb) {
      c.mustEqual(results, [[1,2], ['CAUGHT', failureMessage], [6], [3], [7], [4]])
      cb()
      done()
    }, null)
  })

  it('Should update its timeout', function () {
    c = makeTest()
    var group1 = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100
    })
    var group2 = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100, timeout: 5000
    })

    c.mustEqual(group1.timeout, 300000)
    c.mustEqual(group2.timeout, 5000)

    var p1 = group1.updateSettings({ timeout: 123 })
    var p2 = group2.updateSettings({ timeout: 456 })
    return Promise.all([p1, p2])
    .then(function () {
      c.mustEqual(group1.timeout, 123)
      c.mustEqual(group2.timeout, 456)
    })
  })

  it('Should update its limiter options', function () {
    c = makeTest()
    var group = new Bottleneck.Group({
      maxConcurrent: 1, minTime: 100
    })

    var limiter1 = group.key('AAA')
    c.mustEqual(limiter1._store.storeOptions.minTime, 100)

    group.updateSettings({ minTime: 200 })
    c.mustEqual(limiter1._store.storeOptions.minTime, 100)

    var limiter2 = group.key('BBB')
    c.mustEqual(limiter2._store.storeOptions.minTime, 200)
  })

  it('Should support keys() and limiters()', function () {
    c = makeTest()
    var group1 = new Bottleneck.Group({
      maxConcurrent: 1
    })
    var KEY_A = "AAA"
    var KEY_B = "BBB"

    group1.key(KEY_A).submit(c.job, null, 1)
    group1.key(KEY_B).submit(c.job, null, 2)

    var keys = group1.keys()
    var limiters = group1.limiters()
    c.mustEqual(keys, [KEY_A, KEY_B])
    c.mustEqual(limiters.length, 2)

    limiters.forEach(function (limiter, i) {
      c.mustEqual(limiter.key, keys[i])
      assert(limiter.limiter instanceof Bottleneck)
    })
  })

  it('Should call autocleanup', function () {
    var KEY = 'test-key'
    var group = new Bottleneck.Group({
      maxConcurrent: 1
    })
    group.updateSettings({ timeout: 50 })
    c = makeTest({ id: 'something', timeout: group.timeout })

    group.instances[KEY] = c.limiter
    return group.key(KEY).schedule(function () {
      return Promise.resolve()
    })
    .then(function () {
      assert(group.instances[KEY] != null)
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, 100)
      })
    })
    .then(function () {
      assert(group.instances[KEY] == null)
    })
  })

})
