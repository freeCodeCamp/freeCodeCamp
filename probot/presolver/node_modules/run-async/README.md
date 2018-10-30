Run Async
=========

[![npm](https://badge.fury.io/js/run-async.svg)](http://badge.fury.io/js/run-async) [![tests](https://travis-ci.org/SBoudrias/run-async.svg?branch=master)](http://travis-ci.org/SBoudrias/run-async) [![dependencies](https://david-dm.org/SBoudrias/run-async.svg?theme=shields.io)](https://david-dm.org/SBoudrias/run-async)

Utility method to run function either synchronously or asynchronously using the common `this.async()` style.

This is useful for library author accepting sync or async functions as parameter. `runAsync` will always run them as async method, and normalize the function handling.

Installation
=========

```bash
npm install --save run-async
```

Usage
=========

```js
var runAsync = require('run-async');

// In Async mode:
var asyncFn = function (a) {
  var done = this.async();

  setTimeout(function () {
    done('running: ' + a);
  }, 10);
};

runAsync(asyncFn, function (answer) {
  console.log(answer); // 'running: async'
}, 'async');

// In Sync mode:
var syncFn = function (a) {
  return 'running: ' + a;
};

runAsync(asyncFn, function (answer) {
  console.log(answer); // 'running: sync'
}, 'sync');
```

Licence
========

Copyright (c) 2014 Simon Boudrias (twitter: @vaxilart)  
Licensed under the MIT license.
