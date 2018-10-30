/*
  assert that data is called many times
  assert that end is called eventually

  assert that when stream enters pause state,
  on drain is emitted eventually.
*/

var es = require('..')
var it = require('it-is').style('colour')
var spec = require('stream-spec')

exports['simple stream'] = function (test) {

  var stream = es.through()
  var x = spec(stream).basic().pausable()

  stream.write(1)
  stream.write(1)
  stream.pause()
  stream.write(1)
  stream.resume()
  stream.write(1)
  stream.end(2) //this will call write()

  process.nextTick(function (){
    x.validate()
    test.done()
  }) 
}

exports['throw on write when !writable'] = function (test) {

  var stream = es.through()
  var x = spec(stream).basic().pausable()

  stream.write(1)
  stream.write(1)
  stream.end(2) //this will call write()
  stream.write(1) //this will be throwing..., but the spec will catch it.

  process.nextTick(function () {
    x.validate()
    test.done()
  })
  
}

exports['end fast'] = function (test) {

  var stream = es.through()
  var x = spec(stream).basic().pausable()

  stream.end() //this will call write()

  process.nextTick(function () {
    x.validate()
    test.done()
  })
  
}


/*
  okay, that was easy enough, whats next?

  say, after you call paused(), write should return false
  until resume is called.

  simple way to implement this:
    write must return !paused
  after pause() paused = true
  after resume() paused = false

  on resume, if !paused drain is emitted again.
  after drain, !paused

  there are lots of subtle ordering bugs in streams.

  example, set !paused before emitting drain.

  the stream api is stateful. 
*/


require('./helper')(module)
