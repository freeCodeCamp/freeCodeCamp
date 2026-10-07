# Punycode.js [![punycode on npm](https://img.shields.io/npm/v/punycode)](https://www.npmjs.com/package/punycode) [![](https://data.jsdelivr.com/v1/package/npm/punycode/badge)](https://www.jsdelivr.com/package/npm/punycode)

Punycode.js is a robust Punycode converter that fully complies to [RFC 3492](https://tools.ietf.org/html/rfc3492) and [RFC 5891](https://tools.ietf.org/html/rfc5891).

This JavaScript library is the result of comparing, optimizing and documenting different open-source implementations of the Punycode algorithm:

* [The C example code from RFC 3492](https://tools.ietf.org/html/rfc3492#appendix-C)
* [`punycode.c` by _Markus W. Scherer_ (IBM)](http://opensource.apple.com/source/ICU/ICU-400.42/icuSources/common/punycode.c)
* [`punycode.c` by _Ben Noordhuis_](https://github.com/bnoordhuis/punycode/blob/master/punycode.c)
* [JavaScript implementation by _some_](http://stackoverflow.com/questions/183485/can-anyone-recommend-a-good-free-javascript-for-punycode-to-unicode-conversion/301287#301287)
* [`punycode.js` by _Ben Noordhuis_](https://github.com/joyent/node/blob/426298c8c1c0d5b5224ac3658c41e7c2a3fe9377/lib/punycode.js) (note: [not fully compliant](https://github.com/joyent/node/issues/2072))

This project was [bundled](https://github.com/joyent/node/blob/master/lib/punycode.js) with Node.js from [v0.6.2+](https://github.com/joyent/node/compare/975f1930b1...61e796decc) until [v7](https://github.com/nodejs/node/pull/7941) (soft-deprecated).

This project provides a CommonJS module that uses ES2015+ features and JavaScript module, which work in modern Node.js versions and browsers. For the old Punycode.js version that offers the same functionality in a UMD build with support for older pre-ES2015 runtimes, including Rhino, Ringo, and Narwhal, see [v1.4.1](https://github.com/mathiasbynens/punycode.js/releases/tag/v1.4.1).

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install punycode --save
```

In [Node.js](https://nodejs.org/):

> ⚠️ Note that userland modules don't hide core modules.
> For example, `require('punycode')` still imports the deprecated core module even if you executed `npm install punycode`.
> Use `require('punycode/')` to import userland modules rather than core modules.

```js
const punycode = require('punycode/');
```

## API

### `punycode.decode(string)`

Converts a Punycode string of ASCII symbols to a string of Unicode symbols.

```js
// decode domain name parts
punycode.decode('maana-pta'); // 'mañana'
punycode.decode('--dqo34k'); // '☃-⌘'
```

### `punycode.encode(string)`

Converts a string of Unicode symbols to a Punycode string of ASCII symbols.

```js
// encode domain name parts
punycode.encode('mañana'); // 'maana-pta'
punycode.encode('☃-⌘'); // '--dqo34k'
```

### `punycode.toUnicode(input)`

Converts a Punycode string representing a domain name or an email address to Unicode. Only the Punycoded parts of the input will be converted, i.e. it doesn’t matter if you call it on a string that has already been converted to Unicode.

```js
// decode domain names
punycode.toUnicode('xn--maana-pta.com');
// → 'mañana.com'
punycode.toUnicode('xn----dqo34k.com');
// → '☃-⌘.com'

// decode email addresses
punycode.toUnicode('джумла@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq');
// → 'джумла@джpумлатест.bрфa'
```

### `punycode.toASCII(input)`

Converts a lowercased Unicode string representing a domain name or an email address to Punycode. Only the non-ASCII parts of the input will be converted, i.e. it doesn’t matter if you call it with a domain that’s already in ASCII.

```js
// encode domain names
punycode.toASCII('mañana.com');
// → 'xn--maana-pta.com'
punycode.toASCII('☃-⌘.com');
// → 'xn----dqo34k.com'

// encode email addresses
punycode.toASCII('джумла@джpумлатест.bрфa');
// → 'джумла@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq'
```

### `punycode.ucs2`

#### `punycode.ucs2.decode(string)`

Creates an array containing the numeric code point values of each Unicode symbol in the string. While [JavaScript uses UCS-2 internally](https://mathiasbynens.be/notes/javascript-encoding), this function will convert a pair of surrogate halves (each of which UCS-2 exposes as separate characters) into a single code point, matching UTF-16.

```js
punycode.ucs2.decode('abc');
// → [0x61, 0x62, 0x63]
// surrogate pair for U+1D306 TETRAGRAM FOR CENTRE:
punycode.ucs2.decode('\uD834\uDF06');
// → [0x1D306]
```

#### `punycode.ucs2.encode(codePoints)`

Creates a string based on an array of numeric code point values.

```js
punycode.ucs2.encode([0x61, 0x62, 0x63]);
// → 'abc'
punycode.ucs2.encode([0x1D306]);
// → '\uD834\uDF06'
```

### `punycode.version`

A string representing the current Punycode.js version number.

## For maintainers

### How to publish a new release

1. On the `main` branch, bump the version number in `package.json`:

    ```sh
    npm version patch -m 'Release v%s'
    ```

    Instead of `patch`, use `minor` or `major` [as needed](https://semver.org/).

    Note that this produces a Git commit + tag.

1. Push the release commit and tag:

    ```sh
    git push && git push --tags
    ```

    Our CI then automatically publishes the new release to npm, under both the [`punycode`](https://www.npmjs.com/package/punycode) and [`punycode.js`](https://www.npmjs.com/package/punycode.js) names.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

Punycode.js is available under the [MIT](https://mths.be/mit) license.
