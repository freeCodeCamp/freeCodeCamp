TweetNaCl.js
============

Port of [TweetNaCl](http://tweetnacl.cr.yp.to) / [NaCl](http://nacl.cr.yp.to/)
to JavaScript for modern browsers and Node.js. Public domain.

[![Build Status](https://travis-ci.org/dchest/tweetnacl-js.svg?branch=master)
](https://travis-ci.org/dchest/tweetnacl-js)

Demo: <https://tweetnacl.js.org>

**:warning: The library is stable and API is frozen, however it has not been
independently reviewed. If you can help reviewing it, please [contact
me](mailto:dmitry@codingrobots.com).**

Documentation
=============

* [Overview](#overview)
* [Installation](#installation)
* [Usage](#usage)
  * [Public-key authenticated encryption (box)](#public-key-authenticated-encryption-box)
  * [Secret-key authenticated encryption (secretbox)](#secret-key-authenticated-encryption-secretbox)
  * [Scalar multiplication](#scalar-multiplication)
  * [Signatures](#signatures)
  * [Hashing](#hashing)
  * [Random bytes generation](#random-bytes-generation)
  * [Constant-time comparison](#constant-time-comparison)
* [System requirements](#system-requirements)
* [Development and testing](#development-and-testing)
* [Benchmarks](#benchmarks)
* [Contributors](#contributors)
* [Who uses it](#who-uses-it)


Overview
--------

The primary goal of this project is to produce a translation of TweetNaCl to
JavaScript which is as close as possible to the original C implementation, plus
a thin layer of idiomatic high-level API on top of it.

There are two versions, you can use either of them:

* `nacl.js` is the port of TweetNaCl with minimum differences from the
  original + high-level API.

* `nacl-fast.js` is like `nacl.js`, but with some functions replaced with
  faster versions.


Installation
------------

You can install TweetNaCl.js via a package manager:

[Bower](http://bower.io):

    $ bower install tweetnacl

[NPM](https://www.npmjs.org/):

    $ npm install tweetnacl

or [download source code](https://github.com/dchest/tweetnacl-js/releases).


Usage
-----

All API functions accept and return bytes as `Uint8Array`s.  If you need to
encode or decode strings, use functions from
<https://github.com/dchest/tweetnacl-util-js> or one of the more robust codec
packages.

In Node.js v4 and later `Buffer` objects are backed by `Uint8Array`s, so you
can freely pass them to TweetNaCl.js functions as arguments. The returned
objects are still `Uint8Array`s, so if you need `Buffer`s, you'll have to
convert them manually; make sure to convert using copying: `new Buffer(array)`,
instead of sharing: `new Buffer(array.buffer)`, because some functions return
subarrays of their buffers.


### Public-key authenticated encryption (box)

Implements *curve25519-xsalsa20-poly1305*.

#### nacl.box.keyPair()

Generates a new random key pair for box and returns it as an object with
`publicKey` and `secretKey` members:

    {
       publicKey: ...,  // Uint8Array with 32-byte public key
       secretKey: ...   // Uint8Array with 32-byte secret key
    }


#### nacl.box.keyPair.fromSecretKey(secretKey)

Returns a key pair for box with public key corresponding to the given secret
key.

#### nacl.box(message, nonce, theirPublicKey, mySecretKey)

Encrypt and authenticates message using peer's public key, our secret key, and
the given nonce, which must be unique for each distinct message for a key pair.

Returns an encrypted and authenticated message, which is
`nacl.box.overheadLength` longer than the original message.

#### nacl.box.open(box, nonce, theirPublicKey, mySecretKey)

Authenticates and decrypts the given box with peer's public key, our secret
key, and the given nonce.

Returns the original message, or `false` if authentication fails.

#### nacl.box.before(theirPublicKey, mySecretKey)

Returns a precomputed shared key which can be used in `nacl.box.after` and
`nacl.box.open.after`.

#### nacl.box.after(message, nonce, sharedKey)

Same as `nacl.box`, but uses a shared key precomputed with `nacl.box.before`.

#### nacl.box.open.after(box, nonce, sharedKey)

Same as `nacl.box.open`, but uses a shared key precomputed with `nacl.box.before`.

#### nacl.box.publicKeyLength = 32

Length of public key in bytes.

#### nacl.box.secretKeyLength = 32

Length of secret key in bytes.

#### nacl.box.sharedKeyLength = 32

Length of precomputed shared key in bytes.

#### nacl.box.nonceLength = 24

Length of nonce in bytes.

#### nacl.box.overheadLength = 16

Length of overhead added to box compared to original message.


### Secret-key authenticated encryption (secretbox)

Implements *xsalsa20-poly1305*.

#### nacl.secretbox(message, nonce, key)

Encrypt and authenticates message using the key and the nonce. The nonce must
be unique for each distinct message for this key.

Returns an encrypted and authenticated message, which is
`nacl.secretbox.overheadLength` longer than the original message.

#### nacl.secretbox.open(box, nonce, key)

Authenticates and decrypts the given secret box using the key and the nonce.

Returns the original message, or `false` if authentication fails.

#### nacl.secretbox.keyLength = 32

Length of key in bytes.

#### nacl.secretbox.nonceLength = 24

Length of nonce in bytes.

#### nacl.secretbox.overheadLength = 16

Length of overhead added to secret box compared to original message.


### Scalar multiplication

Implements *curve25519*.

#### nacl.scalarMult(n, p)

Multiplies an integer `n` by a group element `p` and returns the resulting
group element.

#### nacl.scalarMult.base(n)

Multiplies an integer `n` by a standard group element and returns the resulting
group element.

#### nacl.scalarMult.scalarLength = 32

Length of scalar in bytes.

#### nacl.scalarMult.groupElementLength = 32

Length of group element in bytes.


### Signatures

Implements [ed25519](http://ed25519.cr.yp.to).

#### nacl.sign.keyPair()

Generates new random key pair for signing and returns it as an object with
`publicKey` and `secretKey` members:

    {
       publicKey: ...,  // Uint8Array with 32-byte public key
       secretKey: ...   // Uint8Array with 64-byte secret key
    }

#### nacl.sign.keyPair.fromSecretKey(secretKey)

Returns a signing key pair with public key corresponding to the given
64-byte secret key. The secret key must have been generated by
`nacl.sign.keyPair` or `nacl.sign.keyPair.fromSeed`.

#### nacl.sign.keyPair.fromSeed(seed)

Returns a new signing key pair generated deterministically from a 32-byte seed.
The seed must contain enough entropy to be secure. This method is not
recommended for general use: instead, use `nacl.sign.keyPair` to generate a new
key pair from a random seed.

#### nacl.sign(message, secretKey)

Signs the message using the secret key and returns a signed message.

#### nacl.sign.open(signedMessage, publicKey)

Verifies the signed message and returns the message without signature.

Returns `null` if verification failed.

#### nacl.sign.detached(message, secretKey)

Signs the message using the secret key and returns a signature.

#### nacl.sign.detached.verify(message, signature, publicKey)

Verifies the signature for the message and returns `true` if verification
succeeded or `false` if it failed.

#### nacl.sign.publicKeyLength = 32

Length of signing public key in bytes.

#### nacl.sign.secretKeyLength = 64

Length of signing secret key in bytes.

#### nacl.sign.seedLength = 32

Length of seed for `nacl.sign.keyPair.fromSeed` in bytes.

#### nacl.sign.signatureLength = 64

Length of signature in bytes.


### Hashing

Implements *SHA-512*.

#### nacl.hash(message)

Returns SHA-512 hash of the message.

#### nacl.hash.hashLength = 64

Length of hash in bytes.


### Random bytes generation

#### nacl.randomBytes(length)

Returns a `Uint8Array` of the given length containing random bytes of
cryptographic quality.

**Implementation note**

TweetNaCl.js uses the following methods to generate random bytes,
depending on the platform it runs on:

* `window.crypto.getRandomValues` (WebCrypto standard)
* `window.msCrypto.getRandomValues` (Internet Explorer 11)
* `crypto.randomBytes` (Node.js)

If the platform doesn't provide a suitable PRNG, the following functions,
which require random numbers, will throw exception:

* `nacl.randomBytes`
* `nacl.box.keyPair`
* `nacl.sign.keyPair`

Other functions are deterministic and will continue working.

If a platform you are targeting doesn't implement secure random number
generator, but you somehow have a cryptographically-strong source of entropy
(not `Math.random`!), and you know what you are doing, you can plug it into
TweetNaCl.js like this:

    nacl.setPRNG(function(x, n) {
      // ... copy n random bytes into x ...
    });

Note that `nacl.setPRNG` *completely replaces* internal random byte generator
with the one provided.


### Constant-time comparison

#### nacl.verify(x, y)

Compares `x` and `y` in constant time and returns `true` if their lengths are
non-zero and equal, and their contents are equal.

Returns `false` if either of the arguments has zero length, or arguments have
different lengths, or their contents differ.


System requirements
-------------------

TweetNaCl.js supports modern browsers that have a cryptographically secure
pseudorandom number generator and typed arrays, including the latest versions
of:

* Chrome
* Firefox
* Safari (Mac, iOS)
* Internet Explorer 11

Other systems:

* Node.js


Development and testing
------------------------

Install NPM modules needed for development:

    $ npm install

To build minified versions:

    $ npm run build

Tests use minified version, so make sure to rebuild it every time you change
`nacl.js` or `nacl-fast.js`.

### Testing

To run tests in Node.js:

    $ npm run test-node

By default all tests described here work on `nacl.min.js`. To test other
versions, set environment variable `NACL_SRC` to the file name you want to test.
For example, the following command will test fast minified version:

    $ NACL_SRC=nacl-fast.min.js npm run test-node

To run full suite of tests in Node.js, including comparing outputs of
JavaScript port to outputs of the original C version:

    $ npm run test-node-all

To prepare tests for browsers:

    $ npm run build-test-browser

and then open `test/browser/test.html` (or `test/browser/test-fast.html`) to
run them.

To run headless browser tests with `tape-run` (powered by Electron):

    $ npm run test-browser

(If you get `Error: spawn ENOENT`, install *xvfb*: `sudo apt-get install xvfb`.)

To run tests in both Node and Electron:

    $ npm test

### Benchmarking

To run benchmarks in Node.js:

    $ npm run bench
    $ NACL_SRC=nacl-fast.min.js npm run bench

To run benchmarks in a browser, open `test/benchmark/bench.html` (or
`test/benchmark/bench-fast.html`).


Benchmarks
----------

For reference, here are benchmarks from MacBook Pro (Retina, 13-inch, Mid 2014)
laptop with 2.6 GHz Intel Core i5 CPU (Intel) in Chrome 53/OS X and Xiaomi Redmi
Note 3 smartphone with 1.8 GHz Qualcomm Snapdragon 650 64-bit CPU (ARM) in
Chrome 52/Android:

|               | nacl.js Intel | nacl-fast.js Intel  |   nacl.js ARM | nacl-fast.js ARM  |
| ------------- |:-------------:|:-------------------:|:-------------:|:-----------------:|
| salsa20       | 1.3 MB/s      | 128 MB/s            |  0.4 MB/s     |  43 MB/s          |
| poly1305      | 13 MB/s       | 171 MB/s            |  4 MB/s       |  52 MB/s          |
| hash          | 4 MB/s        | 34 MB/s             |  0.9 MB/s     |  12 MB/s          |
| secretbox 1K  | 1113 op/s     | 57583 op/s          |  334 op/s     |  14227 op/s       |
| box 1K        | 145 op/s      | 718 op/s            |  37 op/s      |  368 op/s         |
| scalarMult    | 171 op/s      | 733 op/s            |  56 op/s      |  380 op/s         |
| sign          | 77  op/s      | 200 op/s            |  20 op/s      |  61 op/s          |
| sign.open     | 39  op/s      | 102  op/s           |  11 op/s      |  31 op/s          |

(You can run benchmarks on your devices by clicking on the links at the bottom
of the [home page](https://tweetnacl.js.org)).

In short, with *nacl-fast.js* and 1024-byte messages you can expect to encrypt and
authenticate more than 57000 messages per second on a typical laptop or more than
14000 messages per second on a $170 smartphone, sign about 200 and verify 100
messages per second on a laptop or 60 and 30 messages per second on a smartphone,
per CPU core (with Web Workers you can do these operations in parallel),
which is good enough for most applications.


Contributors
------------

See AUTHORS.md file.


Third-party libraries based on TweetNaCl.js
-------------------------------------------

* [forward-secrecy](https://github.com/alax/forward-secrecy) — Axolotl ratchet implementation
* [nacl-stream](https://github.com/dchest/nacl-stream-js) - streaming encryption
* [tweetnacl-auth-js](https://github.com/dchest/tweetnacl-auth-js) — implementation of [`crypto_auth`](http://nacl.cr.yp.to/auth.html)
* [chloride](https://github.com/dominictarr/chloride) - unified API for various NaCl modules


Who uses it
-----------

Some notable users of TweetNaCl.js:

* [miniLock](http://minilock.io/)
* [Stellar](https://www.stellar.org/)
