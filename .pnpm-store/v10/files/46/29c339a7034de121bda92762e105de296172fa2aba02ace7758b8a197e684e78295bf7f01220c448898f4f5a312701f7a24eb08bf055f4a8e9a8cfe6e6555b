# pbkdf2 <sup>[![Version Badge][2]][1]</sup>

This library provides the functionality of PBKDF2 with the ability to use any supported hashing algorithm returned from `crypto.getHashes()`

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

## Usage

```js
var pbkdf2 = require('pbkdf2')
var derivedKey = pbkdf2.pbkdf2Sync('password', 'salt', 1, 32, 'sha512')

...
```

For more information on the API, please see the relevant [Node documentation](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback).

For high performance, use the `async` variant (`pbkdf2.pbkdf2`), not `pbkdf2.pbkdf2Sync`; this variant has the oppurtunity to use `window.crypto.subtle` when browserified.


## Credits

This module is a derivative of [cryptocoinjs/pbkdf2-sha256](https://github.com/cryptocoinjs/pbkdf2-sha256/), so thanks to [JP Richardson](https://github.com/jprichardson/) for laying the ground work.

Thank you to [FangDun Cai](https://github.com/fundon) for donating the package name on npm, if you're looking for his previous module it is located at [fundon/pbkdf2](https://github.com/fundon/pbkdf2).

[1]: https://npmjs.org/package/pbkdf2
[2]: https://versionbadg.es/browserify/pbkdf2.svg
[5]: https://david-dm.org/browserify/pbkdf2.svg
[6]: https://david-dm.org/browserify/pbkdf2
[7]: https://david-dm.org/browserify/pbkdf2/dev-status.svg
[8]: https://david-dm.org/browserify/pbkdf2#info=devDependencies
[11]: https://nodei.co/npm/pbkdf2.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/pbkdf2.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/pbkdf2.svg
[downloads-url]: https://npm-stat.com/charts.html?package=pbkdf2
[codecov-image]: https://codecov.io/gh/browserify/pbkdf2/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/browserify/pbkdf2/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/browserify/pbkdf2
[actions-url]: https://github.com/browserify/pbkdf2/actions
