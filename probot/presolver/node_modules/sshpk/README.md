sshpk
=========

Parse, convert, fingerprint and use SSH keys (both public and private) in pure
node -- no `ssh-keygen` or other external dependencies.

Supports RSA, DSA, ECDSA (nistp-\*) and ED25519 key types, in PEM (PKCS#1, 
PKCS#8) and OpenSSH formats.

This library has been extracted from
[`node-http-signature`](https://github.com/joyent/node-http-signature)
(work by [Mark Cavage](https://github.com/mcavage) and
[Dave Eddy](https://github.com/bahamas10)) and
[`node-ssh-fingerprint`](https://github.com/bahamas10/node-ssh-fingerprint)
(work by Dave Eddy), with additions (including ECDSA support) by
[Alex Wilson](https://github.com/arekinath).

Install
-------

```
npm install sshpk
```

Examples
--------

```js
var sshpk = require('sshpk');

var fs = require('fs');

/* Read in an OpenSSH-format public key */
var keyPub = fs.readFileSync('id_rsa.pub');
var key = sshpk.parseKey(keyPub, 'ssh');

/* Get metadata about the key */
console.log('type => %s', key.type);
console.log('size => %d bits', key.size);
console.log('comment => %s', key.comment);

/* Compute key fingerprints, in new OpenSSH (>6.7) format, and old MD5 */
console.log('fingerprint => %s', key.fingerprint().toString());
console.log('old-style fingerprint => %s', key.fingerprint('md5').toString());
```

Example output:

```
type => rsa
size => 2048 bits
comment => foo@foo.com
fingerprint => SHA256:PYC9kPVC6J873CSIbfp0LwYeczP/W4ffObNCuDJ1u5w
old-style fingerprint => a0:c8:ad:6c:32:9a:32:fa:59:cc:a9:8c:0a:0d:6e:bd
```

More examples: converting between formats:

```js
/* Read in a PEM public key */
var keyPem = fs.readFileSync('id_rsa.pem');
var key = sshpk.parseKey(keyPem, 'pem');

/* Convert to PEM PKCS#8 public key format */
var pemBuf = key.toBuffer('pkcs8');

/* Convert to SSH public key format (and return as a string) */
var sshKey = key.toString('ssh');
```

Signing and verifying:

```js
/* Read in an OpenSSH/PEM *private* key */
var keyPriv = fs.readFileSync('id_ecdsa');
var key = sshpk.parsePrivateKey(keyPriv, 'pem');

var data = 'some data';

/* Sign some data with the key */
var s = key.createSign('sha1');
s.update(data);
var signature = s.sign();

/* Now load the public key (could also use just key.toPublic()) */
var keyPub = fs.readFileSync('id_ecdsa.pub');
key = sshpk.parseKey(keyPub, 'ssh');

/* Make a crypto.Verifier with this key */
var v = key.createVerify('sha1');
v.update(data);
var valid = v.verify(signature);
/* => true! */
```

Matching fingerprints with keys:

```js
var fp = sshpk.parseFingerprint('SHA256:PYC9kPVC6J873CSIbfp0LwYeczP/W4ffObNCuDJ1u5w');

var keys = [sshpk.parseKey(...), sshpk.parseKey(...), ...];

keys.forEach(function (key) {
	if (fp.matches(key))
		console.log('found it!');
});
```

Usage
-----

## Public keys

### `parseKey(data[, format = 'auto'[, options]])`

Parses a key from a given data format and returns a new `Key` object.

Parameters

- `data` -- Either a Buffer or String, containing the key
- `format` -- String name of format to use, valid options are:
  - `auto`: choose automatically from all below
  - `pem`: supports both PKCS#1 and PKCS#8
  - `ssh`: standard OpenSSH format,
  - `pkcs1`, `pkcs8`: variants of `pem`
  - `rfc4253`: raw OpenSSH wire format
  - `openssh`: new post-OpenSSH 6.5 internal format, produced by 
               `ssh-keygen -o`
- `options` -- Optional Object, extra options, with keys:
  - `filename` -- Optional String, name for the key being parsed 
                  (eg. the filename that was opened). Used to generate
                  Error messages
  - `passphrase` -- Optional String, encryption passphrase used to decrypt an
                    encrypted PEM file

### `Key.isKey(obj)`

Returns `true` if the given object is a valid `Key` object created by a version
of `sshpk` compatible with this one.

Parameters

- `obj` -- Object to identify

### `Key#type`

String, the type of key. Valid options are `rsa`, `dsa`, `ecdsa`.

### `Key#size`

Integer, "size" of the key in bits. For RSA/DSA this is the size of the modulus;
for ECDSA this is the bit size of the curve in use.

### `Key#comment`

Optional string, a key comment used by some formats (eg the `ssh` format).

### `Key#curve`

Only present if `this.type === 'ecdsa'`, string containing the name of the
named curve used with this key. Possible values include `nistp256`, `nistp384`
and `nistp521`.

### `Key#toBuffer([format = 'ssh'])`

Convert the key into a given data format and return the serialized key as
a Buffer.

Parameters

- `format` -- String name of format to use, for valid options see `parseKey()`

### `Key#toString([format = 'ssh])`

Same as `this.toBuffer(format).toString()`.

### `Key#fingerprint([algorithm = 'sha256'])`

Creates a new `Fingerprint` object representing this Key's fingerprint.

Parameters

- `algorithm` -- String name of hash algorithm to use, valid options are `md5`,
                 `sha1`, `sha256`, `sha384`, `sha512`

### `Key#createVerify([hashAlgorithm])`

Creates a `crypto.Verifier` specialized to use this Key (and the correct public
key algorithm to match it). The returned Verifier has the same API as a regular
one, except that the `verify()` function takes only the target signature as an
argument.

Parameters

- `hashAlgorithm` -- optional String name of hash algorithm to use, any
                     supported by OpenSSL are valid, usually including
                     `sha1`, `sha256`.

`v.verify(signature[, format])` Parameters

- `signature` -- either a Signature object, or a Buffer or String
- `format` -- optional String, name of format to interpret given String with.
              Not valid if `signature` is a Signature or Buffer.

### `Key#createDiffieHellman()`
### `Key#createDH()`

Creates a Diffie-Hellman key exchange object initialized with this key and all
necessary parameters. This has the same API as a `crypto.DiffieHellman`
instance, except that functions take `Key` and `PrivateKey` objects as
arguments, and return them where indicated for.

This is only valid for keys belonging to a cryptosystem that supports DHE
or a close analogue (i.e. `dsa`, `ecdsa` and `curve25519` keys). An attempt
to call this function on other keys will yield an `Error`.

## Private keys

### `parsePrivateKey(data[, format = 'auto'[, options]])`

Parses a private key from a given data format and returns a new
`PrivateKey` object.

Parameters

- `data` -- Either a Buffer or String, containing the key
- `format` -- String name of format to use, valid options are:
  - `auto`: choose automatically from all below
  - `pem`: supports both PKCS#1 and PKCS#8
  - `ssh`, `openssh`: new post-OpenSSH 6.5 internal format, produced by
                      `ssh-keygen -o`
  - `pkcs1`, `pkcs8`: variants of `pem`
  - `rfc4253`: raw OpenSSH wire format
- `options` -- Optional Object, extra options, with keys:
  - `filename` -- Optional String, name for the key being parsed
                  (eg. the filename that was opened). Used to generate
                  Error messages
  - `passphrase` -- Optional String, encryption passphrase used to decrypt an
                    encrypted PEM file

### `generatePrivateKey(type[, options])`

Generates a new private key of a certain key type, from random data.

Parameters

- `type` -- String, type of key to generate. Currently supported are `'ecdsa'`
            and `'ed25519'`
- `options` -- optional Object, with keys:
  - `curve` -- optional String, for `'ecdsa'` keys, specifies the curve to use.
               If ECDSA is specified and this option is not given, defaults to
               using `'nistp256'`.

### `PrivateKey.isPrivateKey(obj)`

Returns `true` if the given object is a valid `PrivateKey` object created by a
version of `sshpk` compatible with this one.

Parameters

- `obj` -- Object to identify

### `PrivateKey#type`

String, the type of key. Valid options are `rsa`, `dsa`, `ecdsa`.

### `PrivateKey#size`

Integer, "size" of the key in bits. For RSA/DSA this is the size of the modulus;
for ECDSA this is the bit size of the curve in use.

### `PrivateKey#curve`

Only present if `this.type === 'ecdsa'`, string containing the name of the
named curve used with this key. Possible values include `nistp256`, `nistp384`
and `nistp521`.

### `PrivateKey#toBuffer([format = 'pkcs1'])`

Convert the key into a given data format and return the serialized key as
a Buffer.

Parameters

- `format` -- String name of format to use, valid options are listed under 
              `parsePrivateKey`. Note that ED25519 keys default to `openssh`
              format instead (as they have no `pkcs1` representation).

### `PrivateKey#toString([format = 'pkcs1'])`

Same as `this.toBuffer(format).toString()`.

### `PrivateKey#toPublic()`

Extract just the public part of this private key, and return it as a `Key`
object.

### `PrivateKey#fingerprint([algorithm = 'sha256'])`

Same as `this.toPublic().fingerprint()`.

### `PrivateKey#createVerify([hashAlgorithm])`

Same as `this.toPublic().createVerify()`.

### `PrivateKey#createSign([hashAlgorithm])`

Creates a `crypto.Sign` specialized to use this PrivateKey (and the correct
key algorithm to match it). The returned Signer has the same API as a regular
one, except that the `sign()` function takes no arguments, and returns a
`Signature` object.

Parameters

- `hashAlgorithm` -- optional String name of hash algorithm to use, any
                     supported by OpenSSL are valid, usually including
                     `sha1`, `sha256`.

`v.sign()` Parameters

- none

### `PrivateKey#derive(newType)`

Derives a related key of type `newType` from this key. Currently this is
only supported to change between `ed25519` and `curve25519` keys which are
stored with the same private key (but usually distinct public keys in order
to avoid degenerate keys that lead to a weak Diffie-Hellman exchange).

Parameters

- `newType` -- String, type of key to derive, either `ed25519` or `curve25519`

## Fingerprints

### `parseFingerprint(fingerprint[, algorithms])`

Pre-parses a fingerprint, creating a `Fingerprint` object that can be used to
quickly locate a key by using the `Fingerprint#matches` function.

Parameters

- `fingerprint` -- String, the fingerprint value, in any supported format
- `algorithms` -- Optional list of strings, names of hash algorithms to limit
                  support to. If `fingerprint` uses a hash algorithm not on
                  this list, throws `InvalidAlgorithmError`.

### `Fingerprint.isFingerprint(obj)`

Returns `true` if the given object is a valid `Fingerprint` object created by a
version of `sshpk` compatible with this one.

Parameters

- `obj` -- Object to identify

### `Fingerprint#toString([format])`

Returns a fingerprint as a string, in the given format.

Parameters

- `format` -- Optional String, format to use, valid options are `hex` and
              `base64`. If this `Fingerprint` uses the `md5` algorithm, the
              default format is `hex`. Otherwise, the default is `base64`.

### `Fingerprint#matches(key)`

Verifies whether or not this `Fingerprint` matches a given `Key`. This function
uses double-hashing to avoid leaking timing information. Returns a boolean.

Parameters

- `key` -- a `Key` object, the key to match this fingerprint against

## Signatures

### `parseSignature(signature, algorithm, format)`

Parses a signature in a given format, creating a `Signature` object. Useful
for converting between the SSH and ASN.1 (PKCS/OpenSSL) signature formats, and
also returned as output from `PrivateKey#createSign().sign()`.

A Signature object can also be passed to a verifier produced by
`Key#createVerify()` and it will automatically be converted internally into the
correct format for verification.

Parameters

- `signature` -- a Buffer (binary) or String (base64), data of the actual
                 signature in the given format
- `algorithm` -- a String, name of the algorithm to be used, possible values
                 are `rsa`, `dsa`, `ecdsa`
- `format` -- a String, either `asn1` or `ssh`

### `Signature.isSignature(obj)`

Returns `true` if the given object is a valid `Signature` object created by a
version of `sshpk` compatible with this one.

Parameters

- `obj` -- Object to identify

### `Signature#toBuffer([format = 'asn1'])`

Converts a Signature to the given format and returns it as a Buffer.

Parameters

- `format` -- a String, either `asn1` or `ssh`

### `Signature#toString([format = 'asn1'])`

Same as `this.toBuffer(format).toString('base64')`.

## Certificates

`sshpk` includes basic support for parsing certificates in X.509 (PEM) format
and the OpenSSH certificate format. This feature is intended to be used mainly
to access basic metadata about certificates, extract public keys from them, and
also to generate simple self-signed certificates from an existing key.

Notably, there is no implementation of CA chain-of-trust verification, and only
very minimal support for key usage restrictions. Please do the security world
a favour, and DO NOT use this code for certificate verification in the
traditional X.509 CA chain style.

### `parseCertificate(data, format)`

Parameters

 - `data` -- a Buffer or String
 - `format` -- a String, format to use, one of `'openssh'`, `'pem'` (X.509 in a
               PEM wrapper), or `'x509'` (raw DER encoded)

### `createSelfSignedCertificate(subject, privateKey[, options])`

Parameters

 - `subject` -- an Identity, the subject of the certificate
 - `privateKey` -- a PrivateKey, the key of the subject: will be used both to be
                   placed in the certificate and also to sign it (since this is
                   a self-signed certificate)
 - `options` -- optional Object, with keys:
   - `lifetime` -- optional Number, lifetime of the certificate from now in
                   seconds
   - `validFrom`, `validUntil` -- optional Dates, beginning and end of
                                  certificate validity period. If given
                                  `lifetime` will be ignored
   - `serial` -- optional Buffer, the serial number of the certificate
   - `purposes` -- optional Array of String, X.509 key usage restrictions

### `createCertificate(subject, key, issuer, issuerKey[, options])`

Parameters

 - `subject` -- an Identity, the subject of the certificate
 - `key` -- a Key, the public key of the subject
 - `issuer` -- an Identity, the issuer of the certificate who will sign it
 - `issuerKey` -- a PrivateKey, the issuer's private key for signing
 - `options` -- optional Object, with keys:
   - `lifetime` -- optional Number, lifetime of the certificate from now in
                   seconds
   - `validFrom`, `validUntil` -- optional Dates, beginning and end of
                                  certificate validity period. If given
                                  `lifetime` will be ignored
   - `serial` -- optional Buffer, the serial number of the certificate
   - `purposes` -- optional Array of String, X.509 key usage restrictions

### `Certificate#subjects`

Array of `Identity` instances describing the subject of this certificate.

### `Certificate#issuer`

The `Identity` of the Certificate's issuer (signer).

### `Certificate#subjectKey`

The public key of the subject of the certificate, as a `Key` instance.

### `Certificate#issuerKey`

The public key of the signing issuer of this certificate, as a `Key` instance.
May be `undefined` if the issuer's key is unknown (e.g. on an X509 certificate).

### `Certificate#serial`

The serial number of the certificate. As this is normally a 64-bit or wider
integer, it is returned as a Buffer.

### `Certificate#purposes`

Array of Strings indicating the X.509 key usage purposes that this certificate
is valid for. The possible strings at the moment are:

 * `'signature'` -- key can be used for digital signatures
 * `'identity'` -- key can be used to attest about the identity of the signer
                   (X.509 calls this `nonRepudiation`)
 * `'codeSigning'` -- key can be used to sign executable code
 * `'keyEncryption'` -- key can be used to encrypt other keys
 * `'encryption'` -- key can be used to encrypt data (only applies for RSA)
 * `'keyAgreement'` -- key can be used for key exchange protocols such as
                       Diffie-Hellman
 * `'ca'` -- key can be used to sign other certificates (is a Certificate
             Authority)
 * `'crl'` -- key can be used to sign Certificate Revocation Lists (CRLs)

### `Certificate#getExtension(nameOrOid)`

Retrieves information about a certificate extension, if present, or returns
`undefined` if not. The string argument `nameOrOid` should be either the OID
(for X509 extensions) or the name (for OpenSSH extensions) of the extension
to retrieve.

The object returned will have the following properties:

 * `format` -- String, set to either `'x509'` or `'openssh'`
 * `name` or `oid` -- String, only one set based on value of `format`
 * `data` -- Buffer, the raw data inside the extension

### `Certificate#getExtensions()`

Returns an Array of all present certificate extensions, in the same manner and
format as `getExtension()`.

### `Certificate#isExpired([when])`

Tests whether the Certificate is currently expired (i.e. the `validFrom` and
`validUntil` dates specify a range of time that does not include the current
time).

Parameters

 - `when` -- optional Date, if specified, tests whether the Certificate was or
             will be expired at the specified time instead of now

Returns a Boolean.

### `Certificate#isSignedByKey(key)`

Tests whether the Certificate was validly signed by the given (public) Key.

Parameters

 - `key` -- a Key instance

Returns a Boolean.

### `Certificate#isSignedBy(certificate)`

Tests whether this Certificate was validly signed by the subject of the given
certificate. Also tests that the issuer Identity of this Certificate and the
subject Identity of the other Certificate are equivalent.

Parameters

 - `certificate` -- another Certificate instance

Returns a Boolean.

### `Certificate#fingerprint([hashAlgo])`

Returns the X509-style fingerprint of the entire certificate (as a Fingerprint
instance). This matches what a web-browser or similar would display as the
certificate fingerprint and should not be confused with the fingerprint of the
subject's public key.

Parameters

 - `hashAlgo` -- an optional String, any hash function name

### `Certificate#toBuffer([format])`

Serializes the Certificate to a Buffer and returns it.

Parameters

 - `format` -- an optional String, output format, one of `'openssh'`, `'pem'` or
               `'x509'`. Defaults to `'x509'`.

Returns a Buffer.

### `Certificate#toString([format])`

 - `format` -- an optional String, output format, one of `'openssh'`, `'pem'` or
               `'x509'`. Defaults to `'pem'`.

Returns a String.

## Certificate identities

### `identityForHost(hostname)`

Constructs a host-type Identity for a given hostname.

Parameters

 - `hostname` -- the fully qualified DNS name of the host

Returns an Identity instance.

### `identityForUser(uid)`

Constructs a user-type Identity for a given UID.

Parameters

 - `uid` -- a String, user identifier (login name)

Returns an Identity instance.

### `identityForEmail(email)`

Constructs an email-type Identity for a given email address.

Parameters

 - `email` -- a String, email address

Returns an Identity instance.

### `identityFromDN(dn)`

Parses an LDAP-style DN string (e.g. `'CN=foo, C=US'`) and turns it into an
Identity instance.

Parameters

 - `dn` -- a String

Returns an Identity instance.

### `identityFromArray(arr)`

Constructs an Identity from an array of DN components (see `Identity#toArray()`
for the format).

Parameters

 - `arr` -- an Array of Objects, DN components with `name` and `value`

Returns an Identity instance.


Supported attributes in DNs:

| Attribute name | OID |
| -------------- | --- |
| `cn` | `2.5.4.3` |
| `o` | `2.5.4.10` |
| `ou` | `2.5.4.11` |
| `l` | `2.5.4.7` |
| `s` | `2.5.4.8` |
| `c` | `2.5.4.6` |
| `sn` | `2.5.4.4` |
| `postalCode` | `2.5.4.17` |
| `serialNumber` | `2.5.4.5` |
| `street` | `2.5.4.9` |
| `x500UniqueIdentifier` | `2.5.4.45` |
| `role` | `2.5.4.72` |
| `telephoneNumber` | `2.5.4.20` |
| `description` | `2.5.4.13` |
| `dc` | `0.9.2342.19200300.100.1.25` |
| `uid` | `0.9.2342.19200300.100.1.1` |
| `mail` | `0.9.2342.19200300.100.1.3` |
| `title` | `2.5.4.12` |
| `gn` | `2.5.4.42` |
| `initials` | `2.5.4.43` |
| `pseudonym` | `2.5.4.65` |

### `Identity#toString()`

Returns the identity as an LDAP-style DN string.
e.g. `'CN=foo, O=bar corp, C=us'`

### `Identity#type`

The type of identity. One of `'host'`, `'user'`, `'email'` or `'unknown'`

### `Identity#hostname`
### `Identity#uid`
### `Identity#email`

Set when `type` is `'host'`, `'user'`, or `'email'`, respectively. Strings.

### `Identity#cn`

The value of the first `CN=` in the DN, if any. It's probably better to use
the `#get()` method instead of this property.

### `Identity#get(name[, asArray])`

Returns the value of a named attribute in the Identity DN. If there is no
attribute of the given name, returns `undefined`. If multiple components
of the DN contain an attribute of this name, an exception is thrown unless
the `asArray` argument is given as `true` -- then they will be returned as
an Array in the same order they appear in the DN.

Parameters

 - `name` -- a String
 - `asArray` -- an optional Boolean

### `Identity#toArray()`

Returns the Identity as an Array of DN component objects. This looks like:

```js
[ {
  "name": "cn",
  "value": "Joe Bloggs"
},
{
  "name": "o",
  "value": "Organisation Ltd"
} ]
```

Each object has a `name` and a `value` property. The returned objects may be
safely modified.

Errors
------

### `InvalidAlgorithmError`

The specified algorithm is not valid, either because it is not supported, or
because it was not included on a list of allowed algorithms.

Thrown by `Fingerprint.parse`, `Key#fingerprint`.

Properties

- `algorithm` -- the algorithm that could not be validated

### `FingerprintFormatError`

The fingerprint string given could not be parsed as a supported fingerprint
format, or the specified fingerprint format is invalid.

Thrown by `Fingerprint.parse`, `Fingerprint#toString`.

Properties

- `fingerprint` -- if caused by a fingerprint, the string value given
- `format` -- if caused by an invalid format specification, the string value given

### `KeyParseError`

The key data given could not be parsed as a valid key.

Properties

- `keyName` -- `filename` that was given to `parseKey`
- `format` -- the `format` that was trying to parse the key (see `parseKey`)
- `innerErr` -- the inner Error thrown by the format parser

### `KeyEncryptedError`

The key is encrypted with a symmetric key (ie, it is password protected). The
parsing operation would succeed if it was given the `passphrase` option.

Properties

- `keyName` -- `filename` that was given to `parseKey`
- `format` -- the `format` that was trying to parse the key (currently can only
              be `"pem"`)

### `CertificateParseError`

The certificate data given could not be parsed as a valid certificate.

Properties

- `certName` -- `filename` that was given to `parseCertificate`
- `format` -- the `format` that was trying to parse the key
              (see `parseCertificate`)
- `innerErr` -- the inner Error thrown by the format parser

Friends of sshpk
----------------

 * [`sshpk-agent`](https://github.com/arekinath/node-sshpk-agent) is a library
   for speaking the `ssh-agent` protocol from node.js, which uses `sshpk`
