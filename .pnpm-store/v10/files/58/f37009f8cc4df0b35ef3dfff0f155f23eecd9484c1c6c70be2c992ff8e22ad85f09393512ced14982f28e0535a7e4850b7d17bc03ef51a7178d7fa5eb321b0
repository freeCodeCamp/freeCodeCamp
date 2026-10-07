[![Build status][nix-build-image]][nix-build-url]
[![Windows status][win-build-image]][win-build-url]
![Transpilation status][transpilation-image]
[![npm version][npm-image]][npm-url]

# es6-weak-map

## WeakMap collection as specified in ECMAScript6

_Roughly inspired by Mark Miller's and Kris Kowal's [WeakMap implementation](https://github.com/drses/weak-map)_.

Differences are:

-   Assumes compliant ES5 environment (no weird ES3 workarounds or hacks)
-   Well modularized CJS style
-   Based on one solution.

### Limitations

-   Will fail on non extensible objects provided as keys

### Installation

    $ npm install es6-weak-map

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### Usage

If you want to make sure your environment implements `WeakMap`, do:

```javascript
require("es6-weak-map/implement");
```

If you'd like to use native version when it exists and fallback to polyfill if it doesn't, but without implementing `WeakMap` on global scope, do:

```javascript
var WeakMap = require("es6-weak-map");
```

If you strictly want to use polyfill even if native `WeakMap` exists, do:

```javascript
var WeakMap = require("es6-weak-map/polyfill");
```

#### API

Best is to refer to [specification](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-objects). Still if you want quick look, follow example:

```javascript
var WeakMap = require("es6-weak-map");

var map = new WeakMap();
var obj = {};

map.set(obj, "foo"); // map
map.get(obj); // 'foo'
map.has(obj); // true
map.delete(obj); // true
map.get(obj); // undefined
map.has(obj); // false
map.set(obj, "bar"); // map
map.has(obj); // false
```

## Tests

    $ npm test

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/es6-weak-map/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/es6-weak-map
[win-build-image]: https://ci.appveyor.com/api/projects/status/1c73c57pg4s6lwmu?svg=true
[win-build-url]: https://ci.appveyor.com/project/medikoo/es6-weak-map
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/es6-weak-map.svg
[npm-url]: https://www.npmjs.com/package/es6-weak-map
