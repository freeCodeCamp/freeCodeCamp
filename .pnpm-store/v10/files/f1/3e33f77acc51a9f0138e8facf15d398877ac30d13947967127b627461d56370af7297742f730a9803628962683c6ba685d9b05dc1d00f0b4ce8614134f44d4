var test = require('tape')
var crypto = require('crypto')
var desModes = require('browserify-des/modes')
var aesModes = require('browserify-aes/modes')
var ourCrypto = require('./browser')

function runIvTest (mode, keyLen, ivLen) {
  test('mode: ' + mode, function (t) {
    var i = 0
    while (++i < 10) {
      run(i)
    }
    function run (i) {
      t.test('run: ' + i, function (t) {
        t.plan(2)
        var key = crypto.randomBytes(keyLen)
        var iv = crypto.randomBytes(ivLen)
        var text = crypto.randomBytes(200)
        var ourEncrypt
        try {
          ourEncrypt = ourCrypto.createCipheriv(mode, key, iv)
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
        var authTag
        if (mode.slice(-3) === 'gcm') {
          authTag = ourEncrypt.getAuthTag()
        }
        var nodeCipherText = Buffer.concat([nodeEncrypt.update(text), nodeEncrypt.final()])
        t.equals(nodeCipherText.toString('hex'), ourCipherText.toString('hex'))
        var ourDecrypt = ourCrypto.createDecipheriv(mode, key, iv)
        if (mode.slice(-3) === 'gcm') {
          ourDecrypt.setAuthTag(authTag)
        }
        var plainText = Buffer.concat([ourDecrypt.update(ourCipherText), ourDecrypt.final()])
        t.equals(text.toString('hex'), plainText.toString('hex'))
      })
    }
  })
}
Object.keys(aesModes).forEach(function (modeName) {
  var mode = aesModes[modeName]
  runIvTest(modeName, mode.key / 8, mode.iv)
})
Object.keys(desModes).forEach(function (modeName) {
  var mode = desModes[modeName]
  runIvTest(modeName, mode.key, mode.iv)
})
