var from = require('..')
var spec = require('stream-spec')
var a = require('assertions')

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

function pause(stream) {
  stream.on('data', function () {
    if(Math.random() > 0.1) return
    stream.pause()
    process.nextTick(function () {
      stream.resume()
    })
  })
}

exports['inc'] = function (test) {

  var fs = from(function (i) {
    this.emit('data', i)
    if(i >= 99)
      return this.emit('end')
    return true
  })

  spec(fs).readable().validateOnExit() 

  read(fs, function (err, arr) {
    test.equal(arr.length, 100)
    test.done()
  })
}

exports['inc - async'] = function (test) {

  var fs = from(function (i, next) {
    this.emit('data', i)
    if(i >= 99)
      return this.emit('end')
		next();
  })

  spec(fs).readable().validateOnExit() 

  read(fs, function (err, arr) {
    test.equal(arr.length, 100)
    test.done()
  })
}

exports['large stream - from an array'] = function (test) {

  var l = 100000
    , expected = [] 

  while(l--) expected.push(l * Math.random())

  var fs = from(expected.slice())

  spec(fs).readable().validateOnExit() 

  read(fs, function (err, arr) {
		a.deepEqual(arr, expected)
    test.done()
  })
}

exports['large stream - callback return true'] = function (test) {

  var fs = from(function (i, next) {
    this.emit('data', i)
    if(i >= 99999)
      return this.emit('end')
		return true;
  })

  spec(fs).readable().validateOnExit() 

  read(fs, function (err, arr) {
    test.equal(arr.length, 100000)
    test.done()
  })
}

exports['large stream - callback call next()'] = function (test) {

  var fs = from(function (i, next) {
    this.emit('data', i)
    if(i >= 99999)
      return this.emit('end')
		next();
  })

  spec(fs).readable().validateOnExit() 

  read(fs, function (err, arr) {
    test.equal(arr.length, 100000)
    test.done()
  })
}

exports['simple'] = function (test) {

  var l = 1000
    , expected = [] 

  while(l--) expected.push(l * Math.random())

  var t = from(expected.slice())

  spec(t)
    .readable()
    .pausable({strict: true})
    .validateOnExit()

  read(t, function (err, actual) {
    if(err) test.error(err) //fail
    a.deepEqual(actual, expected)
    test.done()
  })

}

exports['simple pausable'] = function (test) {

  var l = 1000
    , expected = [] 

  while(l--) expected.push(l * Math.random())

  var t = from(expected.slice())

  spec(t)
    .readable()
    .pausable({strict: true})
    .validateOnExit()

  pause(t)

  read(t, function (err, actual) {
    if(err) test.error(err) //fail
    a.deepEqual(actual, expected)
    test.done()
  })

}

exports['simple (not strictly pausable) setTimeout'] = function (test) {

  var l = 10
    , expected = [] 
  while(l--) expected.push(l * Math.random())


  var _expected = expected.slice()
  var t = from(function (i, n) {
    var self = this
    setTimeout(function () {
      if(_expected.length)
        self.emit('data', _expected.shift())
      else
        if(!self.ended)
          self.emit('end')
      n()
    }, 3)
  })

  /*
    using from in this way will not be strictly pausable.
    it could be extended to buffer outputs, but I think a better
    way would be to use a PauseStream that implements strict pause.
  */

  spec(t)
    .readable()
    .pausable({strict: false })
    .validateOnExit()

  //pause(t)
  var paused = false
  var i = setInterval(function () {
    if(!paused) t.pause()
    else t.resume()
    paused = !paused
  }, 2)

  t.on('end', function () {
    clearInterval(i)
  })

  read(t, function (err, actual) {
    if(err) test.error(err) //fail
    a.deepEqual(actual, expected)
    test.done()
  })

}


