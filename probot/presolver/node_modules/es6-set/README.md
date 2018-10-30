# es6-set
## Set collection as specified in ECMAScript6

__Warning:  
v0.1 version does not ensure O(1) algorithm complexity (but O(n)). This shortcoming will be addressed in v1.0__

### Usage

If you want to make sure your environment implements `Set`, do:

```javascript
require('es6-set/implement');
```

If you'd like to use native version when it exists and fallback to polyfill if it doesn't, but without implementing `Set` on global scope, do:

```javascript
var Set = require('es6-set');
```

If you strictly want to use polyfill even if native `Set` exists, do:

```javascript
var Set = require('es6-set/polyfill');
```

### Installation

	$ npm install es6-set

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

#### API

Best is to refer to [specification](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set-objects). Still if you want quick look, follow examples:

```javascript
var Set = require('es6-set');

var set = new Set(['raz', 'dwa', {}]);

set.size;          // 3
set.has('raz');    // true
set.has('foo');    // false
set.add('foo');    // set
set.size           // 4
set.has('foo');    // true
set.has('dwa');    // true
set.delete('dwa'); // true
set.size;          // 3

set.forEach(function (value) {
 // 'raz', {}, 'foo' iterated
});

// FF nightly only:
for (value of set) {
 // 'raz', {}, 'foo' iterated
}

var iterator = set.values();

iterator.next(); // { done: false, value: 'raz' }
iterator.next(); // { done: false, value: {} }
iterator.next(); // { done: false, value: 'foo' }
iterator.next(); // { done: true, value: undefined }

set.clear(); // undefined
set.size; // 0
```

## Tests [![Build Status](https://travis-ci.org/medikoo/es6-set.png)](https://travis-ci.org/medikoo/es6-set)

	$ npm test
