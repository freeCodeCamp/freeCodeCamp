TweetNaCl.js Changelog
======================


v0.14.5
-------

* Fixed incomplete return types in TypeScript typings.
* Replaced COPYING.txt with LICENSE file, which now has public domain dedication
  text from The Unlicense. License fields in package.json and bower.json have
  been set to "Unlicense". The project was and will be in the public domain --
  this change just makes it easier for automated tools to know about this fact by
  using the widely recognized and SPDX-compatible template for public domain
  dedication.


v0.14.4
-------

* Added TypeScript type definitions (contributed by @AndSDev).
* Improved benchmarking code.


v0.14.3
-------

Fixed a bug in the fast version of Poly1305 and brought it back.

Thanks to @floodyberry for promptly responding and fixing the original C code:

> "The issue was not properly detecting if st->h was >= 2^130 - 5, coupled with
> [testing mistake] not catching the failure. The chance of the bug affecting
> anything in the real world is essentially zero luckily, but it's good to have
> it fixed."

https://github.com/floodyberry/poly1305-donna/issues/2#issuecomment-202698577


v0.14.2
-------

Switched Poly1305 fast version back to original (slow) version due to a bug.


v0.14.1
-------

No code changes, just tweaked packaging and added COPYING.txt.


v0.14.0
-------

* **Breaking change!** All functions from `nacl.util` have been removed. These
  functions are no longer available:

      nacl.util.decodeUTF8
      nacl.util.encodeUTF8
      nacl.util.decodeBase64
      nacl.util.encodeBase64

  If want to continue using them, you can include
  <https://github.com/dchest/tweetnacl-util-js> package:

      <script src="nacl.min.js"></script>
      <script src="nacl-util.min.js"></script>

  or

      var nacl = require('tweetnacl');
      nacl.util = require('tweetnacl-util');

  However it is recommended to use better packages that have wider
  compatibility and better performance. Functions from `nacl.util` were never
  intended to be robust solution for string conversion and were included for
  convenience: cryptography library is not the right place for them.

  Currently calling these functions will throw error pointing to
  `tweetnacl-util-js` (in the next version this error message will be removed).

* Improved detection of available random number generators, making it possible
  to use `nacl.randomBytes` and related functions in Web Workers without
  changes.

* Changes to testing (see README).


v0.13.3
-------

No code changes.

* Reverted license field in package.json to "Public domain".

* Fixed typo in README.


v0.13.2
-------

* Fixed undefined variable bug in fast version of Poly1305. No worries, this
  bug was *never* triggered.

* Specified CC0 public domain dedication.

* Updated development dependencies.


v0.13.1
-------

* Exclude `crypto` and `buffer` modules from browserify builds.


v0.13.0
-------

* Made `nacl-fast` the default version in NPM package. Now
  `require("tweetnacl")` will use fast version; to get the original version,
  use `require("tweetnacl/nacl.js")`.

* Cleanup temporary array after generating random bytes.


v0.12.2
-------

* Improved performance of curve operations, making `nacl.scalarMult`, `nacl.box`,
  `nacl.sign` and related functions up to 3x faster in `nacl-fast` version.


v0.12.1
-------

* Significantly improved performance of Salsa20 (~1.5x faster) and
  Poly1305 (~3.5x faster) in `nacl-fast` version.


v0.12.0
-------

* Instead of using the given secret key directly, TweetNaCl.js now copies it to
  a new array in `nacl.box.keyPair.fromSecretKey` and
  `nacl.sign.keyPair.fromSecretKey`.


v0.11.2
-------

* Added new constant: `nacl.sign.seedLength`.


v0.11.1
-------

* Even faster hash for both short and long inputs (in `nacl-fast`).


v0.11.0
-------

* Implement `nacl.sign.keyPair.fromSeed` to enable creation of sign key pairs
  deterministically from a 32-byte seed. (It behaves like
  [libsodium's](http://doc.libsodium.org/public-key_cryptography/public-key_signatures.html)
  `crypto_sign_seed_keypair`: the seed becomes a secret part of the secret key.)

* Fast version now has an improved hash implementation that is 2x-5x faster.

* Fixed benchmarks, which may have produced incorrect measurements.


v0.10.1
-------

* Exported undocumented `nacl.lowlevel.crypto_core_hsalsa20`.


v0.10.0
-------

* **Signature API breaking change!** `nacl.sign` and `nacl.sign.open` now deal
 with signed messages, and new `nacl.sign.detached` and
 `nacl.sign.detached.verify` are available.
 
 Previously, `nacl.sign` returned a signature, and `nacl.sign.open` accepted a
 message and "detached" signature. This was unlike NaCl's API, which dealt with
 signed messages (concatenation of signature and message).
 
 The new API is:

      nacl.sign(message, secretKey) -> signedMessage
      nacl.sign.open(signedMessage, publicKey) -> message | null

 Since detached signatures are common, two new API functions were introduced:
 
      nacl.sign.detached(message, secretKey) -> signature
      nacl.sign.detached.verify(message, signature, publicKey) -> true | false

 (Note that it's `verify`, not `open`, and it returns a boolean value, unlike
 `open`, which returns an "unsigned" message.)

* NPM package now comes without `test` directory to keep it small.


v0.9.2
------

* Improved documentation.
* Fast version: increased theoretical message size limit from 2^32-1 to 2^52
  bytes in Poly1305 (and thus, secretbox and box). However this has no impact
  in practice since JavaScript arrays or ArrayBuffers are limited to 32-bit
  indexes, and most implementations won't allocate more than a gigabyte or so.
  (Obviously, there are no tests for the correctness of implementation.) Also,
  it's not recommended to use messages that large without splitting them into
  smaller packets anyway.


v0.9.1
------

* Initial release
