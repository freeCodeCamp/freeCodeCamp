# is-path-cwd [![Build Status](https://travis-ci.org/sindresorhus/is-path-cwd.svg?branch=master)](https://travis-ci.org/sindresorhus/is-path-cwd)

> Check if a path is [CWD](http://en.wikipedia.org/wiki/Working_directory)


## Install

```sh
$ npm install --save is-path-cwd
```


## Usage

```js
var isPathCwd = require('is-path-cwd');

isPathCwd(process.cwd());
//=> true

isPathCwd('unicorn');
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
