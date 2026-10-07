<!--
  -- This file is auto-generated from README_js.md. Changes should be made there.
  -->

# uuid [![Build Status](https://github.com/uuidjs/uuid/workflows/CI/badge.svg)](https://github.com/uuidjs/uuid/actions)

For the creation of [RFC4122](http://www.ietf.org/rfc/rfc4122.txt) UUIDs

- **Complete** - Support for RFC4122 version 1, 3, 4, and 5 UUIDs
- **Cross-platform** - Support for ...
  - CommonJS, [ECMAScript Modules](#ecmascript-modules) and UMD builds
  - Node 8, 10, 12
  - Chrome, Safari, Firefox, Edge, IE 11 browsers
  - Webpack and rollup.js module bundlers
  - [React Native](#react-native)
- **Secure** - Cryptographically-strong random values
- **Small** - Zero-dependency, small footprint, plays nice with "tree shaking" packagers
- **CLI** - Includes the [`uuid` command line](#command-line) utility

**Upgrading from uuid\@3?** Your code is probably okay, but check out [Upgrading
From uuid\@3](#upgrading-from-uuid3) for details.

## Quickstart - Node.js/CommonJS

```shell
npm install uuid
```

Once installed, decide which type of UUID you need. RFC4122 provides for four
versions, all of which are supported here. In order of popularity, they are:

- Version 4 (random) - Created from cryptographically-strong random values
- Version 1 (timestamp) - Created from the system clock (plus random values)
- Version 5 (namespace, SHA-1) - Created from user-supplied name and namespace strings
- Version 3 (namespace, MD5) - Like version 5, above, but with a poorer hash algorithm

**Unsure which one to use?** Use version 4 (random) unless you have a specific need for one of the other versions. See also [this FAQ](https://github.com/tc39/proposal-uuid#faq).

### Create Version 4 (Random) UUIDs

```javascript
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

### Create Version 1 (Timestamp) UUIDs

```javascript
import { v1 as uuidv1 } from 'uuid';
uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8b2d-1b9d6bcdbbfd'
```

### Create Version 3 or Version 5 (Namespace) UUIDs

&#x26a0;&#xfe0f; Version 3 and Version 5 UUIDs are basically the same, differing
only in the underlying hash algorithm. Note that per the RFC, "_If backward
compatibility is not an issue, SHA-1 [Version 5] is preferred_."

&#x26a0;&#xfe0f; If using a custom namespace **be sure to generate your own
namespace UUID**. You can grab one [here](https://www.uuidgenerator.net/).

```javascript
import { v5 as uuidv5 } from 'uuid'; // For version 5
import { v3 as uuidv3 } from 'uuid'; // For version 3

// Using predefined DNS namespace (for domain names)
uuidv5('hello.example.com', uuidv5.DNS); // ⇨ 'fdda765f-fc57-5604-a269-52a7df8164ec'
uuidv3('hello.example.com', uuidv3.DNS); // ⇨ '9125a8dc-52ee-365b-a5aa-81b0b3681cf6'

// Using predefined URL namespace (for URLs)
uuidv5('http://example.com/hello', uuidv5.URL); // ⇨ '3bbcee75-cecc-5b56-8031-b6641c1ed1f1'
uuidv3('http://example.com/hello', uuidv3.URL); // ⇨ 'c6235813-3ba4-3801-ae84-e0a6ebb7d138'

// Using a custom namespace (See note, above, about generating your own
// namespace UUID)
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
uuidv5('Hello, World!', MY_NAMESPACE); // ⇨ '630eb68f-e0fa-5ecc-887a-7c7a62614681'
uuidv3('Hello, World!', MY_NAMESPACE); // ⇨ 'e8b5a51d-11c8-3310-a6ab-367563f20686'
```

## API

### Version 4 (Random)

```javascript
import { v4 as uuidv4 } from 'uuid';

// Incantations
uuidv4();
uuidv4(options);
uuidv4(options, buffer, offset);
```

Generate and return a RFC4122 version 4 UUID.

- `options` - (Object) Optional uuid state to apply. Properties may include:
  - `random` - (Number[16]) Array of 16 numbers (0-255) to use in place of randomly generated values. Takes precedence over `options.rng`.
  - `rng` - (Function) Random # generator function that returns an Array[16] of byte values (0-255). Alternative to `options.random`.
- `buffer` - (Array | Buffer) Array or buffer where UUID bytes are to be written.
- `offset` - (Number) Starting index in `buffer` at which to begin writing.

Returns `buffer`, if specified, otherwise the string form of the UUID

Example: Generate string UUID with predefined `random` values

```javascript
const v4options = {
  random: [
    0x10,
    0x91,
    0x56,
    0xbe,
    0xc4,
    0xfb,
    0xc1,
    0xea,
    0x71,
    0xb4,
    0xef,
    0xe1,
    0x67,
    0x1c,
    0x58,
    0x36,
  ],
};
uuidv4(v4options); // ⇨ '109156be-c4fb-41ea-b1b4-efe1671c5836'
```

Example: Generate two IDs in a single buffer

```javascript
const buffer = new Array();
uuidv4(null, buffer, 0); // ⇨ 
  // [
  //   155, 29, 235,  77,  59,
  //   125, 75, 173, 155, 221,
  //    43, 13, 123,  61, 203,
  //   109
  // ]
uuidv4(null, buffer, 16); // ⇨ 
  // [
  //   155,  29, 235,  77,  59, 125,  75, 173,
  //   155, 221,  43,  13, 123,  61, 203, 109,
  //    27, 157, 107, 205, 187, 253,  75,  45,
  //   155,  93, 171, 141, 251, 189,  75, 237
  // ]
```

### Version 1 (Timestamp)

```javascript
import { v1 as uuidv1 } from 'uuid';

// Incantations
uuidv1();
uuidv1(options);
uuidv1(options, buffer, offset);
```

Generate and return a RFC4122 version 1 (timestamp) UUID.

- `options` - (Object) Optional uuid state to apply. Properties may include:
  - `node` - (Array) Node id as Array of 6 bytes (per 4.1.6). Default: Randomly generated ID. See note 1.
  - `clockseq` - (Number between 0 - 0x3fff) RFC clock sequence. Default: An internally maintained clockseq is used.
  - `msecs` - (Number) Time in milliseconds since unix Epoch. Default: The current time is used.
  - `nsecs` - (Number between 0-9999) additional time, in 100-nanosecond units. Ignored if `msecs` is unspecified. Default: internal uuid counter is used, as per 4.2.1.2.
  - `random` - (Number[16]) Array of 16 numbers (0-255) to use for initialization of `node` and `clockseq` as described above. Takes precedence over `options.rng`.
  - `rng` - (Function) Random # generator function that returns an Array[16] of byte values (0-255). Alternative to `options.random`.
- `buffer` - (Array | Buffer) Array or buffer where UUID bytes are to be written.
- `offset` - (Number) Starting index in `buffer` at which to begin writing.

Returns `buffer`, if specified, otherwise the string form of the UUID

Note: The default [node id](https://tools.ietf.org/html/rfc4122#section-4.1.6) (the last 12 digits in the UUID) is generated once, randomly, on process startup, and then remains unchanged for the duration of the process.

Example: Generate string UUID with fully-specified options

```javascript
const v1options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date('2011-11-01').getTime(),
  nsecs: 5678,
};
uuidv1(v1options); // ⇨ '710b962e-041c-11e1-9234-0123456789ab'
```

Example: In-place generation of two binary IDs

```javascript
// Generate two ids in an array
const arr = new Array();
uuidv1(null, arr, 0); // ⇨ 
  // [
  //    44,  94, 164, 192,  64,
  //   103,  17, 233, 146,  52,
  //    27, 157, 107, 205, 187,
  //   253
  // ]
uuidv1(null, arr, 16); // ⇨ 
  // [
  //    44, 94, 164, 192,  64, 103,  17, 233,
  //   146, 52,  27, 157, 107, 205, 187, 253,
  //    44, 94, 164, 193,  64, 103,  17, 233,
  //   146, 52,  27, 157, 107, 205, 187, 253
  // ]
```

### Version 5 (Namespace)

```javascript
import { v5 as uuidv5 } from 'uuid';

// Incantations
uuidv5(name, namespace);
uuidv5(name, namespace, buffer);
uuidv5(name, namespace, buffer, offset);
```

Generate and return a RFC4122 version 5 UUID.

- `name` - (String | Array[]) "name" to create UUID with
- `namespace` - (String | Array[]) "namespace" UUID either as a String or Array[16] of byte values
- `buffer` - (Array | Buffer) Array or buffer where UUID bytes are to be written.
- `offset` - (Number) Starting index in `buffer` at which to begin writing. Default = 0

Returns `buffer`, if specified, otherwise the string form of the UUID

Example:

```javascript
uuidv5('hello world', MY_NAMESPACE); // ⇨ '9f282611-e0fd-5650-8953-89c8e342da0b'
```

### Version 3 (Namespace)

&#x26a0;&#xfe0f; Note: Per the RFC, "_If backward compatibility is not an issue, SHA-1 [Version 5] is preferred_."

```javascript
import { v3 as uuidv3 } from 'uuid';

// Incantations
uuidv3(name, namespace);
uuidv3(name, namespace, buffer);
uuidv3(name, namespace, buffer, offset);
```

Generate and return a RFC4122 version 3 UUID.

- `name` - (String | Array[]) "name" to create UUID with
- `namespace` - (String | Array[]) "namespace" UUID either as a String or Array[16] of byte values
- `buffer` - (Array | Buffer) Array or buffer where UUID bytes are to be written.
- `offset` - (Number) Starting index in `buffer` at which to begin writing. Default = 0

Returns `buffer`, if specified, otherwise the string form of the UUID

Example:

```javascript
uuidv3('hello world', MY_NAMESPACE); // ⇨ '042ffd34-d989-321c-ad06-f60826172424'
```

## Command Line

UUIDs can be generated from the command line using `uuid`.

```shell
$ uuid
ddeb27fb-d9a0-4624-be4d-4615062daed4
```

The default is to generate version 4 UUIDS, however the other versions are supported. Type `uuid --help` for details:

```
$ uuid --help

Usage:
  uuid
  uuid v1
  uuid v3 <name> <namespace uuid>
  uuid v4
  uuid v5 <name> <namespace uuid>
  uuid --help

Note: <namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs
defined by RFC4122
```

## ECMAScript Modules

For usage in the browser `uuid` provides support for [ECMAScript
Modules](https://www.ecma-international.org/ecma-262/6.0/#sec-modules) (ESM) that enable
tree-shaking for bundlers, like [rollup.js](https://rollupjs.org/guide/en/#tree-shaking)
([example](./examples/browser-rollup/)) and [webpack](https://webpack.js.org/guides/tree-shaking/)
([example](./examples/browser-webpack/)).

```javascript
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

There is experimental native ESM support for [the browser](./examples/browser-esmodules/) but it
should not be considered ready for production use and may change or disappear in future releases.

To run the examples you must first create a dist build of this library in the module root:

```
npm run build
```

## UMD Builds

If you want to load a minified UMD build directly in the browser you can use one of the popular npm
CDNs:

```html
<script src="https://unpkg.com/uuid@latest/dist/umd/uuidv4.min.js"></script>
<script>
  alert(uuidv4());
</script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/uuid@latest/dist/umd/uuidv4.min.js"></script>
<script>
  alert(uuidv4());
</script>
```

Available bundles:

- https://unpkg.com/uuid@latest/dist/umd/
- https://cdn.jsdelivr.net/npm/uuid@latest/dist/umd/

## "getRandomValues() not supported"

This error occurs in environments where the standard
[`crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)
API is not supported. This issue can be resolved by adding an appropriate polyfill:

### React Native

1. Install [`react-native-get-random-values`](https://github.com/LinusU/react-native-get-random-values#readme)
1. Import it before `uuid`:

```javascript
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
```

### Web Workers / Service Workers (Edge <= 18)

[In Edge <= 18, Web Crypto is not supported in Web Workers or Service
Workers](https://caniuse.com/#feat=cryptography) and we are not aware of a polyfill (let us know if
you find one, please).

## Upgrading From uuid\@3

"_Wait... what happened to uuid\@4 - uuid\@6?!?_"

In order to avoid confusion with RFC [version 4](#version-4-random) and [version
5](#version-5-namespace) UUIDs, and a possible [version
6](http://gh.peabody.io/uuidv6/), releases 4 thru 6 of this module have been
skipped. Hence, how we're now at uuid\@7.

### Deep Requires Now Deprecated

uuid\@3 encouraged the use of deep requires to minimize the bundle size of
browser builds:

```javascript
const uuidv4 = require('uuid/v4'); // <== NOW DEPRECATED!
uuidv4();
```

As of uuid\@7 this library now provides ECMAScript modules builds, which allow
packagers like Webpack and Rollup to do "tree-shaking" to remove dead code.
Instead, use the `import` syntax:

```javascript
import { v4 as uuidv4 } from 'uuid';
uuidv4();
```

... or for CommonJS:

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4();
```

### Default Export Removed

uuid\@3 was exporting the Version 4 UUID method as a default export:

```javascript
const uuid = require('uuid'); // <== REMOVED!
```

This usage pattern was already discouraged in uuid\@3 and has been removed in uuid\@7.

----
Markdown generated from [README_js.md](README_js.md) by [![RunMD Logo](http://i.imgur.com/h0FVyzU.png)](https://github.com/broofa/runmd)