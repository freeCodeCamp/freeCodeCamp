var tape             = require('tape')
  , EE               = require('events').EventEmitter
  , util             = require('util')


  , isStream         = require('./')
  , isReadable       = require('./').isReadable
  , isWritable       = require('./').isWritable
  , isDuplex         = require('./').isDuplex

  , CoreStreams      = require('stream')
  , ReadableStream10 = require('./readable-stream-1.0/')
  , ReadableStream11 = require('./readable-stream-1.1/')


function test (pass, type, stream) {
  tape('isStream('  + type + ')', function (t) {
    t.plan(1)
    t.ok(pass === isStream(stream), type)
  })
}


function testReadable (pass, type, stream) {
  tape('isReadable('  + type + ')', function (t) {
    t.plan(1)
    t.ok(pass === isReadable(stream), type)
  })
}


function testWritable (pass, type, stream) {
  tape('isWritable('  + type + ')', function (t) {
    t.plan(1)
    t.ok(pass === isWritable(stream), type)
  })
}


function testDuplex (pass, type, stream) {
  tape('isDuplex('  + type + ')', function (t) {
    t.plan(1)
    t.ok(pass === isDuplex(stream), type)
  })
}


[ undefined, null, '', true, false, 0, 1, 1.0, 'string', {}, function foo () {} ].forEach(function (o) {
  test(false, 'non-stream / primitive: ' + (JSON.stringify(o) || (o && o.toString()) || o), o)
})


test(false, 'fake stream obj', { pipe: function () {} })


;(function () {

  // looks like a stream!

  function Stream () {
    EE.call(this)
  }
  util.inherits(Stream, EE)
  Stream.prototype.pipe = function () {}
  Stream.Stream = Stream

  test(false, 'fake stream "new Stream()"', new Stream())

}())


test(true, 'CoreStreams.Stream', new (CoreStreams.Stream)())
test(true, 'CoreStreams.Readable', new (CoreStreams.Readable)())
test(true, 'CoreStreams.Writable', new (CoreStreams.Writable)())
test(true, 'CoreStreams.Duplex', new (CoreStreams.Duplex)())
test(true, 'CoreStreams.Transform', new (CoreStreams.Transform)())
test(true, 'CoreStreams.PassThrough', new (CoreStreams.PassThrough)())

test(true, 'ReadableStream10.Readable', new (ReadableStream10.Readable)())
test(true, 'ReadableStream10.Writable', new (ReadableStream10.Writable)())
test(true, 'ReadableStream10.Duplex', new (ReadableStream10.Duplex)())
test(true, 'ReadableStream10.Transform', new (ReadableStream10.Transform)())
test(true, 'ReadableStream10.PassThrough', new (ReadableStream10.PassThrough)())

test(true, 'ReadableStream11.Readable', new (ReadableStream11.Readable)())
test(true, 'ReadableStream11.Writable', new (ReadableStream11.Writable)())
test(true, 'ReadableStream11.Duplex', new (ReadableStream11.Duplex)())
test(true, 'ReadableStream11.Transform', new (ReadableStream11.Transform)())
test(true, 'ReadableStream11.PassThrough', new (ReadableStream11.PassThrough)())


testReadable(false, 'CoreStreams.Stream', new (CoreStreams.Stream)())
testReadable(true, 'CoreStreams.Readable', new (CoreStreams.Readable)())
testReadable(false, 'CoreStreams.Writable', new (CoreStreams.Writable)())
testReadable(true, 'CoreStreams.Duplex', new (CoreStreams.Duplex)())
testReadable(true, 'CoreStreams.Transform', new (CoreStreams.Transform)())
testReadable(true, 'CoreStreams.PassThrough', new (CoreStreams.PassThrough)())

testReadable(true, 'ReadableStream10.Readable', new (ReadableStream10.Readable)())
testReadable(false, 'ReadableStream10.Writable', new (ReadableStream10.Writable)())
testReadable(true, 'ReadableStream10.Duplex', new (ReadableStream10.Duplex)())
testReadable(true, 'ReadableStream10.Transform', new (ReadableStream10.Transform)())
testReadable(true, 'ReadableStream10.PassThrough', new (ReadableStream10.PassThrough)())

testReadable(true, 'ReadableStream11.Readable', new (ReadableStream11.Readable)())
testReadable(false, 'ReadableStream11.Writable', new (ReadableStream11.Writable)())
testReadable(true, 'ReadableStream11.Duplex', new (ReadableStream11.Duplex)())
testReadable(true, 'ReadableStream11.Transform', new (ReadableStream11.Transform)())
testReadable(true, 'ReadableStream11.PassThrough', new (ReadableStream11.PassThrough)())


testWritable(false, 'CoreStreams.Stream', new (CoreStreams.Stream)())
testWritable(false, 'CoreStreams.Readable', new (CoreStreams.Readable)())
testWritable(true, 'CoreStreams.Writable', new (CoreStreams.Writable)())
testWritable(true, 'CoreStreams.Duplex', new (CoreStreams.Duplex)())
testWritable(true, 'CoreStreams.Transform', new (CoreStreams.Transform)())
testWritable(true, 'CoreStreams.PassThrough', new (CoreStreams.PassThrough)())

testWritable(false, 'ReadableStream10.Readable', new (ReadableStream10.Readable)())
testWritable(true, 'ReadableStream10.Writable', new (ReadableStream10.Writable)())
testWritable(true, 'ReadableStream10.Duplex', new (ReadableStream10.Duplex)())
testWritable(true, 'ReadableStream10.Transform', new (ReadableStream10.Transform)())
testWritable(true, 'ReadableStream10.PassThrough', new (ReadableStream10.PassThrough)())

testWritable(false, 'ReadableStream11.Readable', new (ReadableStream11.Readable)())
testWritable(true, 'ReadableStream11.Writable', new (ReadableStream11.Writable)())
testWritable(true, 'ReadableStream11.Duplex', new (ReadableStream11.Duplex)())
testWritable(true, 'ReadableStream11.Transform', new (ReadableStream11.Transform)())
testWritable(true, 'ReadableStream11.PassThrough', new (ReadableStream11.PassThrough)())


testDuplex(false, 'CoreStreams.Stream', new (CoreStreams.Stream)())
testDuplex(false, 'CoreStreams.Readable', new (CoreStreams.Readable)())
testDuplex(false, 'CoreStreams.Writable', new (CoreStreams.Writable)())
testDuplex(true, 'CoreStreams.Duplex', new (CoreStreams.Duplex)())
testDuplex(true, 'CoreStreams.Transform', new (CoreStreams.Transform)())
testDuplex(true, 'CoreStreams.PassThrough', new (CoreStreams.PassThrough)())

testDuplex(false, 'ReadableStream10.Readable', new (ReadableStream10.Readable)())
testDuplex(false, 'ReadableStream10.Writable', new (ReadableStream10.Writable)())
testDuplex(true, 'ReadableStream10.Duplex', new (ReadableStream10.Duplex)())
testDuplex(true, 'ReadableStream10.Transform', new (ReadableStream10.Transform)())
testDuplex(true, 'ReadableStream10.PassThrough', new (ReadableStream10.PassThrough)())

testDuplex(false, 'ReadableStream11.Readable', new (ReadableStream11.Readable)())
testDuplex(false, 'ReadableStream11.Writable', new (ReadableStream11.Writable)())
testDuplex(true, 'ReadableStream11.Duplex', new (ReadableStream11.Duplex)())
testDuplex(true, 'ReadableStream11.Transform', new (ReadableStream11.Transform)())
testDuplex(true, 'ReadableStream11.PassThrough', new (ReadableStream11.PassThrough)())


;[ CoreStreams, ReadableStream10, ReadableStream11 ].forEach(function (p) {
  [ 'Stream', 'Readable', 'Writable', 'Duplex', 'Transform', 'PassThrough' ].forEach(function (k) {
    if (!p[k])
      return

    function SubStream () {
      p[k].call(this)
    }
    util.inherits(SubStream, p[k])

    test(true, 'Stream subclass: ' + p.name + '.' + k, new SubStream())

  })
})



