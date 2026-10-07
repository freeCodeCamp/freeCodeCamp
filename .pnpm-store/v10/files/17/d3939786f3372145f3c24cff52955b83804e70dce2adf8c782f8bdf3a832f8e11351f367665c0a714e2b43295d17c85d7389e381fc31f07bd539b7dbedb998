# node-jws [![Build Status](https://secure.travis-ci.org/brianloveswords/node-jws.svg)](http://travis-ci.org/brianloveswords/node-jws)

An implementation of [JSON Web Signatures](http://self-issued.info/docs/draft-ietf-jose-json-web-signature.html).

This was developed against `draft-ietf-jose-json-web-signature-08` and
implements the entire spec **except** X.509 Certificate Chain
signing/verifying (patches welcome).

There are both synchronous (`jws.sign`, `jws.verify`) and streaming
(`jws.createSign`, `jws.createVerify`) APIs.

# Install

```bash
$ npm install jws
```

# Usage

## jws.ALGORITHMS

Array of supported algorithms. The following algorithms are currently supported.

alg Parameter Value | Digital Signature or MAC Algorithm
----------------|----------------------------
HS256 | HMAC using SHA-256 hash algorithm
HS384 | HMAC using SHA-384 hash algorithm
HS512 | HMAC using SHA-512 hash algorithm
RS256 | RSASSA using SHA-256 hash algorithm
RS384 | RSASSA using SHA-384 hash algorithm
RS512 | RSASSA using SHA-512 hash algorithm
PS256 | RSASSA-PSS using SHA-256 hash algorithm
PS384 | RSASSA-PSS using SHA-384 hash algorithm
PS512 | RSASSA-PSS using SHA-512 hash algorithm
ES256 | ECDSA using P-256 curve and SHA-256 hash algorithm
ES384 | ECDSA using P-384 curve and SHA-384 hash algorithm
ES512 | ECDSA using P-521 curve and SHA-512 hash algorithm
none | No digital signature or MAC value included

## jws.sign(options)

(Synchronous) Return a JSON Web Signature for a header and a payload.

Options:

* `header`
* `payload`
* `secret` or `privateKey`
* `encoding` (Optional, defaults to 'utf8')

`header` must be an object with an `alg` property. `header.alg` must be
one a value found in `jws.ALGORITHMS`. See above for a table of
supported algorithms.

If `payload` is not a buffer or a string, it will be coerced into a string
using `JSON.stringify`.

Example

```js
const signature = jws.sign({
  header: { alg: 'HS256' },
  payload: 'h. jon benjamin',
  secret: 'has a van',
});
```

## jws.verify(signature, algorithm, secretOrKey)

(Synchronous) Returns `true` or `false` for whether a signature matches a
secret or key.

`signature` is a JWS Signature. `header.alg` must be a value found in `jws.ALGORITHMS`.
See above for a table of supported algorithms. `secretOrKey` is a string or
buffer containing either the secret for HMAC algorithms, or the PEM
encoded public key for RSA and ECDSA.

Note that the `"alg"` value from the signature header is ignored.


## jws.decode(signature)

(Synchronous) Returns the decoded header, decoded payload, and signature
parts of the JWS Signature.

Returns an object with three properties, e.g.
```js
{ header: { alg: 'HS256' },
  payload: 'h. jon benjamin',
  signature: 'YOWPewyGHKu4Y_0M_vtlEnNlqmFOclqp4Hy6hVHfFT4'
}
```

## jws.createSign(options)

Returns a new SignStream object.

Options:

* `header` (required)
* `payload`
* `key` || `privateKey` || `secret`
* `encoding` (Optional, defaults to 'utf8')

Other than `header`, all options expect a string or a buffer when the
value is known ahead of time, or a stream for convenience.
`key`/`privateKey`/`secret` may also be an object when using an encrypted
private key, see the [crypto documentation][encrypted-key-docs].

Example:

```js

// This...
jws.createSign({
  header: { alg: 'RS256' },
  privateKey: privateKeyStream,
  payload: payloadStream,
}).on('done', function(signature) {
  // ...
});

// is equivalent to this:
const signer = jws.createSign({
  header: { alg: 'RS256' },
});
privateKeyStream.pipe(signer.privateKey);
payloadStream.pipe(signer.payload);
signer.on('done', function(signature) {
  // ...
});
```

## jws.createVerify(options)

Returns a new VerifyStream object.

Options:

* `signature`
* `algorithm`
* `key` || `publicKey` || `secret`
* `encoding` (Optional, defaults to 'utf8')

All options expect a string or a buffer when the value is known ahead of
time, or a stream for convenience.

Example:

```js

// This...
jws.createVerify({
  publicKey: pubKeyStream,
  signature: sigStream,
}).on('done', function(verified, obj) {
  // ...
});

// is equivilant to this:
const verifier = jws.createVerify();
pubKeyStream.pipe(verifier.publicKey);
sigStream.pipe(verifier.signature);
verifier.on('done', function(verified, obj) {
  // ...
});
```

## Class: SignStream

A `Readable Stream` that emits a single data event (the calculated
signature) when done.

### Event: 'done'
`function (signature) { }`

### signer.payload

A `Writable Stream` that expects the JWS payload. Do *not* use if you
passed a `payload` option to the constructor.

Example:

```js
payloadStream.pipe(signer.payload);
```

### signer.secret<br>signer.key<br>signer.privateKey

A `Writable Stream`. Expects the JWS secret for HMAC, or the privateKey
for ECDSA and RSA. Do *not* use if you passed a `secret` or `key` option
to the constructor.

Example:

```js
privateKeyStream.pipe(signer.privateKey);
```

## Class: VerifyStream

This is a `Readable Stream` that emits a single data event, the result
of whether or not that signature was valid.

### Event: 'done'
`function (valid, obj) { }`

`valid` is a boolean for whether or not the signature is valid.

### verifier.signature

A `Writable Stream` that expects a JWS Signature. Do *not* use if you
passed a `signature` option to the constructor.

### verifier.secret<br>verifier.key<br>verifier.publicKey

A `Writable Stream` that expects a public key or secret. Do *not* use if you
passed a `key` or `secret` option to the constructor.

# TODO

* It feels like there should be some convenience options/APIs for
  defining the algorithm rather than having to define a header object
  with `{ alg: 'ES512' }` or whatever every time.

* X.509 support, ugh

# License

MIT

```
Copyright (c) 2013-2015 Brian J. Brennan

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[encrypted-key-docs]: https://nodejs.org/api/crypto.html#crypto_sign_sign_private_key_output_format
