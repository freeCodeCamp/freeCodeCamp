var test = require('tape')
var crypto = require('./browser')
var Buffer = require('safe-buffer').Buffer
test('sync', function (t) {
  t.test('first', function (t) {
    const buf = Buffer.alloc(10)
    const before = buf.toString('hex')
    crypto.randomFillSync(buf, 5, 5)
    const after = buf.toString('hex')
    t.notEqual(before, after)
    t.equal(before.slice(0, 10), after.slice(0, 10))
    t.end()
  })
})
test('async', function (t) {
  t.test('first', function (t) {
    const buf = Buffer.alloc(10)
    const before = buf.toString('hex')
    crypto.randomFill(buf, 5, 5, function (err, bufa) {
      t.error(err)
      const after = bufa.toString('hex')
      t.notEqual(before, after)
      t.equal(before.slice(0, 10), after.slice(0, 10))
      t.ok(buf === bufa, 'same buffer')
      t.end()
    })
  })
})
