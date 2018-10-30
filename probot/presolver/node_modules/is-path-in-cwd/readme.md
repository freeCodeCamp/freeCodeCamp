# is-path-in-cwd [![Build Status](https://travis-ci.org/sindresorhus/is-path-in-cwd.svg?branch=master)](https://travis-ci.org/sindresorhus/is-path-in-cwd)

> Check if a path is in the [current working directory](http://en.wikipedia.org/wiki/Working_directory)


## Install

```sh
$ npm install --save is-path-in-cwd
```


## Usage

```js
var isPathInCwd = require('is-path-in-cwd');

isPathInCwd('unicorn');
//=> true

isPathInCwd('../rainbow');
//=> false

isPathInCwd('.');
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
