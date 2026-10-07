'use strict';

// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var Buffer = require('safe-buffer').Buffer;
var BN = require('bn.js');
var EC = require('elliptic').ec;
var parseKeys = require('parse-asn1');
var curves = require('./curves.json');

function verify(sig, hash, key, signType, tag) {
  var pub = parseKeys(key);
  if (pub.type === 'ec') {
    // rsa keys can be interpreted as ecdsa ones in openssl
    if (signType !== 'ecdsa' && signType !== 'ecdsa/rsa') { throw new Error('wrong public key type'); }
    return ecVerify(sig, hash, pub);
  } else if (pub.type === 'dsa') {
    if (signType !== 'dsa') { throw new Error('wrong public key type'); }
    return dsaVerify(sig, hash, pub);
  }
  if (signType !== 'rsa' && signType !== 'ecdsa/rsa') { throw new Error('wrong public key type'); }

  hash = Buffer.concat([tag, hash]);
  var len = pub.modulus.byteLength();
  var pad = [1];
  var padNum = 0;
  while (hash.length + pad.length + 2 < len) {
    pad.push(0xff);
    padNum += 1;
  }
  pad.push(0x00);
  var i = -1;
  while (++i < hash.length) {
    pad.push(hash[i]);
  }
  pad = Buffer.from(pad);
  var red = BN.mont(pub.modulus);
  sig = new BN(sig).toRed(red);

  sig = sig.redPow(new BN(pub.publicExponent));
  sig = Buffer.from(sig.fromRed().toArray());
  var out = padNum < 8 ? 1 : 0;
  len = Math.min(sig.length, pad.length);
  if (sig.length !== pad.length) { out = 1; }

  i = -1;
  while (++i < len) { out |= sig[i] ^ pad[i]; }
  return out === 0;
}

function ecVerify(sig, hash, pub) {
  var curveId = curves[pub.data.algorithm.curve.join('.')];
  if (!curveId) { throw new Error('unknown curve ' + pub.data.algorithm.curve.join('.')); }

  var curve = new EC(curveId);
  var pubkey = pub.data.subjectPrivateKey.data;

  return curve.verify(hash, sig, pubkey);
}

function dsaVerify(sig, hash, pub) {
  var p = pub.data.p;
  var q = pub.data.q;
  var g = pub.data.g;
  var y = pub.data.pub_key;
  var unpacked = parseKeys.signature.decode(sig, 'der');
  var s = unpacked.s;
  var r = unpacked.r;
  checkValue(s, q);
  checkValue(r, q);
  var montp = BN.mont(p);
  var w = s.invm(q);
  var v = g.toRed(montp)
    .redPow(new BN(hash).mul(w).mod(q))
    .fromRed()
    .mul(y.toRed(montp).redPow(r.mul(w).mod(q)).fromRed())
    .mod(p)
    .mod(q);
  return v.cmp(r) === 0;
}

function checkValue(b, q) {
  if (b.cmpn(0) <= 0) { throw new Error('invalid sig'); }
  if (b.cmp(q) >= 0) { throw new Error('invalid sig'); }
}

module.exports = verify;
