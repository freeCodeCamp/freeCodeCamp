# es6-map
## Map collection as specified in ECMAScript6

__Warning:  
v0.1 version does not ensure O(1) algorithm complexity (but O(n)). This shortcoming will be addressed in v1.0__


### Usage

It’s safest to use *es6-map* as a [ponyfill](https://ponyfill.com) – a polyfill which doesn’t touch global objects:

```javascript
var Map = require('es6-map');
```

If you want to make sure your environment implements `Map` globally, do:

```javascript
require('es6-map/implement');
```

If you strictly want to use the polyfill even if the native `Map` exists, do:

```javascript
var Map = require('es6-map/polyfill');
```

### Installation

	$ npm install es6-map

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

#### API

Best is to refer to [specification](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-map-objects). Still if you want quick look, follow examples:

```javascript
var Map = require('es6-map');

var x = {}, y = {}, map = new Map([['raz', 'one'], ['dwa', 'two'], [x, y]]);

map.size;                 // 3
map.get('raz');           // 'one'
map.get(x);               // y
map.has('raz');           // true
map.has(x);               // true
map.has('foo');           // false
map.set('trzy', 'three'); // map
map.size                  // 4
map.get('trzy');          // 'three'
map.has('trzy');          // true
map.has('dwa');           // true
map.delete('dwa');        // true
map.size;                 // 3

map.forEach(function (value, key) {
  // { 'raz', 'one' }, { x, y }, { 'trzy', 'three' } iterated
});

// FF nightly only:
for (value of map) {
 // ['raz', 'one'], [x, y], ['trzy', 'three'] iterated
}

var iterator = map.values();

iterator.next(); // { done: false, value: 'one' }
iterator.next(); // { done: false, value: y }
iterator.next(); // { done: false, value: 'three' }
iterator.next(); // { done: true, value: undefined }

map.clear(); // undefined
map.size; // 0
```

## Tests [![Build Status](https://travis-ci.org/medikoo/es6-map.png)](https://travis-ci.org/medikoo/es6-map)

	$ npm test
