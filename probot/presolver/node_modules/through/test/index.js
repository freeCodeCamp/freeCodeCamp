
var test = require('tape')
var spec = require('stream-spec')
var through = require('../')

/*
  I'm using these two functions, and not streams and pipe
  so there is less to break. if this test fails it must be
  the implementation of _through_
*/

function write(array, stream) {
  array = array.slice()
  function next() {
    while(array.length)
      if(stream.write(array.shift()) === false)
        return stream.once('drain', next)
    
    stream.end()
  }

  next()
}

function read(stream, callback) {
  var actual = []
  stream.on('data', function (data) {
    actual.push(data)
  })
  stream.once('end', function () {
    callback(null, actual)
  })
  stream.once('error', function (err) {
    callback(err)
  })
}

test('simple defaults', function(assert) {

  var l = 1000
    , expected = []

  while(l--) expected.push(l * Math.random())

  var t = through()
  var s = spec(t).through().pausable()

  read(t, function (err, actual) {
    assert.ifError(err)
    assert.deepEqual(actual, expected)
    assert.end()
  })

  t.on('close', s.validate)

  write(expected, t)
});

test('simple functions', function(assert) {

  var l = 1000
    , expected = [] 

  while(l--) expected.push(l * Math.random())

  var t = through(function (data) {
      this.emit('data', data*2)
    }) 
  var s = spec(t).through().pausable()
      

  read(t, function (err, actual) {
    assert.ifError(err)
    assert.deepEqual(actual, expected.map(function (data) {
      return data*2
    }))
    assert.end()
  })

  t.on('close', s.validate)

  write(expected, t)
})

test('pauses', function(assert) {

  var l = 1000
    , expected = [] 

  while(l--) expected.push(l) //Math.random())

  var t = through()    
 
  var s = spec(t)
      .through()
      .pausable()

  t.on('data', function () {
    if(Math.random() > 0.1) return
    t.pause()
    process.nextTick(function () {
      t.resume()
    })
  })

  read(t, function (err, actual) {
    assert.ifError(err)
    assert.deepEqual(actual, expected)
  })

  t.on('close', function () {
    s.validate()
    assert.end()
  })

  write(expected, t)
})

test('does not soft-end on `undefined`', function(assert) {
  var stream = through()
    , count = 0

  stream.on('data', function (data) {
    count++
  })

  stream.write(undefined)
  stream.write(undefined)

  assert.equal(count, 2)

  assert.end()
})
