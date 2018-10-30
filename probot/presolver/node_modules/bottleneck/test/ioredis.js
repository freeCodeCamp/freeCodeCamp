var makeTest = require('./context')
var Bottleneck = require('../lib/index.js')
var assert = require('assert')
var Redis = require('ioredis')

if (process.env.DATASTORE === 'ioredis') {
  describe('ioredis-only', function () {
    var c

    afterEach(function () {
      return c.limiter.disconnect(false)
    })

    it('Should connect in Redis Cluster mode', function () {
      c = makeTest({
        maxConcurrent: 2,
        clientOptions: {},
        clusterNodes: [{
          host: '127.0.0.1',
          port: 6379
        }]
      })

      c.mustEqual(c.limiter.datastore, 'ioredis')
      c.mustEqual(c.limiter._store.connection.client.nodes().length, 1)
    })

    it('Should accept existing connections', function () {
      var connection = new Bottleneck.IORedisConnection()
      connection.id = 'super-connection'
      c = makeTest({
        minTime: 50,
        connection
      })

      c.pNoErrVal(c.limiter.schedule(c.promise, null, 1), 1)
      c.pNoErrVal(c.limiter.schedule(c.promise, null, 2), 2)

      return c.last()
      .then(function (results) {
        c.checkResultsOrder([[1], [2]])
        c.checkDuration(50)
        c.mustEqual(c.limiter.connection.id, 'super-connection')
        c.mustEqual(c.limiter.datastore, 'ioredis')

        return c.limiter.disconnect()
      })
      .then(function () {
        // Shared connections should not be disconnected by the limiter
        c.mustEqual(c.limiter.clients().client.status, 'ready')
        return connection.disconnect()
      })
    })

    it('Should accept existing redis clients', function () {
      var client = new Redis()
      client.id = 'super-client'

      var connection = new Bottleneck.IORedisConnection({ client })
      connection.id = 'super-connection'
      c = makeTest({
        minTime: 50,
        connection
      })

      c.pNoErrVal(c.limiter.schedule(c.promise, null, 1), 1)
      c.pNoErrVal(c.limiter.schedule(c.promise, null, 2), 2)

      return c.last()
      .then(function (results) {
        c.checkResultsOrder([[1], [2]])
        c.checkDuration(50)
        c.mustEqual(c.limiter.clients().client.id, 'super-client')
        c.mustEqual(c.limiter.connection.id, 'super-connection')
        c.mustEqual(c.limiter.datastore, 'ioredis')

        return c.limiter.disconnect()
      })
      .then(function () {
        // Shared connections should not be disconnected by the limiter
        c.mustEqual(c.limiter.clients().client.status, 'ready')
        return connection.disconnect()
      })
    })

    it('Should trigger error events on the shared connection', function (done) {
      var connection = new Bottleneck.IORedisConnection({
        clientOptions: {
          port: 1
        }
      })
      connection.on('error', function (err) {
        c.mustEqual(c.limiter.datastore, 'ioredis')
        connection.disconnect()
        done()
      })

      c = makeTest({ connection })
      c.limiter.on('error', function (err) {
        done(err)
      })
    })

  })
}
