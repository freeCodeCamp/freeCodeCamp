# path-type [![Build Status](https://travis-ci.org/sindresorhus/path-type.svg?branch=master)](https://travis-ci.org/sindresorhus/path-type)

> Check if a path is a file, directory, or symlink


## Install

```
$ npm install --save path-type
```


## Usage

```js
var pathType = require('path-type');

pathType.file('package.json').then(function (isFile) {
	console.log(isFile);
	//=> true
})
```


## API

### .file(path)
### .dir(path)
### .symlink(path)

Returns a promise that resolves to a boolean of whether the path is the checked type.

### .fileSync(path)
### .dirSync(path)
### .symlinkSync(path)

Returns a boolean of whether the path is the checked type.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
