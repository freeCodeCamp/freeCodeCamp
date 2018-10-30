4.6.0 / 2015-07-09
==================

 * support passing the rest of the arguments to co into the generator

 ```js
 function *gen(...args) { }
 co(gen, ...args);
 ```

4.5.0 / 2015-03-17
==================

 * support regular functions (that return promises)

4.4.0 / 2015-02-14
==================

 * refactor `isGeneratorFunction`
 * expose generator function from `co.wrap()`
 * drop support for node < 0.12

4.3.0 / 2015-02-05
==================

 * check for generator functions in a ES5-transpiler-friendly way

4.2.0 / 2015-01-20
==================

 * support comparing generator functions with ES6 transpilers

4.1.0 / 2014-12-26
==================

 * fix memory leak #180

4.0.2 / 2014-12-18
==================

 * always return a global promise implementation

4.0.1 / 2014-11-30
==================

 * friendlier ES6 module exports

4.0.0 / 2014-11-15
==================

 * co now returns a promise and uses promises underneath
 * `co.wrap()` for wrapping generator functions

3.1.0 / 2014-06-30
==================

 * remove `setImmediate()` shim for node 0.8. semi-backwards breaking.
   Users are expected to shim themselves. Also returns CommonJS browser support.
 * added key order preservation for objects. thanks @greim
 * replace `q` with `bluebird` in benchmarks and tests

3.0.6 / 2014-05-03
==================

 * add `setImmediate()` fallback to `process.nextTick`
 * remove duplicate code in toThunk
 * update thunkify

3.0.5 / 2014-03-17
==================

 * fix object/array test failure which tries to enumerate dates. Closes #98
 * fix final callback error propagation. Closes #92

3.0.4 / 2014-02-17
==================

 * fix toThunk object check regression. Closes #89

3.0.3 / 2014-02-08
==================

 * refactor: arrayToThunk @AutoSponge #88

3.0.2 / 2014-01-01
==================

 * fixed: nil arguments replaced with error fn

3.0.1 / 2013-12-19
==================

 * fixed: callback passed as an argument to generators

3.0.0 / 2013-12-19
==================

 * fixed: callback passed as an argument to generators
 * change: `co(function *(){})` now returns a reusable thunk
 * change: `this` must now be passed through the returned thunk, ex. `co(function *(){}).call(this)`
 * fix "generator already finished" errors

2.3.0 / 2013-11-12
==================

 * add `yield object` support

2.2.0 / 2013-11-05
==================

 * change: make the `isGenerator()` function more generic

2.1.0 / 2013-10-21
==================

 * add passing of arguments into the generator. closes #33.

2.0.0 / 2013-10-14
==================

 * remove callback in favour of thunk-only co(). Closes #30 [breaking change]
 * remove `co.wrap()` [breaking change]

1.5.2 / 2013-09-02
==================

 * fix: preserve receiver with co.wrap()

1.5.1 / 2013-08-11
==================

 * remove setImmediate() usage - ~110% perf increase. Closes #14

0.5.0 / 2013-08-10
==================

 * add receiver propagation support
 * examples: update streams.js example to use `http.get()` and streams2 API

1.4.1 / 2013-07-01
==================

 * fix gen.next(val) for latest v8. Closes #8

1.4.0 / 2013-06-21
==================

 * add promise support to joins
 * add `yield generatorFunction` support
 * add `yield generator` support
 * add nested join support

1.3.0 / 2013-06-10
==================

 * add passing of arguments

1.2.1 / 2013-06-08
==================

 * fix join() of zero thunks

1.2.0 / 2013-06-08
==================

 * add array yielding support. great suggestion by @domenic

1.1.0 / 2013-06-06
==================

 * add promise support
 * change nextTick to setImmediate
