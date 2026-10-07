# path-exists [![Build Status](https://travis-ci.org/sindresorhus/path-exists.svg?branch=master)](https://travis-ci.org/sindresorhus/path-exists)

> Check if a path exists

Because [`fs.exists()`](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback) is being [deprecated](https://github.com/iojs/io.js/issues/103), but there's still a genuine use-case of being able to check if a path exists for other purposes than doing IO with it.

Never use this before handling a file though:

> In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions: another process may remove the file between the calls to `fs.exists()` and `fs.open()`. Just open the file and handle the error when it's not there.


## Install

```
$ npm install --save path-exists
```


## Usage

```js
// foo.js
const pathExists = require('path-exists');

pathExists('foo.js').then(exists => {
	console.log(exists);
	//=> true
});
```


## API

### pathExists(path)

Returns a promise for a boolean of whether the path exists.

### pathExists.sync(path)

Returns a boolean of whether the path exists.


## Related

- [path-exists-cli](https://github.com/sindresorhus/path-exists-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
