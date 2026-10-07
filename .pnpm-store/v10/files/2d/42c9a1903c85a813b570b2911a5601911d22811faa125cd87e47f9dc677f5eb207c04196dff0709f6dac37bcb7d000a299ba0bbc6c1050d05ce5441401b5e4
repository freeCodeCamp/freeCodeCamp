# crypto-browserify <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

A port of node's `crypto` module to the browser.

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Sauce Test Status](https://saucelabs.com/browser-matrix/crypto-browserify.svg)](https://saucelabs.com/u/crypto-browserify)

[![npm badge][npm-badge-png]][package-url]

The goal of this module is to reimplement node's crypto module, in pure javascript so that it can run in the browser.

Here is the subset that is currently implemented:

* createHash (sha1, sha224, sha256, sha384, sha512, md5, rmd160)
* createHmac (sha1, sha224, sha256, sha384, sha512, md5, rmd160)
* pbkdf2
* pbkdf2Sync
* randomBytes
* pseudoRandomBytes
* createCipher (aes)
* createDecipher (aes)
* createDiffieHellman
* createSign (rsa, ecdsa)
* createVerify (rsa, ecdsa)
* createECDH (secp256k1)
* publicEncrypt/privateDecrypt (rsa)
* privateEncrypt/publicDecrypt (rsa)

## todo

these features from node's `crypto` are still unimplemented.

* createCredentials

## contributions

If you are interested in writing a feature, please implement as a new module,
which will be incorporated into crypto-browserify as a dependency.

All deps must be compatible with node's crypto
(generate example inputs and outputs with node, and save base64 strings inside JSON, so that tests can run in the browser)
see [sha.js](https://github.com/dominictarr/sha.js)

Crypto is _extra serious_ so please do not hesitate to review the code, and post comments if you do.

## License

MIT

[package-url]: https://npmjs.org/package/crypto-browserify
[npm-version-svg]: https://versionbadg.es/browserify/crypto-browserify.svg
[deps-svg]: https://david-dm.org/browserify/crypto-browserify.svg
[deps-url]: https://david-dm.org/browserify/crypto-browserify
[dev-deps-svg]: https://david-dm.org/browserify/crypto-browserify/dev-status.svg
[dev-deps-url]: https://david-dm.org/browserify/crypto-browserify#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/crypto-browserify.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/crypto-browserify.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/crypto-browserify.svg
[downloads-url]: https://npm-stat.com/charts.html?package=crypto-browserify
[codecov-image]: https://codecov.io/gh/browserify/crypto-browserify/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/browserify/crypto-browserify/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/browserify/crypto-browserify
[actions-url]: https://github.com/browserify/crypto-browserify/actions
