# hmac-drbg
[![Build Status](https://secure.travis-ci.org/indutny/hmac-drbg.svg)](http://travis-ci.org/indutny/hmac-drbg)
[![NPM version](https://badge.fury.io/js/hmac-drbg.svg)](http://badge.fury.io/js/hmac-drbg)

JS-only implementation of [HMAC DRBG][0].

## Usage

```js
const DRBG = require('hmac-drbg');
const hash = require('hash.js');

const d = new DRBG({
  hash: hash.sha256,
  entropy: '0123456789abcdef',
  nonce: '0123456789abcdef',
  pers: '0123456789abcdef' /* or `null` */
});

d.generate(32, 'hex');
```

#### LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2017.

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

[0]: http://csrc.nist.gov/groups/ST/toolkit/documents/rng/HashBlockCipherDRBG.pdf
