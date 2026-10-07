# EVP\_BytesToKey
[![NPM Package](https://img.shields.io/npm/v/evp_bytestokey.svg?style=flat-square)](https://www.npmjs.org/package/evp_bytestokey)
[![Build Status](https://img.shields.io/travis/crypto-browserify/EVP_BytesToKey.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/EVP_BytesToKey)
[![Dependency status](https://img.shields.io/david/crypto-browserify/EVP_BytesToKey.svg?style=flat-square)](https://david-dm.org/crypto-browserify/EVP_BytesToKey#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

The insecure [key derivation algorithm from OpenSSL.][1]

**WARNING: DO NOT USE, except for compatibility reasons.**

MD5 is insecure.

Use at least `scrypt` or `pbkdf2-hmac-sha256` instead.


## API
`EVP_BytesToKey(password, salt, keyLen, ivLen)`

* `password` - `Buffer`, password used to derive the key data.
* `salt` - 8 byte `Buffer` or `null`, salt is used as a salt in the derivation.
* `keyBits` - `number`, key length in **bits**.
* `ivLen` - `number`, iv length in bytes.

*Returns*: `{ key: Buffer, iv: Buffer }`


## Examples
MD5 with `aes-256-cbc`:

```js
const crypto = require('crypto')
const EVP_BytesToKey = require('evp_bytestokey')

const result = EVP_BytesToKey(
  'my-secret-password',
  null,
  32,
  16
)
// =>
// { key: <Buffer e3 4f 96 f3 86 24 82 7c c2 5d ff 23 18 6f 77 72 54 45 7f 49 d4 be 4b dd 4f 6e 1b cc 92 a4 27 33>,
//   iv: <Buffer 85 71 9a bf ae f4 1e 74 dd 46 b6 13 79 56 f5 5b> }

const cipher = crypto.createCipheriv('aes-256-cbc', result.key, result.iv)
```

## LICENSE [MIT](LICENSE)

[1]: https://wiki.openssl.org/index.php/Manual:EVP_BytesToKey(3)
[2]: https://nodejs.org/api/crypto.html#crypto_class_hash
