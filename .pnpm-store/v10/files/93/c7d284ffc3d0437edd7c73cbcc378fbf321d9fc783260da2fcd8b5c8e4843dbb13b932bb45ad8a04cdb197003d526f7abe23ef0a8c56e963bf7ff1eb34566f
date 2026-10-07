Run Async
=========

[![npm](https://badge.fury.io/js/run-async.svg)](http://badge.fury.io/js/run-async) [![tests](https://travis-ci.org/SBoudrias/run-async.svg?branch=master)](http://travis-ci.org/SBoudrias/run-async) [![dependencies](https://david-dm.org/SBoudrias/run-async.svg?theme=shields.io)](https://david-dm.org/SBoudrias/run-async)

Utility method to run a function either synchronously or asynchronously using a series of common patterns. This is useful for library author accepting sync or async functions as parameter. `runAsync` will always run them as an async method, and normalize the multiple signature.

Installation
=========

```bash
npm install --save run-async
```

Usage
=========

Here's a simple example print the function results and three options a user can provide a function.

```js
var runAsync = require('run-async');

var printAfter = function (func) {
  var cb = function (err, returnValue) {
    console.log(returnValue);
  };
  runAsync(func, cb)(/* arguments for func */);
};
```

#### Using `this.async`
```js
printAfter(function () {
  var done = this.async();

  setTimeout(function () {
    done(null, 'done running with callback');
  }, 10);
});
```

#### Returning a promise
```js
printAfter(function () {
  return new Promise(function (resolve, reject) {
    resolve('done running with promises');
  });
});
```

#### Synchronous function
```js
printAfter(function () {
  return 'done running sync function';
});
```

### runAsync.cb

`runAsync.cb` supports all the function types that `runAsync` does and additionally a traditional **callback as the last argument** signature:

```js
var runAsync = require('run-async');

// IMPORTANT: The wrapped function must have a fixed number of parameters.
runAsync.cb(function(a, b, cb) {
  cb(null, a + b);
}, function(err, result) {
  console.log(result)
})(1, 2)
```

If your version of node support Promises natively (node >= 0.12), `runAsync` will return a promise. Example: `runAsync(func)(arg1, arg2).then(cb)`

Licence
========

Copyright (c) 2014 Simon Boudrias (twitter: @vaxilart)  
Licensed under the MIT license.
