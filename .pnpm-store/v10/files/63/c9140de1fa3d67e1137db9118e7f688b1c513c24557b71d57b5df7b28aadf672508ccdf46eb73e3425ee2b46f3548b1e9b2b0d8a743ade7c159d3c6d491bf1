# mock-require

#### Simple, intuitive mocking of Node.js modules.

[![Build Status](https://travis-ci.org/boblauer/mock-require.svg)](https://travis-ci.org/boblauer/mock-require)

## About

mock-require is useful if you want to mock `require` statements in Node.js.  I wrote it because I wanted something with a straight-forward API that would let me mock anything, from a single exported function to a standard library.

## Usage

```javascript
var mock = require('mock-require');

mock('http', { request: function() {
  console.log('http.request called');
}});

var http = require('http');
http.request(); // 'http.request called'
```

## API

### `mock(path, mockExport)`

__path__: `String`

The module you that you want to mock.  This is the same string you would pass in if you wanted to `require` the module.

This path should be relative to the current file, just as it would be if you were to `require` the module from the current file.  mock-require is smart enough to mock this module everywhere it is required, even if it's required from a different file using a different relative path.

__mockExport__ : `object/function`

The function or object you want to be returned from `require`, instead of the `path` module's exports.

__mockExport__ : `string`

The module you want to be returned from `require`, instead of the `path` module's export.  This allows you to replace modules with other modules.  For example, if you wanted to replace the `fs` module with the `path` module (you probably wouldn't, but if you did):

```javascript
mock('fs', 'path');
require('fs') === require('path'); // true
```
This is useful if you have a mock library that you want to use in multiple places.  For example:

`test/spy.js`:
```javascript
module.exports = function() {
    return 'this was mocked';
};
```

`test/a_spec.js`:
```javascript
var mock = require('mock-require');
mock('../some/dependency', './spy');
...
```

`test/b_spec.js`:
```javascript
var mock = require('mock-require');
mock('../some/other/dependency', './spy');
...
```

### `mock.stop(path)`

__path__: `String`

The module you that you want to stop mocking.  This is the same string you would pass in if you wanted to `require` the module.

This will only modify variables used after `mock.stop` is called.  For example:

```javascript
var mock = require('mock-require');
mock('fs', { mockedFS: true });

var fs1 = require('fs');

mock.stop('fs');

var fs2 = require('fs');

fs1 === fs2; // false
```

### `mock.stopAll()`

This function can be used to remove all registered mocks without the need to remove them individually using `mock.stop()`.

```javascript
mock('fs', {});
mock('path', {});

var fs1 = require('fs');
var path1 = require('path');

mock.stopAll();

var fs2 = require('fs');
var path2 = require('path');

fs1 === fs2; // false
path1 === path2; // false
```

### `mock.reRequire(path)`

__path__: `String`

The file whose cache you want to refresh. This is useful if you're trying to mock a dependency for a file that has already been required elsewhere (possibly in another test file). Normally, Node.js will cache this file, so any mocks that you apply afterwards will have no effect. `reRequire` clears the cache and allows your mock to work.

```javascript
var fs = require('fs');
var fileToTest = require('./fileToTest');
mock('fs', {}); // fileToTest is still using the unmocked fs module

fileToTest = mock.reRequire('./fileToTest'); // fileToTest is now using your mock
```

Note that if the file you are testing requires dependencies that in turn require the mock, those dependencies will still have the unmocked version. You may want to `reRequire` all of your dependencies to ensure that your mock is always being used.

```javascript
var fs = require('fs');
var otherDep = require('./otherDep') // requires fs as a dependency
var fileToTest = require('./fileToTest'); // requires fs and otherDep as a dependency
mock('fs', {}); // fileToTest and otherDep are still using the unmocked fs module

otherDep = mock.reRequire('./otherDep'); // do this to make sure fs is being mocked consistently
fileToTest = mock.reRequire('./fileToTest');
```

## Test

```
npm test
```
