/* eslint-disable node/no-deprecated-api */

'use strict'

var test = require('tape')

var buffer = require('buffer')

var index = require('./')
var safer = require('./safer')
var dangerous = require('./dangerous')

/* Inheritance tests */

test('Default is Safer', function (t) {
  t.equal(index, safer)
  t.notEqual(safer, dangerous)
  t.notEqual(index, dangerous)
  t.end()
})

test('Is not a function', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.equal(typeof impl, 'object')
    t.equal(typeof impl.Buffer, 'object')
  });
  [buffer].forEach(function (impl) {
    t.equal(typeof impl, 'object')
    t.equal(typeof impl.Buffer, 'function')
  })
  t.end()
})

test('Constructor throws', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.throws(function () { impl.Buffer() })
    t.throws(function () { impl.Buffer(0) })
    t.throws(function () { impl.Buffer('a') })
    t.throws(function () { impl.Buffer('a', 'utf-8') })
    t.throws(function () { return new impl.Buffer() })
    t.throws(function () { return new impl.Buffer(0) })
    t.throws(function () { return new impl.Buffer('a') })
    t.throws(function () { return new impl.Buffer('a', 'utf-8') })
  })
  t.end()
})

test('Safe methods exist', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.equal(typeof impl.Buffer.alloc, 'function', 'alloc')
    t.equal(typeof impl.Buffer.from, 'function', 'from')
  })
  t.end()
})

test('Unsafe methods exist only in Dangerous', function (t) {
  [index, safer].forEach(function (impl) {
    t.equal(typeof impl.Buffer.allocUnsafe, 'undefined')
    t.equal(typeof impl.Buffer.allocUnsafeSlow, 'undefined')
  });
  [dangerous].forEach(function (impl) {
    t.equal(typeof impl.Buffer.allocUnsafe, 'function')
    t.equal(typeof impl.Buffer.allocUnsafeSlow, 'function')
  })
  t.end()
})

test('Generic methods/properties are defined and equal', function (t) {
  ['poolSize', 'isBuffer', 'concat', 'byteLength'].forEach(function (method) {
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl.Buffer[method], buffer.Buffer[method], method)
      t.notEqual(typeof impl.Buffer[method], 'undefined', method)
    })
  })
  t.end()
})

test('Built-in buffer static methods/properties are inherited', function (t) {
  Object.keys(buffer).forEach(function (method) {
    if (method === 'SlowBuffer' || method === 'Buffer') return;
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl[method], buffer[method], method)
      t.notEqual(typeof impl[method], 'undefined', method)
    })
  })
  t.end()
})

test('Built-in Buffer static methods/properties are inherited', function (t) {
  Object.keys(buffer.Buffer).forEach(function (method) {
    if (method === 'allocUnsafe' || method === 'allocUnsafeSlow') return;
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl.Buffer[method], buffer.Buffer[method], method)
      t.notEqual(typeof impl.Buffer[method], 'undefined', method)
    })
  })
  t.end()
})

test('.prototype property of Buffer is inherited', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.equal(impl.Buffer.prototype, buffer.Buffer.prototype, 'prototype')
    t.notEqual(typeof impl.Buffer.prototype, 'undefined', 'prototype')
  })
  t.end()
})

test('All Safer methods are present in Dangerous', function (t) {
  Object.keys(safer).forEach(function (method) {
    if (method === 'Buffer') return;
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl[method], safer[method], method)
      if (method !== 'kStringMaxLength') {
        t.notEqual(typeof impl[method], 'undefined', method)
      }
    })
  })
  Object.keys(safer.Buffer).forEach(function (method) {
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl.Buffer[method], safer.Buffer[method], method)
      t.notEqual(typeof impl.Buffer[method], 'undefined', method)
    })
  })
  t.end()
})

test('Safe methods from Dangerous methods are present in Safer', function (t) {
  Object.keys(dangerous).forEach(function (method) {
    if (method === 'Buffer') return;
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl[method], dangerous[method], method)
      if (method !== 'kStringMaxLength') {
        t.notEqual(typeof impl[method], 'undefined', method)
      }
    })
  })
  Object.keys(dangerous.Buffer).forEach(function (method) {
    if (method === 'allocUnsafe' || method === 'allocUnsafeSlow') return;
    [index, safer, dangerous].forEach(function (impl) {
      t.equal(impl.Buffer[method], dangerous.Buffer[method], method)
      t.notEqual(typeof impl.Buffer[method], 'undefined', method)
    })
  })
  t.end()
})

/* Behaviour tests */

test('Methods return Buffers', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.alloc(0)))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.alloc(0, 10)))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.alloc(0, 'a')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.alloc(10)))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.alloc(10, 'x')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.alloc(9, 'ab')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from('')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from('string')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from('string', 'utf-8')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from('b25ldHdvdGhyZWU=', 'base64')))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from([0, 42, 3])))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from(new Uint8Array([0, 42, 3]))))
    t.ok(buffer.Buffer.isBuffer(impl.Buffer.from([])))
  });
  ['allocUnsafe', 'allocUnsafeSlow'].forEach(function (method) {
    t.ok(buffer.Buffer.isBuffer(dangerous.Buffer[method](0)))
    t.ok(buffer.Buffer.isBuffer(dangerous.Buffer[method](10)))
  })
  t.end()
})

test('Constructor is buffer.Buffer', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.equal(impl.Buffer.alloc(0).constructor, buffer.Buffer)
    t.equal(impl.Buffer.alloc(0, 10).constructor, buffer.Buffer)
    t.equal(impl.Buffer.alloc(0, 'a').constructor, buffer.Buffer)
    t.equal(impl.Buffer.alloc(10).constructor, buffer.Buffer)
    t.equal(impl.Buffer.alloc(10, 'x').constructor, buffer.Buffer)
    t.equal(impl.Buffer.alloc(9, 'ab').constructor, buffer.Buffer)
    t.equal(impl.Buffer.from('').constructor, buffer.Buffer)
    t.equal(impl.Buffer.from('string').constructor, buffer.Buffer)
    t.equal(impl.Buffer.from('string', 'utf-8').constructor, buffer.Buffer)
    t.equal(impl.Buffer.from('b25ldHdvdGhyZWU=', 'base64').constructor, buffer.Buffer)
    t.equal(impl.Buffer.from([0, 42, 3]).constructor, buffer.Buffer)
    t.equal(impl.Buffer.from(new Uint8Array([0, 42, 3])).constructor, buffer.Buffer)
    t.equal(impl.Buffer.from([]).constructor, buffer.Buffer)
  });
  [0, 10, 100].forEach(function (arg) {
    t.equal(dangerous.Buffer.allocUnsafe(arg).constructor, buffer.Buffer)
    t.equal(dangerous.Buffer.allocUnsafeSlow(arg).constructor, buffer.SlowBuffer(0).constructor)
  })
  t.end()
})

test('Invalid calls throw', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.throws(function () { impl.Buffer.from(0) })
    t.throws(function () { impl.Buffer.from(10) })
    t.throws(function () { impl.Buffer.from(10, 'utf-8') })
    t.throws(function () { impl.Buffer.from('string', 'invalid encoding') })
    t.throws(function () { impl.Buffer.from(-10) })
    t.throws(function () { impl.Buffer.from(1e90) })
    t.throws(function () { impl.Buffer.from(Infinity) })
    t.throws(function () { impl.Buffer.from(-Infinity) })
    t.throws(function () { impl.Buffer.from(NaN) })
    t.throws(function () { impl.Buffer.from(null) })
    t.throws(function () { impl.Buffer.from(undefined) })
    t.throws(function () { impl.Buffer.from() })
    t.throws(function () { impl.Buffer.from({}) })
    t.throws(function () { impl.Buffer.alloc('') })
    t.throws(function () { impl.Buffer.alloc('string') })
    t.throws(function () { impl.Buffer.alloc('string', 'utf-8') })
    t.throws(function () { impl.Buffer.alloc('b25ldHdvdGhyZWU=', 'base64') })
    t.throws(function () { impl.Buffer.alloc(-10) })
    t.throws(function () { impl.Buffer.alloc(1e90) })
    t.throws(function () { impl.Buffer.alloc(2 * (1 << 30)) })
    t.throws(function () { impl.Buffer.alloc(Infinity) })
    t.throws(function () { impl.Buffer.alloc(-Infinity) })
    t.throws(function () { impl.Buffer.alloc(null) })
    t.throws(function () { impl.Buffer.alloc(undefined) })
    t.throws(function () { impl.Buffer.alloc() })
    t.throws(function () { impl.Buffer.alloc([]) })
    t.throws(function () { impl.Buffer.alloc([0, 42, 3]) })
    t.throws(function () { impl.Buffer.alloc({}) })
  });
  ['allocUnsafe', 'allocUnsafeSlow'].forEach(function (method) {
    t.throws(function () { dangerous.Buffer[method]('') })
    t.throws(function () { dangerous.Buffer[method]('string') })
    t.throws(function () { dangerous.Buffer[method]('string', 'utf-8') })
    t.throws(function () { dangerous.Buffer[method](2 * (1 << 30)) })
    t.throws(function () { dangerous.Buffer[method](Infinity) })
    if (dangerous.Buffer[method] === buffer.Buffer.allocUnsafe) {
      t.skip('Skipping, older impl of allocUnsafe coerced negative sizes to 0')
    } else {
      t.throws(function () { dangerous.Buffer[method](-10) })
      t.throws(function () { dangerous.Buffer[method](-1e90) })
      t.throws(function () { dangerous.Buffer[method](-Infinity) })
    }
    t.throws(function () { dangerous.Buffer[method](null) })
    t.throws(function () { dangerous.Buffer[method](undefined) })
    t.throws(function () { dangerous.Buffer[method]() })
    t.throws(function () { dangerous.Buffer[method]([]) })
    t.throws(function () { dangerous.Buffer[method]([0, 42, 3]) })
    t.throws(function () { dangerous.Buffer[method]({}) })
  })
  t.end()
})

test('Buffers have appropriate lengths', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.equal(impl.Buffer.alloc(0).length, 0)
    t.equal(impl.Buffer.alloc(10).length, 10)
    t.equal(impl.Buffer.from('').length, 0)
    t.equal(impl.Buffer.from('string').length, 6)
    t.equal(impl.Buffer.from('string', 'utf-8').length, 6)
    t.equal(impl.Buffer.from('b25ldHdvdGhyZWU=', 'base64').length, 11)
    t.equal(impl.Buffer.from([0, 42, 3]).length, 3)
    t.equal(impl.Buffer.from(new Uint8Array([0, 42, 3])).length, 3)
    t.equal(impl.Buffer.from([]).length, 0)
  });
  ['allocUnsafe', 'allocUnsafeSlow'].forEach(function (method) {
    t.equal(dangerous.Buffer[method](0).length, 0)
    t.equal(dangerous.Buffer[method](10).length, 10)
  })
  t.end()
})

test('Buffers have appropriate lengths (2)', function (t) {
  t.equal(index.Buffer.alloc, safer.Buffer.alloc)
  t.equal(index.Buffer.alloc, dangerous.Buffer.alloc)
  var ok = true;
  [ safer.Buffer.alloc,
    dangerous.Buffer.allocUnsafe,
    dangerous.Buffer.allocUnsafeSlow
  ].forEach(function (method) {
    for (var i = 0; i < 1e2; i++) {
      var length = Math.round(Math.random() * 1e5)
      var buf = method(length)
      if (!buffer.Buffer.isBuffer(buf)) ok = false
      if (buf.length !== length) ok = false
    }
  })
  t.ok(ok)
  t.end()
})

test('.alloc(size) is zero-filled and has correct length', function (t) {
  t.equal(index.Buffer.alloc, safer.Buffer.alloc)
  t.equal(index.Buffer.alloc, dangerous.Buffer.alloc)
  var ok = true
  for (var i = 0; i < 1e2; i++) {
    var length = Math.round(Math.random() * 2e6)
    var buf = index.Buffer.alloc(length)
    if (!buffer.Buffer.isBuffer(buf)) ok = false
    if (buf.length !== length) ok = false
    var j
    for (j = 0; j < length; j++) {
      if (buf[j] !== 0) ok = false
    }
    buf.fill(1)
    for (j = 0; j < length; j++) {
      if (buf[j] !== 1) ok = false
    }
  }
  t.ok(ok)
  t.end()
})

test('.allocUnsafe / .allocUnsafeSlow are fillable and have correct lengths', function (t) {
  ['allocUnsafe', 'allocUnsafeSlow'].forEach(function (method) {
    var ok = true
    for (var i = 0; i < 1e2; i++) {
      var length = Math.round(Math.random() * 2e6)
      var buf = dangerous.Buffer[method](length)
      if (!buffer.Buffer.isBuffer(buf)) ok = false
      if (buf.length !== length) ok = false
      buf.fill(0, 0, length)
      var j
      for (j = 0; j < length; j++) {
        if (buf[j] !== 0) ok = false
      }
      buf.fill(1, 0, length)
      for (j = 0; j < length; j++) {
        if (buf[j] !== 1) ok = false
      }
    }
    t.ok(ok, method)
  })
  t.end()
})

test('.alloc(size, fill) is `fill`-filled', function (t) {
  t.equal(index.Buffer.alloc, safer.Buffer.alloc)
  t.equal(index.Buffer.alloc, dangerous.Buffer.alloc)
  var ok = true
  for (var i = 0; i < 1e2; i++) {
    var length = Math.round(Math.random() * 2e6)
    var fill = Math.round(Math.random() * 255)
    var buf = index.Buffer.alloc(length, fill)
    if (!buffer.Buffer.isBuffer(buf)) ok = false
    if (buf.length !== length) ok = false
    for (var j = 0; j < length; j++) {
      if (buf[j] !== fill) ok = false
    }
  }
  t.ok(ok)
  t.end()
})

test('.alloc(size, fill) is `fill`-filled', function (t) {
  t.equal(index.Buffer.alloc, safer.Buffer.alloc)
  t.equal(index.Buffer.alloc, dangerous.Buffer.alloc)
  var ok = true
  for (var i = 0; i < 1e2; i++) {
    var length = Math.round(Math.random() * 2e6)
    var fill = Math.round(Math.random() * 255)
    var buf = index.Buffer.alloc(length, fill)
    if (!buffer.Buffer.isBuffer(buf)) ok = false
    if (buf.length !== length) ok = false
    for (var j = 0; j < length; j++) {
      if (buf[j] !== fill) ok = false
    }
  }
  t.ok(ok)
  t.deepEqual(index.Buffer.alloc(9, 'a'), index.Buffer.alloc(9, 97))
  t.notDeepEqual(index.Buffer.alloc(9, 'a'), index.Buffer.alloc(9, 98))

  var tmp = new buffer.Buffer(2)
  tmp.fill('ok')
  if (tmp[1] === tmp[0]) {
    // Outdated Node.js
    t.deepEqual(index.Buffer.alloc(5, 'ok'), index.Buffer.from('ooooo'))
  } else {
    t.deepEqual(index.Buffer.alloc(5, 'ok'), index.Buffer.from('okoko'))
  }
  t.notDeepEqual(index.Buffer.alloc(5, 'ok'), index.Buffer.from('kokok'))

  t.end()
})

test('safer.Buffer.from returns results same as Buffer constructor', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.deepEqual(impl.Buffer.from(''), new buffer.Buffer(''))
    t.deepEqual(impl.Buffer.from('string'), new buffer.Buffer('string'))
    t.deepEqual(impl.Buffer.from('string', 'utf-8'), new buffer.Buffer('string', 'utf-8'))
    t.deepEqual(impl.Buffer.from('b25ldHdvdGhyZWU=', 'base64'), new buffer.Buffer('b25ldHdvdGhyZWU=', 'base64'))
    t.deepEqual(impl.Buffer.from([0, 42, 3]), new buffer.Buffer([0, 42, 3]))
    t.deepEqual(impl.Buffer.from(new Uint8Array([0, 42, 3])), new buffer.Buffer(new Uint8Array([0, 42, 3])))
    t.deepEqual(impl.Buffer.from([]), new buffer.Buffer([]))
  })
  t.end()
})

test('safer.Buffer.from returns consistent results', function (t) {
  [index, safer, dangerous].forEach(function (impl) {
    t.deepEqual(impl.Buffer.from(''), impl.Buffer.alloc(0))
    t.deepEqual(impl.Buffer.from([]), impl.Buffer.alloc(0))
    t.deepEqual(impl.Buffer.from(new Uint8Array([])), impl.Buffer.alloc(0))
    t.deepEqual(impl.Buffer.from('string', 'utf-8'), impl.Buffer.from('string'))
    t.deepEqual(impl.Buffer.from('string'), impl.Buffer.from([115, 116, 114, 105, 110, 103]))
    t.deepEqual(impl.Buffer.from('string'), impl.Buffer.from(impl.Buffer.from('string')))
    t.deepEqual(impl.Buffer.from('b25ldHdvdGhyZWU=', 'base64'), impl.Buffer.from('onetwothree'))
    t.notDeepEqual(impl.Buffer.from('b25ldHdvdGhyZWU='), impl.Buffer.from('onetwothree'))
  })
  t.end()
})
