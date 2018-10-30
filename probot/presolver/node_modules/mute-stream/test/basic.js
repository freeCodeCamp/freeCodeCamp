var Stream = require('stream')
var tap = require('tap')
var MS = require('../mute.js')

// some marker objects
var END = {}
var PAUSE = {}
var RESUME = {}

function PassThrough () {
  Stream.call(this)
  this.readable = this.writable = true
}

PassThrough.prototype = Object.create(Stream.prototype, {
  constructor: {
    value: PassThrough
  },
  write: {
    value: function (c) {
      this.emit('data', c)
      return true
    }
  },
  end: {
    value: function (c) {
      if (c) this.write(c)
      this.emit('end')
    }
  },
  pause: {
    value: function () {
      this.emit('pause')
    }
  },
  resume: {
    value: function () {
      this.emit('resume')
    }
  }
})

tap.test('incoming', function (t) {
  var ms = new MS
  var str = new PassThrough
  str.pipe(ms)

  var expect = ['foo', 'boo', END]
  ms.on('data', function (c) {
    t.equal(c, expect.shift())
  })
  ms.on('end', function () {
    t.equal(END, expect.shift())
    t.end()
  })
  str.write('foo')
  ms.mute()
  str.write('bar')
  ms.unmute()
  str.write('boo')
  ms.mute()
  str.write('blaz')
  str.end('grelb')
})

tap.test('outgoing', function (t) {
  var ms = new MS
  var str = new PassThrough
  ms.pipe(str)

  var expect = ['foo', 'boo', END]
  str.on('data', function (c) {
    t.equal(c, expect.shift())
  })
  str.on('end', function () {
    t.equal(END, expect.shift())
    t.end()
  })

  ms.write('foo')
  ms.mute()
  ms.write('bar')
  ms.unmute()
  ms.write('boo')
  ms.mute()
  ms.write('blaz')
  ms.end('grelb')
})

tap.test('isTTY', function (t) {
  var str = new PassThrough
  str.isTTY = true
  str.columns=80
  str.rows=24

  var ms = new MS
  t.equal(ms.isTTY, false)
  t.equal(ms.columns, undefined)
  t.equal(ms.rows, undefined)
  ms.pipe(str)
  t.equal(ms.isTTY, true)
  t.equal(ms.columns, 80)
  t.equal(ms.rows, 24)
  str.isTTY = false
  t.equal(ms.isTTY, false)
  t.equal(ms.columns, 80)
  t.equal(ms.rows, 24)
  str.isTTY = true
  t.equal(ms.isTTY, true)
  t.equal(ms.columns, 80)
  t.equal(ms.rows, 24)
  ms.isTTY = false
  t.equal(ms.isTTY, false)
  t.equal(ms.columns, 80)
  t.equal(ms.rows, 24)

  ms = new MS
  t.equal(ms.isTTY, false)
  str.pipe(ms)
  t.equal(ms.isTTY, true)
  str.isTTY = false
  t.equal(ms.isTTY, false)
  str.isTTY = true
  t.equal(ms.isTTY, true)
  ms.isTTY = false
  t.equal(ms.isTTY, false)

  t.end()
})

tap.test('pause/resume incoming', function (t) {
  var str = new PassThrough
  var ms = new MS
  str.on('pause', function () {
    t.equal(PAUSE, expect.shift())
  })
  str.on('resume', function () {
    t.equal(RESUME, expect.shift())
  })
  var expect = [PAUSE, RESUME, PAUSE, RESUME]
  str.pipe(ms)
  ms.pause()
  ms.resume()
  ms.pause()
  ms.resume()
  t.equal(expect.length, 0, 'saw all events')
  t.end()
})

tap.test('replace with *', function (t) {
  var str = new PassThrough
  var ms = new MS({replace: '*'})
  str.pipe(ms)
  var expect = ['foo', '*****', 'bar', '***', 'baz', 'boo', '**', '****']

  ms.on('data', function (c) {
    t.equal(c, expect.shift())
  })

  str.write('foo')
  ms.mute()
  str.write('12345')
  ms.unmute()
  str.write('bar')
  ms.mute()
  str.write('baz')
  ms.unmute()
  str.write('baz')
  str.write('boo')
  ms.mute()
  str.write('xy')
  str.write('xyzΩ')

  t.equal(expect.length, 0)
  t.end()
})

tap.test('replace with ~YARG~', function (t) {
  var str = new PassThrough
  var ms = new MS({replace: '~YARG~'})
  str.pipe(ms)
  var expect = ['foo', '~YARG~~YARG~~YARG~~YARG~~YARG~', 'bar',
                '~YARG~~YARG~~YARG~', 'baz', 'boo', '~YARG~~YARG~',
                '~YARG~~YARG~~YARG~~YARG~']

  ms.on('data', function (c) {
    t.equal(c, expect.shift())
  })

  // also throw some unicode in there, just for good measure.
  str.write('foo')
  ms.mute()
  str.write('ΩΩ')
  ms.unmute()
  str.write('bar')
  ms.mute()
  str.write('Ω')
  ms.unmute()
  str.write('baz')
  str.write('boo')
  ms.mute()
  str.write('Ω')
  str.write('ΩΩ')

  t.equal(expect.length, 0)
  t.end()
})
