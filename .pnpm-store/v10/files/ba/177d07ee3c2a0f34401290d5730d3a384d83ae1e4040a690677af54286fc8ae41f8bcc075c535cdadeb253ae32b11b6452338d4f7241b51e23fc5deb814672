var crypto = require('../browser')
var test = require('tape')
var fs = require('fs')
var Buffer = require('safe-buffer').Buffer
var path = require('path')
// Test RSA encryption/decryption
test('node tests', function (t) {
  var keyPem = fs.readFileSync(path.join(__dirname, 'test_key.pem'), 'ascii')
  var rsaPubPem = fs.readFileSync(path.join(__dirname, 'test_rsa_pubkey.pem'),
    'ascii')
  var rsaKeyPem = fs.readFileSync(path.join(__dirname, 'test_rsa_privkey.pem'),
    'ascii')
  var rsaKeyPemEncrypted = fs.readFileSync(path.join(
    __dirname, 'test_rsa_privkey_encrypted.pem'), 'ascii')
  var input = 'I AM THE WALRUS'
  var bufferToEncrypt = Buffer.from(input)

  var encryptedBuffer = crypto.publicEncrypt(rsaPubPem, bufferToEncrypt)

  var decryptedBuffer = crypto.privateDecrypt(rsaKeyPem, encryptedBuffer)
  t.equal(input, decryptedBuffer.toString())

  var decryptedBufferWithPassword = crypto.privateDecrypt({
    key: rsaKeyPemEncrypted,
    passphrase: 'password'
  }, encryptedBuffer)
  t.equal(input, decryptedBufferWithPassword.toString())

  // encryptedBuffer = crypto.publicEncrypt(certPem, bufferToEncrypt);

  // decryptedBuffer = crypto.privateDecrypt(keyPem, encryptedBuffer);
  // t.equal(input, decryptedBuffer.toString());

  encryptedBuffer = crypto.publicEncrypt(keyPem, bufferToEncrypt)

  decryptedBuffer = crypto.privateDecrypt(keyPem, encryptedBuffer)
  t.equal(input, decryptedBuffer.toString())

  encryptedBuffer = crypto.privateEncrypt(keyPem, bufferToEncrypt)

  decryptedBuffer = crypto.publicDecrypt(keyPem, encryptedBuffer)
  t.equal(input, decryptedBuffer.toString())

  t.throws(function () {
    crypto.privateDecrypt({
      key: rsaKeyPemEncrypted,
      passphrase: 'wrong'
    }, encryptedBuffer)
  })
  t.end()
})
