# path-dirname [![Build Status](https://travis-ci.org/es128/path-dirname.svg?branch=master)](https://travis-ci.org/es128/path-dirname)

> Node.js [`path.dirname()`](https://nodejs.org/api/path.html#path_path_dirname_path) [ponyfill](https://ponyfill.com)

This was needed in order to expose `path.posix.dirname()` on Node.js v0.10

## Install

```
$ npm install --save path-dirname
```


## Usage

```js
const pathDirname = require('path-dirname');

pathDirname('/home/foo');
//=> '/home'
pathDirname('C:\\Users\\foo');
//=> 'C:\\Users'
pathDirname('foo');
//=> '.'
pathDirname('foo/bar');
//=> 'foo'

//Using posix version for consistent output when dealing with glob escape chars
pathDirname.win32('C:\\Users\\foo/\\*bar');
//=> 'C:\\Users\\foo/'
pathDirname.posix('C:\\Users\\foo/\\*bar');
//=> 'C:\\Users\\foo'
```


## API

See the [`path.dirname()` docs](https://nodejs.org/api/path.html#path_path_dirname_path).

### pathDirname(path)

### pathDirname.posix(path)

POSIX specific version.

### pathDirname.win32(path)

Windows specific version.


## License

MIT
