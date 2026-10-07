# Elliptic [![Build Status](https://secure.travis-ci.org/indutny/elliptic.png)](http://travis-ci.org/indutny/elliptic) [![Coverage Status](https://coveralls.io/repos/indutny/elliptic/badge.svg?branch=master&service=github)](https://coveralls.io/github/indutny/elliptic?branch=master) [![Code Climate](https://codeclimate.com/github/indutny/elliptic/badges/gpa.svg)](https://codeclimate.com/github/indutny/elliptic)

[![Saucelabs Test Status](https://saucelabs.com/browser-matrix/gh-indutny-elliptic.svg)](https://saucelabs.com/u/gh-indutny-elliptic)

Fast elliptic-curve cryptography in a plain javascript implementation.

NOTE: Please take a look at http://safecurves.cr.yp.to/ before choosing a curve
for your cryptography operations.

## Incentive

ECC is much slower than regular RSA cryptography, the JS implementations are
even more slower.

## Benchmarks

```bash
$ node benchmarks/index.js
Benchmarking: sign
elliptic#sign x 262 ops/sec ±0.51% (177 runs sampled)
eccjs#sign x 55.91 ops/sec ±0.90% (144 runs sampled)
------------------------
Fastest is elliptic#sign
========================
Benchmarking: verify
elliptic#verify x 113 ops/sec ±0.50% (166 runs sampled)
eccjs#verify x 48.56 ops/sec ±0.36% (125 runs sampled)
------------------------
Fastest is elliptic#verify
========================
Benchmarking: gen
elliptic#gen x 294 ops/sec ±0.43% (176 runs sampled)
eccjs#gen x 62.25 ops/sec ±0.63% (129 runs sampled)
------------------------
Fastest is elliptic#gen
========================
Benchmarking: ecdh
elliptic#ecdh x 136 ops/sec ±0.85% (156 runs sampled)
------------------------
Fastest is elliptic#ecdh
========================
```

## API

### ECDSA

```javascript
var EC = require('elliptic').ec;

// Create and initialize EC context
// (better do it once and reuse it)
var ec = new EC('secp256k1');

// Generate keys
var key = ec.genKeyPair();

// Sign the message's hash (input must be an array, or a hex-string)
var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash);

// Export DER encoded signature in Array
var derSign = signature.toDER();

// Verify signature
console.log(key.verify(msgHash, derSign));

// CHECK WITH NO PRIVATE KEY

var pubPoint = key.getPublic();
var x = pubPoint.getX();
var y = pubPoint.getY();

// Public Key MUST be either:
// 1) '04' + hex string of x + hex string of y; or
// 2) object with two hex string properties (x and y); or
// 3) object with two buffer properties (x and y)
var pub = pubPoint.encode('hex');                                 // case 1
var pub = { x: x.toString('hex'), y: y.toString('hex') };         // case 2
var pub = { x: x.toBuffer(), y: y.toBuffer() };                   // case 3
var pub = { x: x.toArrayLike(Buffer), y: y.toArrayLike(Buffer) }; // case 3

// Import public key
var key = ec.keyFromPublic(pub, 'hex');

// Signature MUST be either:
// 1) DER-encoded signature as hex-string; or
// 2) DER-encoded signature as buffer; or
// 3) object with two hex-string properties (r and s); or
// 4) object with two buffer properties (r and s)

var signature = '3046022100...'; // case 1
var signature = new Buffer('...'); // case 2
var signature = { r: 'b1fc...', s: '9c42...' }; // case 3

// Verify signature
console.log(key.verify(msgHash, signature));
```

### EdDSA

```javascript
var EdDSA = require('elliptic').eddsa;

// Create and initialize EdDSA context
// (better do it once and reuse it)
var ec = new EdDSA('ed25519');

// Create key pair from secret
var key = ec.keyFromSecret('693e3c...'); // hex string, array or Buffer

// Sign the message's hash (input must be an array, or a hex-string)
var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash).toHex();

// Verify signature
console.log(key.verify(msgHash, signature));

// CHECK WITH NO PRIVATE KEY

// Import public key
var pub = '0a1af638...';
var key = ec.keyFromPublic(pub, 'hex');

// Verify signature
var signature = '70bed1...';
console.log(key.verify(msgHash, signature));
```

### ECDH

```javascript
var EC = require('elliptic').ec;
var ec = new EC('curve25519');

// Generate keys
var key1 = ec.genKeyPair();
var key2 = ec.genKeyPair();

var shared1 = key1.derive(key2.getPublic());
var shared2 = key2.derive(key1.getPublic());

console.log('Both shared secrets are BN instances');
console.log(shared1.toString(16));
console.log(shared2.toString(16));
```

three and more members:
```javascript
var EC = require('elliptic').ec;
var ec = new EC('curve25519');

var A = ec.genKeyPair();
var B = ec.genKeyPair();
var C = ec.genKeyPair();

var AB = A.getPublic().mul(B.getPrivate())
var BC = B.getPublic().mul(C.getPrivate())
var CA = C.getPublic().mul(A.getPrivate())

var ABC = AB.mul(C.getPrivate())
var BCA = BC.mul(A.getPrivate())
var CAB = CA.mul(B.getPrivate())

console.log(ABC.getX().toString(16))
console.log(BCA.getX().toString(16))
console.log(CAB.getX().toString(16))
```

NOTE: `.derive()` returns a [BN][1] instance.

## Supported curves

Elliptic.js support following curve types:

* Short Weierstrass
* Montgomery
* Edwards
* Twisted Edwards

Following curve 'presets' are embedded into the library:

* `secp256k1`
* `p192`
* `p224`
* `p256`
* `p384`
* `p521`
* `curve25519`
* `ed25519`

NOTE: That `curve25519` could not be used for ECDSA, use `ed25519` instead.

### Implementation details

ECDSA is using deterministic `k` value generation as per [RFC6979][0]. Most of
the curve operations are performed on non-affine coordinates (either projective
or extended), various windowing techniques are used for different cases.

All operations are performed in reduction context using [bn.js][1], hashing is
provided by [hash.js][2]

### Related projects

* [eccrypto][3]: isomorphic implementation of ECDSA, ECDH and ECIES for both
  browserify and node (uses `elliptic` for browser and [secp256k1-node][4] for
  node)

#### LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2014.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: http://tools.ietf.org/html/rfc6979
[1]: https://github.com/indutny/bn.js
[2]: https://github.com/indutny/hash.js
[3]: https://github.com/bitchan/eccrypto
[4]: https://github.com/wanderer/secp256k1-node
