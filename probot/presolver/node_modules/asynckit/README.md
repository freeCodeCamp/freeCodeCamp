# asynckit [![NPM Module](https://img.shields.io/npm/v/asynckit.svg?style=flat)](https://www.npmjs.com/package/asynckit)

Minimal async jobs utility library, with streams support.

[![PhantomJS Build](https://img.shields.io/travis/alexindigo/asynckit/v0.4.0.svg?label=browser&style=flat)](https://travis-ci.org/alexindigo/asynckit)
[![Linux Build](https://img.shields.io/travis/alexindigo/asynckit/v0.4.0.svg?label=linux:0.12-6.x&style=flat)](https://travis-ci.org/alexindigo/asynckit)
[![Windows Build](https://img.shields.io/appveyor/ci/alexindigo/asynckit/v0.4.0.svg?label=windows:0.12-6.x&style=flat)](https://ci.appveyor.com/project/alexindigo/asynckit)

[![Coverage Status](https://img.shields.io/coveralls/alexindigo/asynckit/v0.4.0.svg?label=code+coverage&style=flat)](https://coveralls.io/github/alexindigo/asynckit?branch=master)
[![Dependency Status](https://img.shields.io/david/alexindigo/asynckit/v0.4.0.svg?style=flat)](https://david-dm.org/alexindigo/asynckit)
[![bitHound Overall Score](https://www.bithound.io/github/alexindigo/asynckit/badges/score.svg)](https://www.bithound.io/github/alexindigo/asynckit)

<!-- [![Readme](https://img.shields.io/badge/readme-tested-brightgreen.svg?style=flat)](https://www.npmjs.com/package/reamde) -->

AsyncKit provides harness for `parallel` and `serial` iterators over list of items represented by arrays or objects.
Optionally it accepts abort function (should be synchronously return by iterator for each item), and terminates left over jobs upon an error event. For specific iteration order built-in (`ascending` and `descending`) and custom sort helpers also supported, via `asynckit.serialOrdered` method.

It ensures async operations to keep behavior more stable and prevent `Maximum call stack size exceeded` errors, from sync iterators.

| compression        |     size |
| :----------------- | -------: |
| asynckit.js        | 12.34 kB |
| asynckit.min.js    |  4.11 kB |
| asynckit.min.js.gz |  1.47 kB |


## Install

```sh
$ npm install --save asynckit
```

## Examples

### Parallel Jobs

Runs iterator over provided array in parallel. Stores output in the `result` array,
on the matching positions. In unlikely event of an error from one of the jobs,
will terminate rest of the active jobs (if abort function is provided)
and return error along with salvaged data to the main callback function.

#### Input Array

```javascript
var parallel = require('asynckit').parallel
  , assert   = require('assert')
  ;

var source         = [ 1, 1, 4, 16, 64, 32, 8, 2 ]
  , expectedResult = [ 2, 2, 8, 32, 128, 64, 16, 4 ]
  , expectedTarget = [ 1, 1, 2, 4, 8, 16, 32, 64 ]
  , target         = []
  ;

parallel(source, asyncJob, function(err, result)
{
  assert.deepEqual(result, expectedResult);
  assert.deepEqual(target, expectedTarget);
});

// async job accepts one element from the array
// and a callback function
function asyncJob(item, cb)
{
  // different delays (in ms) per item
  var delay = item * 25;

  // pretend different jobs take different time to finish
  // and not in consequential order
  var timeoutId = setTimeout(function() {
    target.push(item);
    cb(null, item * 2);
  }, delay);

  // allow to cancel "leftover" jobs upon error
  // return function, invoking of which will abort this job
  return clearTimeout.bind(null, timeoutId);
}
```

More examples could be found in [test/test-parallel-array.js](test/test-parallel-array.js).

#### Input Object

Also it supports named jobs, listed via object.

```javascript
var parallel = require('asynckit/parallel')
  , assert   = require('assert')
  ;

var source         = { first: 1, one: 1, four: 4, sixteen: 16, sixtyFour: 64, thirtyTwo: 32, eight: 8, two: 2 }
  , expectedResult = { first: 2, one: 2, four: 8, sixteen: 32, sixtyFour: 128, thirtyTwo: 64, eight: 16, two: 4 }
  , expectedTarget = [ 1, 1, 2, 4, 8, 16, 32, 64 ]
  , expectedKeys   = [ 'first', 'one', 'two', 'four', 'eight', 'sixteen', 'thirtyTwo', 'sixtyFour' ]
  , target         = []
  , keys           = []
  ;

parallel(source, asyncJob, function(err, result)
{
  assert.deepEqual(result, expectedResult);
  assert.deepEqual(target, expectedTarget);
  assert.deepEqual(keys, expectedKeys);
});

// supports full value, key, callback (shortcut) interface
function asyncJob(item, key, cb)
{
  // different delays (in ms) per item
  var delay = item * 25;

  // pretend different jobs take different time to finish
  // and not in consequential order
  var timeoutId = setTimeout(function() {
    keys.push(key);
    target.push(item);
    cb(null, item * 2);
  }, delay);

  // allow to cancel "leftover" jobs upon error
  // return function, invoking of which will abort this job
  return clearTimeout.bind(null, timeoutId);
}
```

More examples could be found in [test/test-parallel-object.js](test/test-parallel-object.js).

### Serial Jobs

Runs iterator over provided array sequentially. Stores output in the `result` array,
on the matching positions. In unlikely event of an error from one of the jobs,
will not proceed to the rest of the items in the list
and return error along with salvaged data to the main callback function.

#### Input Array

```javascript
var serial = require('asynckit/serial')
  , assert = require('assert')
  ;

var source         = [ 1, 1, 4, 16, 64, 32, 8, 2 ]
  , expectedResult = [ 2, 2, 8, 32, 128, 64, 16, 4 ]
  , expectedTarget = [ 0, 1, 2, 3, 4, 5, 6, 7 ]
  , target         = []
  ;

serial(source, asyncJob, function(err, result)
{
  assert.deepEqual(result, expectedResult);
  assert.deepEqual(target, expectedTarget);
});

// extended interface (item, key, callback)
// also supported for arrays
function asyncJob(item, key, cb)
{
  target.push(key);

  // it will be automatically made async
  // even it iterator "returns" in the same event loop
  cb(null, item * 2);
}
```

More examples could be found in [test/test-serial-array.js](test/test-serial-array.js).

#### Input Object

Also it supports named jobs, listed via object.

```javascript
var serial = require('asynckit').serial
  , assert = require('assert')
  ;

var source         = [ 1, 1, 4, 16, 64, 32, 8, 2 ]
  , expectedResult = [ 2, 2, 8, 32, 128, 64, 16, 4 ]
  , expectedTarget = [ 0, 1, 2, 3, 4, 5, 6, 7 ]
  , target         = []
  ;

var source         = { first: 1, one: 1, four: 4, sixteen: 16, sixtyFour: 64, thirtyTwo: 32, eight: 8, two: 2 }
  , expectedResult = { first: 2, one: 2, four: 8, sixteen: 32, sixtyFour: 128, thirtyTwo: 64, eight: 16, two: 4 }
  , expectedTarget = [ 1, 1, 4, 16, 64, 32, 8, 2 ]
  , target         = []
  ;


serial(source, asyncJob, function(err, result)
{
  assert.deepEqual(result, expectedResult);
  assert.deepEqual(target, expectedTarget);
});

// shortcut interface (item, callback)
// works for object as well as for the arrays
function asyncJob(item, cb)
{
  target.push(item);

  // it will be automatically made async
  // even it iterator "returns" in the same event loop
  cb(null, item * 2);
}
```

More examples could be found in [test/test-serial-object.js](test/test-serial-object.js).

_Note: Since _object_ is an _unordered_ collection of properties,
it may produce unexpected results with sequential iterations.
Whenever order of the jobs' execution is important please use `serialOrdered` method._

### Ordered Serial Iterations

TBD

For example [compare-property](compare-property) package.

### Streaming interface

TBD

## Want to Know More?

More examples can be found in [test folder](test/).

Or open an [issue](https://github.com/alexindigo/asynckit/issues) with questions and/or suggestions.

## License

AsyncKit is licensed under the MIT license.
