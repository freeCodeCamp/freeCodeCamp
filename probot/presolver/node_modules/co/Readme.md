# co

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

  Generator based control flow goodness for nodejs and the browser,
  using promises, letting you write non-blocking code in a nice-ish way.

## Co v4

  `co@4.0.0` has been released, which now relies on promises.
  It is a stepping stone towards [ES7 async/await](https://github.com/lukehoban/ecmascript-asyncawait).
  The primary API change is how `co()` is invoked.
  Before, `co` returned a "thunk", which you then called with a callback and optional arguments.
  Now, `co()` returns a promise.

```js
co(function* () {
  var result = yield Promise.resolve(true);
  return result;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.error(err.stack);
});
```

  If you want to convert a `co`-generator-function into a regular function that returns a promise,
  you now use `co.wrap(fn*)`.

```js
var fn = co.wrap(function* (val) {
  return yield Promise.resolve(val);
});

fn(true).then(function (val) {

});
```

## Platform Compatibility

  `co@4+` requires a `Promise` implementation.
  For versions of node `< 0.11` and for many older browsers,
  you should/must include your own `Promise` polyfill.

  When using node 0.11.x or greater, you must use the `--harmony-generators`
  flag or just `--harmony` to get access to generators.

  When using node 0.10.x and lower or browsers without generator support,
  you must use [gnode](https://github.com/TooTallNate/gnode) and/or [regenerator](http://facebook.github.io/regenerator/).

  io.js is supported out of the box, you can use `co` without flags or polyfills.

## Installation

```
$ npm install co
```

## Associated libraries

Any library that returns promises work well with `co`.

- [mz](https://github.com/normalize/mz) - wrap all of node's code libraries as promises.

View the [wiki](https://github.com/visionmedia/co/wiki) for more libraries.

## Examples

```js
var co = require('co');

co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
 }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}
```

## Yieldables

  The `yieldable` objects currently supported are:

  - promises
  - thunks (functions)
  - array (parallel execution)
  - objects (parallel execution)
  - generators (delegation)
  - generator functions (delegation)

Nested `yieldable` objects are supported, meaning you can nest
promises within objects within arrays, and so on!

### Promises

[Read more on promises!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Thunks

Thunks are functions that only have a single argument, a callback.
Thunk support only remains for backwards compatibility and may
be removed in future versions of `co`.

### Arrays

`yield`ing an array will resolve all the `yieldables` in parallel.

```js
co(function* () {
  var res = yield [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];
  console.log(res); // => [1, 2, 3]
}).catch(onerror);
```

### Objects

Just like arrays, objects resolve all `yieldable`s in parallel.

```js
co(function* () {
  var res = yield {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  };
  console.log(res); // => { 1: 1, 2: 2 }
}).catch(onerror);
```

### Generators and Generator Functions

Any generator or generator function you can pass into `co`
can be yielded as well. This should generally be avoided
as we should be moving towards spec-compliant `Promise`s instead.

## API

### co(fn*).then( val => )

Returns a promise that resolves a generator, generator function,
or any function that returns a generator.

```js
co(function* () {
  return yield Promise.resolve(true);
}).then(function (val) {
  console.log(val);
}, function (err) {
  console.error(err.stack);
});
```

### var fn = co.wrap(fn*)

Convert a generator into a regular function that returns a `Promise`.

```js
var fn = co.wrap(function* (val) {
  return yield Promise.resolve(val);
});

fn(true).then(function (val) {

});
```

## License

  MIT

[npm-image]: https://img.shields.io/npm/v/co.svg?style=flat-square
[npm-url]: https://npmjs.org/package/co
[travis-image]: https://img.shields.io/travis/tj/co.svg?style=flat-square
[travis-url]: https://travis-ci.org/tj/co
[coveralls-image]: https://img.shields.io/coveralls/tj/co.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/tj/co
[downloads-image]: http://img.shields.io/npm/dm/co.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/co
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/tj/co?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
