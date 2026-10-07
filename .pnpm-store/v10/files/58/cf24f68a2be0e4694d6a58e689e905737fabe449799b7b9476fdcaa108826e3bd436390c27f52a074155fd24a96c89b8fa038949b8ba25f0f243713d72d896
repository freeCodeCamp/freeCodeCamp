# sha.js
[![NPM Package](https://img.shields.io/npm/v/sha.js.svg?style=flat-square)](https://www.npmjs.org/package/sha.js)
[![Build Status](https://img.shields.io/travis/crypto-browserify/sha.js.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/sha.js)
[![Dependency status](https://img.shields.io/david/crypto-browserify/sha.js.svg?style=flat-square)](https://david-dm.org/crypto-browserify/sha.js#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Node style `SHA` on pure JavaScript.

```js
var shajs = require('sha.js')

console.log(shajs('sha256').update('42').digest('hex'))
// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
console.log(new shajs.sha256().update('42').digest('hex'))
// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049

var sha256stream = shajs('sha256')
sha256stream.end('42')
console.log(sha256stream.read().toString('hex'))
// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
```

## supported hashes
`sha.js` currently implements:

  - SHA (SHA-0) -- **legacy, do not use in new systems**
  - SHA-1 -- **legacy, do not use in new systems**
  - SHA-224
  - SHA-256
  - SHA-384
  - SHA-512


## Not an actual stream
Note, this doesn't actually implement a stream, but wrapping this in a stream is trivial.
It does update incrementally, so you can hash things larger than RAM, as it uses a constant amount of memory (except when using base64 or utf8 encoding, see code comments).


## Acknowledgements
This work is derived from Paul Johnston's [A JavaScript implementation of the Secure Hash Algorithm](http://pajhome.org.uk/crypt/md5/sha1.html).


## LICENSE [MIT AND BSD-3-Clause](LICENSE)
