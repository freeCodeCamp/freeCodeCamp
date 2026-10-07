var Buffer = require('safe-buffer').Buffer
var CipherBase = require('./')

var test = require('tape')
var inherits = require('inherits')

test('basic version', function (t) {
  function Cipher () {
    CipherBase.call(this)
  }
  inherits(Cipher, CipherBase)
  Cipher.prototype._update = function (input) {
    t.ok(Buffer.isBuffer(input))
    return input
  }
  Cipher.prototype._final = function () {
    // noop
  }
  var cipher = new Cipher()
  var utf8 = 'abc123abcd'
  var update = cipher.update(utf8, 'utf8', 'base64') + cipher.final('base64')
  var string = (Buffer.from(update, 'base64')).toString()
  t.equals(utf8, string)
  t.end()
})
test('hash mode', function (t) {
  function Cipher () {
    CipherBase.call(this, 'finalName')
    this._cache = []
  }
  inherits(Cipher, CipherBase)
  Cipher.prototype._update = function (input) {
    t.ok(Buffer.isBuffer(input))
    this._cache.push(input)
  }
  Cipher.prototype._final = function () {
    return Buffer.concat(this._cache)
  }
  var cipher = new Cipher()
  var utf8 = 'abc123abcd'
  var update = cipher.update(utf8, 'utf8').finalName('base64')
  var string = (Buffer.from(update, 'base64')).toString()

  t.equals(utf8, string)
  t.end()
})
test('hash mode as stream', function (t) {
  function Cipher () {
    CipherBase.call(this, 'finalName')
    this._cache = []
  }
  inherits(Cipher, CipherBase)
  Cipher.prototype._update = function (input) {
    t.ok(Buffer.isBuffer(input))
    this._cache.push(input)
  }
  Cipher.prototype._final = function () {
    return Buffer.concat(this._cache)
  }
  var cipher = new Cipher()
  cipher.on('error', function (e) {
    t.notOk(e)
  })
  var utf8 = 'abc123abcd'
  cipher.end(utf8, 'utf8')
  var update = cipher.read().toString('base64')
  var string = (Buffer.from(update, 'base64')).toString()

  t.equals(utf8, string)
  t.end()
})

test('encodings', function (t) {
  inherits(Cipher, CipherBase)
  function Cipher () {
    CipherBase.call(this)
  }
  Cipher.prototype._update = function (input) {
    return input
  }
  Cipher.prototype._final = function () {
    // noop
  }
  t.test('mix and match encoding', function (t) {
    t.plan(2)

    var cipher = new Cipher()
    cipher.update('foo', 'utf8', 'utf8')
    t.throws(function () {
      cipher.update('foo', 'utf8', 'base64')
    })
    cipher = new Cipher()
    cipher.update('foo', 'utf8', 'base64')
    t.doesNotThrow(function () {
      cipher.update('foo', 'utf8')
      cipher.final('base64')
    })
  })
  t.test('handle long uft8 plaintexts', function (t) {
    t.plan(1)
    var txt = 'ふっかつ　あきる　すぶり　はやい　つける　まゆげ　たんさん　みんぞく　ねほりはほり　せまい　たいまつばな　ひはん'

    var cipher = new Cipher()
    var decipher = new Cipher()
    var enc = decipher.update(cipher.update(txt, 'utf8', 'base64'), 'base64', 'utf8')
    enc += decipher.update(cipher.final('base64'), 'base64', 'utf8')
    enc += decipher.final('utf8')

    t.equals(txt, enc)
  })
})
