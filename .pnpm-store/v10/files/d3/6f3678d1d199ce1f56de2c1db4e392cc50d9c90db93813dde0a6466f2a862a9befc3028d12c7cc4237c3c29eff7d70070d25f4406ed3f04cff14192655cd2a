# ES6 `String.prototype.includes` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.includes.svg?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.includes)

A robust & optimized polyfill for [the `String.prototype.includes` method (previously known as `String.prototype.contains`) in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.includes).

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.prototype.includes).

Other polyfills for `String.prototype.includes` are available:

* <https://github.com/paulmillr/es6-shim/blob/d8c4ec246a15e7df55da60b7f9b745af84ca9021/es6-shim.js#L186-L190> by [Paul Miller](http://paulmillr.com/) (~~[fails some tests](https://github.com/paulmillr/es6-shim/issues/175)~~ passes all tests)
* <https://github.com/google/traceur-compiler/blob/315bdad05d41de46d25337422d66686d63100d7a/src/runtime/polyfills/String.js#L68-L86> by Google (~~[fails a lot of tests](https://github.com/google/traceur-compiler/pull/556)~~ now uses this polyfill and passes all tests)

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.includes
```

Then, in [Node.js](http://nodejs.org/):

```js
var includes = require('string.prototype.includes');
```

In a browser:

```html
<script src="https://bundle.run/string.prototype.includes"></script>
```

> **NOTE**: It's recommended that you install this module using a package manager
> such as `npm`, because loading multiple polyfills from a CDN (such as `bundle.run`)
> will lead to duplicated code.

## Notes

Polyfills + test suites for [`String.prototype.startsWith`](https://mths.be/startswith) and [`String.prototype.endsWith`](https://mths.be/endswith) are available, too.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](https://mths.be/mit) license.
