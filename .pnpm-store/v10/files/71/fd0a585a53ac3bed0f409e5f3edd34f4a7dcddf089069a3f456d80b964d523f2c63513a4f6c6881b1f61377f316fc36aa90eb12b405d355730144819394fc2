var test = require('tape')
var DES = require('./')
var modes = require('./modes')
var crypto = require('crypto')

Object.keys(modes).forEach(function (mode) {
  test(mode, function (t) {
    var i = 0
    while (++i < 10) {
      runOnce(i)
    }
    function runOnce (i) {
      t.test('run: ' + i, function (t) {
        t.plan(2)
        var key = crypto.randomBytes(modes[mode].key)
        var iv = crypto.randomBytes(modes[mode].iv)
        var text = crypto.randomBytes(200)
        var ourEncrypt
        try {
          ourEncrypt = new DES({
            mode: mode,
            key: key,
            iv: iv
          })
        } catch (e) {
          t.notOk(e, e.stack)
        }
        var nodeEncrypt
        try {
          nodeEncrypt = crypto.createCipheriv(mode, key, iv)
        } catch (e) {
          t.notOk(e, e.stack)
        }
        var ourCipherText = Buffer.concat([ourEncrypt.update(text), ourEncrypt.final()])
        var nodeCipherText = Buffer.concat([nodeEncrypt.update(text), nodeEncrypt.final()])
        t.equals(nodeCipherText.toString('hex'), ourCipherText.toString('hex'))
        var ourDecrypt = new DES({
          mode: mode,
          key: key,
          iv: iv,
          decrypt: true
        })
        var plainText = Buffer.concat([ourDecrypt.update(ourCipherText), ourDecrypt.final()])
        t.equals(text.toString('hex'), plainText.toString('hex'))
      })
      t.test('run text: ' + i, function (t) {
        t.plan(2)
        var key = crypto.randomBytes(32).toString('base64').slice(0, modes[mode].key)
        var iv = crypto.randomBytes(32).toString('base64').slice(0, modes[mode].iv)
        var text = crypto.randomBytes(200)
        var ourEncrypt
        try {
          ourEncrypt = new DES({
            mode: mode,
            key: key,
            iv: iv
          })
        } catch (e) {
          t.notOk(e, e.stack)
        }
        var nodeEncrypt
        try {
          nodeEncrypt = crypto.createCipheriv(mode, key, iv)
        } catch (e) {
          t.notOk(e, e.stack)
        }
        var ourCipherText = Buffer.concat([ourEncrypt.update(text), ourEncrypt.final()])
        var nodeCipherText = Buffer.concat([nodeEncrypt.update(text), nodeEncrypt.final()])
        t.equals(nodeCipherText.toString('hex'), ourCipherText.toString('hex'))
        var ourDecrypt = new DES({
          mode: mode,
          key: key,
          iv: iv,
          decrypt: true
        })
        var plainText = Buffer.concat([ourDecrypt.update(ourCipherText), ourDecrypt.final()])
        t.equals(text.toString('hex'), plainText.toString('hex'))
      })
    }
  })
})
