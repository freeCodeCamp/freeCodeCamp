# base64 [![Build status](https://travis-ci.org/mathiasbynens/base64.svg?branch=master)](https://travis-ci.org/mathiasbynens/base64) [![Code coverage status](http://img.shields.io/coveralls/mathiasbynens/base64/master.svg)](https://coveralls.io/r/mathiasbynens/base64)

_base64_ is a robust base64 encoder/decoder that is fully compatible with [`atob()` and `btoa()`](https://html.spec.whatwg.org/multipage/webappapis.html#atob), written in JavaScript. The base64-encoding and -decoding algorithms it uses are fully [RFC 4648](https://tools.ietf.org/html/rfc4648#section-4) compliant.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install base-64
```

In a browser:

```html
<script src="base64.js"></script>
```

In [Narwhal](http://narwhaljs.org/), [Node.js](https://nodejs.org/), and [RingoJS](http://ringojs.org/):

```js
var base64 = require('base-64');
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('base64.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'base64': 'path/to/base64'
    }
  },
  ['base64'],
  function(base64) {
    console.log(base64);
  }
);
```

## API

### `base64.version`

A string representing the semantic version number.

### `base64.encode(input)`

This function takes a byte string (the `input` parameter) and encodes it according to base64. The input data must be in the form of a string containing only characters in the range from U+0000 to U+00FF, each representing a binary byte with values `0x00` to `0xFF`. The `base64.encode()` function is designed to be fully compatible with [`btoa()` as described in the HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-btoa).

```js
var encodedData = base64.encode(input);
```

To base64-encode any Unicode string, [encode it as UTF-8 first](https://github.com/mathiasbynens/utf8.js#utf8encodestring):

```js
var base64 = require('base-64');
var utf8 = require('utf8');

var text = 'foo © bar 𝌆 baz';
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);
console.log(encoded);
// → 'Zm9vIMKpIGJhciDwnYyGIGJheg=='
```

### `base64.decode(input)`

This function takes a base64-encoded string (the `input` parameter) and decodes it. The return value is in the form of a string containing only characters in the range from U+0000 to U+00FF, each representing a binary byte with values `0x00` to `0xFF`. The `base64.decode()` function is designed to be fully compatible with [`atob()` as described in the HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-atob).

```js
var decodedData = base64.decode(encodedData);
```

To base64-decode UTF-8-encoded data back into a Unicode string, [UTF-8-decode it](https://github.com/mathiasbynens/utf8.js#utf8decodebytestring) after base64-decoding it:

```js
var encoded = 'Zm9vIMKpIGJhciDwnYyGIGJheg==';
var bytes = base64.decode(encoded);
var text = utf8.decode(bytes);
console.log(text);
// → 'foo © bar 𝌆 baz'
```

## Support

_base64_ is designed to work in at least Node.js v0.10.0, Narwhal 0.3.2, RingoJS 0.8-0.9, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, and Internet Explorer.

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_base64_ is available under the [MIT](https://mths.be/mit) license.
