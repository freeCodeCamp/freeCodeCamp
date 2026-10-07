var test = require('tape')
var randomBytes = require('./')
var MAX_BYTES = 65536
var MAX_UINT32 = 4294967295

test('sync', function (t) {
  t.plan(9)
  t.equals(randomBytes(0).length, 0, 'len: ' + 0)
  t.equals(randomBytes(3).length, 3, 'len: ' + 3)
  t.equals(randomBytes(30).length, 30, 'len: ' + 30)
  t.equals(randomBytes(300).length, 300, 'len: ' + 300)
  t.equals(randomBytes(17 + MAX_BYTES).length, 17 + MAX_BYTES, 'len: ' + 17 + MAX_BYTES)
  t.equals(randomBytes(MAX_BYTES * 100).length, MAX_BYTES * 100, 'len: ' + MAX_BYTES * 100)
  t.throws(function () {
    randomBytes(MAX_UINT32 + 1)
  })
  t.throws(function () {
    t.equals(randomBytes(-1))
  })
  t.throws(function () {
    t.equals(randomBytes('hello'))
  })
})

test('async', function (t) {
  t.plan(9)

  randomBytes(0, function (err, resp) {
    if (err) throw err

    t.equals(resp.length, 0, 'len: ' + 0)
  })

  randomBytes(3, function (err, resp) {
    if (err) throw err

    t.equals(resp.length, 3, 'len: ' + 3)
  })

  randomBytes(30, function (err, resp) {
    if (err) throw err

    t.equals(resp.length, 30, 'len: ' + 30)
  })

  randomBytes(300, function (err, resp) {
    if (err) throw err

    t.equals(resp.length, 300, 'len: ' + 300)
  })

  randomBytes(17 + MAX_BYTES, function (err, resp) {
    if (err) throw err

    t.equals(resp.length, 17 + MAX_BYTES, 'len: ' + 17 + MAX_BYTES)
  })

  randomBytes(MAX_BYTES * 100, function (err, resp) {
    if (err) throw err

    t.equals(resp.length, MAX_BYTES * 100, 'len: ' + MAX_BYTES * 100)
  })

  t.throws(function () {
    randomBytes(MAX_UINT32 + 1, function () {
      t.ok(false, 'should not get here')
    })
  })

  t.throws(function () {
    randomBytes(-1, function () {
      t.ok(false, 'should not get here')
    })
  })

  t.throws(function () {
    randomBytes('hello', function () {
      t.ok(false, 'should not get here')
    })
  })
})
