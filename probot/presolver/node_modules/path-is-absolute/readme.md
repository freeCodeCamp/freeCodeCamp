# path-is-absolute [![Build Status](https://travis-ci.org/sindresorhus/path-is-absolute.svg?branch=master)](https://travis-ci.org/sindresorhus/path-is-absolute)

> Node.js 0.12 [`path.isAbsolute()`](http://nodejs.org/api/path.html#path_path_isabsolute_path) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save path-is-absolute
```


## Usage

```js
const pathIsAbsolute = require('path-is-absolute');

// Running on Linux
pathIsAbsolute('/home/foo');
//=> true
pathIsAbsolute('C:/Users/foo');
//=> false

// Running on Windows
pathIsAbsolute('C:/Users/foo');
//=> true
pathIsAbsolute('/home/foo');
//=> false

// Running on any OS
pathIsAbsolute.posix('/home/foo');
//=> true
pathIsAbsolute.posix('C:/Users/foo');
//=> false
pathIsAbsolute.win32('C:/Users/foo');
//=> true
pathIsAbsolute.win32('/home/foo');
//=> false
```


## API

See the [`path.isAbsolute()` docs](http://nodejs.org/api/path.html#path_path_isabsolute_path).

### pathIsAbsolute(path)

### pathIsAbsolute.posix(path)

POSIX specific version.

### pathIsAbsolute.win32(path)

Windows specific version.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
