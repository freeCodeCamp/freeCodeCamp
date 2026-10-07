var test = require('tape')
var fs = require('fs')
var parseKeys = require('parse-asn1')
var Buffer = require('safe-buffer').Buffer
var path = require('path')

require('./nodeTests')
var rsa1024 = {
  private: fs.readFileSync(path.join(__dirname, 'rsa.1024.priv')),
  public: fs.readFileSync(path.join(__dirname, 'rsa.1024.pub'))
}
var rsa1024priv = {
  private: fs.readFileSync(path.join(__dirname, 'rsa.1024.priv')),
  public: fs.readFileSync(path.join(__dirname, 'rsa.1024.priv'))
}

var rsa2028 = {
  private: fs.readFileSync(path.join(__dirname, 'rsa.2028.priv')),
  public: fs.readFileSync(path.join(__dirname, 'rsa.2028.pub'))
}
var nonrsa1024 = {
  private: fs.readFileSync(path.join(__dirname, '1024.priv')),
  public: fs.readFileSync(path.join(__dirname, '1024.pub'))
}
var nonrsa1024str = {
  private: fs.readFileSync(path.join(__dirname, '1024.priv')).toString(),
  public: fs.readFileSync(path.join(__dirname, '1024.pub')).toString()
}
var pass1024 = {
  private: {
    passphrase: 'fooo',
    key: fs.readFileSync(path.join(__dirname, 'pass.1024.priv'))
  },
  public: fs.readFileSync(path.join(__dirname, 'pass.1024.pub'))
}
var pass2028 = {
  private: {
    passphrase: 'password',
    key: fs.readFileSync(path.join(__dirname, 'rsa.pass.priv'))
  },
  public: fs.readFileSync(path.join(__dirname, 'rsa.pass.pub'))
}

var nodeCrypto = require('../')
var myCrypto = require('../browser')
function _testIt (keys, message, t) {
  var pub = keys.public
  var priv = keys.private
  t.test(message.toString(), function (t) {
    t.plan(8)

    var myEnc = myCrypto.publicEncrypt(pub, message)
    var nodeEnc = nodeCrypto.publicEncrypt(pub, message)
    t.equals(myCrypto.privateDecrypt(priv, myEnc).toString('hex'), message.toString('hex'), 'my decrypter my message')
    t.equals(myCrypto.privateDecrypt(priv, nodeEnc).toString('hex'), message.toString('hex'), 'my decrypter node\'s message')
    t.equals(nodeCrypto.privateDecrypt(priv, myEnc).toString('hex'), message.toString('hex'), 'node decrypter my message')
    t.equals(nodeCrypto.privateDecrypt(priv, nodeEnc).toString('hex'), message.toString('hex'), 'node decrypter node\'s message')
    myEnc = myCrypto.privateEncrypt(priv, message)
    nodeEnc = nodeCrypto.privateEncrypt(priv, message)
    t.equals(myCrypto.publicDecrypt(pub, myEnc).toString('hex'), message.toString('hex'), 'reverse methods my decrypter my message')
    t.equals(myCrypto.publicDecrypt(pub, nodeEnc).toString('hex'), message.toString('hex'), 'reverse methods my decrypter node\'s message')
    t.equals(nodeCrypto.publicDecrypt(pub, myEnc).toString('hex'), message.toString('hex'), 'reverse methods node decrypter my message')
    t.equals(nodeCrypto.publicDecrypt(pub, nodeEnc).toString('hex'), message.toString('hex'), 'reverse methods node decrypter node\'s message')
  })
}
function testIt (keys, message, t) {
  _testIt(keys, message, t)
  _testIt(paddingObject(keys, 1), Buffer.concat([message, Buffer.from(' with RSA_PKCS1_PADDING')]), t)
  var parsedKey = parseKeys(keys.public)
  var k = parsedKey.modulus.byteLength()
  var zBuf = Buffer.alloc(k)
  var msg = Buffer.concat([zBuf, message, Buffer.from(' with no padding')]).slice(-k)
  _testIt(paddingObject(keys, 3), msg, t)
}
function paddingObject (keys, padding) {
  return {
    public: addPadding(keys.public, padding),
    private: addPadding(keys.private, padding)
  }
}
function addPadding (key, padding) {
  if (typeof key === 'string' || Buffer.isBuffer(key)) {
    return {
      key: key,
      padding: padding
    }
  }
  var out = {
    key: key.key,
    padding: padding
  }
  if ('passphrase' in key) {
    out.passphrase = key.passphrase
  }
  return out
}
function testRun (i) {
  test('run ' + i, function (t) {
    testIt(rsa1024priv, Buffer.from('1024 2 private keys'), t)
    testIt(rsa1024, Buffer.from('1024 keys'), t)
    testIt(rsa2028, Buffer.from('2028 keys'), t)
    testIt(nonrsa1024, Buffer.from('1024 keys non-rsa key'), t)
    testIt(pass1024, Buffer.from('1024 keys and password'), t)
    testIt(nonrsa1024str, Buffer.from('1024 keys non-rsa key as a string'), t)
    testIt(pass2028, Buffer.from('2028 rsa key with variant passwords'), t)
  })
}

var i = 0
var num = 20
while (++i <= num) {
  testRun(i)
}
