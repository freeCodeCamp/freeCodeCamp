# core-js

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zloirock/core-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![version](https://img.shields.io/npm/v/core-js.svg)](https://www.npmjs.com/package/core-js) [![npm downloads](https://img.shields.io/npm/dm/core-js.svg)](http://npm-stat.com/charts.html?package=core-js&author=&from=2014-11-18) [![Build Status](https://travis-ci.org/zloirock/core-js.svg)](https://travis-ci.org/zloirock/core-js) [![devDependency status](https://david-dm.org/zloirock/core-js/dev-status.svg)](https://david-dm.org/zloirock/core-js?type=dev)
#### As advertising: the author is looking for a good job :)

Modular standard library for JavaScript. Includes polyfills for [ECMAScript 5](#ecmascript-5), [ECMAScript 6](#ecmascript-6): [promises](#ecmascript-6-promise), [symbols](#ecmascript-6-symbol), [collections](#ecmascript-6-collections), iterators, [typed arrays](#ecmascript-6-typed-arrays), [ECMAScript 7+ proposals](#ecmascript-7-proposals), [setImmediate](#setimmediate), etc. Some additional features such as [dictionaries](#dict) or [extended partial application](#partial-application). You can require only needed features or use it without global namespace pollution.

[*Example*](http://goo.gl/a2xexl):
```js
Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
'*'.repeat(10);                                // => '**********'
Promise.resolve(32).then(x => console.log(x)); // => 32
setImmediate(x => console.log(x), 42);         // => 42
```

[*Without global namespace pollution*](http://goo.gl/paOHb0):
```js
var core = require('core-js/library'); // With a modular system, otherwise use global `core`
core.Array.from(new core.Set([1, 2, 3, 2, 1]));     // => [1, 2, 3]
core.String.repeat('*', 10);                        // => '**********'
core.Promise.resolve(32).then(x => console.log(x)); // => 32
core.setImmediate(x => console.log(x), 42);         // => 42
```

### Index
- [Usage](#usage)
  - [Basic](#basic)
  - [CommonJS](#commonjs)
  - [Custom build](#custom-build-from-the-command-line)
- [Supported engines](#supported-engines)
- [Features](#features)
  - [ECMAScript 5](#ecmascript-5)
  - [ECMAScript 6](#ecmascript-6)
    - [ECMAScript 6: Object](#ecmascript-6-object)
    - [ECMAScript 6: Function](#ecmascript-6-function)
    - [ECMAScript 6: Array](#ecmascript-6-array)
    - [ECMAScript 6: String](#ecmascript-6-string)
    - [ECMAScript 6: RegExp](#ecmascript-6-regexp)
    - [ECMAScript 6: Number](#ecmascript-6-number)
    - [ECMAScript 6: Math](#ecmascript-6-math)
    - [ECMAScript 6: Date](#ecmascript-6-date)
    - [ECMAScript 6: Promise](#ecmascript-6-promise)
    - [ECMAScript 6: Symbol](#ecmascript-6-symbol)
    - [ECMAScript 6: Collections](#ecmascript-6-collections)
    - [ECMAScript 6: Typed Arrays](#ecmascript-6-typed-arrays)
    - [ECMAScript 6: Reflect](#ecmascript-6-reflect)
  - [ECMAScript 7+ proposals](#ecmascript-7-proposals)
    - [stage 4 proposals](#stage-4-proposals)
    - [stage 3 proposals](#stage-3-proposals)
    - [stage 2 proposals](#stage-2-proposals)
    - [stage 1 proposals](#stage-1-proposals)
    - [stage 0 proposals](#stage-0-proposals)
    - [pre-stage 0 proposals](#pre-stage-0-proposals)
  - [Web standards](#web-standards)
    - [setTimeout / setInterval](#settimeout--setinterval)
    - [setImmediate](#setimmediate)
    - [iterable DOM collections](#iterable-dom-collections)
  - [Non-standard](#non-standard)
    - [Object](#object)
    - [Dict](#dict)
    - [partial application](#partial-application)
    - [Number Iterator](#number-iterator)
    - [escaping strings](#escaping-strings)
    - [delay](#delay)
    - [helpers for iterators](#helpers-for-iterators)
- [Missing polyfills](#missing-polyfills)
- [Changelog](./CHANGELOG.md)

## Usage
### Basic
```
npm i core-js
bower install core.js
```

```js
// Default
require('core-js');
// Without global namespace pollution
var core = require('core-js/library');
// Shim only
require('core-js/shim');
```
If you need complete build for browser, use builds from `core-js/client` path:  

* [default](https://raw.githack.com/zloirock/core-js/v2.5.7/client/core.min.js): Includes all features, standard and non-standard.
* [as a library](https://raw.githack.com/zloirock/core-js/v2.5.7/client/library.min.js): Like "default", but does not pollute the global namespace (see [2nd example at the top](#core-js)).
* [shim only](https://raw.githack.com/zloirock/core-js/v2.5.7/client/shim.min.js): Only includes the standard methods.

Warning: if you use `core-js` with the extension of native objects, require all needed `core-js` modules at the beginning of entry point of your application, otherwise, conflicts may occur.

### CommonJS
You can require only needed modules.

```js
require('core-js/fn/set');
require('core-js/fn/array/from');
require('core-js/fn/array/find-index');
Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
[1, 2, NaN, 3, 4].findIndex(isNaN);   // => 2

// or, w/o global namespace pollution:

var Set       = require('core-js/library/fn/set');
var from      = require('core-js/library/fn/array/from');
var findIndex = require('core-js/library/fn/array/find-index');
from(new Set([1, 2, 3, 2, 1]));      // => [1, 2, 3]
findIndex([1, 2, NaN, 3, 4], isNaN); // => 2
```
Available entry points for methods / constructors, as above examples, and namespaces: for example, `core-js/es6/array` (`core-js/library/es6/array`) contains all [ES6 `Array` features](#ecmascript-6-array), `core-js/es6` (`core-js/library/es6`) contains all ES6 features.

##### Caveats when using CommonJS API:

* `modules` path is internal API, does not inject all required dependencies and can be changed in minor or patch releases. Use it only for a custom build and / or if you know what are you doing.
* `core-js` is extremely modular and uses a lot of very tiny modules, because of that for usage in browsers bundle up `core-js` instead of usage loader for each file, otherwise, you will have hundreds of requests.

#### CommonJS and prototype methods without global namespace pollution
In the `library` version, we can't pollute prototypes of native constructors. Because of that, prototype methods transformed to static methods like in examples above. `babel` `runtime` transformer also can't transform them. But with transpilers we can use one more trick - [bind operator and virtual methods](https://github.com/zenparsing/es-function-bind). Special for that, available `/virtual/` entry points. Example:
```js
import fill from 'core-js/library/fn/array/virtual/fill';
import findIndex from 'core-js/library/fn/array/virtual/find-index';

Array(10)::fill(0).map((a, b) => b * b)::findIndex(it => it && !(it % 8)); // => 4

// or

import {fill, findIndex} from 'core-js/library/fn/array/virtual';

Array(10)::fill(0).map((a, b) => b * b)::findIndex(it => it && !(it % 8)); // => 4

```

### Custom build (from the command-line)
```
npm i core-js && cd node_modules/core-js && npm i
npm run grunt build:core.dict,es6 -- --blacklist=es6.promise,es6.math --library=on --path=custom uglify
```
Where `core.dict` and `es6` are modules (namespaces) names, which will be added to the build, `es6.promise` and `es6.math` are modules (namespaces) names, which will be excluded from the build, `--library=on` is flag for build without global namespace pollution and `custom` is target file name.

Available namespaces: for example, `es6.array` contains [ES6 `Array` features](#ecmascript-6-array), `es6` contains all modules whose names start with `es6`.

### Custom build (from external scripts)

[`core-js-builder`](https://www.npmjs.com/package/core-js-builder) package exports a function that takes the same parameters as the `build` target from the previous section. This will conditionally include or exclude certain parts of `core-js`:

```js
require('core-js-builder')({
  modules: ['es6', 'core.dict'], // modules / namespaces
  blacklist: ['es6.reflect'],    // blacklist of modules / namespaces, by default - empty list
  library: false,                // flag for build without global namespace pollution, by default - false
  umd: true                      // use UMD wrapper for export `core` object, by default - true
}).then(code => {
  // ...
}).catch(error => {
  // ...
});
```
## Supported engines
**Tested in:**
- Chrome 26+
- Firefox 4+
- Safari 5+
- Opera 12+
- Internet Explorer 6+ (sure, IE8- with ES3 limitations)
- Edge
- Android Browser 2.3+
- iOS Safari 5.1+
- PhantomJS 1.9 / 2.1
- NodeJS 0.8+

...and it doesn't mean `core-js` will not work in other engines, they just have not been tested.

## Features:
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)       <- all features
core-js(/library)/shim  <- only polyfills
```
### ECMAScript 5
All features moved to the [`es6` namespace](#ecmascript-6), here just a list of features:
```js
Object
  .create(proto | null, descriptors?)    -> object
  .getPrototypeOf(object)                -> proto | null
  .defineProperty(target, key, desc)     -> target, cap for ie8-
  .defineProperties(target, descriptors) -> target, cap for ie8-
  .getOwnPropertyDescriptor(object, key) -> desc
  .getOwnPropertyNames(object)           -> array
  .keys(object)                          -> array
  .seal(object)                          -> object, cap for ie8-
  .freeze(object)                        -> object, cap for ie8-
  .preventExtensions(object)             -> object, cap for ie8-
  .isSealed(object)                      -> bool, cap for ie8-
  .isFrozen(object)                      -> bool, cap for ie8-
  .isExtensible(object)                  -> bool, cap for ie8-
Array
  .isArray(var)                                -> bool
  #slice(start?, end?)                         -> array, fix for ie7-
  #join(string = ',')                          -> string, fix for ie7-
  #indexOf(var, from?)                         -> int
  #lastIndexOf(var, from?)                     -> int
  #every(fn(val, index, @), that)              -> bool
  #some(fn(val, index, @), that)               -> bool
  #forEach(fn(val, index, @), that)            -> void
  #map(fn(val, index, @), that)                -> array
  #filter(fn(val, index, @), that)             -> array
  #reduce(fn(memo, val, index, @), memo?)      -> var
  #reduceRight(fn(memo, val, index, @), memo?) -> var
  #sort(fn?)                                   -> @, fixes for some engines
Function
  #bind(object, ...args) -> boundFn(...args)
String
  #split(separator, limit) -> array
  #trim()                  -> str
RegExp
  #toString() -> str
Number
  #toFixed(digits)        -> string
  #toPrecision(precision) -> string
parseInt(str, radix) -> int
parseFloat(str)      -> num
Date
  .now()         -> int
  #toISOString() -> string
  #toJSON()      -> string
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es5
```

### ECMAScript 6
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6
```
#### ECMAScript 6: Object
Modules [`es6.object.assign`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.assign.js), [`es6.object.is`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.is.js), [`es6.object.set-prototype-of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.set-prototype-of.js) and [`es6.object.to-string`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.to-string.js).

In ES6 most `Object` static methods should work with primitives. Modules [`es6.object.freeze`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.freeze.js), [`es6.object.seal`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.seal.js), [`es6.object.prevent-extensions`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.prevent-extensions.js), [`es6.object.is-frozen`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.is-frozen.js), [`es6.object.is-sealed`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.is-sealed.js), [`es6.object.is-extensible`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.is-extensible.js), [`es6.object.get-own-property-descriptor`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.get-own-property-descriptor.js), [`es6.object.get-prototype-of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.get-prototype-of.js), [`es6.object.keys`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.keys.js) and [`es6.object.get-own-property-names`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.get-own-property-names.js).

Just ES5 features: [`es6.object.create`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.create.js), [`es6.object.define-property`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.define-property.js) and [`es6.object.define-properties`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.object.es6.object.define-properties.js).
```js
Object
  .assign(target, ...src)                -> target
  .is(a, b)                              -> bool
  .setPrototypeOf(target, proto | null)  -> target (required __proto__ - IE11+)
  .create(object | null, descriptors?)   -> object
  .getPrototypeOf(var)                   -> object | null
  .defineProperty(object, key, desc)     -> target
  .defineProperties(object, descriptors) -> target
  .getOwnPropertyDescriptor(var, key)    -> desc | undefined
  .keys(var)                             -> array
  .getOwnPropertyNames(var)              -> array
  .freeze(var)                           -> var
  .seal(var)                             -> var
  .preventExtensions(var)                -> var
  .isFrozen(var)                         -> bool
  .isSealed(var)                         -> bool
  .isExtensible(var)                     -> bool
  #toString()                            -> string, ES6 fix: @@toStringTag support
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/object
core-js(/library)/fn/object/assign
core-js(/library)/fn/object/is
core-js(/library)/fn/object/set-prototype-of
core-js(/library)/fn/object/get-prototype-of
core-js(/library)/fn/object/create
core-js(/library)/fn/object/define-property
core-js(/library)/fn/object/define-properties
core-js(/library)/fn/object/get-own-property-descriptor
core-js(/library)/fn/object/keys
core-js(/library)/fn/object/get-own-property-names
core-js(/library)/fn/object/freeze
core-js(/library)/fn/object/seal
core-js(/library)/fn/object/prevent-extensions
core-js(/library)/fn/object/is-frozen
core-js(/library)/fn/object/is-sealed
core-js(/library)/fn/object/is-extensible
core-js/fn/object/to-string
```
[*Examples*](http://goo.gl/ywdwPz):
```js
var foo = {q: 1, w: 2}
  , bar = {e: 3, r: 4}
  , baz = {t: 5, y: 6};
Object.assign(foo, bar, baz); // => foo = {q: 1, w: 2, e: 3, r: 4, t: 5, y: 6}

Object.is(NaN, NaN); // => true
Object.is(0, -0);    // => false
Object.is(42, 42);   // => true
Object.is(42, '42'); // => false

function Parent(){}
function Child(){}
Object.setPrototypeOf(Child.prototype, Parent.prototype);
new Child instanceof Child;  // => true
new Child instanceof Parent; // => true

var O = {};
O[Symbol.toStringTag] = 'Foo';
'' + O; // => '[object Foo]'

Object.keys('qwe'); // => ['0', '1', '2']
Object.getPrototypeOf('qwe') === String.prototype; // => true
```
#### ECMAScript 6: Function
Modules [`es6.function.name`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.function.name.js), [`es6.function.has-instance`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.function.has-instance.js). Just ES5: [`es6.function.bind`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.function.bind.js).
```js
Function
  #bind(object, ...args) -> boundFn(...args)
  #name                  -> string (IE9+)
  #@@hasInstance(var)    -> bool
```
[*CommonJS entry points:*](#commonjs)
```
core-js/es6/function
core-js/fn/function/name
core-js/fn/function/has-instance
core-js/fn/function/bind
core-js/fn/function/virtual/bind
```
[*Example*](http://goo.gl/zqu3Wp):
```js
(function foo(){}).name // => 'foo'

console.log.bind(console, 42)(43); // => 42 43
```
#### ECMAScript 6: Array
Modules [`es6.array.from`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.from.js), [`es6.array.of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.of.js), [`es6.array.copy-within`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.copy-within.js), [`es6.array.fill`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.fill.js), [`es6.array.find`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.find.js), [`es6.array.find-index`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.find-index.js), [`es6.array.iterator`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.iterator.js). ES5 features with fixes: [`es6.array.is-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.is-array.js), [`es6.array.slice`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.slice.js), [`es6.array.join`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.join.js), [`es6.array.index-of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.index-of.js), [`es6.array.last-index-of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.last-index-of.js), [`es6.array.every`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.every.js), [`es6.array.some`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.some.js), [`es6.array.for-each`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.for-each.js), [`es6.array.map`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.map.js), [`es6.array.filter`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.filter.js), [`es6.array.reduce`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.reduce.js), [`es6.array.reduce-right`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.reduce-right.js), [`es6.array.sort`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.array.sort.js).
```js
Array
  .from(iterable | array-like, mapFn(val, index)?, that) -> array
  .of(...args)                                           -> array
  .isArray(var)                                          -> bool
  #copyWithin(target = 0, start = 0, end = @length)      -> @
  #fill(val, start = 0, end = @length)                   -> @
  #find(fn(val, index, @), that)                         -> val
  #findIndex(fn(val, index, @), that)                    -> index | -1
  #values()                                              -> iterator
  #keys()                                                -> iterator
  #entries()                                             -> iterator
  #join(string = ',')                                    -> string, fix for ie7-
  #slice(start?, end?)                                   -> array, fix for ie7-
  #indexOf(var, from?)                                   -> index | -1
  #lastIndexOf(var, from?)                               -> index | -1
  #every(fn(val, index, @), that)                        -> bool
  #some(fn(val, index, @), that)                         -> bool
  #forEach(fn(val, index, @), that)                      -> void
  #map(fn(val, index, @), that)                          -> array
  #filter(fn(val, index, @), that)                       -> array
  #reduce(fn(memo, val, index, @), memo?)                -> var
  #reduceRight(fn(memo, val, index, @), memo?)           -> var
  #sort(fn?)                                             -> @, invalid arguments fix
  #@@iterator()                                          -> iterator (values)
  #@@unscopables                                         -> object (cap)
Arguments
  #@@iterator() -> iterator (values, available only in core-js methods)
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/array
core-js(/library)/fn/array/from
core-js(/library)/fn/array/of
core-js(/library)/fn/array/is-array
core-js(/library)/fn/array/iterator
core-js(/library)/fn/array/copy-within
core-js(/library)/fn/array/fill
core-js(/library)/fn/array/find
core-js(/library)/fn/array/find-index
core-js(/library)/fn/array/values
core-js(/library)/fn/array/keys
core-js(/library)/fn/array/entries
core-js(/library)/fn/array/slice
core-js(/library)/fn/array/join
core-js(/library)/fn/array/index-of
core-js(/library)/fn/array/last-index-of
core-js(/library)/fn/array/every
core-js(/library)/fn/array/some
core-js(/library)/fn/array/for-each
core-js(/library)/fn/array/map
core-js(/library)/fn/array/filter
core-js(/library)/fn/array/reduce
core-js(/library)/fn/array/reduce-right
core-js(/library)/fn/array/sort
core-js(/library)/fn/array/virtual/iterator
core-js(/library)/fn/array/virtual/copy-within
core-js(/library)/fn/array/virtual/fill
core-js(/library)/fn/array/virtual/find
core-js(/library)/fn/array/virtual/find-index
core-js(/library)/fn/array/virtual/values
core-js(/library)/fn/array/virtual/keys
core-js(/library)/fn/array/virtual/entries
core-js(/library)/fn/array/virtual/slice
core-js(/library)/fn/array/virtual/join
core-js(/library)/fn/array/virtual/index-of
core-js(/library)/fn/array/virtual/last-index-of
core-js(/library)/fn/array/virtual/every
core-js(/library)/fn/array/virtual/some
core-js(/library)/fn/array/virtual/for-each
core-js(/library)/fn/array/virtual/map
core-js(/library)/fn/array/virtual/filter
core-js(/library)/fn/array/virtual/reduce
core-js(/library)/fn/array/virtual/reduce-right
core-js(/library)/fn/array/virtual/sort
```
[*Examples*](http://goo.gl/oaUFUf):
```js
Array.from(new Set([1, 2, 3, 2, 1]));      // => [1, 2, 3]
Array.from({0: 1, 1: 2, 2: 3, length: 3}); // => [1, 2, 3]
Array.from('123', Number);                 // => [1, 2, 3]
Array.from('123', function(it){
  return it * it;
});                                        // => [1, 4, 9]

Array.of(1);       // => [1]
Array.of(1, 2, 3); // => [1, 2, 3]

var array = ['a', 'b', 'c'];

for(var val of array)console.log(val);          // => 'a', 'b', 'c'
for(var val of array.values())console.log(val); // => 'a', 'b', 'c'
for(var key of array.keys())console.log(key);   // => 0, 1, 2
for(var [key, val] of array.entries()){
  console.log(key);                             // => 0, 1, 2
  console.log(val);                             // => 'a', 'b', 'c'
}

function isOdd(val){
  return val % 2;
}
[4, 8, 15, 16, 23, 42].find(isOdd);      // => 15
[4, 8, 15, 16, 23, 42].findIndex(isOdd); // => 2
[4, 8, 15, 16, 23, 42].find(isNaN);      // => undefined
[4, 8, 15, 16, 23, 42].findIndex(isNaN); // => -1

Array(5).fill(42); // => [42, 42, 42, 42, 42]

[1, 2, 3, 4, 5].copyWithin(0, 3); // => [4, 5, 3, 4, 5]
```
#### ECMAScript 6: String
Modules [`es6.string.from-code-point`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.from-code-point.js), [`es6.string.raw`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.raw.js), [`es6.string.iterator`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.iterator.js), [`es6.string.code-point-at`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.code-point-at.js), [`es6.string.ends-with`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.ends-with.js), [`es6.string.includes`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.includes.js), [`es6.string.repeat`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.repeat.js), [`es6.string.starts-with`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.starts-with.js) and [`es6.string.trim`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.trim.js).

Annex B HTML methods. Ugly, but it's also the part of the spec. Modules [`es6.string.anchor`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.anchor.js), [`es6.string.big`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.big.js), [`es6.string.blink`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.blink.js), [`es6.string.bold`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.bold.js), [`es6.string.fixed`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.fixed.js), [`es6.string.fontcolor`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.fontcolor.js), [`es6.string.fontsize`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.fontsize.js), [`es6.string.italics`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.italics.js), [`es6.string.link`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.link.js), [`es6.string.small`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.small.js), [`es6.string.strike`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.strike.js), [`es6.string.sub`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.sub.js) and [`es6.string.sup`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.string.sup.js).
```js
String
  .fromCodePoint(...codePoints) -> str
  .raw({raw}, ...substitutions) -> str
  #includes(str, from?) -> bool
  #startsWith(str, from?) -> bool
  #endsWith(str, from?) -> bool
  #repeat(num) -> str
  #codePointAt(pos) -> uint
  #trim() -> str, ES6 fix
  #anchor(name)     -> str
  #big()            -> str
  #blink()          -> str
  #bold()           -> str
  #fixed()          -> str
  #fontcolor(color) -> str
  #fontsize(size)   -> str
  #italics()        -> str
  #link(url)        -> str
  #small()          -> str
  #strike()         -> str
  #sub()            -> str
  #sup()            -> str
  #@@iterator() -> iterator (code points)
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/string
core-js(/library)/fn/string/from-code-point
core-js(/library)/fn/string/raw
core-js(/library)/fn/string/includes
core-js(/library)/fn/string/starts-with
core-js(/library)/fn/string/ends-with
core-js(/library)/fn/string/repeat
core-js(/library)/fn/string/code-point-at
core-js(/library)/fn/string/trim
core-js(/library)/fn/string/anchor
core-js(/library)/fn/string/big
core-js(/library)/fn/string/blink
core-js(/library)/fn/string/bold
core-js(/library)/fn/string/fixed
core-js(/library)/fn/string/fontcolor
core-js(/library)/fn/string/fontsize
core-js(/library)/fn/string/italics
core-js(/library)/fn/string/link
core-js(/library)/fn/string/small
core-js(/library)/fn/string/strike
core-js(/library)/fn/string/sub
core-js(/library)/fn/string/sup
core-js(/library)/fn/string/iterator
core-js(/library)/fn/string/virtual/includes
core-js(/library)/fn/string/virtual/starts-with
core-js(/library)/fn/string/virtual/ends-with
core-js(/library)/fn/string/virtual/repeat
core-js(/library)/fn/string/virtual/code-point-at
core-js(/library)/fn/string/virtual/trim
core-js(/library)/fn/string/virtual/anchor
core-js(/library)/fn/string/virtual/big
core-js(/library)/fn/string/virtual/blink
core-js(/library)/fn/string/virtual/bold
core-js(/library)/fn/string/virtual/fixed
core-js(/library)/fn/string/virtual/fontcolor
core-js(/library)/fn/string/virtual/fontsize
core-js(/library)/fn/string/virtual/italics
core-js(/library)/fn/string/virtual/link
core-js(/library)/fn/string/virtual/small
core-js(/library)/fn/string/virtual/strike
core-js(/library)/fn/string/virtual/sub
core-js(/library)/fn/string/virtual/sup
core-js(/library)/fn/string/virtual/iterator
```
[*Examples*](http://goo.gl/3UaQ93):
```js
for(var val of 'a𠮷b'){
  console.log(val); // => 'a', '𠮷', 'b'
}

'foobarbaz'.includes('bar');      // => true
'foobarbaz'.includes('bar', 4);   // => false
'foobarbaz'.startsWith('foo');    // => true
'foobarbaz'.startsWith('bar', 3); // => true
'foobarbaz'.endsWith('baz');      // => true
'foobarbaz'.endsWith('bar', 6);   // => true

'string'.repeat(3); // => 'stringstringstring'

'𠮷'.codePointAt(0); // => 134071
String.fromCodePoint(97, 134071, 98); // => 'a𠮷b'

var name = 'Bob';
String.raw`Hi\n${name}!`;           // => 'Hi\\nBob!' (ES6 template string syntax)
String.raw({raw: 'test'}, 0, 1, 2); // => 't0e1s2t'

'foo'.bold();                     // => '<b>foo</b>'
'bar'.anchor('a"b');              // => '<a name="a&quot;b">bar</a>'
'baz'.link('http://example.com'); // => '<a href="http://example.com">baz</a>'
```
#### ECMAScript 6: RegExp
Modules [`es6.regexp.constructor`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.regexp.constructor.js) and [`es6.regexp.flags`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.regexp.flags.js).

Support well-known [symbols](#ecmascript-6-symbol) `@@match`, `@@replace`, `@@search` and `@@split`, modules [`es6.regexp.match`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.regexp.match.js), [`es6.regexp.replace`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.regexp.replace.js), [`es6.regexp.search`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.regexp.search.js) and [`es6.regexp.split`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.regexp.split.js).
```
[new] RegExp(pattern, flags?) -> regexp, ES6 fix: can alter flags (IE9+)
  #flags -> str (IE9+)
  #toString() -> str, ES6 fixes
  #@@match(str)             -> array | null
  #@@replace(str, replacer) -> string
  #@@search(str)            -> index
  #@@split(str, limit)      -> array
String
  #match(tpl)             -> var, ES6 fix for support @@match
  #replace(tpl, replacer) -> var, ES6 fix for support @@replace
  #search(tpl)            -> var, ES6 fix for support @@search
  #split(tpl, limit)      -> var, ES6 fix for support @@split, some fixes for old engines
```
[*CommonJS entry points:*](#commonjs)
```
core-js/es6/regexp
core-js/fn/regexp/constructor
core-js(/library)/fn/regexp/flags
core-js/fn/regexp/to-string
core-js/fn/regexp/match
core-js/fn/regexp/replace
core-js/fn/regexp/search
core-js/fn/regexp/split
```
[*Examples*](http://goo.gl/PiJxBD):
```js
RegExp(/./g, 'm'); // => /./m

/foo/.flags;    // => ''
/foo/gim.flags; // => 'gim'

'foo'.match({[Symbol.match]: _ => 1});     // => 1
'foo'.replace({[Symbol.replace]: _ => 2}); // => 2
'foo'.search({[Symbol.search]: _ => 3});   // => 3
'foo'.split({[Symbol.split]: _ => 4});     // => 4

RegExp.prototype.toString.call({source: 'foo', flags: 'bar'}); // => '/foo/bar'
```
#### ECMAScript 6: Number
Module [`es6.number.constructor`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.constructor.js). `Number` constructor support binary and octal literals, [*example*](http://goo.gl/jRd6b3):
```js
Number('0b1010101'); // => 85
Number('0o7654321'); // => 2054353
```
Modules [`es6.number.epsilon`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.epsilon.js), [`es6.number.is-finite`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.is-finite.js), [`es6.number.is-integer`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.is-integer.js), [`es6.number.is-nan`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.is-nan.js), [`es6.number.is-safe-integer`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.is-safe-integer.js), [`es6.number.max-safe-integer`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.max-safe-integer.js), [`es6.number.min-safe-integer`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.min-safe-integer.js), [`es6.number.parse-float`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.parse-float.js), [`es6.number.parse-int`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.parse-int.js), [`es6.number.to-fixed`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.to-fixed.js), [`es6.number.to-precision`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.number.to-precision.js), [`es6.parse-int`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.parse-int.js), [`es6.parse-float`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.parse-float.js).
```js
[new] Number(var)         -> number | number object
  .isFinite(num)          -> bool
  .isNaN(num)             -> bool
  .isInteger(num)         -> bool
  .isSafeInteger(num)     -> bool
  .parseFloat(str)        -> num
  .parseInt(str)          -> int
  .EPSILON                -> num
  .MAX_SAFE_INTEGER       -> int
  .MIN_SAFE_INTEGER       -> int
  #toFixed(digits)        -> string, fixes
  #toPrecision(precision) -> string, fixes
parseFloat(str)           -> num, fixes
parseInt(str)             -> int, fixes
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/number
core-js/es6/number/constructor
core-js(/library)/fn/number/is-finite
core-js(/library)/fn/number/is-nan
core-js(/library)/fn/number/is-integer
core-js(/library)/fn/number/is-safe-integer
core-js(/library)/fn/number/parse-float
core-js(/library)/fn/number/parse-int
core-js(/library)/fn/number/epsilon
core-js(/library)/fn/number/max-safe-integer
core-js(/library)/fn/number/min-safe-integer
core-js(/library)/fn/number/to-fixed
core-js(/library)/fn/number/to-precision
core-js(/library)/fn/parse-float
core-js(/library)/fn/parse-int
```
#### ECMAScript 6: Math
Modules [`es6.math.acosh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.acosh.js), [`es6.math.asinh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.asinh.js), [`es6.math.atanh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.atanh.js), [`es6.math.cbrt`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.cbrt.js), [`es6.math.clz32`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.clz32.js), [`es6.math.cosh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.cosh.js), [`es6.math.expm1`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.expm1.js), [`es6.math.fround`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.fround.js), [`es6.math.hypot`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.hypot.js), [`es6.math.imul`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.imul.js), [`es6.math.log10`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.log10.js), [`es6.math.log1p`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.log1p.js), [`es6.math.log2`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.log2.js), [`es6.math.sign`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.sign.js), [`es6.math.sinh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.sinh.js), [`es6.math.tanh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.tanh.js), [`es6.math.trunc`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.math.trunc.js).
```js
Math
  .acosh(num)     -> num
  .asinh(num)     -> num
  .atanh(num)     -> num
  .cbrt(num)      -> num
  .clz32(num)     -> uint
  .cosh(num)      -> num
  .expm1(num)     -> num
  .fround(num)    -> num
  .hypot(...args) -> num
  .imul(num, num) -> int
  .log1p(num)     -> num
  .log10(num)     -> num
  .log2(num)      -> num
  .sign(num)      -> 1 | -1 | 0 | -0 | NaN
  .sinh(num)      -> num
  .tanh(num)      -> num
  .trunc(num)     -> num
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/math
core-js(/library)/fn/math/acosh
core-js(/library)/fn/math/asinh
core-js(/library)/fn/math/atanh
core-js(/library)/fn/math/cbrt
core-js(/library)/fn/math/clz32
core-js(/library)/fn/math/cosh
core-js(/library)/fn/math/expm1
core-js(/library)/fn/math/fround
core-js(/library)/fn/math/hypot
core-js(/library)/fn/math/imul
core-js(/library)/fn/math/log1p
core-js(/library)/fn/math/log10
core-js(/library)/fn/math/log2
core-js(/library)/fn/math/sign
core-js(/library)/fn/math/sinh
core-js(/library)/fn/math/tanh
core-js(/library)/fn/math/trunc
```
#### ECMAScript 6: Date
Modules [`es6.date.to-string`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.date.to-string.js), ES5 features with fixes: [`es6.date.now`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.date.now.js), [`es6.date.to-iso-string`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.date.to-iso-string.js), [`es6.date.to-json`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.date.to-json.js) and [`es6.date.to-primitive`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.date.to-primitive.js).
```js
Date
  .now()               -> int
  #toISOString()       -> string
  #toJSON()            -> string
  #toString()          -> string
  #@@toPrimitive(hint) -> primitive
```
[*CommonJS entry points:*](#commonjs)
```
core-js/es6/date
core-js/fn/date/to-string
core-js(/library)/fn/date/now
core-js(/library)/fn/date/to-iso-string
core-js(/library)/fn/date/to-json
core-js(/library)/fn/date/to-primitive
```
[*Example*](http://goo.gl/haeHLR):
```js
new Date(NaN).toString(); // => 'Invalid Date'
```

#### ECMAScript 6: Promise
Module [`es6.promise`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.promise.js).
```js
new Promise(executor(resolve(var), reject(var))) -> promise
  #then(resolved(var), rejected(var))            -> promise
  #catch(rejected(var))                          -> promise
  .resolve(promise | var)                        -> promise
  .reject(var)                                   -> promise
  .all(iterable)                                 -> promise
  .race(iterable)                                -> promise
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/promise
core-js(/library)/fn/promise
```
Basic [*example*](http://goo.gl/vGrtUC):
```js
function sleepRandom(time){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, time * 1e3, 0 | Math.random() * 1e3);
  });
}

console.log('Run');                    // => Run
sleepRandom(5).then(function(result){
  console.log(result);                 // => 869, after 5 sec.
  return sleepRandom(10);
}).then(function(result){
  console.log(result);                 // => 202, after 10 sec.
}).then(function(){
  console.log('immediately after');    // => immediately after
  throw Error('Irror!');
}).then(function(){
  console.log('will not be displayed');
}).catch(x => console.log(x));         // => => Error: Irror!
```
`Promise.resolve` and `Promise.reject` [*example*](http://goo.gl/vr8TN3):
```js
Promise.resolve(42).then(x => console.log(x)); // => 42
Promise.reject(42).catch(x => console.log(x)); // => 42

Promise.resolve($.getJSON('/data.json')); // => ES6 promise
```
`Promise.all` [*example*](http://goo.gl/RdoDBZ):
```js
Promise.all([
  'foo',
  sleepRandom(5),
  sleepRandom(15),
  sleepRandom(10)             // after 15 sec:
]).then(x => console.log(x)); // => ['foo', 956, 85, 382]
```
`Promise.race` [*example*](http://goo.gl/L8ovkJ):
```js
function timeLimit(promise, time){
  return Promise.race([promise, new Promise(function(resolve, reject){
    setTimeout(reject, time * 1e3, Error('Await > ' + time + ' sec'));
  })]);
}

timeLimit(sleepRandom(5), 10).then(x => console.log(x));   // => 853, after 5 sec.
timeLimit(sleepRandom(15), 10).catch(x => console.log(x)); // Error: Await > 10 sec
```
ECMAScript 7 [async functions](https://tc39.github.io/ecmascript-asyncawait) [example](http://goo.gl/wnQS4j):
```js
var delay = time => new Promise(resolve => setTimeout(resolve, time))

async function sleepRandom(time){
  await delay(time * 1e3);
  return 0 | Math.random() * 1e3;
};
async function sleepError(time, msg){
  await delay(time * 1e3);
  throw Error(msg);
};

(async () => {
  try {
    console.log('Run');                // => Run
    console.log(await sleepRandom(5)); // => 936, after 5 sec.
    var [a, b, c] = await Promise.all([
      sleepRandom(5),
      sleepRandom(15),
      sleepRandom(10)
    ]);
    console.log(a, b, c);              // => 210 445 71, after 15 sec.
    await sleepError(5, 'Irror!');
    console.log('Will not be displayed');
  } catch(e){
    console.log(e);                    // => Error: 'Irror!', after 5 sec.
  }
})();
```

##### Unhandled rejection tracking

In Node.js, like in native implementation, available events [`unhandledRejection`](https://nodejs.org/api/process.html#process_event_unhandledrejection) and [`rejectionHandled`](https://nodejs.org/api/process.html#process_event_rejectionhandled):
```js
process.on('unhandledRejection', (reason, promise) => console.log('unhandled', reason, promise));
process.on('rejectionHandled', (promise) => console.log('handled', promise));

var p = Promise.reject(42);
// unhandled 42 [object Promise]

setTimeout(() => p.catch(_ => _), 1e3);
// handled [object Promise]
```
In a browser on rejection, by default, you will see notify in the console, or you can add a custom handler and a handler on handling unhandled, [*example*](http://goo.gl/Wozskl):
```js
window.onunhandledrejection = e => console.log('unhandled', e.reason, e.promise);
window.onrejectionhandled = e => console.log('handled', e.reason, e.promise);

var p = Promise.reject(42);
// unhandled 42 [object Promise]

setTimeout(() => p.catch(_ => _), 1e3);
// handled 42 [object Promise]
```

#### ECMAScript 6: Symbol
Module [`es6.symbol`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.symbol.js).
```js
Symbol(description?)  -> symbol
  .hasInstance        -> @@hasInstance
  .isConcatSpreadable -> @@isConcatSpreadable
  .iterator           -> @@iterator
  .match              -> @@match
  .replace            -> @@replace
  .search             -> @@search
  .species            -> @@species
  .split              -> @@split
  .toPrimitive        -> @@toPrimitive
  .toStringTag        -> @@toStringTag
  .unscopables        -> @@unscopables
  .for(key)           -> symbol
  .keyFor(symbol)     -> key
  .useSimple()        -> void
  .useSetter()        -> void
Object
  .getOwnPropertySymbols(object) -> array
```
Also wrapped some methods for correct work with `Symbol` polyfill.
```js
Object
  .create(proto | null, descriptors?)    -> object
  .defineProperty(target, key, desc)     -> target
  .defineProperties(target, descriptors) -> target
  .getOwnPropertyDescriptor(var, key)    -> desc | undefined
  .getOwnPropertyNames(var)              -> array
  #propertyIsEnumerable(key)             -> bool
JSON
  .stringify(target, replacer?, space?) -> string | undefined
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/symbol
core-js(/library)/fn/symbol
core-js(/library)/fn/symbol/has-instance
core-js(/library)/fn/symbol/is-concat-spreadable
core-js(/library)/fn/symbol/iterator
core-js(/library)/fn/symbol/match
core-js(/library)/fn/symbol/replace
core-js(/library)/fn/symbol/search
core-js(/library)/fn/symbol/species
core-js(/library)/fn/symbol/split
core-js(/library)/fn/symbol/to-primitive
core-js(/library)/fn/symbol/to-string-tag
core-js(/library)/fn/symbol/unscopables
core-js(/library)/fn/symbol/for
core-js(/library)/fn/symbol/key-for
```
[*Basic example*](http://goo.gl/BbvWFc):
```js
var Person = (function(){
  var NAME = Symbol('name');
  function Person(name){
    this[NAME] = name;
  }
  Person.prototype.getName = function(){
    return this[NAME];
  };
  return Person;
})();

var person = new Person('Vasya');
console.log(person.getName());          // => 'Vasya'
console.log(person['name']);            // => undefined
console.log(person[Symbol('name')]);    // => undefined, symbols are uniq
for(var key in person)console.log(key); // => only 'getName', symbols are not enumerable
```
`Symbol.for` & `Symbol.keyFor` [*example*](http://goo.gl/0pdJjX):
```js
var symbol = Symbol.for('key');
symbol === Symbol.for('key'); // true
Symbol.keyFor(symbol);        // 'key'
```
[*Example*](http://goo.gl/mKVOQJ) with methods for getting own object keys:
```js
var O = {a: 1};
Object.defineProperty(O, 'b', {value: 2});
O[Symbol('c')] = 3;
Object.keys(O);                  // => ['a']
Object.getOwnPropertyNames(O);   // => ['a', 'b']
Object.getOwnPropertySymbols(O); // => [Symbol(c)]
Reflect.ownKeys(O);              // => ['a', 'b', Symbol(c)]
```
##### Caveats when using `Symbol` polyfill:

* We can't add new primitive type, `Symbol` returns object.
* `Symbol.for` and `Symbol.keyFor` can't be shimmed cross-realm.
* By default, to hide the keys, `Symbol` polyfill defines setter in `Object.prototype`. For this reason, uncontrolled creation of symbols can cause memory leak and the `in` operator is not working correctly with `Symbol` polyfill: `Symbol() in {} // => true`.

You can disable defining setters in `Object.prototype`. [Example](http://goo.gl/N5UD7J):
```js
Symbol.useSimple();
var s1 = Symbol('s1')
  , o1 = {};
o1[s1] = true;
for(var key in o1)console.log(key); // => 'Symbol(s1)_t.qamkg9f3q', w/o native Symbol

Symbol.useSetter();
var s2 = Symbol('s2')
  , o2 = {};
o2[s2] = true;
for(var key in o2)console.log(key); // nothing
```
* Currently, `core-js` not adds setters to `Object.prototype` for well-known symbols for correct work something like `Symbol.iterator in foo`. It can cause problems with their enumerability.
* Some problems possible with environment exotic objects (for example, IE `localStorage`).

#### ECMAScript 6: Collections
`core-js` uses native collections in most case, just fixes methods / constructor, if it's required, and in old environment uses fast polyfill (O(1) lookup).
#### Map
Module [`es6.map`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.map.js).
```js
new Map(iterable (entries) ?)     -> map
  #clear()                        -> void
  #delete(key)                    -> bool
  #forEach(fn(val, key, @), that) -> void
  #get(key)                       -> val
  #has(key)                       -> bool
  #set(key, val)                  -> @
  #size                           -> uint
  #values()                       -> iterator
  #keys()                         -> iterator
  #entries()                      -> iterator
  #@@iterator()                   -> iterator (entries)
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/map
core-js(/library)/fn/map
```
[*Examples*](http://goo.gl/GWR7NI):
```js
var a = [1];

var map = new Map([['a', 1], [42, 2]]);
map.set(a, 3).set(true, 4);

console.log(map.size);        // => 4
console.log(map.has(a));      // => true
console.log(map.has([1]));    // => false
console.log(map.get(a));      // => 3
map.forEach(function(val, key){
  console.log(val);           // => 1, 2, 3, 4
  console.log(key);           // => 'a', 42, [1], true
});
map.delete(a);
console.log(map.size);        // => 3
console.log(map.get(a));      // => undefined
console.log(Array.from(map)); // => [['a', 1], [42, 2], [true, 4]]

var map = new Map([['a', 1], ['b', 2], ['c', 3]]);

for(var [key, val] of map){
  console.log(key);                           // => 'a', 'b', 'c'
  console.log(val);                           // => 1, 2, 3
}
for(var val of map.values())console.log(val); // => 1, 2, 3
for(var key of map.keys())console.log(key);   // => 'a', 'b', 'c'
for(var [key, val] of map.entries()){
  console.log(key);                           // => 'a', 'b', 'c'
  console.log(val);                           // => 1, 2, 3
}
```
#### Set
Module [`es6.set`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.set.js).
```js
new Set(iterable?)              -> set
  #add(key)                     -> @
  #clear()                      -> void
  #delete(key)                  -> bool
  #forEach(fn(el, el, @), that) -> void
  #has(key)                     -> bool
  #size                         -> uint
  #values()                     -> iterator
  #keys()                       -> iterator
  #entries()                    -> iterator
  #@@iterator()                 -> iterator (values)
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/set
core-js(/library)/fn/set
```
[*Examples*](http://goo.gl/bmhLwg):
```js
var set = new Set(['a', 'b', 'a', 'c']);
set.add('d').add('b').add('e');
console.log(set.size);        // => 5
console.log(set.has('b'));    // => true
set.forEach(function(it){
  console.log(it);            // => 'a', 'b', 'c', 'd', 'e'
});
set.delete('b');
console.log(set.size);        // => 4
console.log(set.has('b'));    // => false
console.log(Array.from(set)); // => ['a', 'c', 'd', 'e']

var set = new Set([1, 2, 3, 2, 1]);

for(var val of set)console.log(val);          // => 1, 2, 3
for(var val of set.values())console.log(val); // => 1, 2, 3
for(var key of set.keys())console.log(key);   // => 1, 2, 3
for(var [key, val] of set.entries()){
  console.log(key);                           // => 1, 2, 3
  console.log(val);                           // => 1, 2, 3
}
```
#### WeakMap
Module [`es6.weak-map`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.weak-map.js).
```js
new WeakMap(iterable (entries) ?) -> weakmap
  #delete(key)                    -> bool
  #get(key)                       -> val
  #has(key)                       -> bool
  #set(key, val)                  -> @
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/weak-map
core-js(/library)/fn/weak-map
```
[*Examples*](http://goo.gl/SILXyw):
```js
var a = [1]
  , b = [2]
  , c = [3];

var wmap = new WeakMap([[a, 1], [b, 2]]);
wmap.set(c, 3).set(b, 4);
console.log(wmap.has(a));   // => true
console.log(wmap.has([1])); // => false
console.log(wmap.get(a));   // => 1
wmap.delete(a);
console.log(wmap.get(a));   // => undefined

// Private properties store:
var Person = (function(){
  var names = new WeakMap;
  function Person(name){
    names.set(this, name);
  }
  Person.prototype.getName = function(){
    return names.get(this);
  };
  return Person;
})();

var person = new Person('Vasya');
console.log(person.getName());          // => 'Vasya'
for(var key in person)console.log(key); // => only 'getName'
```
#### WeakSet
Module [`es6.weak-set`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.weak-set.js).
```js
new WeakSet(iterable?) -> weakset
  #add(key)            -> @
  #delete(key)         -> bool
  #has(key)            -> bool
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/weak-set
core-js(/library)/fn/weak-set
```
[*Examples*](http://goo.gl/TdFbEx):
```js
var a = [1]
  , b = [2]
  , c = [3];

var wset = new WeakSet([a, b, a]);
wset.add(c).add(b).add(c);
console.log(wset.has(b));   // => true
console.log(wset.has([2])); // => false
wset.delete(b);
console.log(wset.has(b));   // => false
```
##### Caveats when using collections polyfill:

* Weak-collections polyfill stores values as hidden properties of keys. It works correct and not leak in most cases. However, it is desirable to store a collection longer than its keys.

#### ECMAScript 6: Typed Arrays
Implementations and fixes `ArrayBuffer`, `DataView`, typed arrays constructors, static and prototype methods. Typed Arrays work only in environments with support descriptors (IE9+), `ArrayBuffer` and `DataView` should work anywhere.

Modules [`es6.typed.array-buffer`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.array-buffer.js), [`es6.typed.data-view`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.data-view.js), [`es6.typed.int8-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.int8-array.js), [`es6.typed.uint8-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.uint8-array.js), [`es6.typed.uint8-clamped-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.uint8-clamped-array.js), [`es6.typed.int16-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.int16-array.js), [`es6.typed.uint16-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.uint16-array.js), [`es6.typed.int32-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.int32-array.js), [`es6.typed.uint32-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.uint32-array.js), [`es6.typed.float32-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.float32-array.js) and [`es6.typed.float64-array`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.typed.float64-array.js).
```js
new ArrayBuffer(length) -> buffer
  .isView(var) -> bool
  #slice(start = 0, end = @length) -> buffer
  #byteLength -> uint

new DataView(buffer, byteOffset = 0, byteLength = buffer.byteLength - byteOffset) -> view
  #getInt8(offset)                          -> int8
  #getUint8(offset)                         -> uint8
  #getInt16(offset, littleEndian = false)   -> int16
  #getUint16(offset, littleEndian = false)  -> uint16
  #getInt32(offset, littleEndian = false)   -> int32
  #getUint32(offset, littleEndian = false)  -> uint32
  #getFloat32(offset, littleEndian = false) -> float32
  #getFloat64(offset, littleEndian = false) -> float64
  #setInt8(offset, value)                          -> void
  #setUint8(offset, value)                         -> void
  #setInt16(offset, value, littleEndian = false)   -> void
  #setUint16(offset, value, littleEndian = false)  -> void
  #setInt32(offset, value, littleEndian = false)   -> void
  #setUint32(offset, value, littleEndian = false)  -> void
  #setFloat32(offset, value, littleEndian = false) -> void
  #setFloat64(offset, value, littleEndian = false) -> void
  #buffer     -> buffer
  #byteLength -> uint
  #byteOffset -> uint

{
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
}
  new %TypedArray%(length)    -> typed
  new %TypedArray%(typed)     -> typed
  new %TypedArray%(arrayLike) -> typed
  new %TypedArray%(iterable)  -> typed
  new %TypedArray%(buffer, byteOffset = 0, length = (buffer.byteLength - byteOffset) / @BYTES_PER_ELEMENT) -> typed
  .BYTES_PER_ELEMENT -> uint
  .from(arrayLike | iterable, mapFn(val, index)?, that) -> typed
  .of(...args) -> typed
  #BYTES_PER_ELEMENT -> uint
  #copyWithin(target = 0, start = 0, end = @length) -> @
  #every(fn(val, index, @), that) -> bool
  #fill(val, start = 0, end = @length) -> @
  #filter(fn(val, index, @), that) -> typed
  #find(fn(val, index, @), that) -> val
  #findIndex(fn(val, index, @), that) -> index
  #forEach(fn(val, index, @), that) -> void
  #indexOf(var, from?) -> int
  #join(string = ',') -> string
  #lastIndexOf(var, from?) -> int
  #map(fn(val, index, @), that) -> typed
  #reduce(fn(memo, val, index, @), memo?) -> var
  #reduceRight(fn(memo, val, index, @), memo?) -> var
  #reverse() -> @
  #set(arrayLike, offset = 0) -> void
  #slice(start = 0, end = @length) -> typed
  #some(fn(val, index, @), that) -> bool
  #sort(fn(a, b)?) -> @
  #subarray(start = 0, end = @length) -> typed
  #toString() -> string
  #toLocaleString() -> string
  #values()     -> iterator
  #keys()       -> iterator
  #entries()    -> iterator
  #@@iterator() -> iterator (values)
  #buffer     -> buffer
  #byteLength -> uint
  #byteOffset -> uint
  #length     -> uint
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/typed
core-js(/library)/fn/typed
core-js(/library)/fn/typed/array-buffer
core-js(/library)/fn/typed/data-view
core-js(/library)/fn/typed/int8-array
core-js(/library)/fn/typed/uint8-array
core-js(/library)/fn/typed/uint8-clamped-array
core-js(/library)/fn/typed/int16-array
core-js(/library)/fn/typed/uint16-array
core-js(/library)/fn/typed/int32-array
core-js(/library)/fn/typed/uint32-array
core-js(/library)/fn/typed/float32-array
core-js(/library)/fn/typed/float64-array
```
[*Examples*](http://goo.gl/yla75z):
```js
new Int32Array(4);                          // => [0, 0, 0, 0]
new Uint8ClampedArray([1, 2, 3, 666]);      // => [1, 2, 3, 255]
new Float32Array(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]

var buffer = new ArrayBuffer(8);
var view   = new DataView(buffer);
view.setFloat64(0, 123.456, true);
new Uint8Array(buffer.slice(4)); // => [47, 221, 94, 64]

Int8Array.of(1, 1.5, 5.7, 745);      // => [1, 1, 5, -23]
Uint8Array.from([1, 1.5, 5.7, 745]); // => [1, 1, 5, 233]

var typed = new Uint8Array([1, 2, 3]);

var a = typed.slice(1);    // => [2, 3]
typed.buffer === a.buffer; // => false
var b = typed.subarray(1); // => [2, 3]
typed.buffer === b.buffer; // => true

typed.filter(it => it % 2); // => [1, 3]
typed.map(it => it * 1.5);  // => [1, 3, 4]

for(var val of typed)console.log(val);          // => 1, 2, 3
for(var val of typed.values())console.log(val); // => 1, 2, 3
for(var key of typed.keys())console.log(key);   // => 0, 1, 2
for(var [key, val] of typed.entries()){
  console.log(key);                             // => 0, 1, 2
  console.log(val);                             // => 1, 2, 3
}
```
##### Caveats when using typed arrays:

* Typed Arrays polyfills works completely how should work by the spec, but because of internal use getter / setters on each instance, is slow and consumes significant memory. However, typed arrays polyfills required mainly for IE9 (and for `Uint8ClampedArray` in IE10 and early IE11), all modern engines have native typed arrays and requires only constructors fixes and methods.
* The current version hasn't special entry points for methods, they can be added only with constructors. It can be added in the future.
* In the `library` version we can't pollute native prototypes, so prototype methods available as constructors static.

#### ECMAScript 6: Reflect
Modules [`es6.reflect.apply`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.apply.js), [`es6.reflect.construct`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.construct.js), [`es6.reflect.define-property`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.define-property.js), [`es6.reflect.delete-property`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.delete-property.js), [`es6.reflect.enumerate`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.enumerate.js), [`es6.reflect.get`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.get.js), [`es6.reflect.get-own-property-descriptor`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.get-own-property-descriptor.js), [`es6.reflect.get-prototype-of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.get-prototype-of.js), [`es6.reflect.has`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.has.js), [`es6.reflect.is-extensible`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.is-extensible.js), [`es6.reflect.own-keys`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.own-keys.js), [`es6.reflect.prevent-extensions`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.prevent-extensions.js), [`es6.reflect.set`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.set.js), [`es6.reflect.set-prototype-of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es6.reflect.set-prototype-of.js).
```js
Reflect
  .apply(target, thisArgument, argumentsList) -> var
  .construct(target, argumentsList, newTarget?) -> object
  .defineProperty(target, propertyKey, attributes) -> bool
  .deleteProperty(target, propertyKey) -> bool
  .enumerate(target) -> iterator (removed from the spec and will be removed from core-js@3)
  .get(target, propertyKey, receiver?) -> var
  .getOwnPropertyDescriptor(target, propertyKey) -> desc
  .getPrototypeOf(target) -> object | null
  .has(target, propertyKey) -> bool
  .isExtensible(target) -> bool
  .ownKeys(target) -> array
  .preventExtensions(target) -> bool
  .set(target, propertyKey, V, receiver?) -> bool
  .setPrototypeOf(target, proto) -> bool (required __proto__ - IE11+)
```
[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es6/reflect
core-js(/library)/fn/reflect
core-js(/library)/fn/reflect/apply
core-js(/library)/fn/reflect/construct
core-js(/library)/fn/reflect/define-property
core-js(/library)/fn/reflect/delete-property
core-js(/library)/fn/reflect/enumerate (deprecated and will be removed from the next major release)
core-js(/library)/fn/reflect/get
core-js(/library)/fn/reflect/get-own-property-descriptor
core-js(/library)/fn/reflect/get-prototype-of
core-js(/library)/fn/reflect/has
core-js(/library)/fn/reflect/is-extensible
core-js(/library)/fn/reflect/own-keys
core-js(/library)/fn/reflect/prevent-extensions
core-js(/library)/fn/reflect/set
core-js(/library)/fn/reflect/set-prototype-of
```
[*Examples*](http://goo.gl/gVT0cH):
```js
var O = {a: 1};
Object.defineProperty(O, 'b', {value: 2});
O[Symbol('c')] = 3;
Reflect.ownKeys(O); // => ['a', 'b', Symbol(c)]

function C(a, b){
  this.c = a + b;
}

var instance = Reflect.construct(C, [20, 22]);
instance.c; // => 42
```

### ECMAScript 7+ proposals
[The TC39 process.](https://tc39.github.io/process-document/)

[*CommonJS entry points:*](#commonjs)
```
core-js(/library)/es7
core-js(/library)/es7/array
core-js(/library)/es7/global
core-js(/library)/es7/string
core-js(/library)/es7/map
core-js(/library)/es7/set
core-js(/library)/es7/error
core-js(/library)/es7/math
core-js(/library)/es7/system
core-js(/library)/es7/symbol
core-js(/library)/es7/reflect
core-js(/library)/es7/observable
```
`core-js/stage/4` entry point contains only stage 4 proposals, `core-js/stage/3` - stage 3 and stage 4, etc.
#### Stage 4 proposals

[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/stage/4
```
* `{Array, %TypedArray%}#includes` [proposal](https://github.com/tc39/Array.prototype.includes) - module [`es7.array.includes`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.array.includes.js), `%TypedArray%` version in modules from [this section](#ecmascript-6-typed-arrays).
```js
Array
  #includes(var, from?) -> bool
{
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
}
  #includes(var, from?) -> bool
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/array/includes
```
[*Examples*](http://goo.gl/2Gq4ma):
```js
[1, 2, 3].includes(2);        // => true
[1, 2, 3].includes(4);        // => false
[1, 2, 3].includes(2, 2);     // => false

[NaN].indexOf(NaN);           // => -1
[NaN].includes(NaN);          // => true
Array(1).indexOf(undefined);  // => -1
Array(1).includes(undefined); // => true
```
* `Object.values`, `Object.entries` [proposal](https://github.com/tc39/proposal-object-values-entries) - modules [`es7.object.values`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.values.js), [`es7.object.entries`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.entries.js)
```js
Object
  .values(object) -> array
  .entries(object) -> array
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/object/values
core-js(/library)/fn/object/entries
```
[*Examples*](http://goo.gl/6kuGOn):
```js
Object.values({a: 1, b: 2, c: 3});  // => [1, 2, 3]
Object.entries({a: 1, b: 2, c: 3}); // => [['a', 1], ['b', 2], ['c', 3]]

for(let [key, value] of Object.entries({a: 1, b: 2, c: 3})){
  console.log(key);   // => 'a', 'b', 'c'
  console.log(value); // => 1, 2, 3
}
```
* `Object.getOwnPropertyDescriptors` [proposal](https://github.com/tc39/proposal-object-getownpropertydescriptors) - module [`es7.object.get-own-property-descriptors`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.get-own-property-descriptors.js)
```js
Object
  .getOwnPropertyDescriptors(object) -> object
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/object/get-own-property-descriptors
```
*Examples*:
```js
// Shallow object cloning with prototype and descriptors:
var copy = Object.create(Object.getPrototypeOf(O), Object.getOwnPropertyDescriptors(O));
// Mixin:
Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
```
* `String#padStart`, `String#padEnd` [proposal](https://github.com/tc39/proposal-string-pad-start-end) - modules [`es7.string.pad-start`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.string.pad-start.js), [`es7.string.pad-end`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.string.pad-end.js)
```js
String
  #padStart(length, fillStr = ' ') -> string
  #padEnd(length, fillStr = ' ') -> string
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/string/pad-start
core-js(/library)/fn/string/pad-end
core-js(/library)/fn/string/virtual/pad-start
core-js(/library)/fn/string/virtual/pad-end
```
[*Examples*](http://goo.gl/hK5ccv):
```js
'hello'.padStart(10);         // => '     hello'
'hello'.padStart(10, '1234'); // => '12341hello'
'hello'.padEnd(10);           // => 'hello     '
'hello'.padEnd(10, '1234');   // => 'hello12341'
```
* `Object#__(define|lookup)[GS]etter__`, [annex B ES2017](https://github.com/tc39/ecma262/pull/381), but we haven't special namespace for that - modules [`es7.object.define-setter`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.define-setter.js), [`es7.object.define-getter`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.define-getter.js), [`es7.object.lookup-setter`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.lookup-setter.js) and [`es7.object.lookup-getter`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.object.lookup-getter.js).
```js
Object
  #__defineSetter__(key, fn) -> void
  #__defineGetter__(key, fn) -> void
  #__lookupSetter__(key) -> fn | void
  #__lookupGetter__(key) -> fn | void
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/object/define-getter
core-js(/library)/fn/object/define-setter
core-js(/library)/fn/object/lookup-getter
core-js(/library)/fn/object/lookup-setter
```

#### Stage 3 proposals
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/stage/3
```
* `global` [proposal](https://github.com/tc39/proposal-global) - modules [`es7.global`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.global.js) and [`es7.system.global`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.system.global.js) (obsolete)
```js
global -> object
System
  .global -> object (obsolete)
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/global
core-js(/library)/fn/system/global (obsolete)
```
[*Examples*](http://goo.gl/gEqMl7):
```js
global.Array === Array; // => true
```
* `Promise#finally` [proposal](https://github.com/tc39/proposal-promise-finally) - module [`es7.promise.finally`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.promise.finally.js)
```js
Promise
  #finally(onFinally()) -> promise
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/promise/finally
```
[*Examples*](https://goo.gl/AhyBbJ):
```js
Promise.resolve(42).finally(() => console.log('You will see it anyway'));

Promise.reject(42).finally(() => console.log('You will see it anyway'));

#### Stage 2 proposals
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/stage/2
```
* `String#trimLeft`, `String#trimRight` / `String#trimStart`, `String#trimEnd` [proposal](https://github.com/sebmarkbage/ecmascript-string-left-right-trim) - modules [`es7.string.trim-left`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.string.trim-right.js), [`es7.string.trim-right`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.string.trim-right.js)
```js
String
  #trimLeft()  -> string
  #trimRight() -> string
  #trimStart() -> string
  #trimEnd()   -> string
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/string/trim-start
core-js(/library)/fn/string/trim-end
core-js(/library)/fn/string/trim-left
core-js(/library)/fn/string/trim-right
core-js(/library)/fn/string/virtual/trim-start
core-js(/library)/fn/string/virtual/trim-end
core-js(/library)/fn/string/virtual/trim-left
core-js(/library)/fn/string/virtual/trim-right
```
[*Examples*](http://goo.gl/Er5lMJ):
```js
'   hello   '.trimLeft();  // => 'hello   '
'   hello   '.trimRight(); // => '   hello'
```
```
* `Symbol.asyncIterator` for [async iteration proposal](https://github.com/tc39/proposal-async-iteration) - module [`es7.symbol.async-iterator`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.symbol.async-iterator.js)
```js
Symbol
  .asyncIterator -> @@asyncIterator
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/symbol/async-iterator
```

#### Stage 1 proposals
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/stage/1
```
* `Promise.try` [proposal](https://github.com/tc39/proposal-promise-try) - module [`es7.promise.try`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.promise.try.js)
```js
Promise
  .try(function()) -> promise
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/promise/try
```
[*Examples*](https://goo.gl/k5GGRo):
```js
Promise.try(() => 42).then(it => console.log(`Promise, resolved as ${it}`));

Promise.try(() => { throw 42; }).catch(it => console.log(`Promise, rejected as ${it}`));
```
* `Array#flatten` and `Array#flatMap` [proposal](https://tc39.github.io/proposal-flatMap) - modules [`es7.array.flatten`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.array.flatten.js) and [`es7.array.flat-map`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.array.flat-map.js)
```js
Array
  #flatten(depthArg = 1) -> array
  #flatMap(fn(val, key, @), that) -> array
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/array/flatten
core-js(/library)/fn/array/flat-map
core-js(/library)/fn/array/virtual/flatten
core-js(/library)/fn/array/virtual/flat-map
```
[*Examples*](https://goo.gl/jTXsZi):
```js
[1, [2, 3], [4, 5]].flatten();    // => [1, 2, 3, 4, 5]
[1, [2, [3, [4]]], 5].flatten();  // => [1, 2, [3, [4]], 5]
[1, [2, [3, [4]]], 5].flatten(3); // => [1, 2, 3, 4, 5]

[{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}].flatMap(it => [it.a, it.b]); // => [1, 2, 3, 4, 5, 6]
```
* `.of` and `.from` methods on collection constructors [proposal](https://github.com/tc39/proposal-setmap-offrom) - modules [`es7.set.of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.set.of.js), [`es7.set.from`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.set.from.js), [`es7.map.of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.map.of.js), [`es7.map.from`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.map.from.js), [`es7.weak-set.of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.weak-set.of.js), [`es7.weak-set.from`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.weak-set.from.js), [`es7.weak-map.of`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.weak-map.of.js), [`es7.weak-map.from`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.weak-map.from.js)
```js
Set
  .of(...args) -> set
  .from(iterable, mapFn(val, index)?, that?) -> set
Map
  .of(...args) -> map
  .from(iterable, mapFn(val, index)?, that?) -> map
WeakSet
  .of(...args) -> weakset
  .from(iterable, mapFn(val, index)?, that?) -> weakset
WeakMap
  .of(...args) -> weakmap
  .from(iterable, mapFn(val, index)?, that?) -> weakmap
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/set/of
core-js(/library)/fn/set/from
core-js(/library)/fn/map/of
core-js(/library)/fn/map/from
core-js(/library)/fn/weak-set/of
core-js(/library)/fn/weak-set/from
core-js(/library)/fn/weak-map/of
core-js(/library)/fn/weak-map/from
```
[*Examples*](https://goo.gl/mSC7eU):
```js
Set.of(1, 2, 3, 2, 1); // => Set {1, 2, 3}

Map.from([[1, 2], [3, 4]], ([key, val]) => [key ** 2, val ** 2]); // => Map {1: 4, 9: 16}
```
* `String#matchAll` [proposal](https://github.com/tc39/String.prototype.matchAll) - module [`es7.string.match-all`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.string.match-all.js)
```js
String
  #matchAll(regexp) -> iterator
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/string/match-all
core-js(/library)/fn/string/virtual/match-all
```
[*Examples*](http://goo.gl/6kp9EB):
```js
for(let [_, d, D] of '1111a2b3cccc'.matchAll(/(\d)(\D)/)){
  console.log(d, D); // => 1 a, 2 b, 3 c
}
```
* `Observable` [proposal](https://github.com/zenparsing/es-observable) - modules [`es7.observable`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.observable.js) and [`es7.symbol.observable`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.symbol.observable.js)
```js
new Observable(fn)             -> observable
  #subscribe(observer)         -> subscription
  #forEach(fn)                 -> promise
  #@@observable()              -> @
  .of(...items)                -> observable
  .from(observable | iterable) -> observable
  .@@species                   -> @
Symbol
  .observable                  -> @@observable
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/observable
core-js(/library)/fn/symbol/observable
```
[*Examples*](http://goo.gl/1LDywi):
```js
new Observable(observer => {
  observer.next('hello');
  observer.next('world');
  observer.complete();
}).forEach(it => console.log(it))
  .then(_ => console.log('!'));
```
* `Math.{clamp, DEG_PER_RAD, degrees, fscale, rad-per-deg, radians, scale}` 
  [proposal](https://github.com/rwaldron/proposal-math-extensions) - modules 
  [`es7.math.clamp`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.clamp.js), 
  [`es7.math.DEG_PER_RAD`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.DEG_PER_RAD.js), 
  [`es7.math.degrees`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.degrees.js),
  [`es7.math.fscale`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.fscale.js), 
  [`es7.math.RAD_PER_DEG`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.RAD_PER_DEG.js), 
  [`es7.math.radians`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.radians.js) and
  [`es7.math.scale`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.scale.js)
```js
Math
  .DEG_PER_RAD -> number
  .RAD_PER_DEG -> number
  .clamp(x, lower, upper) -> number
  .degrees(radians) -> number
  .fscale(x, inLow, inHigh, outLow, outHigh) -> number
  .radians(degrees) -> number
  .scale(x, inLow, inHigh, outLow, outHigh) -> number
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/math/clamp
core-js(/library)/fn/math/deg-per-rad
core-js(/library)/fn/math/degrees
core-js(/library)/fn/math/fscale
core-js(/library)/fn/math/rad-per-deg
core-js(/library)/fn/math/radians
core-js(/library)/fn/math/scale
```
* `Math.signbit` [proposal](http://jfbastien.github.io/papers/Math.signbit.html) - module [`es7.math.signbit`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.signbit.js)
```js
Math
  .signbit(x) -> bool
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/math/signbit
```
[*Examples*](http://es6.zloirock.ru/):
```js
Math.signbit(NaN); // => NaN
Math.signbit(1);   // => true
Math.signbit(-1);  // => false
Math.signbit(0);   // => true
Math.signbit(-0);  // => false
```

#### Stage 0 proposals
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/stage/0
```
* `String#at` [proposal](https://github.com/mathiasbynens/String.prototype.at) - module [`es7.string.at`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.string.at.js)
```js
String
  #at(index) -> string
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/string/at
core-js(/library)/fn/string/virtual/at
```
[*Examples*](http://goo.gl/XluXI8):
```js
'a𠮷b'.at(1);        // => '𠮷'
'a𠮷b'.at(1).length; // => 2
```
* `Map#toJSON`, `Set#toJSON` [proposal](https://github.com/DavidBruant/Map-Set.prototype.toJSON) - modules [`es7.map.to-json`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.map.to-json.js), [`es7.set.to-json`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.set.to-json.js) (rejected and will be removed from `core-js@3`)
```js
Map
  #toJSON() -> array (rejected and will be removed from core-js@3)
Set
  #toJSON() -> array (rejected and will be removed from core-js@3)
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/map
core-js(/library)/fn/set
```
* `Error.isError` [proposal](https://github.com/ljharb/proposal-is-error) - module [`es7.error.is-error`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.error.is-error.js) (withdrawn and will be removed from `core-js@3`)
```js
Error
  .isError(it) -> bool (withdrawn and will be removed from core-js@3)
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/error/is-error
```
* `Math.{iaddh, isubh, imulh, umulh}` [proposal](https://gist.github.com/BrendanEich/4294d5c212a6d2254703) - modules [`es7.math.iaddh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.iaddh.js), [`es7.math.isubh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.isubh.js), [`es7.math.imulh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.imulh.js) and [`es7.math.umulh`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.math.umulh.js)
```js
Math
  .iaddh(lo0, hi0, lo1, hi1) -> int32
  .isubh(lo0, hi0, lo1, hi1) -> int32
  .imulh(a, b) -> int32
  .umulh(a, b) -> uint32
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/math/iaddh
core-js(/library)/fn/math/isubh
core-js(/library)/fn/math/imulh
core-js(/library)/fn/math/umulh
```
* `global.asap`, [TC39 discussion](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask), module [`es7.asap`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.asap.js)
```js
asap(fn) -> void
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/asap
```
[*Examples*](http://goo.gl/tx3SRK):
```js
asap(() => console.log('called as microtask'));
```

#### Pre-stage 0 proposals
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/stage/pre
```
* `Reflect` metadata [proposal](https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md) - modules [`es7.reflect.define-metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.define-metadata.js), [`es7.reflect.delete-metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.delete-metadata.js), [`es7.reflect.get-metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.get-metadata.js), [`es7.reflect.get-metadata-keys`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.get-metadata-keys.js), [`es7.reflect.get-own-metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.get-own-metadata.js), [`es7.reflect.get-own-metadata-keys`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.get-own-metadata-keys.js), [`es7.reflect.has-metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.has-metadata.js), [`es7.reflect.has-own-metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.has-own-metadata.js) and [`es7.reflect.metadata`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/es7.reflect.metadata.js).
```js
Reflect
  .defineMetadata(metadataKey, metadataValue, target, propertyKey?) -> void
  .getMetadata(metadataKey, target, propertyKey?) -> var
  .getOwnMetadata(metadataKey, target, propertyKey?) -> var
  .hasMetadata(metadataKey, target, propertyKey?) -> bool
  .hasOwnMetadata(metadataKey, target, propertyKey?) -> bool
  .deleteMetadata(metadataKey, target, propertyKey?) -> bool
  .getMetadataKeys(target, propertyKey?) -> array
  .getOwnMetadataKeys(target, propertyKey?) -> array
  .metadata(metadataKey, metadataValue) -> decorator(target, targetKey?) -> void
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/reflect/define-metadata
core-js(/library)/fn/reflect/delete-metadata
core-js(/library)/fn/reflect/get-metadata
core-js(/library)/fn/reflect/get-metadata-keys
core-js(/library)/fn/reflect/get-own-metadata
core-js(/library)/fn/reflect/get-own-metadata-keys
core-js(/library)/fn/reflect/has-metadata
core-js(/library)/fn/reflect/has-own-metadata
core-js(/library)/fn/reflect/metadata
```
[*Examples*](http://goo.gl/KCo3PS):
```js
var O = {};
Reflect.defineMetadata('foo', 'bar', O);
Reflect.ownKeys(O);               // => []
Reflect.getOwnMetadataKeys(O);    // => ['foo']
Reflect.getOwnMetadata('foo', O); // => 'bar'
```

### Web standards
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/web
```
#### setTimeout / setInterval
Module [`web.timers`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/web.timers.js). Additional arguments fix for IE9-.
```js
setTimeout(fn(...args), time, ...args) -> id
setInterval(fn(...args), time, ...args) -> id
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/web/timers
core-js(/library)/fn/set-timeout
core-js(/library)/fn/set-interval
```
```js
// Before:
setTimeout(log.bind(null, 42), 1000);
// After:
setTimeout(log, 1000, 42);
```
#### setImmediate
Module [`web.immediate`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/web.immediate.js). [`setImmediate` proposal](https://developer.mozilla.org/en-US/docs/Web/API/Window.setImmediate) polyfill.
```js
setImmediate(fn(...args), ...args) -> id
clearImmediate(id) -> void
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/web/immediate
core-js(/library)/fn/set-immediate
core-js(/library)/fn/clear-immediate
```
[*Examples*](http://goo.gl/6nXGrx):
```js
setImmediate(function(arg1, arg2){
  console.log(arg1, arg2); // => Message will be displayed with minimum delay
}, 'Message will be displayed', 'with minimum delay');

clearImmediate(setImmediate(function(){
  console.log('Message will not be displayed');
}));
```
#### Iterable DOM collections
Some DOM collections should have [iterable interface](https://heycam.github.io/webidl/#idl-iterable) or should be [inherited from `Array`](https://heycam.github.io/webidl/#LegacyArrayClass). That mean they should have `keys`, `values`, `entries` and `@@iterator` methods for iteration. So add them. Module [`web.dom.iterable`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/web.dom.iterable.js):
```js
{
  CSSRuleList,
  CSSStyleDeclaration,
  CSSValueList,
  ClientRectList,
  DOMRectList,
  DOMStringList,
  DOMTokenList,
  DataTransferItemList,
  FileList,
  HTMLAllCollection,
  HTMLCollection,
  HTMLFormElement,
  HTMLSelectElement,
  MediaList,
  MimeTypeArray,
  NamedNodeMap,
  NodeList,
  PaintRequestList,
  Plugin,
  PluginArray,
  SVGLengthList,
  SVGNumberList,
  SVGPathSegList,
  SVGPointList,
  SVGStringList,
  SVGTransformList,
  SourceBufferList,
  StyleSheetList,
  TextTrackCueList,
  TextTrackList,
  TouchList
}
  #@@iterator() -> iterator (values)

{
  DOMTokenList,
  NodeList
}
  #values()  -> iterator
  #keys()    -> iterator
  #entries() -> iterator
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/web/dom-collections
core-js(/library)/fn/dom-collections/iterator
```
[*Examples*](http://goo.gl/lfXVFl):
```js
for(var {id} of document.querySelectorAll('*')){
  if(id)console.log(id);
}

for(var [index, {id}] of document.querySelectorAll('*').entries()){
  if(id)console.log(index, id);
}
```
### Non-standard
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/core
```
#### Object
Modules [`core.object.is-object`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.object.is-object.js), [`core.object.classof`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.object.classof.js), [`core.object.define`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.object.define.js), [`core.object.make`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.object.make.js).
```js
Object
  .isObject(var) -> bool
  .classof(var) -> string
  .define(target, mixin) -> target
  .make(proto | null, mixin?) -> object
```

[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/core/object
core-js(/library)/fn/object/is-object
core-js(/library)/fn/object/define
core-js(/library)/fn/object/make
```
Object classify [*examples*](http://goo.gl/YZQmGo):
```js
Object.isObject({});    // => true
Object.isObject(isNaN); // => true
Object.isObject(null);  // => false

var classof = Object.classof;

classof(null);                 // => 'Null'
classof(undefined);            // => 'Undefined'
classof(1);                    // => 'Number'
classof(true);                 // => 'Boolean'
classof('string');             // => 'String'
classof(Symbol());             // => 'Symbol'

classof(new Number(1));        // => 'Number'
classof(new Boolean(true));    // => 'Boolean'
classof(new String('string')); // => 'String'

var fn   = function(){}
  , list = (function(){return arguments})(1, 2, 3);

classof({});                   // => 'Object'
classof(fn);                   // => 'Function'
classof([]);                   // => 'Array'
classof(list);                 // => 'Arguments'
classof(/./);                  // => 'RegExp'
classof(new TypeError);        // => 'Error'

classof(new Set);              // => 'Set'
classof(new Map);              // => 'Map'
classof(new WeakSet);          // => 'WeakSet'
classof(new WeakMap);          // => 'WeakMap'
classof(new Promise(fn));      // => 'Promise'

classof([].values());          // => 'Array Iterator'
classof(new Set().values());   // => 'Set Iterator'
classof(new Map().values());   // => 'Map Iterator'

classof(Math);                 // => 'Math'
classof(JSON);                 // => 'JSON'

function Example(){}
Example.prototype[Symbol.toStringTag] = 'Example';

classof(new Example);          // => 'Example'
```
`Object.define` and `Object.make` [*examples*](http://goo.gl/rtpD5Z):
```js
// Before:
Object.defineProperty(target, 'c', {
  enumerable: true,
  configurable: true,
  get: function(){
    return this.a + this.b;
  }
});

// After:
Object.define(target, {
  get c(){
    return this.a + this.b;
  }
});

// Shallow object cloning with prototype and descriptors:
var copy = Object.make(Object.getPrototypeOf(src), src);

// Simple inheritance:
function Vector2D(x, y){
  this.x = x;
  this.y = y;
}
Object.define(Vector2D.prototype, {
  get xy(){
    return Math.hypot(this.x, this.y);
  }
});
function Vector3D(x, y, z){
  Vector2D.apply(this, arguments);
  this.z = z;
}
Vector3D.prototype = Object.make(Vector2D.prototype, {
  constructor: Vector3D,
  get xyz(){
    return Math.hypot(this.x, this.y, this.z);
  }
});

var vector = new Vector3D(9, 12, 20);
console.log(vector.xy);  // => 15
console.log(vector.xyz); // => 25
vector.y++;
console.log(vector.xy);  // => 15.811388300841896
console.log(vector.xyz); // => 25.495097567963924
```
#### Dict
Module [`core.dict`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.dict.js). Based on [TC39 discuss](https://github.com/rwaldron/tc39-notes/blob/master/es6/2012-11/nov-29.md#collection-apis-review) / [strawman](http://wiki.ecmascript.org/doku.php?id=harmony:modules_standard#dictionaries).
```js
[new] Dict(iterable (entries) | object ?) -> dict
  .isDict(var) -> bool
  .values(object) -> iterator
  .keys(object) -> iterator
  .entries(object) -> iterator (entries)
  .has(object, key) -> bool
  .get(object, key) -> val
  .set(object, key, value) -> object
  .forEach(object, fn(val, key, @), that) -> void
  .map(object, fn(val, key, @), that) -> new @
  .mapPairs(object, fn(val, key, @), that) -> new @
  .filter(object, fn(val, key, @), that) -> new @
  .some(object, fn(val, key, @), that) -> bool
  .every(object, fn(val, key, @), that) -> bool
  .find(object, fn(val, key, @), that) -> val
  .findKey(object, fn(val, key, @), that) -> key
  .keyOf(object, var) -> key
  .includes(object, var) -> bool
  .reduce(object, fn(memo, val, key, @), memo?) -> var
```

[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/core/dict
core-js(/library)/fn/dict
```
`Dict` create object without prototype from iterable or simple object.

[*Examples*](http://goo.gl/pnp8Vr):
```js
var map = new Map([['a', 1], ['b', 2], ['c', 3]]);

Dict();                    // => {__proto__: null}
Dict({a: 1, b: 2, c: 3});  // => {__proto__: null, a: 1, b: 2, c: 3}
Dict(map);                 // => {__proto__: null, a: 1, b: 2, c: 3}
Dict([1, 2, 3].entries()); // => {__proto__: null, 0: 1, 1: 2, 2: 3}

var dict = Dict({a: 42});
dict instanceof Object;   // => false
dict.a;                   // => 42
dict.toString;            // => undefined
'a' in dict;              // => true
'hasOwnProperty' in dict; // => false

Dict.isDict({});     // => false
Dict.isDict(Dict()); // => true
```
`Dict.keys`, `Dict.values` and `Dict.entries` returns iterators for objects.

[*Examples*](http://goo.gl/xAvECH):
```js
var dict = {a: 1, b: 2, c: 3};

for(var key of Dict.keys(dict))console.log(key); // => 'a', 'b', 'c'

for(var val of Dict.values(dict))console.log(val); // => 1, 2, 3

for(var [key, val] of Dict.entries(dict)){
  console.log(key); // => 'a', 'b', 'c'
  console.log(val); // => 1, 2, 3
}

new Map(Dict.entries(dict)); // => Map {a: 1, b: 2, c: 3}
```
Basic dict operations for objects with prototype [*examples*](http://goo.gl/B28UnG):
```js
'q' in {q: 1};            // => true
'toString' in {};         // => true

Dict.has({q: 1}, 'q');    // => true
Dict.has({}, 'toString'); // => false

({q: 1})['q'];            // => 1
({}).toString;            // => function toString(){ [native code] }

Dict.get({q: 1}, 'q');    // => 1
Dict.get({}, 'toString'); // => undefined

var O = {};
O['q'] = 1;
O['q'];         // => 1
O['__proto__'] = {w: 2};
O['__proto__']; // => {w: 2}
O['w'];         // => 2

var O = {};
Dict.set(O, 'q', 1);
O['q'];         // => 1
Dict.set(O, '__proto__', {w: 2});
O['__proto__']; // => {w: 2}
O['w'];         // => undefined
```
Other methods of `Dict` module are static equivalents of `Array.prototype` methods for dictionaries.

[*Examples*](http://goo.gl/xFi1RH):
```js
var dict = {a: 1, b: 2, c: 3};

Dict.forEach(dict, console.log, console);
// => 1, 'a', {a: 1, b: 2, c: 3}
// => 2, 'b', {a: 1, b: 2, c: 3}
// => 3, 'c', {a: 1, b: 2, c: 3}

Dict.map(dict, function(it){
  return it * it;
}); // => {a: 1, b: 4, c: 9}

Dict.mapPairs(dict, function(val, key){
  if(key != 'b')return [key + key, val * val];
}); // => {aa: 1, cc: 9}

Dict.filter(dict, function(it){
  return it % 2;
}); // => {a: 1, c: 3}

Dict.some(dict, function(it){
  return it === 2;
}); // => true

Dict.every(dict, function(it){
  return it === 2;
}); // => false

Dict.find(dict, function(it){
  return it > 2;
}); // => 3
Dict.find(dict, function(it){
  return it > 4;
}); // => undefined

Dict.findKey(dict, function(it){
  return it > 2;
}); // => 'c'
Dict.findKey(dict, function(it){
  return it > 4;
}); // => undefined

Dict.keyOf(dict, 2);    // => 'b'
Dict.keyOf(dict, 4);    // => undefined

Dict.includes(dict, 2); // => true
Dict.includes(dict, 4); // => false

Dict.reduce(dict, function(memo, it){
  return memo + it;
});     // => 6
Dict.reduce(dict, function(memo, it){
  return memo + it;
}, ''); // => '123'
```
#### Partial application
Module [`core.function.part`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.function.part.js).
```js
Function
  #part(...args | _) -> fn(...args)
```

[*CommonJS entry points:*](#commonjs)
```js
core-js/core/function
core-js(/library)/fn/function/part
core-js(/library)/fn/function/virtual/part
core-js(/library)/fn/_
```
`Function#part` partial apply function without `this` binding. Uses global variable `_` (`core._` for builds without global namespace pollution) as placeholder and not conflict with `Underscore` / `LoDash`.

[*Examples*](http://goo.gl/p9ZJ8K):
```js
var fn1 = log.part(1, 2);
fn1(3, 4);    // => 1, 2, 3, 4

var fn2 = log.part(_, 2, _, 4);
fn2(1, 3);    // => 1, 2, 3, 4

var fn3 = log.part(1, _, _, 4);
fn3(2, 3);    // => 1, 2, 3, 4

fn2(1, 3, 5); // => 1, 2, 3, 4, 5
fn2(1);       // => 1, 2, undefined, 4
```
#### Number Iterator
Module [`core.number.iterator`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.number.iterator.js).
```js
Number
  #@@iterator() -> iterator
```

[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/core/number
core-js(/library)/fn/number/iterator
core-js(/library)/fn/number/virtual/iterator
```
[*Examples*](http://goo.gl/o45pCN):
```js
for(var i of 3)console.log(i); // => 0, 1, 2

[...10]; // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.from(10, Math.random); // => [0.9817775336559862, 0.02720663254149258, ...]

Array.from(10, function(it){
  return this + it * it;
}, .42); // => [0.42, 1.42, 4.42, 9.42, 16.42, 25.42, 36.42, 49.42, 64.42, 81.42]
```
#### Escaping strings
Modules [`core.regexp.escape`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.regexp.escape.js), [`core.string.escape-html`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.string.escape-html.js) and [`core.string.unescape-html`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.string.unescape-html.js).
```js
RegExp
  .escape(str) -> str
String
  #escapeHTML() -> str
  #unescapeHTML() -> str
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/core/regexp
core-js(/library)/core/string
core-js(/library)/fn/regexp/escape
core-js(/library)/fn/string/escape-html
core-js(/library)/fn/string/unescape-html
core-js(/library)/fn/string/virtual/escape-html
core-js(/library)/fn/string/virtual/unescape-html
```
[*Examples*](http://goo.gl/6bOvsQ):
```js
RegExp.escape('Hello, []{}()*+?.\\^$|!'); // => 'Hello, \[\]\{\}\(\)\*\+\?\.\\\^\$\|!'

'<script>doSomething();</script>'.escapeHTML(); // => '&lt;script&gt;doSomething();&lt;/script&gt;'
'&lt;script&gt;doSomething();&lt;/script&gt;'.unescapeHTML(); // => '<script>doSomething();</script>'
```
#### delay
Module [`core.delay`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.delay.js). [Promise](#ecmascript-6-promise)-returning delay function, [esdiscuss](https://esdiscuss.org/topic/promise-returning-delay-function).
```js
delay(ms) -> promise
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/core/delay
core-js(/library)/fn/delay
```
[*Examples*](http://goo.gl/lbucba):
```js
delay(1e3).then(() => console.log('after 1 sec'));

(async () => {
  await delay(3e3);
  console.log('after 3 sec');

  while(await delay(3e3))console.log('each 3 sec');
})();
```
#### Helpers for iterators
Modules [`core.is-iterable`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.is-iterable.js), [`core.get-iterator`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.get-iterator.js), [`core.get-iterator-method`](https://github.com/zloirock/core-js/blob/v2.5.7/modules/core.get-iterator-method.js) - helpers for check iterability / get iterator in the `library` version or, for example, for `arguments` object:
```js
core
  .isIterable(var) -> bool
  .getIterator(iterable) -> iterator
  .getIteratorMethod(var) -> function | undefined
```
[*CommonJS entry points:*](#commonjs)
```js
core-js(/library)/fn/is-iterable
core-js(/library)/fn/get-iterator
core-js(/library)/fn/get-iterator-method
```
[*Examples*](http://goo.gl/SXsM6D):
```js
var list = (function(){
  return arguments;
})(1, 2, 3);

console.log(core.isIterable(list)); // true;

var iter = core.getIterator(list);
console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
console.log(iter.next().value); // 3
console.log(iter.next().value); // undefined

core.getIterator({});   // TypeError: [object Object] is not iterable!

var iterFn = core.getIteratorMethod(list);
console.log(typeof iterFn);     // 'function'
var iter = iterFn.call(list);
console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
console.log(iter.next().value); // 3
console.log(iter.next().value); // undefined

console.log(core.getIteratorMethod({})); // undefined
```

## Missing polyfills
- ES5 `JSON` is missing now only in IE7- and never will it be added to `core-js`, if you need it in these old browsers, many implementations are available, for example, [json3](https://github.com/bestiejs/json3).
- ES6 `String#normalize` is not a very useful feature, but this polyfill will be very large. If you need it, you can use [unorm](https://github.com/walling/unorm/).
- ES6 `Proxy` can't be polyfilled, but for Node.js / Chromium with additional flags you can try [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) for adapt old style `Proxy` API to final ES6 version.
- ES6 logic for `@@isConcatSpreadable` and `@@species` (in most places) can be polyfilled without problems, but it will cause a serious slowdown in popular cases in some engines. It will be polyfilled when it will be implemented in modern engines.
- ES7 `SIMD`. `core-js` doesn't add polyfill of this feature because of large size and some other reasons. You can use [this polyfill](https://github.com/tc39/ecmascript_simd/blob/master/src/ecmascript_simd.js).
- `window.fetch` is not a cross-platform feature, in some environments it makes no sense. For this reason, I don't think it should be in `core-js`. Looking at a large number of requests it *may be*  added in the future. Now you can use, for example, [this polyfill](https://github.com/github/fetch).
- ECMA-402 `Intl` is missed because of size. You can use [this polyfill](https://github.com/andyearnshaw/Intl.js/).
