# ecdsa-sig-formatter

[![Build Status](https://travis-ci.org/Brightspace/node-ecdsa-sig-formatter.svg?branch=master)](https://travis-ci.org/Brightspace/node-ecdsa-sig-formatter) [![Coverage Status](https://coveralls.io/repos/Brightspace/node-ecdsa-sig-formatter/badge.svg)](https://coveralls.io/r/Brightspace/node-ecdsa-sig-formatter)

Translate between JOSE and ASN.1/DER encodings for ECDSA signatures

## Install
```sh
npm install ecdsa-sig-formatter --save
```

## Usage
```js
var format = require('ecdsa-sig-formatter');

var derSignature = '..'; // asn.1/DER encoded ecdsa signature

var joseSignature = format.derToJose(derSignature);

```

### API

---

#### `.derToJose(Buffer|String signature, String alg)` -> `String`

Convert the ASN.1/DER encoded signature to a JOSE-style concatenated signature.
Returns a _base64 url_ encoded `String`.

* If _signature_ is a `String`, it should be _base64_ encoded
* _alg_ must be one of _ES256_, _ES384_ or _ES512_

---

#### `.joseToDer(Buffer|String signature, String alg)` -> `Buffer`

Convert the JOSE-style concatenated signature to an ASN.1/DER encoded
signature. Returns a `Buffer`

* If _signature_ is a `String`, it should be _base64 url_ encoded
* _alg_ must be one of _ES256_, _ES384_ or _ES512_

## Contributing

1. **Fork** the repository. Committing directly against this repository is
   highly discouraged.

2. Make your modifications in a branch, updating and writing new unit tests
   as necessary in the `spec` directory.

3. Ensure that all tests pass with `npm test`

4. `rebase` your changes against master. *Do not merge*.

5. Submit a pull request to this repository. Wait for tests to run and someone
   to chime in.

### Code Style

This repository is configured with [EditorConfig][EditorConfig] and
[ESLint][ESLint] rules.

[EditorConfig]: http://editorconfig.org/
[ESLint]: http://eslint.org
