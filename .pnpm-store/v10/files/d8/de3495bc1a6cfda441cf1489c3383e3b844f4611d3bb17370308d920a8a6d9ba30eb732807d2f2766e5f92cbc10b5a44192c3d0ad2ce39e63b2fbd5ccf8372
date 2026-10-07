'use strict';

// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var Buffer = require('safe-buffer').Buffer;
var createHmac = require('create-hmac');
var crt = require('browserify-rsa');
var EC = require('elliptic').ec;
var BN = require('bn.js');
var parseKeys = require('parse-asn1');
var curves = require('./curves.json');

var RSA_PKCS1_PADDING = 1;

function sign(hash, key, hashType, signType, tag) {
  var priv = parseKeys(key);
  if (priv.curve) {
    // rsa keys can be interpreted as ecdsa ones in openssl
    if (signType !== 'ecdsa' && signType !== 'ecdsa/rsa') { throw new Error('wrong private key type'); }
    return ecSign(hash, priv);
  } else if (priv.type === 'dsa') {
    if (signType !== 'dsa') { throw new Error('wrong private key type'); }
    return dsaSign(hash, priv, hashType);
  }
  if (signType !== 'rsa' && signType !== 'ecdsa/rsa') { throw new Error('wrong private key type'); }
  if (key.padding !== undefined && key.padding !== RSA_PKCS1_PADDING) { throw new Error('illegal or unsupported padding mode'); }

  hash = Buffer.concat([tag, hash]);
  var len = priv.modulus.byteLength();
  var pad = [0, 1];
  while (hash.length + pad.length + 1 < len) { pad.push(0xff); }
  pad.push(0x00);
  var i = -1;
  while (++i < hash.length) { pad.push(hash[i]); }

  var out = crt(pad, priv);
  return out;
}

function ecSign(hash, priv) {
  var curveId = curves[priv.curve.join('.')];
  if (!curveId) { throw new Error('unknown curve ' + priv.curve.join('.')); }

  var curve = new EC(curveId);
  var key = curve.keyFromPrivate(priv.privateKey);
  var out = key.sign(hash);

  return Buffer.from(out.toDER());
}

function dsaSign(hash, priv, algo) {
  var x = priv.params.priv_key;
  var p = priv.params.p;
  var q = priv.params.q;
  var g = priv.params.g;
  var r = new BN(0);
  var k;
  var H = bits2int(hash, q).mod(q);
  var s = false;
  var kv = getKey(x, q, hash, algo);
  while (s === false) {
    k = makeKey(q, kv, algo);
    r = makeR(g, k, p, q);
    s = k.invm(q).imul(H.add(x.mul(r))).mod(q);
    if (s.cmpn(0) === 0) {
      s = false;
      r = new BN(0);
    }
  }
  return toDER(r, s);
}

function toDER(r, s) {
  r = r.toArray();
  s = s.toArray();

  // Pad values
  if (r[0] & 0x80) { r = [0].concat(r); }
  if (s[0] & 0x80) { s = [0].concat(s); }

  var total = r.length + s.length + 4;
  var res = [
    0x30, total, 0x02, r.length
  ];
  res = res.concat(r, [0x02, s.length], s);
  return Buffer.from(res);
}

function getKey(x, q, hash, algo) {
  x = Buffer.from(x.toArray());
  if (x.length < q.byteLength()) {
    var zeros = Buffer.alloc(q.byteLength() - x.length);
    x = Buffer.concat([zeros, x]);
  }
  var hlen = hash.length;
  var hbits = bits2octets(hash, q);
  var v = Buffer.alloc(hlen);
  v.fill(1);
  var k = Buffer.alloc(hlen);
  k = createHmac(algo, k).update(v).update(Buffer.from([0])).update(x).update(hbits).digest();
  v = createHmac(algo, k).update(v).digest();
  k = createHmac(algo, k).update(v).update(Buffer.from([1])).update(x).update(hbits).digest();
  v = createHmac(algo, k).update(v).digest();
  return { k: k, v: v };
}

function bits2int(obits, q) {
  var bits = new BN(obits);
  var shift = (obits.length << 3) - q.bitLength();
  if (shift > 0) { bits.ishrn(shift); }
  return bits;
}

function bits2octets(bits, q) {
  bits = bits2int(bits, q);
  bits = bits.mod(q);
  var out = Buffer.from(bits.toArray());
  if (out.length < q.byteLength()) {
    var zeros = Buffer.alloc(q.byteLength() - out.length);
    out = Buffer.concat([zeros, out]);
  }
  return out;
}

function makeKey(q, kv, algo) {
  var t;
  var k;

  do {
    t = Buffer.alloc(0);

    while (t.length * 8 < q.bitLength()) {
      kv.v = createHmac(algo, kv.k).update(kv.v).digest();
      t = Buffer.concat([t, kv.v]);
    }

    k = bits2int(t, q);
    kv.k = createHmac(algo, kv.k).update(kv.v).update(Buffer.from([0])).digest();
    kv.v = createHmac(algo, kv.k).update(kv.v).digest();
  } while (k.cmp(q) !== -1);

  return k;
}

function makeR(g, k, p, q) {
  return g.toRed(BN.mont(p)).redPow(k).fromRed().mod(q);
}

module.exports = sign;
module.exports.getKey = getKey;
module.exports.makeKey = makeKey;
