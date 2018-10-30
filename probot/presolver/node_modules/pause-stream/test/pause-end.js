
var pause = require('..')
var assert = require('assert')

var ps = pause()
var read = [], ended = false

ps.on('data', function (i) {
  read.push(i)
})

ps.on('end', function () {
  ended = true
})

assert.deepEqual(read, [])

ps.write(0)
ps.write(1)
ps.write(2)

assert.deepEqual(read, [0, 1, 2])

ps.pause()

assert.deepEqual(read, [0, 1, 2])

ps.end()
assert.equal(ended, false)
ps.resume()
assert.equal(ended, true)


