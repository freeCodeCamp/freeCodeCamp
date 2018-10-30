<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> type-detect
  </a>
</h1>
<br>
<p align=center>
  Improved typeof detection for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/type-detect/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/type-detect.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/type-detect">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/type-detect/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/type-detect">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/type-detect/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/type-detect">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/type-detect.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/type-detect">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/type-detect.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/type-detect.svg?style=flat-square"
    />
  </a>
  <br/>
  <table>
  <tr><th colspan=6>Supported Browsers</th></tr> <tr>
  <th align=center><img src="https://camo.githubusercontent.com/ab586f11dfcb49bf5f2c2fa9adadc5e857de122a/687474703a2f2f73766773686172652e636f6d2f692f3278532e737667" alt=""> Chrome</th>
  <th align=center><img src="https://camo.githubusercontent.com/98cca3108c18dcfaa62667b42046540c6822cdac/687474703a2f2f73766773686172652e636f6d2f692f3279352e737667" alt=""> Edge</th>
  <th align=center><img src="https://camo.githubusercontent.com/acdcb09840a9e1442cbaf1b684f95ab3c3f41cf4/687474703a2f2f73766773686172652e636f6d2f692f3279462e737667" alt=""> Firefox</th>
  <th align=center><img src="https://camo.githubusercontent.com/728f8cb0bee9ed58ab85e39266f1152c53e0dffd/687474703a2f2f73766773686172652e636f6d2f692f3278342e737667" alt=""> Safari</th>
  <th align=center><img src="https://camo.githubusercontent.com/96a2317034dee0040d0a762e7a30c3c650c45aac/687474703a2f2f73766773686172652e636f6d2f692f3279532e737667" alt=""> IE</th>
  </tr><tr>
  <td align=center>✅</td>
  <td align=center>✅</td>
  <td align=center>✅</td>
  <td align=center>✅</td>
  <td align=center>9, 10, 11</td>
  </tr>
  </table>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is Type-Detect?

Type Detect is a module which you can use to detect the type of a given object. It returns a string representation of the object's type, either using [`typeof`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-typeof-operator) or [`@@toStringTag`](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-symbol.tostringtag). It also normalizes some object names for consistency among browsers.

## Why?

The `typeof` operator will only specify primitive values; everything else is `"object"` (including `null`, arrays, regexps, etc). Many developers use `Object.prototype.toString()` - which is a fine alternative and returns many more types (null returns `[object Null]`, Arrays as `[object Array]`, regexps as `[object RegExp]` etc). 

Sadly, `Object.prototype.toString` is slow, and buggy. By slow - we mean it is slower than `typeof`. By buggy - we mean that some values (like Promises, the global object, iterators, dataviews, a bunch of HTML elements) all report different things in different browsers.

`type-detect` fixes all of the shortcomings with `Object.prototype.toString`. We have extra code to speed up checks of JS and DOM objects, as much as 20-30x faster for some values. `type-detect` also fixes any consistencies with these objects.

## Installation

### Node.js

`type-detect` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install type-detect

### Browsers

You can also use it within the browser; install via npm and use the `type-detect.js` file found within the download. For example:

```html
<script src="./node_modules/type-detect/type-detect.js"></script>
```

## Usage

The primary export of `type-detect` is function that can serve as a replacement for `typeof`. The results of this function will be more specific than that of native `typeof`.

```js
var type = require('type-detect');
```

#### array

```js
assert(type([]) === 'Array');
assert(type(new Array()) === 'Array');
```

#### regexp

```js
assert(type(/a-z/gi) === 'RegExp');
assert(type(new RegExp('a-z')) === 'RegExp');
```

#### function

```js
assert(type(function () {}) === 'function');
```

#### arguments

```js
(function () {
  assert(type(arguments) === 'Arguments');
})();
```

#### date

```js
assert(type(new Date) === 'Date');
```

#### number

```js
assert(type(1) === 'number');
assert(type(1.234) === 'number');
assert(type(-1) === 'number');
assert(type(-1.234) === 'number');
assert(type(Infinity) === 'number');
assert(type(NaN) === 'number');
assert(type(new Number(1)) === 'Number'); // note - the object version has a capital N
```

#### string

```js
assert(type('hello world') === 'string');
assert(type(new String('hello')) === 'String'); // note - the object version has a capital S
```

#### null

```js
assert(type(null) === 'null');
assert(type(undefined) !== 'null');
```

#### undefined

```js
assert(type(undefined) === 'undefined');
assert(type(null) !== 'undefined');
```

#### object

```js
var Noop = function () {};
assert(type({}) === 'Object');
assert(type(Noop) !== 'Object');
assert(type(new Noop) === 'Object');
assert(type(new Object) === 'Object');
```

#### ECMA6 Types

All new ECMAScript 2015 objects are also supported, such as Promises and Symbols:

```js
assert(type(new Map() === 'Map');
assert(type(new WeakMap()) === 'WeakMap');
assert(type(new Set()) === 'Set');
assert(type(new WeakSet()) === 'WeakSet');
assert(type(Symbol()) === 'symbol');
assert(type(new Promise(callback) === 'Promise');
assert(type(new Int8Array()) === 'Int8Array');
assert(type(new Uint8Array()) === 'Uint8Array');
assert(type(new UInt8ClampedArray()) === 'Uint8ClampedArray');
assert(type(new Int16Array()) === 'Int16Array');
assert(type(new Uint16Array()) === 'Uint16Array');
assert(type(new Int32Array()) === 'Int32Array');
assert(type(new UInt32Array()) === 'Uint32Array');
assert(type(new Float32Array()) === 'Float32Array');
assert(type(new Float64Array()) === 'Float64Array');
assert(type(new ArrayBuffer()) === 'ArrayBuffer');
assert(type(new DataView(arrayBuffer)) === 'DataView');
```

Also, if you use `Symbol.toStringTag` to change an Objects return value of the `toString()` Method, `type()` will return this value, e.g:

```js
var myObject = {};
myObject[Symbol.toStringTag] = 'myCustomType';
assert(type(myObject) === 'myCustomType');
```
